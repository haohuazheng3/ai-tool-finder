import 'server-only'
import { getListings, getListingBySlug, getCategories } from './queries'
import type { Category, ListingWithCategory } from './schema'
import { CATEGORIES } from '@/data/categories'
import { PERSONAS, MIN_PERSONA_TOOLS, getPersona, toolMatchesPersona, type Persona } from '@/data/personas'
import { isActivelyFeatured } from '@/lib/featured'
import { median, startingPrice } from '@/lib/pricing'
import { versusSlug } from '@/lib/slug'

/** All live listings (used by aggregate/grouping queries). */
async function allLive(): Promise<ListingWithCategory[]> {
  return getListings({ limit: 1000, sort: 'featured' })
}

function rank(a: ListingWithCategory, b: ListingWithCategory): number {
  const fa = isActivelyFeatured(a) ? 1 : 0
  const fb = isActivelyFeatured(b) ? 1 : 0
  if (fa !== fb) return fb - fa
  const ra = a.featuredRank ?? 9999
  const rb = b.featuredRank ?? 9999
  if (ra !== rb) return ra - rb
  return a.name.localeCompare(b.name)
}

/* ── best/[task]/free ─────────────────────────────────────────────────────── */

export async function getFreeListings(taskSlug: string, limit = 20): Promise<ListingWithCategory[]> {
  return getListings({ categorySlug: taskSlug, hasFreeTier: true, sort: 'featured', limit })
}

/* ── best/[task]/for/[persona] ────────────────────────────────────────────── */

export async function getPersonaListings(
  taskSlug: string,
  persona: Persona,
  limit = 20,
): Promise<ListingWithCategory[]> {
  const inCat = await getListings({ categorySlug: taskSlug, limit: 100 })
  return inCat.filter((l) => toolMatchesPersona(l, persona)).sort(rank).slice(0, limit)
}

/** Enumerate (task, persona) pairs that have >= MIN_PERSONA_TOOLS qualifying tools. */
export async function getQualifyingPersonaPairs(): Promise<{ task: string; persona: string }[]> {
  const live = await allLive()
  const byCat = new Map<string, ListingWithCategory[]>()
  for (const l of live) {
    const slug = l.category?.slug
    if (!slug) continue
    const arr = byCat.get(slug) ?? []
    arr.push(l)
    byCat.set(slug, arr)
  }
  const pairs: { task: string; persona: string }[] = []
  for (const persona of PERSONAS) {
    for (const task of persona.categories) {
      const tools = (byCat.get(task) ?? []).filter((l) => toolMatchesPersona(l, persona))
      if (tools.length >= MIN_PERSONA_TOOLS) pairs.push({ task, persona: persona.slug })
    }
  }
  return pairs
}

/* ── [slug]/alternatives ──────────────────────────────────────────────────── */

export async function getAlternatives(
  slug: string,
  opts: { freeOnly?: boolean; limit?: number } = {},
): Promise<{ listing: ListingWithCategory; alternatives: ListingWithCategory[] } | null> {
  const listing = await getListingBySlug(slug)
  if (!listing || !listing.categoryId) return null
  const inCat = await getListings({ categorySlug: listing.category?.slug, limit: 100 })
  let alts = inCat.filter((l) => l.id !== listing.id)
  if (opts.freeOnly) alts = alts.filter((l) => l.hasFreeTier)
  alts = alts.sort(rank).slice(0, opts.limit ?? 8)
  return { listing, alternatives: alts }
}

export const MIN_ALTERNATIVES = 4

/** Slugs that have >= MIN_ALTERNATIVES same-category alternatives (for static gen). */
export async function getSlugsWithAlternatives(): Promise<string[]> {
  const live = await allLive()
  const counts = new Map<string, number>()
  for (const l of live) {
    const c = l.category?.slug
    if (!c) continue
    counts.set(c, (counts.get(c) ?? 0) + 1)
  }
  return live.filter((l) => l.category?.slug && (counts.get(l.category.slug) ?? 0) - 1 >= MIN_ALTERNATIVES).map((l) => l.slug)
}

