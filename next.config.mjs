/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://mykettel.com https://cdn.shopify.com https://www.google-analytics.com",
      "font-src 'self' data:",
      "frame-src https://js.stripe.com",
      "connect-src 'self' https://api.stripe.com https://*.supabase.co https://www.google-analytics.com https://www.googletagmanager.com",
    ].join('; '),
  },
]

const nextConfig = {
  headers: async () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mykettel.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
    formats: ['image/webp'],
  },
}

export default nextConfig
