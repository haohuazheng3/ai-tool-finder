import Link from 'next/link'
import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GUIDES } from '@/data/guides'
import { formatDate } from '@/lib/utils'
import { breadcrumbLd, buildMetadata } from '@/lib/seo'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'AI Tool Guides: Honest, Data-Backed Advice',
    description:
      'Opinionated, data-backed guides to choosing AI tools — what "free" really means, how to choose without the hype, why "best of" lists fail, and your real cost per outcome.',
    path: '/guides',
    ogSubtitle: 'Honest, data-backed advice',
  })
}

export default function GuidesIndex() {
  return (
    <div className="container max-w-4xl py-10">
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
      ])} />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Guides</span>
      </nav>

      <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
        <BookOpen className="size-7 text-primary" /> AI tool guides
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Opinionated, data-backed guides written by our editorial team — the things affiliate roundups
        leave out: real free-tier limits, honest cons, and what you’ll actually pay.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <Card key={g.slug} className="flex flex-col p-5">
            <Badge variant="muted" className="w-fit">{g.tag}</Badge>
            <Link href={`/guides/${g.slug}`} className="mt-3 text-lg font-semibold leading-snug hover:underline">
              {g.title}
            </Link>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{g.dek}</p>
            <div className="mt-3 text-xs text-muted-foreground">
              {formatDate(g.updatedAt)} · {g.readMins} min read
            </div>
            <Link href={`/guides/${g.slug}`} className="mt-3 text-sm font-medium text-primary hover:underline">
              Read guide →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
