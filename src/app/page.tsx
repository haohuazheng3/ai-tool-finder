import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CategoryGrid } from '@/components/category-grid'
import { HeroSearch } from '@/components/hero-search'
import { ListingCard } from '@/components/listing-card'
import { Badge } from '@/components/ui/badge'
import { CATEGORIES } from '@/data/categories'
import {
  getCategoriesWithCounts,
  getFeaturedListings,
  getLatestListings,
} from '@/lib/db/queries'

// Listing data is refreshed daily (ISR).
export const revalidate = 86400

export default async function HomePage() {
  const [featured, latest, categories] = await Promise.all([
    getFeaturedListings(6),
    getLatestListings(8),
    getCategoriesWithCounts(),
  ])

  // Fall back to the static category list so the page is useful even pre-seed.
  const categoryItems = categories.length ? categories : CATEGORIES

  return (
    <>
      {/* Hero */}
      <section className="hero-grid border-b">
        <div className="container flex flex-col items-center gap-6 py-20 text-center">
          <Badge variant="secondary" className="gap-1.5">
            <Sparkles className="size-3.5" /> {latest.length || 140}+ AI tools, organized by task
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Find the right AI tool for the job
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Stop scrolling endless A–Z lists. Browse by what you actually want to get done — with
            honest “best for / not for” guidance and side-by-side comparisons.
          </p>
          <HeroSearch />
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="container py-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured tools</h2>
              <p className="text-sm text-muted-foreground">Sponsored placements from tools we partner with.</p>
            </div>
            <Link href="/advertise" className="text-sm font-medium text-primary hover:underline">
              Get featured →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      <section id="categories" className="container scroll-mt-20 py-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Browse by task</h2>
          <p className="text-sm text-muted-foreground">
            Pick the job you’re hiring an AI tool to do.
          </p>
        </div>
        <CategoryGrid categories={categoryItems} />
      </section>

      {/* Latest */}
      {latest.length > 0 && (
        <section className="container py-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Latest additions</h2>
            <Link href="/search?sort=newest" className="text-sm font-medium text-primary hover:underline">
              See all <ArrowRight className="inline size-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {latest.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
