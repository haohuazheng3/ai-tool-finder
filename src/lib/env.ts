/**
 * Centralized, build-safe access to environment variables.
 *
 * The site is designed to render and build even when optional integrations
 * (Clerk, Stripe, Plausible) are not configured. Helpers below let server code
 * branch on what's actually available instead of crashing.
 */

/**
 * Resolve the canonical base URL. Prefers an explicit NEXT_PUBLIC_APP_URL, then
 * falls back to Vercel's stable production URL (and per-deploy URL) so canonicals,
 * sitemap, and OG work out-of-the-box on Vercel even before you set the var.
 */
function resolveAppUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercelProd) return `https://${vercelProd}`
  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`
  return 'http://localhost:3000'
}

export const env = {
  appUrl: resolveAppUrl(),
  databaseUrl: process.env.DATABASE_URL ?? '',

  clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '',
  clerkSecretKey: process.env.CLERK_SECRET_KEY ?? '',
  adminEmails: (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean),

  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? '',
  stripeFeaturedPriceId: process.env.NEXT_PUBLIC_STRIPE_FEATURED_PRICE_ID ?? '',

  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? '',
}

export const isDatabaseConfigured = () => Boolean(env.databaseUrl)

export const isClerkConfigured = () =>
  Boolean(env.clerkPublishableKey) && Boolean(env.clerkSecretKey)

export const isStripeConfigured = () =>
  Boolean(env.stripeSecretKey) && Boolean(env.stripeFeaturedPriceId)

export const isStripeWebhookConfigured = () =>
  Boolean(env.stripeSecretKey) && Boolean(env.stripeWebhookSecret)

export const isPlausibleConfigured = () => Boolean(env.plausibleDomain)

/** Absolute URL helper for canonicals / OG / sitemap. */
export const absoluteUrl = (path = '') => {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${env.appUrl}${clean === '/' ? '' : clean}`
}
