import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { Badge } from '@/components/ui/badge'
import { VisitButton } from '@/components/visit-button'
import { getAlternatives, getSlugsWithAlternatives, MIN_ALTERNATIVES } from '@/lib/db/seo-queries'
import type { ListingWithCategory } from '@/lib/db/schema'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'
import { logoUrlFor } from '@/lib/utils'

export const revalidate = 86400

export async function generateStaticParams() {
  const slugs = await getSlugsWithAlternatives()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getAlternatives(params.slug, { limit: 8 })
  if (!data) return {}
  return buildMetadata({
    title: `${data.listing.name} Alternatives (2026): ${data.alternatives.length} Best Options Compared`,
    description: `The best ${data.listing.name} alternatives compared on price, free tier, and who each is for — including free alternatives to ${data.listing.name}.`,
    path: `/${params.slug}/alternatives`,
    ogSubtitle: `${data.listing.name} alternatives compared`,
  })
}

function AltTable({ rows }: { rows: ListingWithCategory[] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/40 text-left text-xs uppercase text-muted-foreground">
            <th className="p-3">Tool</th>
            <th className="p-3">Free tier</th>
            <th className="p-3">Pricing</th>
            <th className="p-3">Best for</th>
            <th className="p-3" />
          </tr>
        </thead>
        <tbody>
          {rows.map((l) => (
            <tr key={l.id} className="border-b align-top last:border-0">
              <td className="p-3">
                <Link href={`/${l.slug}`} className="flex items-center gap-2 font-medium hover:underline">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logoUrlFor(l)} alt="" width={24} height={24} loading="lazy" className="size-6 rounded border bg-white object-contain p-0.5" />
                  {l.name}
                </Link>
              </td>
              <td className="p-3">{l.hasFreeTier ? <Check className="size-4 text-emerald-600" /> : <X className="size-4 text-muted-foreground" />}</td>
              <td className="p-3 text-muted-foreground">{l.pricingText ?? '—'}</td>
              <td className="p-3 text-muted-foreground">{l.bestFor ?? '—'}</td>
              <td className="p-3"><VisitButton id={l.id} name={l.name} label="Visit" size="sm" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function AlternativesPage({ params }: { params: { slug: string } }) {
  const data = await getAlternatives(params.slug, { limit: 8 })
  if (!data || data.alternatives.length < MIN_ALTERNATIVES) notFound() // quality gate

  const { listing, alternatives } = data
  const free = alternatives.filter((a) => a.hasFreeTier)
  const top = alternatives[0]
  const topFree = free[0]

  const faqs: Faq[] = [
    { q: `What is the best alternative to ${listing.name}?`, a: `${top.name} — ${top.bestFor ?? top.tagline ?? 'the closest match on capability and value.'}` },
    { q: `Is there a free alternative to ${listing.name}?`, a: topFree ? `Yes. ${topFree.name} offers a free tier and is the best free ${listing.name} alternative for most people.` : `Most strong ${listing.name} alternatives are paid, but several offer free trials — check each tool's pricing.` },
    { q: `Why switch from ${listing.name}?`, a: `${listing.notFor ? `${listing.name} is not ideal when: ${listing.notFor} ` : ''}The options below may fit your budget, free-tier needs, or workflow better.` },
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          ...(listing.category ? [{ name: listing.category.name, path: `/category/${listing.category.slug}` }] : []),
          { name: listing.name, path: `/${listing.slug}` },
          { name: 'Alternatives', path: `/${listing.slug}/alternatives` },
        ]),
        itemListLd(alternatives, `${listing.name} alternatives`),
      ]} />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/${listing.slug}`} className="hover:text-foreground">{listing.name}</Link> /{' '}
        <span className="text-foreground">Alternatives</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{alternatives.length} Best {listing.name} Alternatives (2026)</h1>
      <AnswerCapsule>
        The best {listing.name} alternative is <strong>{top.name}</strong>
        {top.bestFor ? ` — ${top.bestFor.replace(/\.$/, '')}.` : '.'}{' '}
        {topFree ? <>For a free option, <strong>{topFree.name}</strong> is the best free {listing.name} alternative.</> : null}{' '}
        All {alternatives.length} alternatives are compared below on price, free tier, and fit.
      </AnswerCapsule>

      <AltTable rows={alternatives} />

      {free.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Free alternatives to {listing.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {free.length} {listing.name} alternative{free.length === 1 ? '' : 's'} with a free tier: {free.map((f) => f.name).join(', ')}.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {free.map((f) => (
              <Link key={f.id} href={`/${f.slug}`}><Badge variant="success">{f.name}</Badge></Link>
            ))}
          </div>
        </section>
      )}

      <FaqSection faqs={faqs} />
    </div>
  )
}
