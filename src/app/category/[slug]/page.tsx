import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Trophy } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { JsonLd } from '@/components/json-ld'
import { ListingCard } from '@/components/listing-card'
import { ListingFilters } from '@/components/listing-filters'
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { getCategoryBySlug, getListings, type ListingSort } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'

export const revalidate = 86400

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }))
}

function staticCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const category = (await getCategoryBySlug(params.slug)) ?? staticCategory(params.slug)
  if (!category) return {}
  return buildMetadata({
    title: `${category.name} Tools`,
    description:
      category.description ??
      `Browse the best ${category.name} tools, compared by pricing, free tiers, and use cases.`,
    path: `/category/${params.slug}`,
    ogSubtitle: 'Compare tools by pricing, free tiers & use cases',
  })
}

type SearchParams = { sort?: string; free?: string; tag?: string }

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: SearchParams
}) {
  const category = (await getCategoryBySlug(params.slug)) ?? staticCategory(params.slug)
  if (!category) notFound()

  const sort = (searchParams.sort as ListingSort) ?? 'featured'
  const listings = await getListings({
    categorySlug: params.slug,
    sort,
    hasFreeTier: searchParams.free === '1',
    tag: searchParams.tag,
  })

  // Build a tag filter list from the (unfiltered) category set.
  const allInCategory = await getListings({ categorySlug: params.slug, limit: 100 })
  const tags = Array.from(new Set(allInCategory.flatMap((l) => l.tags)))
    .sort()
    .slice(0, 20)

  return (
    <div className="container py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: category.name, path: `/category/${params.slug}` },
          ]),
          itemListLd(listings, `${category.name} tools`),
        ]}
      />

      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{' '}
        / <span className="text-foreground">{category.name}</span>
      </nav>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{category.name} Tools</h1>
          {category.description && (
            <p className="mt-1 max-w-2xl text-muted-foreground">{category.description}</p>
          )}
        </div>
        <Link
          href={`/best/${params.slug}`}
          className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent"
        >
          <Trophy className="size-4 text-amber-500" /> See the top picks
        </Link>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <ListingFilters tags={tags} />
        <span className="shrink-0 text-sm text-muted-foreground">{listings.length} tools</span>
      </div>

      {listings.length === 0 ? (
        <EmptyState message={`No ${category.name} tools match your filters.`} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} showCategory={false} />
          ))}
        </div>
      )}
    </div>
  )
}
