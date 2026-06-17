import type { Metadata, Viewport } from 'next'
import './globals.css'
import { AuthProvider } from '@/components/auth-provider'
import { JsonLd } from '@/components/json-ld'
import { PlausibleAnalytics } from '@/components/plausible'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SITE } from '@/lib/constants'
import { env } from '@/lib/env'
import { ogImageUrl, organizationLd, websiteLd } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(env.appUrl),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  verification: { google: 'AenwmabhiJ1T7Op8gvBLxDhVxRUSZmPlIfOsSRZBA28' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: env.appUrl,
    images: [{ url: ogImageUrl(SITE.tagline, 'A task-organized directory of the best AI tools') }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    site: SITE.twitter,
  },
}

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Tool logos are fetched from Google's favicon service — connect early to speed LCP. */}
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="dns-prefetch" href="https://www.google.com" />
          <link rel="preconnect" href="https://t1.gstatic.com" crossOrigin="" />
        </head>
        <body className="min-h-screen bg-background font-sans">
          <PlausibleAnalytics />
          <JsonLd data={[organizationLd(), websiteLd()]} />
          <SiteHeader />
          <main className="min-h-[60vh]">{children}</main>
          <SiteFooter />
        </body>
      </html>
    </AuthProvider>
  )
}
