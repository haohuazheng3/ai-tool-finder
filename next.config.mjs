/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run separately in CI; don't block production builds on style warnings.
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Bundle the SQL migration files into the one-time DB setup route's function.
    outputFileTracingIncludes: {
      '/api/admin/setup': ['./drizzle/**/*'],
    },
  },
  images: {
    // Logos are pulled from third-party hosts (Clearbit, Google favicons, vendor CDNs).
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  async headers() {
    const securityHeaders = [
      // HTTPS-only for 2 years incl. subdomains; eligible for the HSTS preload list.
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
    ]
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/api/go/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

export default nextConfig
