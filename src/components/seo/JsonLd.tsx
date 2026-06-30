import { COMPANY_CONFIG } from '@/lib/seo/company';
import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | object;
}

/**
 * S-Tier JsonLd Helper
 * Standardized component for injecting Schema.org structured data.
 * 
 * Enforces @id linking strategy for Graph SEO.
 */
export function JsonLd({ data }: JsonLdProps) {
  // S-Tier: Automatically inject Organization with @id if not present
  // This ensures all schemas link back to the main organization entity
  const graphData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Main Organization Entity (The Anchor)
      {
        '@type': 'Organization',
        '@id': `${COMPANY_CONFIG.url}/#organization`,
        name: COMPANY_CONFIG.name,
        url: COMPANY_CONFIG.url,
        logo: {
          '@type': 'ImageObject',
          url: COMPANY_CONFIG.logo,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: COMPANY_CONFIG.telephone,
          contactType: 'customer service',
        },
        sameAs: Object.values(COMPANY_CONFIG.socials),
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_CONFIG.address.street,
          addressLocality: COMPANY_CONFIG.address.city,
          postalCode: COMPANY_CONFIG.address.postalCode,
          addressCountry: COMPANY_CONFIG.address.country,
        },
      },
      // S-Tier: Automatically inject WebPage linked to the Organization
      {
        '@type': 'WebPage',
        '@id': `${COMPANY_CONFIG.url}/#webpage`,
        url: COMPANY_CONFIG.url,
        name: COMPANY_CONFIG.name,
        isPartOf: {
          '@id': `${COMPANY_CONFIG.url}/#organization`
        }
      },
      // The specific data passed to the component
      ...(Array.isArray(data) ? data : [data]),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
    />
  );
}
