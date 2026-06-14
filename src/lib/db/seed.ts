import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

import { sql } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { CATEGORIES } from '@/data/categories'
import { SEED_LISTINGS } from '@/data/seed-listings'
import { categories, listings } from './schema'

const FEATURED_WINDOW_DAYS = 60

async function main() {
  const url = process.env.DATABASE_URL
  if (!url) {
    console.error('✗ DATABASE_URL is not set. Add it to .env.local first.')
    process.exit(1)
  }
  const client = postgres(url, { max: 1 })
  const db = drizzle(client, { schema: { categories, listings } })

  console.log(`→ Upserting ${CATEGORIES.length} categories ...`)
  await db
    .insert(categories)
    .values(
      CATEGORIES.map((c) => ({
        slug: c.slug,
        name: c.name,
        description: c.description,
        sortOrder: c.sortOrder,
      })),
    )
    .onConflictDoUpdate({
      target: categories.slug,
      set: {
        name: sql`excluded.name`,
        description: sql`excluded.description`,
        sortOrder: sql`excluded.sort_order`,
      },
    })

  const catRows = await db.select({ id: categories.id, slug: categories.slug }).from(categories)
  const catMap = new Map(catRows.map((r) => [r.slug, r.id]))

  const now = new Date()
  const featuredUntil = new Date(now.getTime() + FEATURED_WINDOW_DAYS * 86_400_000)

  const values = SEED_LISTINGS.map((s) => ({
    slug: s.slug,
    name: s.name,
    tagline: s.tagline,
    descriptionMd: s.descriptionMd,
    websiteUrl: s.websiteUrl,
    affiliateUrl: s.affiliateUrl,
    affiliateNetwork: s.affiliateNetwork,
    categoryId: catMap.get(s.categorySlug) ?? null,
    useCases: s.useCases,
    bestFor: s.bestFor,
    notFor: s.notFor,
    pricingText: s.pricingText,
    hasFreeTier: s.hasFreeTier,
    tags: s.tags,
    featured: s.featured,
    featuredUntil: s.featured ? featuredUntil : null,
    featuredRank: s.featuredRank,
    status: 'live' as const,
    source: s.source,
    lastCheckedAt: now,
  }))

  console.log(`→ Upserting ${values.length} listings ...`)
  // On conflict we refresh CONTENT fields only. We intentionally do NOT overwrite
  // affiliateUrl, affiliateNetwork, featured, featuredUntil, or status — those are
  // managed by admin / Stripe and must survive a re-seed (e.g. a weekly refresh).
  await db
    .insert(listings)
    .values(values)
    .onConflictDoUpdate({
      target: listings.slug,
      set: {
        name: sql`excluded.name`,
        tagline: sql`excluded.tagline`,
        descriptionMd: sql`excluded.description_md`,
        websiteUrl: sql`excluded.website_url`,
        categoryId: sql`excluded.category_id`,
        useCases: sql`excluded.use_cases`,
        bestFor: sql`excluded.best_for`,
        notFor: sql`excluded.not_for`,
        pricingText: sql`excluded.pricing_text`,
        hasFreeTier: sql`excluded.has_free_tier`,
        tags: sql`excluded.tags`,
        lastCheckedAt: sql`excluded.last_checked_at`,
        updatedAt: sql`now()`,
      },
    })

  const [{ count }] = await db.select({ count: sql<number>`count(*)::int` }).from(listings)
  console.log(`✓ Seed complete. ${Number(count)} listings in database.`)
  await client.end()
}

main().catch((err) => {
  console.error('✗ Seed failed:', err)
  process.exit(1)
})
