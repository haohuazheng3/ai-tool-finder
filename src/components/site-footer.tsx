import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { getCategories } from '@/lib/db/queries'
import { CATEGORIES } from '@/data/categories'

export async function SiteFooter() {
  const dbCategories = await getCategories()
  // Fall back to the static category list when the DB isn't populated yet.
  const cats = (dbCategories.length ? dbCategories : CATEGORIES).slice(0, 8)

  return (
    <footer className="mt-20 border-t bg-muted/30">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Sparkles className="size-3.5" />
            </span>
            {SITE.name}
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{SITE.tagline}.</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Browse by task</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="hover:text-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Best-of guides</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {cats.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/best/${c.slug}`} className="hover:text-foreground">
                  {('bestHeadline' in c && c.bestHeadline) || `Best ${c.name}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Directory</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/search" className="hover:text-foreground">All AI tools</Link></li>
            <li><Link href="/ai-tools-pricing-report" className="hover:text-foreground">AI pricing index</Link></li>
            <li><Link href="/updates" className="hover:text-foreground">Updates</Link></li>
            <li><Link href="/submit" className="hover:text-foreground">Submit a tool</Link></li>
            <li><Link href="/advertise" className="hover:text-foreground">Get featured</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All trademarks belong to their owners.
          </p>
          <p>
            Some links are affiliate links — we may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
