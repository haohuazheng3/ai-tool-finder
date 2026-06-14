import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { VisitButton } from '@/components/visit-button'
import { isActivelyFeatured } from '@/lib/featured'
import { logoUrlFor } from '@/lib/utils'
import type { ListingWithCategory } from '@/lib/db/schema'

export function ListingCard({
  listing,
  rank,
  showCategory = true,
}: {
  listing: ListingWithCategory
  rank?: number
  showCategory?: boolean
}) {
  const featured = isActivelyFeatured(listing)
  return (
    <Card
      className={
        'relative flex h-full flex-col gap-4 p-5 transition-shadow hover:shadow-md ' +
        (featured ? 'ring-1 ring-amber-300/70' : '')
      }
    >
      {featured && (
        <Badge variant="sponsored" className="absolute right-3 top-3 gap-1">
          <Sparkles className="size-3" /> Sponsored
        </Badge>
      )}

      <div className="flex items-start gap-3 pr-20">
        {typeof rank === 'number' && (
          <span className="mt-1 text-sm font-bold tabular-nums text-muted-foreground">{rank}.</span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrlFor(listing)}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          className="size-10 shrink-0 rounded-lg border bg-white object-contain p-1"
        />
        <div className="min-w-0">
          <Link href={`/${listing.slug}`} className="font-semibold leading-tight hover:underline">
            {listing.name}
          </Link>
          {showCategory && listing.category && (
            <div className="text-xs text-muted-foreground">{listing.category.name}</div>
          )}
        </div>
      </div>

      {listing.tagline && (
        <p className="line-clamp-2 text-sm text-muted-foreground">{listing.tagline}</p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {listing.hasFreeTier && <Badge variant="success">Free tier</Badge>}
        {listing.useCases.slice(0, 2).map((u) => (
          <Badge key={u} variant="muted">
            {u}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-1">
        <span className="line-clamp-1 text-xs text-muted-foreground">
          {listing.pricingText ?? 'See pricing'}
        </span>
        <VisitButton id={listing.id} name={listing.name} label="Visit" size="sm" />
      </div>
    </Card>
  )
}
