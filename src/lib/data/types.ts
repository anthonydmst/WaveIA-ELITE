
export interface NavLink {
  href: string;
  label: string;
  iconName?: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string; // Lucide icon name or similar identifier if needed
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular: boolean;
  features: PlanFeature[];
  cta: string;
  color: string;
  period?: string;
}

export interface Addon {
  name: string;
  description: string;
  price: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfoItem {
  iconName: "Mail" | "Phone" | "MapPin" | "Clock";
  label: string;
  value: string;
  href: string | null;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceHero {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  image?: string;
}

export type ServiceSilo = "local" | "metier" | "service" | "seo" | "agence" | "web";

export interface Service {
  slug: string;
  silo: ServiceSilo;
  title: string;
  href?: string; // S-Tier: Allow explicit overrides
  type?: "hub" | "service"; // S-Tier: Explicit type for filtering logic (Grade A++ Architecture)
  description: string; // Meta description
  hero: ServiceHero;
  features: ServiceFeature[];
  process: ServiceStep[];
  faq: FAQItem[];
  schema?: Record<string, unknown>; // Structured data
  
  // Grade A+ Deep Content
  content?: DeepContent;
  
  // Silo A: Local Context
  localContext?: {
    city: string;
    zipCode: string;
    mapEmbedUrl?: string; // Optional custom map
    siloContext?: {
      intro: string;
      hook: string;
      expertise: string[];
      cta: string;
      // Grade A++++ Territorial Enrichment
      localTrust: string;
      eventReference?: string;
      culturalProof: string;
    };
  };
}

export interface CityBase {
  slug: string;
  name: string;
  zipCode: string;
  department: string; // "64" or "40"
  coordinates?: { lat: number; lng: number }; // GPS for Schema.org
}

export interface CitySEO {
  description: string;
  neighborhoods?: string[];
  landmarks?: string[];
  population?: string;
  localSEO?: {
    identity: string;
    history: string;
    economicContext: string;
    zones: string[];
    nearbyAreas: string[];
    primaryKeywords: string[];
    secondaryKeywords: string[];
    localStats: {
      businesses?: string;
      digitalNeed?: string;
      opportunity?: string;
    };
    localUSPs: string[];
  };
}

export interface City extends CityBase, CitySEO {}

// DEEP CONTENT ARCHITECTURE (Grade A+)
export interface ContentSection {
  title: string;
  content: string; // Markdown supported
}

export interface DeepContent {
  // Grade A++++ Deep Content Extensions (Authority & Local Context)
  tech_stack?: {
    title: string;
    description: string;
    items: {
      name: string;
      benefit: string; // "Why it matters"
      icon: string; // Lucide icon
    }[];
  };

  local_market_fit?: {
    title: string; // e.g., "Pourquoi au Pays Basque ?"
    subtitle: string;
    points: {
      title: string;
      description: string;
    }[];
  };

  process_detailed?: {
    title: string;
    steps: {
      name: string;
      duration: string;
      deliverables: string[];
    }[];
  };

  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  };

  comparison?: {
    title: string;
    subtitle?: string;
    competitors: string[];
    rows: {
      feature: string;
      us: string | boolean;
      them: (string | boolean)[];
    }[];
  };

  problem: {
    title: string;
    text: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    text: string;
    methodology: {
        step: string;
        details: string;
    }[];
  };
  benefits: {
    title: string;
    items: {
        title: string;
        text: string;
        icon?: string;
    }[];
  };
  
  // Grade A++ Extensions
  stats?: {
    title: string;
    metrics: {
      value: string;
      label: string;
      proof?: string;
    }[];
  };
  

  
  // Cross-silo linking
  relatedServices?: {
    slug: string;
    label: string;
  }[];
}

export interface FooterSection {
  title: string;
  href?: string;
  links: FooterLink[];
}
