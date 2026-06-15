import Link from 'next/link'
import type { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getRecentlyAdded } from '@/lib/db/seo-queries'
import { buildMetadata } from '@/lib/seo'
import { formatDate, logoUrlFor } from '@/lib/utils'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Updates — Newest AI Tools & Changes',
    description: 'A running log of the newest AI tools added to the directory and recent changes, refreshed weekly.',
    path: '/updates',
  })
}

export default async function UpdatesPage() {
  const tools = await getRecentlyAdded(40)
  return (
    <div className="container max-w-3xl py-10">
      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span className="text-foreground">Updates</span>
      </nav>
      <h1 className="text-3xl font-bold tracking-tight">Updates &amp; newest AI tools</h1>
      <p className="mt-2 text-muted-foreground">
        The latest tools added to the directory. We re-crawl sources and refresh pricing weekly — last refresh {formatDate(tools[0]?.lastCheckedAt ?? new Date())}.
      </p>
      <div className="mt-6 space-y-3">
        {tools.map((l) => (
          <Card key={l.id} className="flex items-center gap-3 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoUrlFor(l)} alt="" width={32} height={32} loading="lazy" className="size-8 rounded-lg border bg-white object-contain p-1" />
            <div className="min-w-0 flex-1">
              <Link href={`/${l.slug}`} className="font-medium hover:underline">{l.name}</Link>
              {l.category && <span className="ml-2 text-xs text-muted-foreground">{l.category.name}</span>}
              {l.tagline && <p className="truncate text-sm text-muted-foreground">{l.tagline}</p>}
            </div>
            <div className="shrink-0 text-right text-xs text-muted-foreground">
              <Badge variant="muted">Added</Badge>
              <div className="mt-1">{formatDate(l.createdAt)}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
