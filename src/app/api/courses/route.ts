import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const CourseSchema = z.object({
  provider_id: z.string().uuid(),
  external_id: z.string().min(1),
  title: z.string().min(1),
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

export async function GET() {
  const { data, error } = await supabase.from('courses').select('*').limit(50);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = CourseSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  const { data, error } = await supabase
    .from('courses')
    .insert(parsed.data)
    .select('*')
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
