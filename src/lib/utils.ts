import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Extract a bare hostname (sans www) from a URL, safely. */
export function domainFromUrl(url?: string | null): string {
  if (!url) return ''
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

/** A reliable favicon/logo source derived from the tool's domain. */
export function faviconUrl(url?: string | null, size = 64): string {
  const domain = domainFromUrl(url)
  if (!domain) return ''
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

/** Prefer a stored logo, else derive one from the domain. */
export function logoUrlFor(
  listing: { logoUrl?: string | null; websiteUrl?: string | null },
  size = 128,
): string {
  return listing.logoUrl || faviconUrl(listing.websiteUrl, size)
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/** Truncate text to a max length on a word boundary. */
export function truncate(text: string, max = 160): string {
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max)).trimEnd() + '…'
}

/** Strip markdown to plain text for meta descriptions. */
export function stripMarkdown(md?: string | null): string {
  if (!md) return ''
  return md
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}
