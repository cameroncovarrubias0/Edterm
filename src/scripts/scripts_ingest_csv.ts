import fs from 'node:fs';
import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';
import { MeiliSearch } from 'meilisearch';

async function main() {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const MEILI_HOST = process.env.MEILI_HOST!;
  const MEILI_KEY = process.env.MEILI_MASTER_KEY!;

  const file = process.argv[2] || 'ingest-courses.example.csv';
  const csv = fs.readFileSync(file, 'utf-8');
  const rows = parse(csv, { columns: true, skip_empty_lines: true });

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
  const meili = new MeiliSearch({ host: MEILI_HOST, apiKey: MEILI_KEY });

  for (const r of rows as any) {
    const { data: prov } = await supabase
      .from('providers')
      .upsert(
        {
          slug: r.provider_slug,
          name: r.provider_name,
          website_url: r.provider_url,
        },
        { onConflict: 'slug' }
      )
      .select('id')
      .maybeSingle();

    if (!prov?.id)
      throw new Error('Provider upsert failed for ' + r.provider_slug);

    const coursePayload: any = {
      provider_id: prov.id,
      external_id: r.external_id,
      title: r.title,
      description: r.description || null,
      url: r.url || null,
      price: r.price ? Number(r.price) : null,
      currency: r.currency || 'USD',
      level: (r.level || 'all') as any,
      is_free: String(r.is_free).toLowerCase() == 'true',
      rating: r.rating ? Number(r.rating) : null,
      ratings_count: r.ratings_count ? Number(r.ratings_count) : 0,
      language: r.language || 'en',
      duration_hours: r.duration_hours ? Number(r.duration_hours) : null,
      published_at: r.published_at || null,
      thumbnail_url: r.thumbnail_url || null,
    };

    const { data: course } = await supabase
      .from('courses')
      .upsert(coursePayload, { onConflict: 'provider_id,external_id' })
      .select('id')
      .maybeSingle();

    if (!course?.id)
      throw new Error('Course upsert failed for ' + r.external_id);

    const cats = (r.categories || '')
      .split(',')
      .map((s: string) => s.trim())
      .filter(Boolean);
    for (const name of cats) {
      const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      const { data: cat } = await supabase
        .from('categories')
        .upsert({ slug, name }, { onConflict: 'slug' })
        .select('id')
        .maybeSingle();
      if (cat?.id)
        await supabase
          .from('course_categories')
          .upsert({ course_id: course.id, category_id: cat.id });
    }

    if (r.affiliate_url) {
      await supabase
        .from('affiliate_links')
        .insert({
          course_id: course.id,
          network: r.affiliate_network || 'custom',
          affiliate_url: r.affiliate_url,
        })
        .select('id')
        .maybeSingle();
    }
  }

  const { data: docs, error } = await supabase
    .from('v_search_courses')
    .select('*');
  if (error) throw error;
  await meili.index('courses').addDocuments(docs || []);
  console.log(
    `Ingested ${rows.length} rows and synced ${
      docs?.length ?? 0
    } docs to Meilisearch.`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
