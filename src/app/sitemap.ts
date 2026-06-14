import type { MetadataRoute } from 'next'
import { CATEGORY_SLUGS } from '@/data/categories'
import { getCategories, getAllListingSlugs, getComparePairs } from '@/lib/db/queries'
import { env } from '@/lib/env'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.appUrl
  const now = new Date()

  const [listingSlugs, comparePairs, categories] = await Promise.all([
    getAllListingSlugs(),
    getComparePairs(4),
    getCategories(),
  ])
  const catSlugs = categories.length ? categories.map((c) => c.slug) : CATEGORY_SLUGS

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/search`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${base}/advertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]

  const categoryPages: MetadataRoute.Sitemap = catSlugs.flatMap((slug) => [
    { url: `${base}/category/${slug}`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/best/${slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ])

  const listingPages: MetadataRoute.Sitemap = listingSlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const comparePages: MetadataRoute.Sitemap = comparePairs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...listingPages, ...comparePages]
}
