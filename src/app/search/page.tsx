import Link from 'next/link'
import type { Metadata } from 'next'
import { Search as SearchIcon } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { ListingCard } from '@/components/listing-card'
import { ListingFilters } from '@/components/listing-filters'
import { Button } from '@/components/ui/button'
import { CATEGORIES } from '@/data/categories'
import { getListings, type ListingSort } from '@/lib/db/queries'
import { buildMetadata } from '@/lib/seo'
import { cn } from '@/lib/utils'

export const dynamic = 'force-dynamic'

type SearchParams = { q?: string; sort?: string; free?: string; tag?: string; category?: string }

export function generateMetadata({ searchParams }: { searchParams: SearchParams }): Metadata {
  const q = searchParams.q?.trim()
  return buildMetadata({
    title: q ? `Search: ${q}` : 'Search AI tools',
    description: 'Search and filter the full directory of AI tools by name, task, and tag.',
    path: '/search',
    noindex: true,
  })
}

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const q = searchParams.q?.trim() ?? ''
  const category = searchParams.category
  const listings = await getListings({
    search: q,
    categorySlug: category,
    sort: (searchParams.sort as ListingSort) ?? 'featured',
    hasFreeTier: searchParams.free === '1',
    tag: searchParams.tag,
    limit: 120,
  })

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold tracking-tight">Search AI tools</h1>

      <form action="/search" className="mt-4 flex max-w-2xl gap-2">
        <div className="relative flex-1">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            name="q"
            defaultValue={q}
            placeholder="Search by name or task…"
            className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        {category && <input type="hidden" name="category" value={category} />}
        <Button type="submit">Search</Button>
      </form>

      {/* Category quick filters */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Link
          href={q ? `/search?q=${encodeURIComponent(q)}` : '/search'}
          className={cn(
            'rounded-full border px-3 py-1 text-sm',
            !category ? 'border-primary bg-accent text-accent-foreground' : 'hover:bg-accent',
          )}
        >
          All
        </Link>
        {CATEGORIES.map((c) => {
          const params = new URLSearchParams()
          if (q) params.set('q', q)
          params.set('category', c.slug)
          return (
            <Link
              key={c.slug}
              href={`/search?${params.toString()}`}
              className={cn(
                'rounded-full border px-3 py-1 text-sm',
                category === c.slug ? 'border-primary bg-accent text-accent-foreground' : 'hover:bg-accent',
              )}
            >
              {c.name}
            </Link>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <ListingFilters />
        <span className="shrink-0 text-sm text-muted-foreground">
          {listings.length} result{listings.length === 1 ? '' : 's'}
          {q ? ` for “${q}”` : ''}
        </span>
      </div>

      <div className="mt-6">
        {listings.length === 0 ? (
          <EmptyState message={q ? `No tools match “${q}”.` : 'Start typing to search.'} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listings.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
