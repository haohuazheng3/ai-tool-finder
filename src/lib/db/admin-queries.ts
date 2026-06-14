import 'server-only'
import { and, asc, desc, eq, sql } from 'drizzle-orm'
import { db } from './index'
import {
  categories,
  clickEvents,
  listings,
  stripeEvents,
  submissions,
  type Category,
  type ListingWithCategory,
  type Submission,
} from './schema'
import { isDatabaseConfigured } from '@/lib/env'
import { slugify } from '@/lib/slug'

export type AdminListing = ListingWithCategory & { clicks: number }

/** All listings (any status) with category + lifetime click counts, for /admin. */
export async function getAdminListings(): Promise<AdminListing[]> {
  if (!isDatabaseConfigured()) return []
  const rows = await db
    .select({
      listings,
      categories,
      clicks: sql<number>`count(${clickEvents.id})::int`,
    })
    .from(listings)
    .leftJoin(categories, eq(listings.categoryId, categories.id))
    .leftJoin(clickEvents, eq(clickEvents.listingId, listings.id))
    .groupBy(listings.id, categories.id)
    .orderBy(
      desc(sql`(${listings.featured} = true)`),
      desc(listings.createdAt),
    )
  return rows.map((r) => ({ ...r.listings, category: r.categories ?? null, clicks: Number(r.clicks) }))
}

export type AdminCounts = {
  liveListings: number
  pendingListings: number
  pendingSubmissions: number
  totalClicks: number
  featuredActive: number
}

export async function getAdminCounts(): Promise<AdminCounts> {
  const empty: AdminCounts = {
    liveListings: 0,
    pendingListings: 0,
    pendingSubmissions: 0,
    totalClicks: 0,
    featuredActive: 0,
  }
  if (!isDatabaseConfigured()) return empty
  const [counts] = await db
    .select({
      liveListings: sql<number>`count(*) filter (where ${listings.status} = 'live')::int`,
      pendingListings: sql<number>`count(*) filter (where ${listings.status} = 'pending')::int`,
      featuredActive: sql<number>`count(*) filter (where ${listings.featured} = true and (${listings.featuredUntil} is null or ${listings.featuredUntil} > now()))::int`,
    })
    .from(listings)
  const [{ totalClicks }] = await db
    .select({ totalClicks: sql<number>`count(*)::int` })
    .from(clickEvents)
  const [{ pendingSubmissions }] = await db
    .select({ pendingSubmissions: sql<number>`count(*)::int` })
    .from(submissions)
    .where(eq(submissions.status, 'pending'))
  return {
    liveListings: Number(counts?.liveListings ?? 0),
    pendingListings: Number(counts?.pendingListings ?? 0),
    featuredActive: Number(counts?.featuredActive ?? 0),
    pendingSubmissions: Number(pendingSubmissions ?? 0),
    totalClicks: Number(totalClicks ?? 0),
  }
}

export async function getSubmissions(): Promise<Submission[]> {
  if (!isDatabaseConfigured()) return []
  return db.select().from(submissions).orderBy(desc(submissions.createdAt))
}

/** Toggle a featured placement. Enabling sets a paid window of `days` (default 30). */
export async function setListingFeatured(id: number, featured: boolean, days = 30) {
  const featuredUntil = featured ? new Date(Date.now() + days * 86_400_000) : null
  await db
    .update(listings)
    .set({ featured, featuredUntil, updatedAt: new Date() })
    .where(eq(listings.id, id))
}

export async function setListingStatus(id: number, status: 'live' | 'pending' | 'rejected') {
  await db.update(listings).set({ status, updatedAt: new Date() }).where(eq(listings.id, id))
}

export async function updateListingAffiliate(
  id: number,
  data: { affiliateUrl?: string | null; affiliateNetwork?: string | null },
) {
  await db
    .update(listings)
    .set({
      affiliateUrl: data.affiliateUrl ?? null,
      affiliateNetwork: data.affiliateNetwork ?? null,
      updatedAt: new Date(),
    })
    .where(eq(listings.id, id))
}

export type ListingPayload = {
  name: string
  websiteUrl: string
  tagline?: string
  descriptionMd?: string
  categorySlug?: string
  pricingText?: string
  hasFreeTier?: boolean
  useCases?: string[]
  tags?: string[]
  bestFor?: string
  notFor?: string
  affiliateUrl?: string | null
  affiliateNetwork?: string | null
}

async function resolveCategoryId(slug?: string): Promise<number | null> {
  if (!slug) return null
  const [c] = await db.select({ id: categories.id }).from(categories).where(eq(categories.slug, slug)).limit(1)
  return c?.id ?? null
}

