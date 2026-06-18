import Link from 'next/link'
import type { Metadata } from 'next'
import { AnswerCapsule } from '@/components/answer-capsule'
import { FaqSection, type Faq } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { ToolMatcher, type MatchTool } from '@/components/tool-matcher'
import { CATEGORIES } from '@/data/categories'
import { getCategories, getListings } from '@/lib/db/queries'
import { isActivelyFeatured } from '@/lib/featured'
import { startingPrice } from '@/lib/pricing'
import { absoluteUrl } from '@/lib/env'
import { SITE } from '@/lib/constants'
import { breadcrumbLd, buildMetadata, faqPageLd } from '@/lib/seo'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Find the Right AI Tool (Free 60-Second Picker)',
    description:
      'Answer 3 questions — task, budget, and what matters most — and get the AI tools that actually fit, with the honest downsides shown up front. No login, no fluff.',
    path: '/match',
    ogSubtitle: 'Answer 3 questions, get an honest shortlist',
  })
}

const faqs: Faq[] = [
  { q: 'How does the AI tool finder work?', a: 'You pick your task, your budget, and what matters most (cheapest, most capable, easiest for beginners, or best for teams). We filter our catalog of curated AI tools and return the best 2–3 fits — each with its real starting price and the honest "watch out" so you know the catch before you click.' },
  { q: 'Is it free?', a: 'Yes — the picker is completely free and needs no account. Many of the tools it recommends also have free tiers, which you can filter for directly.' },
  { q: 'Are the recommendations biased by advertising?', a: 'No. Some tools pay for "Featured" placement (always labeled as Sponsored on their own pages), but the picker never reorders results by payment — it ranks purely on your answers.' },
  { q: 'What if nothing matches my budget?', a: 'Widen the budget filter, or switch the priority to "cheapest". If a category has no free option, the picker tells you the lowest paid entry price instead.' },
]

export default async function MatchPage() {
  const all = await getListings({ limit: 1000, sort: 'featured' })
  const tools: MatchTool[] = all.map((l) => ({
    id: l.id,
    slug: l.slug,
    name: l.name,
    category: l.category?.slug ?? '',
    categoryName: l.category?.name ?? '',
    free: l.hasFreeTier,
    price: startingPrice(l.pricingText),
    pricingText: l.pricingText ?? '',
    bestFor: l.bestFor ?? '',
    notFor: l.notFor ?? '',
    text: [l.bestFor ?? '', l.tagline ?? '', l.useCases.join(' '), l.tags.join(' ')].join(' ').toLowerCase(),
    featured: isActivelyFeatured(l),
    featuredRank: l.featuredRank,
  }))

  const dbCats = await getCategories()
  const categories = (dbCats.length ? dbCats : CATEGORIES).map((c) => ({ slug: c.slug, name: c.name }))

  return (
    <div className="container max-w-3xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Find your AI tool', path: '/match' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: `${SITE.name} — AI Tool Picker`,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: absoluteUrl('/match'),
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          },
          faqPageLd(faqs),
        ]}
      />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Find your AI tool</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Find the right AI tool for your task</h1>
      <AnswerCapsule>
        Answer three quick questions — <strong>task, budget, and what matters most</strong> — and get the
        2–3 AI tools that actually fit, each with its real price and the <strong>honest downside shown up front</strong>.
        No endless listicles, no login, and results are never reordered by who paid.
      </AnswerCapsule>

      <div className="mt-6">
        <ToolMatcher tools={tools} categories={categories} />
      </div>

      {/* Static, indexable supporting content */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Why this picker is different</h2>
        <p className="mt-2 text-muted-foreground">
          Most "best AI tools" lists are affiliate roundups that only tell you what each tool is good at.
          We store the opposite too: what every tool is <em>not</em> for, its real free-tier status, and its
          starting price — so the picker can warn you about the catch instead of hiding it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Browse the ranked guides instead</h2>
        <p className="mt-1 text-sm text-muted-foreground">Prefer a full ranked list? Jump straight to a category:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link key={c.slug} href={`/best/${c.slug}`} className="rounded-full border px-3 py-1 text-sm hover:bg-accent">
              {c.name.replace(/^AI /, '')}
            </Link>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </div>
  )
}
