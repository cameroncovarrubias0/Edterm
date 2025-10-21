import { createClient } from '@supabase/supabase-js';
import { MeiliSearch } from 'meilisearch';

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // needs service role
  const meiliHost = process.env.MEILI_HOST!;
  const meiliKey = process.env.MEILI_MASTER_KEY!;

  const supabase = createClient(url, serviceKey);
  const meili = new MeiliSearch({ host: meiliHost, apiKey: meiliKey });
  const { data, error } = await supabase.from('v_search_courses').select('*');
  if (error) throw error;
  const task = await meili.index('courses').addDocuments(data ?? []);
  console.log('Indexed', (data ?? []).length, 'docs. Task:', task);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
