export const runtime = 'nodejs'; // ensure Node runtime (for 'crypto')

import { NextRequest, NextResponse } from 'next/server';
import { createHash, randomUUID } from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // server-only
);

function hashIp(ip: string) {
  return createHash('sha256').update(ip).digest('hex');
}

function getClientIp(req: NextRequest) {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  const real = req.headers.get('x-real-ip');
  if (real) return real;
  // @ts-ignore - Next may expose req.ip in dev
  return (req as any).ip ?? '0.0.0.0';
}

function getCountry(req: NextRequest) {
  // @ts-ignore - available on Vercel
  return (req as any).geo?.country ?? null;
}

function parseUtms(url: URL) {
  const g = (k: string) => url.searchParams.get(k) || null;
  return {
    utm_source: g('utm_source'),
    utm_medium: g('utm_medium'),
    utm_campaign: g('utm_campaign'),
    utm_term: g('utm_term'),
    utm_content: g('utm_content'),
  };
}

// params is a Promise in newer Next.js — await it
export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ courseId: string }> }
) {
  const { courseId } = await ctx.params;

  // 1) Pick affiliate URL or fall back to course.url
  const { data: aff, error: affErr } = await supabase
    .from('affiliate_links')
    .select('affiliate_url')
    .eq('course_id', courseId)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  console.log('🚀 ~ GET ~ aff:', aff);

  if (affErr) console.error('affiliate_links error', affErr);

  let affiliateUrl = aff?.affiliate_url ?? null;
  if (!affiliateUrl) {
    const { data: c } = await supabase
      .from('courses')
      .select('url')
      .eq('id', courseId)
      .maybeSingle();
    affiliateUrl = c?.url ?? null;
  }
  if (!affiliateUrl) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  // 2) Collect click metadata
  const ip_hash = hashIp(getClientIp(req));
  const user_agent = req.headers.get('user-agent');
  const referrer = req.headers.get('referer') ?? req.headers.get('referrer');
  const country = getCountry(req);
  const url = new URL(req.url);
  const utm = parseUtms(url);
  const click_token = randomUUID();

  // 3) Log click (best-effort)
  try {
    await supabase.from('clicks').insert({
      course_id: courseId,
      click_token,
      ip_hash,
      user_agent,
      referrer,
      country,
      ...utm,
    });
  } catch (e) {
    console.error('click insert failed', e);
  }

  // 4) 302 redirect
  return NextResponse.redirect(affiliateUrl, { status: 302 });
}
