import 'server-only'
import { and, asc, desc, eq, ilike, ne, or, sql } from 'drizzle-orm'
import { db } from './index'
import {
  categories,
  clickEvents,
  listings,
  submissions,
  type Category,
  type ListingWithCategory,
} from './schema'
import { isDatabaseConfigured } from '@/lib/env'
import { versusSlug } from '@/lib/slug'
import {
  STATIC_CATEGORIES,
  staticGetAllSlugs,
  staticGetBySlug,
  staticGetCategoriesWithCounts,
  staticGetCategoryBySlug,
  staticGetComparePairs,
  staticGetFeatured,
  staticGetForRedirect,
  staticGetListings,
  staticGetRelated,
} from './static-data'

/** SQL predicate: this listing is featured AND its paid window hasn't expired. */
const activeFeatured = sql<boolean>`(${listings.featured} = true and (${listings.featuredUntil} is null or ${listings.featuredUntil} > now()))`

type Row = { listings: typeof listings.$inferSelect; categories: Category | null }
const mapRow = (r: Row): ListingWithCategory => ({ ...r.listings, category: r.categories ?? null })

export type ListingSort = 'featured' | 'newest' | 'name' | 'free'
export type ListingStatusFilter = 'live' | 'pending' | 'rejected' | 'all'

export type ListingFilters = {
  categorySlug?: string
  tag?: string
  hasFreeTier?: boolean
  search?: string
  sort?: ListingSort
  status?: ListingStatusFilter
  limit?: number
  offset?: number
}

function buildOrderBy(sort: ListingSort) {
  switch (sort) {
    case 'newest':
      return [desc(activeFeatured), desc(listings.createdAt)]
    case 'name':
      return [desc(activeFeatured), asc(listings.name)]
    case 'free':
      return [desc(listings.hasFreeTier), desc(activeFeatured), asc(listings.name)]
    case 'featured':
    default:
      return [
        desc(activeFeatured),
        sql`${listings.featuredRank} asc nulls last`,
        desc(listings.createdAt),
      ]
  }
}

/** Core listing query used by every public page. Returns listings + category. */
export async function getListings(filters: ListingFilters = {}): Promise<ListingWithCategory[]> {
  if (!isDatabaseConfigured()) return staticGetListings(filters)
  const {
    categorySlug,
    tag,
    hasFreeTier,
    search,
    sort = 'featured',
    status = 'live',
    limit = 60,
    offset = 0,
  } = filters

  const conditions = []
  if (status !== 'all') conditions.push(eq(listings.status, status))
  if (categorySlug) conditions.push(eq(categories.slug, categorySlug))
  if (hasFreeTier) conditions.push(eq(listings.hasFreeTier, true))
  if (tag) conditions.push(sql`${listings.tags} @> array[${tag}]::text[]`)
  if (search && search.trim()) {
    const q = `%${search.trim()}%`
    conditions.push(
      or(
        ilike(listings.name, q),
        ilike(listings.tagline, q),
        ilike(listings.descriptionMd, q),
        sql`array_to_string(${listings.tags}, ' ') ilike ${q}`,
        sql`array_to_string(${listings.useCases}, ' ') ilike ${q}`,
      ),
    )
  }

  try {
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(...buildOrderBy(sort))
      .limit(limit)
      .offset(offset)
    return rows.map(mapRow)
  } catch (err) {
    console.error('[queries.getListings]', err)
    return []
  }
}

export async function getFeaturedListings(limit = 6): Promise<ListingWithCategory[]> {
  if (!isDatabaseConfigured()) return staticGetFeatured(limit)
  try {
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(and(eq(listings.status, 'live'), activeFeatured))
      .orderBy(sql`${listings.featuredRank} asc nulls last`, desc(listings.createdAt))
      .limit(limit)
    return rows.map(mapRow)
  } catch (err) {
    console.error('[queries.getFeaturedListings]', err)
    return []
  }
}

export async function getLatestListings(limit = 8): Promise<ListingWithCategory[]> {
  return getListings({ sort: 'newest', limit })
}

export async function getListingBySlug(slug: string): Promise<ListingWithCategory | null> {
  if (!isDatabaseConfigured()) return staticGetBySlug(slug)
  try {
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(eq(listings.slug, slug))
      .limit(1)
    return rows[0] ? mapRow(rows[0]) : null
  } catch (err) {
    console.error('[queries.getListingBySlug]', err)
    return null
  }
}

/** Alternatives: same category, live, excluding the current listing. */
export async function getRelatedListings(
  listing: ListingWithCategory,
  limit = 4,
): Promise<ListingWithCategory[]> {
  if (!isDatabaseConfigured()) return staticGetRelated(listing, limit)
  if (!listing.categoryId) return []
  try {
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(
        and(
          eq(listings.status, 'live'),
          eq(listings.categoryId, listing.categoryId),
          ne(listings.id, listing.id),
        ),
      )
      .orderBy(desc(activeFeatured), sql`${listings.featuredRank} asc nulls last`, asc(listings.name))
      .limit(limit)
    return rows.map(mapRow)
  } catch (err) {
    console.error('[queries.getRelatedListings]', err)
    return []
  }
}