async function uniqueSlug(base: string): Promise<string> {
  const safeBase = base || 'tool'
  let slug = safeBase
  let n = 2
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const [existing] = await db.select({ id: listings.id }).from(listings).where(eq(listings.slug, slug)).limit(1)
    if (!existing) return slug
    slug = `${safeBase}-${n++}`
  }
}

/** Create a live listing from a submission payload. Returns the new listing id. */
export async function createListingFromPayload(
  payload: ListingPayload,
  source = 'submission',
): Promise<number> {
  const categoryId = await resolveCategoryId(payload.categorySlug)
  const slug = await uniqueSlug(slugify(payload.name))
  const [inserted] = await db
    .insert(listings)
    .values({
      slug,
      name: payload.name,
      tagline: payload.tagline ?? null,
      descriptionMd: payload.descriptionMd ?? null,
      websiteUrl: payload.websiteUrl,
      affiliateUrl: payload.affiliateUrl ?? null,
      affiliateNetwork: payload.affiliateNetwork ?? null,
      categoryId,
      useCases: payload.useCases ?? [],
      tags: payload.tags ?? [],
      bestFor: payload.bestFor ?? null,
      notFor: payload.notFor ?? null,
      pricingText: payload.pricingText ?? null,
      hasFreeTier: payload.hasFreeTier ?? false,
      status: 'live',
      source,
    })
    .returning({ id: listings.id })
  return inserted.id
}

/** Approve a submission: create the listing (if it carries a payload) and mark approved. */
export async function approveSubmission(submissionId: number): Promise<void> {
  const [sub] = await db.select().from(submissions).where(eq(submissions.id, submissionId)).limit(1)
  if (!sub) return
  let listingId = sub.listingId
  if (!listingId && sub.payload) {
    listingId = await createListingFromPayload(sub.payload as ListingPayload, 'submission')
  } else if (listingId) {
    await setListingStatus(listingId, 'live')
  }
  await db
    .update(submissions)
    .set({ status: 'approved', listingId: listingId ?? null })
    .where(eq(submissions.id, submissionId))
}

export async function rejectSubmission(submissionId: number): Promise<void> {
  await db.update(submissions).set({ status: 'rejected' }).where(eq(submissions.id, submissionId))
}

/** Used by the Stripe webhook to activate a paid featured placement. */
export async function activateFeaturedFromStripe(params: {
  listingId: number
  customerId: string
  subscriptionId: string
  periodEnd: Date
}): Promise<void> {
  await db
    .update(listings)
    .set({
      featured: true,
      featuredUntil: params.periodEnd,
      stripeCustomerId: params.customerId,
      stripeSubscriptionId: params.subscriptionId,
      updatedAt: new Date(),
    })
    .where(eq(listings.id, params.listingId))
}

/** Used by the Stripe webhook when a featured subscription is cancelled. */
export async function deactivateFeaturedBySubscription(subscriptionId: string): Promise<void> {
  await db
    .update(listings)
    .set({ featured: false, featuredUntil: null, updatedAt: new Date() })
    .where(eq(listings.stripeSubscriptionId, subscriptionId))
}

/** Whether a Stripe event id has already been fully handled (idempotency). */
export async function hasProcessedStripeEvent(eventId: string): Promise<boolean> {
  const [row] = await db
    .select({ id: stripeEvents.id })
    .from(stripeEvents)
    .where(eq(stripeEvents.id, eventId))
    .limit(1)
  return Boolean(row)
}

/** Record a Stripe event id AFTER it has been successfully handled. */
export async function markStripeEventProcessed(eventId: string, type: string): Promise<void> {
  await db.insert(stripeEvents).values({ id: eventId, type }).onConflictDoNothing()
}

/** Stripe customer id stored on a listing (for the billing portal). */
export async function getListingStripeCustomerId(id: number): Promise<string | null> {
  if (!isDatabaseConfigured()) return null
  const [r] = await db
    .select({ customerId: listings.stripeCustomerId })
    .from(listings)
    .where(eq(listings.id, id))
    .limit(1)
  return r?.customerId ?? null
}

/** Lightweight list for the /advertise listing picker. */
export async function getListingOptions(): Promise<{ id: number; name: string; slug: string }[]> {
  if (!isDatabaseConfigured()) return []
  return db
    .select({ id: listings.id, name: listings.name, slug: listings.slug })
    .from(listings)
    .where(eq(listings.status, 'live'))
    .orderBy(asc(listings.name))
}
