import 'server-only';

/**
 * S-Tier Single Source of Truth for Company Data
 * This file is the ONLY place where contact info should be defined.
 * 
 * Usage:
 * import { COMPANY_CONFIG } from '@/lib/seo/company';
 */

export const COMPANY_CONFIG = {
  name: "Waveia",
  legalName: "Waveia SAS",
  description: "Agence de communication digitale experte en stratégie de marque, web design et marketing d'influence.",
  url: "https://waveia.com",
  logo: "https://waveia.com/logo.png", // TODO: Replace with actual logo URL
  
  // Contact
  email: "contact@waveia.fr",
  telephone: "+33695913669",
  telephoneLabel: "06 95 91 36 69",
  address: {
    street: "Côte Basque",
    city: "Biarritz • Bayonne • Anglet",
    postalCode: "64200", // Defaulting to Biarritz code or generic
    country: "FR",
  },

  // Socials
  socials: {
    linkedin: "https://linkedin.com/company/waveia",
    twitter: "https://twitter.com/waveia",
    instagram: "https://instagram.com/waveia.fr",
  },

  // SEO & Schema
  foundingDate: "2024",
  priceRange: "€€-€€€",
  
  // Aggregate Rating (Required for S-Tier SEO)
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "84",
  }
} as const;
