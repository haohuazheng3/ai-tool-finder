import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { categories, listings } from './schema'
import { seedDatabase } from './seed-core'

async function main() {
  const url = process.env.DATABASE_URL
  if (!url) {
    console.error('✗ DATABASE_URL is not set. Add it to .env.local first.')
    process.exit(1)
  }
  const client = postgres(url, { max: 1, prepare: false })
  const db = drizzle(client, { schema: { categories, listings } })

  console.log('→ Seeding categories + listings ...')
  const result = await seedDatabase(db)
  console.log(`✓ Seed complete. ${result.categories} categories, ${result.listings} listings in database.`)
  await client.end()
}

main().catch((err) => {
  console.error('✗ Seed failed:', err)
  process.exit(1)
})
