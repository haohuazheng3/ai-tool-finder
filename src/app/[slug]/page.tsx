import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, Globe, Sparkles, ThumbsDown, ThumbsUp, X } from 'lucide-react'
import { AnswerCapsule } from '@/components/answer-capsule'
import { CompareTable } from '@/components/compare-table'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { ListingCard } from '@/components/listing-card'
import { Markdown } from '@/components/markdown'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { VisitButton } from '@/components/visit-button'
import {
  getAllListingSlugs,
  getComparePairs,
  getListingBySlug,
  getRelatedListings,
} from '@/lib/db/queries'
import type { ListingWithCategory } from '@/lib/db/schema'
import { isActivelyFeatured } from '@/lib/featured'
import { isVersusSlug, parseVersusSlug, versusSlug } from '@/lib/slug'
import { breadcrumbLd, buildMetadata, softwareApplicationLd } from '@/lib/seo'
import { domainFromUrl, formatDate, logoUrlFor, stripMarkdown, truncate } from '@/lib/utils'
import { startingPrice } from '@/lib/pricing'

export const revalidate = 86400

export async function generateStaticParams() {
  const [slugs, pairs] = await Promise.all([getAllListingSlugs(), getComparePairs(4)])
  return [...slugs, ...pairs].map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const listing = await getListingBySlug(params.slug)
  if (listing) {
    const description = truncate(
      stripMarkdown(listing.descriptionMd) || listing.tagline || `${listing.name} — AI tool`,
      160,
    )
    return buildMetadata({
      title: `${listing.name} Review (2026): Features, Pros & Cons`,
      description,
      path: `/${listing.slug}`,
      ogSubtitle: listing.tagline ?? undefined,
    })
  }

  if (isVersusSlug(params.slug)) {
    const parsed = parseVersusSlug(params.slug)
    if (parsed) {
      const [a, b] = await Promise.all([getListingBySlug(parsed[0]), getListingBySlug(parsed[1])])
      if (a && b) {
        const canonical = versusSlug(a.slug, b.slug)
        return buildMetadata({
          title: `${a.name} vs ${b.name}: Which AI Tool Wins?`,
          description: `${a.name} vs ${b.name} compared on pricing, features, free tiers, and who each is best for.`,
          path: `/${canonical}`,
          ogSubtitle: 'Side-by-side comparison',
        })
      }
    }
  }
  return {}
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
  const listing = await getListingBySlug(params.slug)
  if (listing) return <ListingDetail listing={listing} />

  if (isVersusSlug(params.slug)) {
    const parsed = parseVersusSlug(params.slug)
    if (parsed) {
      const [a, b] = await Promise.all([getListingBySlug(parsed[0]), getListingBySlug(parsed[1])])
      if (a && b) {
        // Consolidate on the canonical (alphabetical) order to avoid duplicates.
        const canonical = versusSlug(a.slug, b.slug)
        if (params.slug !== canonical) redirect(`/${canonical}`)
        return <CompareView a={a} b={b} />
      }
    }
  }
  notFound()
}

/* ───────────────────────────── Listing detail ───────────────────────────── */

