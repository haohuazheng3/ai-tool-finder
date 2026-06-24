import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, CalendarClock } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { Markdown } from '@/components/markdown'
import { Card } from '@/components/ui/card'
import { GUIDES, GUIDE_SLUGS, getGuide } from '@/data/guides'
import { formatDate } from '@/lib/utils'
import { articleLd, breadcrumbLd, buildMetadata } from '@/lib/seo'
import { SITE } from '@/lib/constants'
import { HeroImage } from '@/components/hero-image'
import { HERO_IMAGES } from '@/data/hero-images'

export const revalidate = 86400

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const g = getGuide(params.slug)
  if (!g) return {}
  return buildMetadata({
    title: g.title,
    description: g.description,
    path: `/guides/${g.slug}`,
    ogSubtitle: g.tag,
  })
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug)
  if (!g) notFound()
  const related = GUIDES.filter((x) => x.slug !== g.slug).slice(0, 3)

  return (
    <article className="container max-w-3xl py-10">
      <JsonLd data={[
        breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: g.title, path: `/guides/${g.slug}` },
        ]),
        articleLd({
          title: g.title,
          description: g.description,
          path: `/guides/${g.slug}`,
          datePublished: g.publishedAt,
          dateModified: g.updatedAt,
        }),
      ]} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/guides" className="hover:text-foreground">Guides</Link> /{' '}
        <span className="text-foreground">{g.tag}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{g.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{g.dek}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-y py-3 text-sm text-muted-foreground">
        <span>By <span className="font-medium text-foreground">{SITE.name} Editorial</span></span>
        <span className="flex items-center gap-1.5"><CalendarClock className="size-3.5" /> Updated {formatDate(g.updatedAt)}</span>
        <span>{g.readMins} min read</span>
      </div>

      <HeroImage hero={HERO_IMAGES['g:' + g.slug]} />

      <div className="mt-6">
        <Markdown>{g.bodyMd}</Markdown>
      </div>

      {/* CTA */}
      <Card className="mt-10 flex flex-col items-start gap-3 bg-accent/40 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold">Not sure which tool fits you?</div>
          <p className="text-sm text-muted-foreground">Answer 3 questions and get an honest shortlist — downsides shown up front.</p>
        </div>
        <Link href="/match" className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Find my tool <ArrowRight className="size-4" />
        </Link>
      </Card>

      {/* Related */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Keep reading</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} href={`/guides/${r.slug}`} className="rounded-lg border p-4 text-sm font-medium hover:bg-accent">
              {r.title}
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
