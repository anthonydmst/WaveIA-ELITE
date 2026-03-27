// LE RÉALISTE - CONFIGURATION
// Defines exactly which combos are allowed to be generated.

// S-Tier SEO: Extended to 8 cities to improve internal linking
export const POWER_5_CITIES = ["biarritz", "bayonne", "anglet", "saint-jean-de-luz", "hossegor", "hendaye", "dax", "capbreton"];

// Exact whitelist of [Service Slug] + [City Slug]
export const COMBO_WHITELIST: Record<string, string[]> = {
  // PILIER 1 : Tech Combos (5)
  "site-ecommerce": ["biarritz", "hossegor", "bayonne", "dax", "saint-jean-de-luz"],
  "site-shopify": ["biarritz"],
  "site-vitrine": ["bayonne", "biarritz", "hossegor"],
  "refonte-site-web": ["anglet", "biarritz"],

  // PILIER 2 : SEO Combos
  "audit-seo-gratuit": ["biarritz"],
  "google-my-business": ["biarritz", "bayonne"],
  "netlinking": ["biarritz"],

  // PILIER 3 : Agence Combos
  "identite-visuelle": ["biarritz", "anglet"],
  "strategie-digitale": ["biarritz"],

  // PILIER 4 : Métier Combos (5)
  "site-web-restaurant": ["biarritz", "bayonne"],
  "site-web-hotel": ["saint-jean-de-luz"],
  "site-web-immobilier": ["anglet"],
  "site-web-artisan-btp": ["dax"],
};

export const SILO_CITY_SCOPES = {
  local: "NONE", 
  seo: "WHITELIST_ONLY", 
  agence: "WHITELIST_ONLY", 
  metier: "WHITELIST_ONLY", 
  service: "WHITELIST_ONLY", 
  web: "WHITELIST_ONLY", 
};
