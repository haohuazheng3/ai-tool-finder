import type { MetadataRoute } from 'next'
import { CATEGORY_SLUGS } from '@/data/categories'
import { getCategories, getAllListingSlugs, getComparePairs } from '@/lib/db/queries'
import {
  getCompareTrios,
  getQualifyingPersonaPairs,
  getSlugsWithAlternatives,
} from '@/lib/db/seo-queries'
import { STACK_SLUGS } from '@/data/stacks'
import { GUIDE_SLUGS } from '@/data/guides'
import { env } from '@/lib/env'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.appUrl
  const now = new Date()

  const [listingSlugs, comparePairs, categories, personaPairs, altSlugs, trios] = await Promise.all([
    getAllListingSlugs(),
    getComparePairs(4),
    getCategories(),
    getQualifyingPersonaPairs(),
    getSlugsWithAlternatives(),
    getCompareTrios(4),
  ])
  const catSlugs = categories.length ? categories.map((c) => c.slug) : CATEGORY_SLUGS

  const e = (url: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) => ({
    url, lastModified: now, changeFrequency, priority,
  })

  return [
    e(base, 1, 'daily'),
    e(`${base}/match`, 0.8, 'monthly'),
    e(`${base}/stacks`, 0.7, 'weekly'),
    e(`${base}/guides`, 0.6, 'weekly'),
    e(`${base}/ai-tools-pricing-report`, 0.8, 'weekly'),
    e(`${base}/updates`, 0.6, 'daily'),
    e(`${base}/about`, 0.4, 'monthly'),
    e(`${base}/contact`, 0.3, 'monthly'),
    // /search is noindex (internal search results) — intentionally excluded from the sitemap.
    e(`${base}/advertise`, 0.5, 'monthly'),
    e(`${base}/submit`, 0.4, 'monthly'),
    ...catSlugs.flatMap((s) => [
      e(`${base}/category/${s}`, 0.8, 'daily'),
      e(`${base}/best/${s}`, 0.9, 'weekly'),
      e(`${base}/best/${s}/free`, 0.9, 'weekly'),
      e(`${base}/best/${s}/cheapest`, 0.8, 'weekly'),
    ]),
    ...personaPairs.map((p) => e(`${base}/best/${p.task}/for/${p.persona}`, 0.8, 'weekly')),
    ...listingSlugs.map((s) => e(`${base}/${s}`, 0.7, 'weekly')),
    ...altSlugs.map((s) => e(`${base}/${s}/alternatives`, 0.8, 'weekly')),
    ...trios.map((s) => e(`${base}/compare/${s}`, 0.6, 'monthly')),
    ...comparePairs.map((s) => e(`${base}/${s}`, 0.6, 'monthly')),
    ...STACK_SLUGS.map((s) => e(`${base}/stacks/${s}`, 0.7, 'weekly')),
    ...GUIDE_SLUGS.map((s) => e(`${base}/guides/${s}`, 0.7, 'weekly')),
  ]
}
