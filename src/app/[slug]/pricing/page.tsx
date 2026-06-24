import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, X, ThumbsUp, AlertTriangle } from 'lucide-react'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { VisitButton } from '@/components/visit-button'
import { getListingBySlug } from '@/lib/db/queries'
import { getAlternatives, getPricingPageSlugs } from '@/lib/db/seo-queries'
import { startingPrice, freeTierLabel, parsePlans } from '@/lib/pricing'
import { breadcrumbLd, buildMetadata, faqPageLd, softwareApplicationLd } from '@/lib/seo'
import { logoUrlFor } from '@/lib/utils'

export const revalidate = 86400

export async function generateStaticParams() {
  const slugs = await getPricingPageSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const l = await getListingBySlug(params.slug)
  if (!l) return {}
  const price = startingPrice(l.pricingText)
  const lead = l.hasFreeTier ? 'free tier' : price ? `from $${price}/mo` : 'pricing'
  return buildMetadata({
    title: `${l.name} Pricing (2026): Plans, Free Tier & Cost`,
    description: `${l.name} pricing explained: real plans, ${lead}, whether it's worth it, and cheaper + free alternatives. No hype — just the numbers.`,
    path: `/${l.slug}/pricing`,
    ogSubtitle: 'Plans, free tier & cheaper alternatives',
  })
}

