import { MeiliSearch } from 'meilisearch';
import fs from 'node:fs';

async function main() {
  const host = process.env.MEILI_HOST;
  const apiKey = process.env.MEILI_MASTER_KEY;
  if (!host || !apiKey) {
    throw new Error(
      `Missing env: MEILI_HOST="${host}", MEILI_MASTER_KEY="${apiKey}"`
    );
  }

  const settingsRaw = fs.readFileSync('meilisearch_settings.json', 'utf-8');
  const { indexUid, primaryKey, ...update } = JSON.parse(settingsRaw);

  const client = new MeiliSearch({ host, apiKey });

  // 1) Create the index (returns a task, not an Index object)
  try {
    await client.createIndex(indexUid, { primaryKey });
  } catch (e: any) {
    // 409 means the index already exists — safe to ignore
    if (
      !(
        e?.code === 'index_already_exists' ||
        e?.errorCode === 'index_already_exists'
      )
    ) {
      throw e;
    }
  }

  // 2) Get the index handle
  const index = client.index(indexUid);

  // 3) Apply settings
  await index.updateSettings(update);

  console.log('Meilisearch index configured');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
