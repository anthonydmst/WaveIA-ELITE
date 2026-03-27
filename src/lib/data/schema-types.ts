// Structured Data Types for Schema.org
// Aligned with Google's Rich Results requirements

export type LocalBusinessSchema = {
  "@context"?: string;
  "@type": "LocalBusiness";
  name: string;
  image?: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  url?: string;
  priceRange?: string;
  areaServed?: string | { "@type": "City"; name: string; postalCode: string };
  [key: string]: unknown; // Allow additional fields
};

export type ServiceSchema = {
  "@context"?: string;
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
    image?: string;
  };
  areaServed?: string | { "@type": "City"; name: string; postalCode: string };
  [key: string]: unknown; // Allow additional fields
};

export type FAQPageSchema = {
  "@context"?: string;
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
  [key: string]: unknown; // Allow additional fields
};

export type BreadcrumbListSchema = {
  "@context"?: string;
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
  [key: string]: unknown; // Allow additional fields
};

export type StructuredDataSchema =
  | LocalBusinessSchema
  | ServiceSchema
  | FAQPageSchema
  | BreadcrumbListSchema
  | Record<string, unknown>; // Fallback for dynamic schemas
