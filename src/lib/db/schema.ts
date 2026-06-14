import { sql } from 'drizzle-orm'
import { relations } from 'drizzle-orm'
import {
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'

/** Lifecycle of a directory listing. */
export const listingStatus = pgEnum('listing_status', ['live', 'pending', 'rejected'])

/** Lifecycle of a user submission / claim. */
export const submissionStatus = pgEnum('submission_status', ['pending', 'approved', 'rejected'])

/**
 * Task-oriented categories (AI writing, AI image, AI coding, ...).
 * The directory is organized by the job a visitor is trying to get done.
 */
export const categories = pgTable(
  'categories',
  {
    id: serial('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    description: text('description'),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => ({
    slugIdx: uniqueIndex('categories_slug_idx').on(t.slug),
  }),
)

/**
 * A single AI tool listing. The unit of the directory and of monetization:
 * the visit button routes through /api/go/[id] (affiliate-first), and paid
 * "featured" placements are tracked via `featured` + `featuredUntil`.
 */
export const listings = pgTable(
  'listings',
  {
    id: serial('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    tagline: text('tagline'),
    descriptionMd: text('description_md'),
    websiteUrl: text('website_url').notNull(),
    affiliateUrl: text('affiliate_url'),
    affiliateNetwork: text('affiliate_network'),
    logoUrl: text('logo_url'),
    categoryId: integer('category_id').references(() => categories.id, { onDelete: 'set null' }),
    useCases: text('use_cases')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    bestFor: text('best_for'),
    notFor: text('not_for'),
    pricingText: text('pricing_text'),
    hasFreeTier: boolean('has_free_tier').notNull().default(false),
    tags: text('tags')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    featured: boolean('featured').notNull().default(false),
    featuredUntil: timestamp('featured_until', { withTimezone: true }),
    featuredRank: integer('featured_rank'),
    status: listingStatus('status').notNull().default('live'),
    source: text('source'),
    // Stripe linkage for self-serve featured subscriptions.
    stripeCustomerId: text('stripe_customer_id'),
    stripeSubscriptionId: text('stripe_subscription_id'),
    lastCheckedAt: timestamp('last_checked_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    slugIdx: uniqueIndex('listings_slug_idx').on(t.slug),
    categoryIdx: index('listings_category_idx').on(t.categoryId),
    statusIdx: index('listings_status_idx').on(t.status),
    featuredIdx: index('listings_featured_idx').on(t.featured),
  }),
)

/**
 * Outbound click log. The proof-of-traffic asset we show sellers, and the
 * signal that justifies affiliate revenue.
 */
export const clickEvents = pgTable(
  'click_events',
  {
    id: serial('id').primaryKey(),
    listingId: integer('listing_id')
      .notNull()
      .references(() => listings.id, { onDelete: 'cascade' }),
    ts: timestamp('ts', { withTimezone: true }).notNull().defaultNow(),
    ref: text('ref'),
  },
  (t) => ({
    listingIdx: index('click_events_listing_idx').on(t.listingId),
    tsIdx: index('click_events_ts_idx').on(t.ts),
  }),
)

/**
 * Submissions / claims from /submit. Reviewed in /admin; on approval an
 * associated listing is created or set live.
 */
export const submissions = pgTable('submissions', {
  id: serial('id').primaryKey(),
  payload: jsonb('payload'),
  listingId: integer('listing_id').references(() => listings.id, { onDelete: 'set null' }),
  submitterUserId: text('submitter_user_id'),
  status: submissionStatus('status').notNull().default('pending'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

/**
 * Processed Stripe webhook events, for idempotency. We record each event id the
 * first time we handle it; retries (Stripe redelivers for up to 3 days) are then
 * skipped so we never re-apply a stale period or overwrite an admin change.
 */
export const stripeEvents = pgTable('stripe_events', {
  id: text('id').primaryKey(),
  type: text('type'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export const listingsRelations = relations(listings, ({ one, many }) => ({
  category: one(categories, {
    fields: [listings.categoryId],
    references: [categories.id],
  }),
  clicks: many(clickEvents),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
  listings: many(listings),
}))

export const clickEventsRelations = relations(clickEvents, ({ one }) => ({
  listing: one(listings, {
    fields: [clickEvents.listingId],
    references: [listings.id],
  }),
}))

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert
export type Listing = typeof listings.$inferSelect
export type NewListing = typeof listings.$inferInsert
export type ClickEvent = typeof clickEvents.$inferSelect
export type Submission = typeof submissions.$inferSelect
export type NewSubmission = typeof submissions.$inferInsert

/** A listing joined with its category — the shape pages consume. */
export type ListingWithCategory = Listing & { category: Category | null }