async function ListingDetail({ listing }: { listing: ListingWithCategory }) {
  const related = await getRelatedListings(listing, 4)
  const featured = isActivelyFeatured(listing)
  const domain = domainFromUrl(listing.websiteUrl)

  const price = startingPrice(listing.pricingText)
  const faqs: Faq[] = [
    { q: `Is ${listing.name} worth it?`, a: `${listing.name} is worth it if ${(listing.bestFor ?? `you need ${listing.category?.name ?? 'this'}`).replace(/\.$/, '').toLowerCase()}.${listing.notFor ? ` It's not the right pick if ${listing.notFor.replace(/\.$/, '').toLowerCase()}.` : ''}${listing.hasFreeTier ? ' A free tier lets you test it at no cost first.' : price ? ` Paid from about $${price}/mo.` : ''}` },
    { q: `What is ${listing.name}?`, a: `${listing.name} is ${(listing.tagline ?? `an AI ${listing.category?.name ?? 'tool'}`).replace(/\.$/, '')}.${listing.bestFor ? ` It's best for ${listing.bestFor.replace(/\.$/, '').toLowerCase()}.` : ''}` },
    { q: `How much does ${listing.name} cost?`, a: listing.pricingText ?? 'See the official site for current pricing.' },
    { q: `Does ${listing.name} have a free tier?`, a: listing.hasFreeTier ? `Yes, ${listing.name} offers a free tier or free plan.` : `${listing.name} does not offer a permanent free tier; check the site for trials.` },
    ...(related.length >= 4 ? [{ q: `What are the best ${listing.name} alternatives?`, a: `Top alternatives include ${related.slice(0, 3).map((r) => r.name).join(', ')}. See the full comparison on our ${listing.name} alternatives page.` }] : []),
  ]

  return (
    <div className="container max-w-5xl py-10">
      <JsonLd
        data={[
          softwareApplicationLd(listing),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            ...(listing.category
              ? [{ name: listing.category.name, path: `/category/${listing.category.slug}` }]
              : []),
            { name: listing.name, path: `/${listing.slug}` },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        {listing.category && (
          <>
            {' / '}
            <Link href={`/category/${listing.category.slug}`} className="hover:text-foreground">
              {listing.category.name}
            </Link>
          </>
        )}
        {' / '}
        <span className="text-foreground">{listing.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <header className="flex items-start gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrlFor(listing)}
              alt={`${listing.name} logo`}
              width={56}
              height={56}
              className="size-14 rounded-xl border bg-white object-contain p-2"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight">{listing.name}</h1>
                {featured && (
                  <Badge variant="sponsored" className="gap-1">
                    <Sparkles className="size-3" /> Sponsored
                  </Badge>
                )}
              </div>
              {listing.tagline && <p className="mt-1 text-lg text-muted-foreground">{listing.tagline}</p>}
            </div>
          </header>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {listing.category && (
              <Link href={`/category/${listing.category.slug}`}>
                <Badge variant="secondary">{listing.category.name}</Badge>
              </Link>
            )}
            {listing.hasFreeTier && <Badge variant="success">Free tier</Badge>}
            {listing.tags.map((t) => (
              <Badge key={t} variant="muted">{t}</Badge>
            ))}
          </div>

          <AnswerCapsule>
            <strong>{listing.name}</strong> is {(listing.tagline ?? `an AI ${listing.category?.name ?? 'tool'}`).replace(/\.$/, '')}.
            {listing.bestFor ? ` Best for ${listing.bestFor.replace(/\.$/, '').toLowerCase()}.` : ''}{' '}
            {listing.pricingText ? `Pricing: ${listing.pricingText}.` : ''} {listing.hasFreeTier ? 'A free tier is available.' : ''}
          </AnswerCapsule>

          {(price != null || listing.hasFreeTier) && (
            <p className="mt-3 text-sm">
              <Link href={`/${listing.slug}/pricing`} className="font-medium text-primary hover:underline">
                See {listing.name} pricing, plans &amp; free tier →
              </Link>
            </p>
          )}

          {listing.descriptionMd && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Overview</h2>
              <div className="mt-2">
                <Markdown>{listing.descriptionMd}</Markdown>
              </div>
            </section>
          )}

          {(listing.bestFor || listing.notFor) && (
            <section className="mt-8 grid gap-4 sm:grid-cols-2">
              {listing.bestFor && (
                <Card className="border-emerald-200 bg-emerald-50/50 p-5">
                  <div className="flex items-center gap-2 font-semibold text-emerald-800">
                    <ThumbsUp className="size-4" /> Best for
                  </div>
                  <p className="mt-2 text-sm text-emerald-900/80">{listing.bestFor}</p>
                </Card>
              )}
              {listing.notFor && (
                <Card className="border-rose-200 bg-rose-50/50 p-5">
                  <div className="flex items-center gap-2 font-semibold text-rose-800">
                    <ThumbsDown className="size-4" /> Not for
                  </div>
                  <p className="mt-2 text-sm text-rose-900/80">{listing.notFor}</p>
                </Card>
              )}
            </section>
          )}

          {listing.useCases.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">What people use it for</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {listing.useCases.map((u) => (
                  <Badge key={u} variant="outline" className="text-sm">{u}</Badge>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* CTA rail */}
        <aside className="lg:col-span-1">
          <Card className="sticky top-20 p-5">
            <VisitButton
              id={listing.id}
              name={listing.name}
              label={`Visit ${listing.name}`}
              size="lg"
              className="w-full"
            />
            {domain && (
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Globe className="size-3.5" /> {domain}
              </div>
            )}
            {listing.affiliateUrl && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                We may earn a commission if you sign up through our link — at no extra cost to you.
              </p>
            )}

            <dl className="mt-5 space-y-3 border-t pt-5 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Pricing</dt>
                <dd className="text-right font-medium">{listing.pricingText ?? '—'}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Free tier</dt>
                <dd>
                  {listing.hasFreeTier ? (
                    <Check className="size-4 text-emerald-600" />
                  ) : (
                    <X className="size-4 text-muted-foreground" />
                  )}
                </dd>
              </div>
              {listing.category && (
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium">{listing.category.name}</dd>
                </div>
              )}
              {listing.updatedAt && (
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Updated</dt>
                  <dd className="font-medium">{formatDate(listing.updatedAt)}</dd>
                </div>
              )}
            </dl>
          </Card>
        </aside>
      </div>

      {/* Alternatives */}
      {related.length > 0 && (
        <section className="mt-14">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-xl font-semibold">Alternatives to {listing.name}</h2>
            {related.length >= 4 && (
              <Link href={`/${listing.slug}/alternatives`} className="shrink-0 text-sm font-medium text-primary hover:underline">
                Compare all alternatives →
              </Link>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Other {listing.category?.name ?? 'AI'} tools worth comparing.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((alt) => (
              <div key={alt.id} className="flex flex-col gap-2">
                <ListingCard listing={alt} showCategory={false} />
                <Link
                  href={`/${versusSlug(listing.slug, alt.slug)}`}
                  className="text-center text-xs text-primary hover:underline"
                >
                  {listing.name} vs {alt.name}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      <FaqSection faqs={faqs} />
    </div>
  )
}

/* ─────────────────────────────── Compare view ────────────────────────────── */

function CompareView({ a, b }: { a: ListingWithCategory; b: ListingWithCategory }) {
  const canonical = versusSlug(a.slug, b.slug)
  return (
    <div className="container max-w-4xl py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: `${a.name} vs ${b.name}`, path: `/${canonical}` },
        ])}
      />
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Compare</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {a.name} vs {b.name}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        A side-by-side comparison of {a.name} and {b.name} — pricing, free tiers, and who each tool
        is genuinely best for.
      </p>

      <div className="mt-8">
        <CompareTable a={a} b={b} />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[a, b].map((l) => (
          <Card key={l.id} className="p-5">
            <Link href={`/${l.slug}`} className="text-lg font-semibold hover:underline">
              {l.name}
            </Link>
            {l.bestFor && (
              <p className="mt-2 text-sm">
                <span className="font-medium">Choose it if: </span>
                <span className="text-muted-foreground">{l.bestFor}</span>
              </p>
            )}
            <div className="mt-3">
              <VisitButton id={l.id} name={l.name} size="sm" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