export default async function PricingPage({ params }: { params: { slug: string } }) {
  const listing = await getListingBySlug(params.slug)
  if (!listing) notFound()
  const price = startingPrice(listing.pricingText)
  // Quality gate: only a real pricing page when we have a price or a free tier to talk about.
  if (price == null && !listing.hasFreeTier) notFound()

  const plans = parsePlans(listing.pricingText)
  const text = (listing.pricingText ?? '').toLowerCase()
  const hasTrial = text.includes('trial')
  const data = await getAlternatives(params.slug, { limit: 10 })
  const alts = data?.alternatives ?? []
  const cheaper = alts
    .map((a) => ({ a, p: startingPrice(a.pricingText) }))
    .filter((x): x is { a: typeof alts[number]; p: number } => x.p != null && (price == null || x.p < price))
    .sort((x, y) => x.p - y.p)
    .slice(0, 6)
  const freeAlts = alts.filter((a) => a.hasFreeTier).slice(0, 8)
  const cat = listing.category

  const faqs: Faq[] = [
    { q: `Is ${listing.name} free?`, a: listing.hasFreeTier ? `Yes — ${listing.name} has a free tier (${freeTierLabel(listing)}). ${hasTrial ? 'It also offers a trial on paid plans. ' : ''}Check the limits before relying on it for production work.` : `No, ${listing.name} has no permanent free tier.${hasTrial ? ' It offers a free trial, after which a paid plan is required.' : ''}${price ? ` Paid plans start at about $${price}/mo.` : ''}` },
    { q: `How much does ${listing.name} cost?`, a: price ? `${listing.name} starts at about $${price}/mo. Full plans: ${listing.pricingText}` : `${listing.pricingText || 'See the official site for current pricing.'}` },
    ...(cheaper[0] ? [{ q: `What is a cheaper alternative to ${listing.name}?`, a: `${cheaper[0].a.name} is the cheapest comparable ${cat?.name ?? 'AI'} tool at about $${cheaper[0].p}/mo${cheaper[0].a.hasFreeTier ? ' (it also has a free tier)' : ''}. See the full list below.` }] : []),
    ...(freeAlts[0] ? [{ q: `Is there a free alternative to ${listing.name}?`, a: `Yes — ${freeAlts.slice(0, 3).map((f) => f.name).join(', ')} offer free tiers. ${freeAlts[0].name} is the best free ${listing.name} alternative for most people.` }] : []),
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          ...(cat ? [{ name: cat.name, path: `/category/${cat.slug}` }] : []),
          { name: listing.name, path: `/${listing.slug}` },
          { name: 'Pricing', path: `/${listing.slug}/pricing` },
        ]),
        softwareApplicationLd(listing),
        faqPageLd(faqs),
      ]} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/${listing.slug}`} className="hover:text-foreground">{listing.name}</Link> /{' '}
        <span className="text-foreground">Pricing</span>
      </nav>

      <div className="flex items-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrlFor(listing)} alt="" width={40} height={40} className="size-10 shrink-0 rounded-lg border bg-white object-contain p-1" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{listing.name} Pricing (2026)</h1>
      </div>

      <AnswerCapsule>
        {listing.hasFreeTier ? <><strong>{listing.name} has a free tier</strong>{price ? <>, and paid plans start at about <strong>${price}/mo</strong></> : ''}.</> : <><strong>{listing.name} has no free tier</strong>{price ? <>; paid plans start at about <strong>${price}/mo</strong></> : ''}.{hasTrial ? ' A free trial is available.' : ''}</>}{' '}
        {listing.bestFor ? `It's worth it if ${listing.bestFor.replace(/\.$/, '').toLowerCase()}.` : ''}{' '}
        {cheaper[0] ? <>The cheapest comparable alternative is <strong>{cheaper[0].a.name}</strong> at ~${cheaper[0].p}/mo.</> : null}
      </AnswerCapsule>

      {/* Plans */}
      {plans.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">{listing.name} plans</h2>
          <ul className="mt-3 divide-y rounded-xl border">
            {plans.map((p, i) => (
              <li key={i} className="flex items-start gap-2 p-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted-foreground">Pricing changes often — always confirm on the official site before buying.</p>
        </section>
      )}

      {/* Is it worth it */}
      {(listing.bestFor || listing.notFor) && (
        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {listing.bestFor && (
            <Card className="border-emerald-200 bg-emerald-50/50 p-5">
              <div className="flex items-center gap-2 font-semibold text-emerald-800"><ThumbsUp className="size-4" /> Worth it if</div>
              <p className="mt-2 text-sm text-emerald-900/80">{listing.bestFor}</p>
            </Card>
          )}
          {listing.notFor && (
            <Card className="border-amber-200 bg-amber-50/50 p-5">
              <div className="flex items-center gap-2 font-semibold text-amber-800"><AlertTriangle className="size-4" /> Skip it if</div>
              <p className="mt-2 text-sm text-amber-900/80">{listing.notFor}</p>
            </Card>
          )}
        </section>
      )}

      <div className="mt-6">
        <VisitButton id={listing.id} name={listing.name} label={`Visit ${listing.name}`} size="lg" />
      </div>

      {/* Cheaper alternatives — interception */}
      {cheaper.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Cheaper alternatives to {listing.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">Comparable {cat?.name ?? 'AI'} tools that cost less{price ? ` than ${listing.name}'s ~$${price}/mo` : ''}:</p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead><tr className="border-b bg-muted/40 text-left text-xs uppercase text-muted-foreground"><th className="p-3">Tool</th><th className="p-3">From</th><th className="p-3">Free tier</th><th className="p-3" /></tr></thead>
              <tbody>
                {cheaper.map(({ a, p }) => (
                  <tr key={a.id} className="border-b align-middle last:border-0">
                    <td className="p-3"><Link href={`/${a.slug}`} className="font-medium hover:underline">{a.name}</Link></td>
                    <td className="p-3 tabular-nums">${p}/mo</td>
                    <td className="p-3">{a.hasFreeTier ? <Check className="size-4 text-emerald-600" /> : <X className="size-4 text-muted-foreground" />}</td>
                    <td className="p-3"><VisitButton id={a.id} name={a.name} label="Visit" size="sm" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Free alternatives */}
      {freeAlts.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Free alternatives to {listing.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{freeAlts.length} {cat?.name ?? 'AI'} tool{freeAlts.length === 1 ? '' : 's'} with a genuine free tier:</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {freeAlts.map((f) => (<Link key={f.id} href={`/${f.slug}`}><Badge variant="success">{f.name}</Badge></Link>))}
          </div>
        </section>
      )}

      {/* Cluster links */}
      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <Link href={`/${listing.slug}`} className="text-primary hover:underline">{listing.name} review →</Link>
        {alts.length >= 4 && <Link href={`/${listing.slug}/alternatives`} className="text-primary hover:underline">All {listing.name} alternatives →</Link>}
        {cat && <Link href={`/best/${cat.slug}`} className="text-primary hover:underline">Best {cat.name} tools →</Link>}
        {cat && <Link href={`/best/${cat.slug}/cheapest`} className="text-primary hover:underline">Cheapest {cat.name.replace(/^AI /, '')} tools →</Link>}
      </div>

      <FaqSection faqs={faqs} />
    </div>
  )
}
