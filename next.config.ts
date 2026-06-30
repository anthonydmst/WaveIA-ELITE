import type { NextConfig } from "next";
// import withSerwistInit from '@serwist/next';
import withBundleAnalyzerPkg from '@next/bundle-analyzer';

const withBundleAnalyzer = withBundleAnalyzerPkg({
  enabled: process.env.ANALYZE === 'true',
});


/*
const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
  disable: true, 
});
*/

const nextConfig: NextConfig = {
  poweredByHeader: false, // S-Tier: suppress X-Powered-By header
  reactCompiler: true, // React 19 Compiler - stable in v16
  cacheComponents: true, // S-Tier: Stable in Next.js 16 (successor to PPR)
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/react-icons'],
  },
  images: {
    formats: ['image/avif', 'image/webp'], // S-Tier: AVIF first, WebP fallback
    qualities: [25, 50, 75, 80, 90, 100],
    // Restricted to the hosts actually used (avoids an open optimization proxy).
    // Add a host here when you start serving images from a new domain/CDN.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/audit-seo-gratuit',
        destination: '/referencement-seo/audit-seo-gratuit',
        permanent: true,
      },
      {
        source: '/undefined',
        destination: '/',
        permanent: false,
      },
      // S-Tier Defense: Permanent redirects for recursive hub URLs
      {
        source: '/referencement-seo/referencement-seo',
        destination: '/referencement-seo',
        permanent: true,
      },
      {
        source: '/creation-site-internet/creation-site-internet',
        destination: '/creation-site-internet',
        permanent: true,
      },
      {
        source: '/agence-communication/agence-communication',
        destination: '/agence-communication',
        permanent: true,
      },
      {
        source: '/solutions/solutions',
        destination: '/solutions',
        permanent: true,
      },
    ];
  },
  typescript: {
    // Strict mode enabled for production build
    ignoreBuildErrors: false,
  },

  // Security headers + Cache headers
  async headers() {
    return [
      {
        // Security headers for all routes
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        // Static assets: images, fonts, SVGs
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // JavaScript and CSS bundles (already have content hash)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);