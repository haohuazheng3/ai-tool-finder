import type { Hero } from '@/data/hero-images'

/** Pexels hero band for pillar/guide pages. Attribution shown per Pexels license. */
export function HeroImage({ hero }: { hero?: Hero }) {
  if (!hero) return null
  return (
    <figure className="mt-4 overflow-hidden rounded-xl border bg-muted">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hero.url}
        alt={hero.alt}
        width={1200}
        height={400}
        loading="eager"
        className="h-40 w-full object-cover sm:h-52"
      />
      <figcaption className="px-3 py-1.5 text-right text-[11px] text-muted-foreground">
        Photo:{' '}
        <a href={hero.creditUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">
          {hero.credit}
        </a>{' '}
        / Pexels
      </figcaption>
    </figure>
  )
}
