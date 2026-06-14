import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Sparkles } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { JsonLd } from '@/components/json-ld'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { VisitButton } from '@/components/visit-button'
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { getCategoryBySlug, getListings } from '@/lib/db/queries'
import { isActivelyFeatured } from '@/lib/featured'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'
import { logoUrlFor } from '@/lib/utils'

export const revalidate = 86400

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((task) => ({ task }))
}

function staticCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null
}

function headlineFor(slug: string, name: string) {
  return staticCategory(slug)?.bestHeadline ?? `Best ${name} Tools`
}

export async function generateMetadata({
  params,
}: {
  params: { task: string }
}): Promise<Metadata> {
  const category = (await getCategoryBySlug(params.task)) ?? staticCategory(params.task)
  if (!category) return {}
  const headline = headlineFor(params.task, category.name)
  return buildMetadata({
    title: `${headline} (2026)`,
    description: `Our ranked picks of the ${headline.toLowerCase()} in 2026, with why each one wins and who it's best for.`,
    path: `/best/${params.task}`,
    ogSubtitle: 'Ranked picks with honest guidance',
  })
}

export default async function BestPage({ params }: { params: { task: string } }) {
  const category = (await getCategoryBySlug(params.task)) ?? staticCategory(params.task)
  if (!category) notFound()

  const headline = headlineFor(params.task, category.name)
  const listings = await getListings({ categorySlug: params.task, sort: 'featured', limit: 12 })

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: headline, path: `/best/${params.task}` },
          ]),
          itemListLd(listings, headline),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/category/${params.task}`} className="hover:text-foreground">{category.name}</Link> /{' '}
        <span className="text-foreground">Best</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline} (2026)</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        We ranked {listings.length || 'the top'} {category.name.toLowerCase()} tools by capability,
        value, and fit. Sponsored partners are marked — ranking still reflects what each tool is
        genuinely best at.
      </p>

      {listings.length === 0 ? (
        <div className="mt-8">
          <EmptyState message={`No ${category.name} tools yet.`} />
        </div>
      ) : (
        <ol className="mt-8 space-y-4">
          {listings.map((l, i) => (
            <li key={l.id}>
              <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2">
                  <span className="text-2xl font-bold tabular-nums text-muted-foreground">#{i + 1}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrlFor(l)}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12 rounded-lg border bg-white object-contain p-1.5"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href={`/${l.slug}`} className="text-lg font-semibold hover:underline">
                      {l.name}
                    </Link>
                    {isActivelyFeatured(l) && (
                      <Badge variant="sponsored" className="gap-1">
                        <Sparkles className="size-3" /> Sponsored
                      </Badge>
                    )}
                    {l.hasFreeTier && <Badge variant="success">Free tier</Badge>}
                  </div>
                  {l.tagline && <p className="mt-0.5 text-muted-foreground">{l.tagline}</p>}
                  {l.bestFor && (
                    <p className="mt-2 text-sm">
                      <span className="font-medium text-foreground">Best for: </span>
                      <span className="text-muted-foreground">{l.bestFor}</span>
                    </p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">{l.pricingText}</p>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                  <VisitButton id={l.id} name={l.name} label="Visit" size="sm" />
                  <Link href={`/${l.slug}`} className="text-center text-xs text-muted-foreground hover:text-foreground">
                    Read more
                  </Link>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
