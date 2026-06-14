import type { Metadata } from 'next'
import { CheckCircle2, TriangleAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CATEGORIES } from '@/data/categories'
import { isClerkConfigured } from '@/lib/env'
import { buildMetadata } from '@/lib/seo'
import { submitListing } from './actions'

export const dynamic = 'force-dynamic'

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Submit or claim an AI tool',
    description: 'Add your AI tool to the directory, or claim an existing listing. Reviewed before going live.',
    path: '/submit',
  })
}

const inputBase = 'mt-1'

export default function SubmitPage({
  searchParams,
}: {
  searchParams: { ok?: string; error?: string }
}) {
  return (
    <div className="container max-w-2xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Submit an AI tool</h1>
      <p className="mt-2 text-muted-foreground">
        Add a tool to the directory or claim an existing listing. Submissions are reviewed before
        they go live.
      </p>

      {!isClerkConfigured() && (
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" />
          <span>
            Login is disabled because Clerk isn’t configured — submissions are accepted anonymously
            in this environment.
          </span>
        </div>
      )}

      {searchParams.ok && (
        <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
          <CheckCircle2 className="size-4" /> Thanks! Your submission is in review.
        </div>
      )}
      {searchParams.error && (
        <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">
          {searchParams.error === 'db'
            ? 'The database isn’t configured, so submissions can’t be saved yet.'
            : 'Please check the required fields (name and a valid website URL).'}
        </div>
      )}

      <Card className="mt-8 p-6">
        <form action={submitListing} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Tool name *</Label>
              <Input id="name" name="name" required placeholder="Jasper" className={inputBase} />
            </div>
            <div>
              <Label htmlFor="websiteUrl">Website URL *</Label>
              <Input
                id="websiteUrl"
                name="websiteUrl"
                type="url"
                required
                placeholder="https://example.com"
                className={inputBase}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              name="tagline"
              placeholder="One-line description of what it does"
              className={inputBase}
            />
          </div>

          <div>
            <Label htmlFor="categorySlug">Category</Label>
            <select
              id="categorySlug"
              name="categorySlug"
              className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue=""
            >
              <option value="" disabled>
                Select a task category…
              </option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows={4}
              placeholder="What does it do, and who is it for? Markdown supported."
              className={inputBase}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="pricingText">Pricing</Label>
              <Input
                id="pricingText"
                name="pricingText"
                placeholder="Free tier; Pro from $20/mo"
                className={inputBase}
              />
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="hasFreeTier" className="size-4 rounded border-input" />
                Has a free tier
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="useCases">Use cases</Label>
            <Input
              id="useCases"
              name="useCases"
              placeholder="Blog drafting, Ad copy, SEO articles (comma-separated)"
              className={inputBase}
            />
          </div>

          <div>
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              name="tags"
              placeholder="copywriting, marketing, seo (comma-separated)"
              className={inputBase}
            />
          </div>

          <Button type="submit" size="lg">
            Submit for review
          </Button>
        </form>
      </Card>
    </div>
  )
}
