export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // server-only
);

const PatchSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  url: z.string().url().optional(),
  price: z.number().optional(),
  currency: z.string().optional(),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'all']).optional(),
  is_free: z.boolean().optional(),
  rating: z.number().optional(),
  ratings_count: z.number().int().optional(),
  language: z.string().optional(),
  duration_hours: z.number().optional(),
  published_at: z.string().optional(),
  thumbnail_url: z.string().optional(),
});

// GET /api/courses/:id
export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error || !data)
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(data);
}

// PATCH /api/courses/:id
export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const body = await req.json();
  const parsed = PatchSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );

  const { data, error } = await supabase
    .from('courses')
    .update(parsed.data)
    .eq('id', id)
    .select('*')
    .maybeSingle();

  if (error || !data)
    return NextResponse.json(
      { error: error?.message ?? 'Update failed' },
      { status: 500 }
    );
  return NextResponse.json(data);
}

// DELETE /api/courses/:id
export async function DELETE(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const { error } = await supabase.from('courses').delete().eq('id', id);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
