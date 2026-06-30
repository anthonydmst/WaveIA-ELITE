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
  legalName: "WaveIA",
  siret: "753 348 010 00053",
  publicationDirector: "Anthony Damestoy",
  description: "Agence de communication digitale experte en stratégie de marque, web design et marketing d'influence.",
  url: "https://waveia.fr",
  logo: "https://waveia.fr/icon-512.png", // TODO: replace with a dedicated brand logo asset if available
  
  // Contact
  email: "contact@waveia.fr",
  telephone: "+33695913669",
  telephoneLabel: "06 95 91 36 69",
  address: {
    street: "Technopôle Izarbel",
    city: "Bidart",
    region: "Pyrénées-Atlantiques",
    postalCode: "64210",
    country: "FR",
  },
  geo: {
    latitude: 43.4285,
    longitude: -1.5896,
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
