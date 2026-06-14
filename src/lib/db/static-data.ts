/**
 * In-memory fallback dataset built from the bundled seed files.
 *
 * When DATABASE_URL is not configured, the public read queries serve from here
 * instead of returning empty — so the directory is fully browsable (home,
 * categories, best-of, detail, vs, search) on a zero-config deploy. Write paths
 * (clicks, submissions, featured purchases) still require a real database.
 */
import { CATEGORIES } from '@/data/categories'
import { SEED_LISTINGS } from '@/data/seed-listings'
import type { Category, ListingWithCategory } from './schema'
import { versusSlug } from '@/lib/slug'

const NOW = Date.now()
const FEATURED_UNTIL = new Date(NOW + 60 * 86_400_000)

export const STATIC_CATEGORIES: Category[] = CATEGORIES.map((c, i) => ({
  id: i + 1,
  slug: c.slug,
  name: c.name,
  description: c.description,
  sortOrder: c.sortOrder,
}))

const catBySlug = new Map(STATIC_CATEGORIES.map((c) => [c.slug, c]))

export const STATIC_LISTINGS: ListingWithCategory[] = SEED_LISTINGS.map((s, i) => {
  const category = catBySlug.get(s.categorySlug) ?? null
  return {
    id: i + 1,
    slug: s.slug,
    name: s.name,
    tagline: s.tagline,
    descriptionMd: s.descriptionMd,
    websiteUrl: s.websiteUrl,
    affiliateUrl: s.affiliateUrl,
    affiliateNetwork: s.affiliateNetwork,
    logoUrl: null,
    categoryId: category?.id ?? null,
    useCases: s.useCases,
    bestFor: s.bestFor,
    notFor: s.notFor,
    pricingText: s.pricingText,
    hasFreeTier: s.hasFreeTier,
    tags: s.tags,
    featured: s.featured,
    featuredUntil: s.featured ? FEATURED_UNTIL : null,
    featuredRank: s.featuredRank,
    status: 'live',
    source: s.source,
    stripeCustomerId: null,
    stripeSubscriptionId: null,
    lastCheckedAt: new Date(NOW),
    // Decreasing timestamps so array order reads as newest-first.
    createdAt: new Date(NOW - i * 60_000),
    updatedAt: new Date(NOW - i * 60_000),
    category,
  }
})

const byId = new Map(STATIC_LISTINGS.map((l) => [l.id, l]))
const bySlug = new Map(STATIC_LISTINGS.map((l) => [l.slug, l]))

const isFeatured = (l: ListingWithCategory) =>
  l.featured && (!l.featuredUntil || l.featuredUntil.getTime() > NOW)

type Filters = {
  categorySlug?: string
  tag?: string
  hasFreeTier?: boolean
  search?: string
  sort?: 'featured' | 'newest' | 'name' | 'free'
  limit?: number
  offset?: number
}

function compare(a: ListingWithCategory, b: ListingWithCategory, sort: string): number {
  const fa = isFeatured(a) ? 1 : 0
  const fb = isFeatured(b) ? 1 : 0
  if (sort === 'free' && a.hasFreeTier !== b.hasFreeTier) return a.hasFreeTier ? -1 : 1
  if (fa !== fb) return fb - fa
  if (sort === 'name') return a.name.localeCompare(b.name)
  if (sort === 'featured') {
    const ra = a.featuredRank ?? Number.MAX_SAFE_INTEGER
    const rb = b.featuredRank ?? Number.MAX_SAFE_INTEGER
    if (ra !== rb) return ra - rb
  }
  return b.createdAt.getTime() - a.createdAt.getTime()
}

export function staticGetListings(filters: Filters = {}): ListingWithCategory[] {
  const { categorySlug, tag, hasFreeTier, search, sort = 'featured', limit = 60, offset = 0 } = filters
  const q = search?.trim().toLowerCase()
  let rows = STATIC_LISTINGS.filter((l) => {
    if (categorySlug && l.category?.slug !== categorySlug) return false
    if (hasFreeTier && !l.hasFreeTier) return false
    if (tag && !l.tags.includes(tag)) return false
    if (q) {
      const hay = [l.name, l.tagline, l.descriptionMd, l.tags.join(' '), l.useCases.join(' ')]
        .join(' ')
        .toLowerCase()
      if (!hay.includes(q)) return false
    }
    return true
  })
  rows = rows.sort((a, b) => compare(a, b, sort))
  return rows.slice(offset, offset + limit)
}

export function staticGetFeatured(limit = 6): ListingWithCategory[] {
  return STATIC_LISTINGS.filter(isFeatured)
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999))
    .slice(0, limit)
}

export function staticGetBySlug(slug: string): ListingWithCategory | null {
  return bySlug.get(slug) ?? null
}

export function staticGetRelated(listing: ListingWithCategory, limit = 4): ListingWithCategory[] {
  if (!listing.categoryId) return []
  return STATIC_LISTINGS.filter((l) => l.categoryId === listing.categoryId && l.id !== listing.id)
    .sort((a, b) => compare(a, b, 'featured'))
    .slice(0, limit)
}

export function staticGetCategoryBySlug(slug: string): Category | null {
  return catBySlug.get(slug) ?? null
}

export function staticGetCategoriesWithCounts(): (Category & { count: number })[] {
  return STATIC_CATEGORIES.map((c) => ({
    ...c,
    count: STATIC_LISTINGS.filter((l) => l.categoryId === c.id).length,
  }))
}

export function staticGetAllSlugs(): string[] {
  return STATIC_LISTINGS.map((l) => l.slug)
}

export function staticGetComparePairs(perCategory = 4): string[] {
  const pairs = new Set<string>()
  for (const c of STATIC_CATEGORIES) {
    const top = STATIC_LISTINGS.filter((l) => l.categoryId === c.id)
      .sort((a, b) => compare(a, b, 'featured'))
      .slice(0, perCategory)
    for (let i = 0; i < top.length; i++) {
      for (let j = i + 1; j < top.length; j++) {
        pairs.add(versusSlug(top[i].slug, top[j].slug))
      }
    }
  }
  return [...pairs]
}

export function staticGetForRedirect(
  id: number,
): { id: number; affiliateUrl: string | null; websiteUrl: string } | null {
  const l = byId.get(id)
  return l ? { id: l.id, affiliateUrl: l.affiliateUrl, websiteUrl: l.websiteUrl } : null
}
