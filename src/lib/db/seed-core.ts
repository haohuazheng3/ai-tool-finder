import { sql } from 'drizzle-orm'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { CATEGORIES } from '@/data/categories'
import { SEED_LISTINGS } from '@/data/seed-listings'
import { SEED_LISTINGS_EXTRA } from '@/data/seed-listings-extra'
import { categories, listings } from './schema'

const ALL_SEED = [...SEED_LISTINGS, ...SEED_LISTINGS_EXTRA]

const FEATURED_WINDOW_DAYS = 60

/**
 * Idempotent seed: upserts the 13 task categories and 140 curated listings.
 * On conflict it refreshes CONTENT fields only — affiliateUrl, affiliateNetwork,
 * featured, featuredUntil, and status are left untouched so admin/Stripe changes
 * and re-runs never clobber paid placements. Shared by the CLI seed script and
 * the one-time /api/admin/setup route.
 */
export async function seedDatabase(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: PostgresJsDatabase<any>,
): Promise<{ categories: number; listings: number }> {
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

  const values = ALL_SEED.map((s) => ({
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
  return { categories: CATEGORIES.length, listings: Number(count) }
}
