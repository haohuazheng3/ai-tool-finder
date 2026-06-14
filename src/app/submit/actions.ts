'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import { getAuthUserId } from '@/lib/auth'
import { db } from '@/lib/db'
import { submissions } from '@/lib/db/schema'
import { isDatabaseConfigured } from '@/lib/env'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  websiteUrl: z.string().url('A valid website URL is required'),
  tagline: z.string().optional(),
  descriptionMd: z.string().optional(),
  categorySlug: z.string().optional(),
  pricingText: z.string().optional(),
  hasFreeTier: z.boolean().optional(),
  useCases: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
})

function field(form: FormData, key: string): string | undefined {
  const v = form.get(key)
  const s = v == null ? '' : String(v).trim()
  return s || undefined
}

function list(form: FormData, key: string): string[] {
  const v = form.get(key)
  if (!v) return []
  return String(v)
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean)
}

/** Public submission/claim handler. Records a pending submission for /admin review. */
export async function submitListing(formData: FormData) {
  if (!isDatabaseConfigured()) redirect('/submit?error=db')

  const parsed = schema.safeParse({
    name: field(formData, 'name') ?? '',
    websiteUrl: field(formData, 'websiteUrl') ?? '',
    tagline: field(formData, 'tagline'),
    descriptionMd: field(formData, 'description'),
    categorySlug: field(formData, 'categorySlug'),
    pricingText: field(formData, 'pricingText'),
    hasFreeTier: formData.get('hasFreeTier') === 'on',
    useCases: list(formData, 'useCases'),
    tags: list(formData, 'tags'),
  })

  if (!parsed.success) redirect('/submit?error=validation')

  const userId = await getAuthUserId()
  await db.insert(submissions).values({
    payload: parsed.data,
    submitterUserId: userId,
    status: 'pending',
  })

  redirect('/submit?ok=1')
}