export async function getCategories(): Promise<Category[]> {
  if (!isDatabaseConfigured()) return STATIC_CATEGORIES
  try {
    return await db.select().from(categories).orderBy(asc(categories.sortOrder), asc(categories.name))
  } catch (err) {
    console.error('[queries.getCategories]', err)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  if (!isDatabaseConfigured()) return staticGetCategoryBySlug(slug)
  try {
    const rows = await db.select().from(categories).where(eq(categories.slug, slug)).limit(1)
    return rows[0] ?? null
  } catch (err) {
    console.error('[queries.getCategoryBySlug]', err)
    return null
  }
}

/** Categories annotated with their live listing count (for the home grid). */
export async function getCategoriesWithCounts(): Promise<(Category & { count: number })[]> {
  if (!isDatabaseConfigured()) return staticGetCategoriesWithCounts()
  try {
    const rows = await db
      .select({
        category: categories,
        count: sql<number>`count(${listings.id})::int`,
      })
      .from(categories)
      .leftJoin(
        listings,
        and(eq(listings.categoryId, categories.id), eq(listings.status, 'live')),
      )
      .groupBy(categories.id)
      .orderBy(asc(categories.sortOrder), asc(categories.name))
    return rows.map((r) => ({ ...r.category, count: Number(r.count) }))
  } catch (err) {
    console.error('[queries.getCategoriesWithCounts]', err)
    return []
  }
}

export async function getAllListingSlugs(): Promise<string[]> {
  if (!isDatabaseConfigured()) return staticGetAllSlugs()
  try {
    const rows = await db
      .select({ slug: listings.slug })
      .from(listings)
      .where(eq(listings.status, 'live'))
    return rows.map((r) => r.slug)
  } catch (err) {
    console.error('[queries.getAllListingSlugs]', err)
    return []
  }
}

/**
 * Canonical comparison slugs for the top tools in each category (used to
 * pre-render valuable "X vs Y" pages for SEO).
 */
export async function getComparePairs(perCategory = 4): Promise<string[]> {
  if (!isDatabaseConfigured()) return staticGetComparePairs(perCategory)
  try {
    const rows = await db
      .select({ slug: listings.slug, categoryId: listings.categoryId })
      .from(listings)
      .where(eq(listings.status, 'live'))
      .orderBy(desc(activeFeatured), sql`${listings.featuredRank} asc nulls last`, asc(listings.name))
    const byCat = new Map<number, string[]>()
    for (const r of rows) {
      if (r.categoryId == null) continue
      const arr = byCat.get(r.categoryId) ?? []
      if (arr.length < perCategory) arr.push(r.slug)
      byCat.set(r.categoryId, arr)
    }
    const pairs = new Set<string>()
    for (const slugs of byCat.values()) {
      for (let i = 0; i < slugs.length; i++) {
        for (let j = i + 1; j < slugs.length; j++) {
          pairs.add(versusSlug(slugs[i], slugs[j]))
        }
      }
    }
    return [...pairs]
  } catch (err) {
    console.error('[queries.getComparePairs]', err)
    return []
  }
}

/** Two listings for the /[a]-vs-[b] compare page. Returns them in the order requested. */
export async function getListingsForCompare(
  slugA: string,
  slugB: string,
): Promise<{ a: ListingWithCategory | null; b: ListingWithCategory | null }> {
  const [a, b] = await Promise.all([getListingBySlug(slugA), getListingBySlug(slugB)])
  return { a, b }
}

/** Record an outbound click. Best-effort: never throws into the redirect path. */
export async function recordClick(listingId: number, ref?: string | null): Promise<void> {
  if (!isDatabaseConfigured()) return
  try {
    await db.insert(clickEvents).values({ listingId, ref: ref ?? null })
  } catch (err) {
    console.error('[queries.recordClick]', err)
  }
}

/** Minimal listing lookup for the redirect endpoint. */
export async function getListingForRedirect(
  id: number,
): Promise<{ id: number; affiliateUrl: string | null; websiteUrl: string } | null> {
  if (!isDatabaseConfigured()) return staticGetForRedirect(id)
  try {
    const rows = await db
      .select({
        id: listings.id,
        affiliateUrl: listings.affiliateUrl,
        websiteUrl: listings.websiteUrl,
      })
      .from(listings)
      .where(eq(listings.id, id))
      .limit(1)
    return rows[0] ?? null
  } catch (err) {
    console.error('[queries.getListingForRedirect]', err)
    return null
  }
}