/* ── compare/[a]-vs-[b]-vs-[c] (3-way) ────────────────────────────────────── */

export function trioSlug(a: string, b: string, c: string): string {
  return [a, b, c].sort((m, n) => m.localeCompare(n)).join('-vs-')
}

export function parseTrioSlug(slug: string): [string, string, string] | null {
  const parts = slug.split('-vs-')
  if (parts.length !== 3 || parts.some((p) => !p)) return null
  return [parts[0], parts[1], parts[2]]
}

/** Curated top trios per category (capped) for static generation + sitemap. */
export async function getCompareTrios(perCategory = 4): Promise<string[]> {
  const live = await allLive()
  const byCat = new Map<string, ListingWithCategory[]>()
  for (const l of live) {
    const c = l.category?.slug
    if (!c) continue
    const arr = byCat.get(c) ?? []
    if (arr.length < perCategory) arr.push(l)
    byCat.set(c, arr)
  }
  const trios = new Set<string>()
  for (const tools of byCat.values()) {
    const s = tools.map((t) => t.slug)
    for (let i = 0; i < s.length; i++)
      for (let j = i + 1; j < s.length; j++)
        for (let k = j + 1; k < s.length; k++) trios.add(trioSlug(s[i], s[j], s[k]))
  }
  return [...trios]
}

export async function getTrioListings(
  a: string, b: string, c: string,
): Promise<ListingWithCategory[] | null> {
  const items = await Promise.all([getListingBySlug(a), getListingBySlug(b), getListingBySlug(c)])
  if (items.some((x) => !x)) return null
  return items as ListingWithCategory[]
}

/* ── /ai-tools-pricing-report (original data study) ───────────────────────── */

export type CategoryPricingStat = {
  slug: string
  name: string
  total: number
  freeCount: number
  freePct: number
  minPrice: number | null
  medianPrice: number | null
  cheapest: { name: string; slug: string; price: number } | null
}
export type PricingReport = {
  totalTools: number
  freeCount: number
  freePct: number
  pricedCount: number
  overallMedian: number | null
  categories: CategoryPricingStat[]
}

export async function getPricingReport(): Promise<PricingReport> {
  const live = await allLive()
  const cats = (await getCategories()).length ? await getCategories() : (CATEGORIES as unknown as Category[])
  const catStats: CategoryPricingStat[] = []
  const allPrices: number[] = []

  for (const cat of cats) {
    const tools = live.filter((l) => l.category?.slug === cat.slug)
    if (!tools.length) continue
    const priced = tools
      .map((t) => ({ t, p: startingPrice(t.pricingText) }))
      .filter((x): x is { t: ListingWithCategory; p: number } => x.p != null)
    priced.forEach((x) => allPrices.push(x.p))
    const freeCount = tools.filter((t) => t.hasFreeTier).length
    const prices = priced.map((x) => x.p)
    const cheapest = priced.length
      ? priced.reduce((m, x) => (x.p < m.p ? x : m))
      : null
    catStats.push({
      slug: cat.slug,
      name: cat.name,
      total: tools.length,
      freeCount,
      freePct: Math.round((freeCount / tools.length) * 100),
      minPrice: prices.length ? Math.min(...prices) : null,
      medianPrice: median(prices),
      cheapest: cheapest ? { name: cheapest.t.name, slug: cheapest.t.slug, price: cheapest.p } : null,
    })
  }

  const freeCount = live.filter((l) => l.hasFreeTier).length
  return {
    totalTools: live.length,
    freeCount,
    freePct: live.length ? Math.round((freeCount / live.length) * 100) : 0,
    pricedCount: allPrices.length,
    overallMedian: median(allPrices),
    categories: catStats.sort((a, b) => b.freePct - a.freePct),
  }
}

/* ── /updates ─────────────────────────────────────────────────────────────── */

export async function getRecentlyAdded(limit = 40): Promise<ListingWithCategory[]> {
  return getListings({ sort: 'newest', limit })
}

export { PERSONAS, getPersona }
export type { Persona }
