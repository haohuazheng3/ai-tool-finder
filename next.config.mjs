/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run separately in CI; don't block production builds on style warnings.
    ignoreDuringBuilds: true,
  },
  images: {
    // Logos are pulled from third-party hosts (Clearbit, Google favicons, vendor CDNs).
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  async headers() {
    return [
      {
        source: '/api/go/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

export default nextConfig
