import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { Badge } from '@/components/ui/badge'
import { VisitButton } from '@/components/visit-button'
import { getCompareTrios, getTrioListings, parseTrioSlug, trioSlug } from '@/lib/db/seo-queries'
import type { ListingWithCategory } from '@/lib/db/schema'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'
import { logoUrlFor } from '@/lib/utils'

export const revalidate = 86400

export async function generateStaticParams() {
  const trios = await getCompareTrios(4)
  return trios.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const parsed = parseTrioSlug(params.slug)
  if (!parsed) return {}
  const tools = await getTrioListings(...parsed)
  if (!tools) return {}
  const [a, b, c] = tools
  return buildMetadata({
    title: `${a.name} vs ${b.name} vs ${c.name}: Which Wins? (2026)`,
    description: `${a.name} vs ${b.name} vs ${c.name} compared side by side on pricing, free tiers, features, and who each is best for.`,
    path: `/compare/${trioSlug(a.slug, b.slug, c.slug)}`,
    ogSubtitle: '3-way comparison',
  })
}

const ROWS: { label: string; render: (l: ListingWithCategory) => React.ReactNode }[] = [
  { label: 'Tagline', render: (l) => l.tagline ?? '—' },
  { label: 'Pricing', render: (l) => l.pricingText ?? '—' },
  { label: 'Free tier', render: (l) => (l.hasFreeTier ? <Check className="size-5 text-emerald-600" /> : <X className="size-5 text-muted-foreground" />) },
  { label: 'Best for', render: (l) => l.bestFor ?? '—' },
  { label: 'Not for', render: (l) => l.notFor ?? '—' },
]

export default async function ComparePage({ params }: { params: { slug: string } }) {
  const parsed = parseTrioSlug(params.slug)
  if (!parsed) notFound()
  const tools = await getTrioListings(...parsed)
  if (!tools) notFound()

  const canonical = trioSlug(tools[0].slug, tools[1].slug, tools[2].slug)
  if (params.slug !== canonical) redirect(`/compare/${canonical}`)

  const [a, b, c] = tools
  const title = `${a.name} vs ${b.name} vs ${c.name}`

  const faqs: Faq[] = [
    { q: `${a.name} vs ${b.name} vs ${c.name} — which is best?`, a: `It depends on fit: ${a.name} — ${a.bestFor ?? a.tagline}; ${b.name} — ${b.bestFor ?? b.tagline}; ${c.name} — ${c.bestFor ?? c.tagline}.` },
    { q: `Which of ${a.name}, ${b.name}, or ${c.name} is free?`, a: tools.filter((t) => t.hasFreeTier).length ? `${tools.filter((t) => t.hasFreeTier).map((t) => t.name).join(', ')} offer a free tier.` : `None offer a permanent free tier — check each for trials.` },
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={[
        breadcrumbLd([{ name: 'Home', path: '/' }, { name: title, path: `/compare/${canonical}` }]),
        itemListLd(tools, title),
      ]} />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span className="text-foreground">Compare</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <AnswerCapsule>
        Bottom line: pick <strong>{a.name}</strong> if {(a.bestFor ?? a.tagline ?? '').toLowerCase()}; <strong>{b.name}</strong> if {(b.bestFor ?? b.tagline ?? '').toLowerCase()}; <strong>{c.name}</strong> if {(c.bestFor ?? c.tagline ?? '').toLowerCase()}.
      </AnswerCapsule>

      <div className="mt-8 overflow-x-auto rounded-xl border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="w-28 p-4" />
              {tools.map((l) => (
                <th key={l.id} className="p-4 text-left align-bottom">
                  <Link href={`/${l.slug}`} className="flex items-center gap-2 font-semibold hover:underline">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logoUrlFor(l)} alt="" width={28} height={28} loading="lazy" className="size-7 rounded border bg-white object-contain p-0.5" />
                    {l.name}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-b align-top last:border-0">
                <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
                {tools.map((l) => <td key={l.id} className="p-4">{row.render(l)}</td>)}
              </tr>
            ))}
            <tr>
              <td className="p-4" />
              {tools.map((l) => <td key={l.id} className="p-4"><VisitButton id={l.id} name={l.name} size="sm" /></td>)}
            </tr>
          </tbody>
        </table>
      </div>

      <FaqSection faqs={faqs} />
    </div>
  )
}
