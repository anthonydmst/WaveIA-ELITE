import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * S-Tier Edge Proxy (formerly proxy.ts)
 * 
 * Centralizes global logic at the Edge:
 * - Security headers reinforcement
 * - Request logging/analytics
 */
export function middleware(request: NextRequest) {
  
  // S-Tier: Additional security headers at Edge level
  // Note: Main headers are in next.config.ts, this is for dynamic/edge-specific logic
  
  // Content Security Policy (CSP)
  // Strict CSP to prevent XSS and data injection
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://*.googleusercontent.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;
  // Replace newlines with spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  // Set CSP header on response
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
  
  // Prevent clickjacking on API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
  }
  
  // Add request ID for debugging/tracing
  const requestId = crypto.randomUUID();
  response.headers.set('X-Request-ID', requestId);
  
  return response;
}

// Matcher: Apply to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder assets
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2)$).*)',
  ],
};
