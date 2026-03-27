import { Service, ServiceSilo } from "./types";
import { CITIES } from "./definitions/cities";
import { ALL_METIER_SERVICES } from "./definitions/services-metier";
import { TECH_SERVICES } from "./definitions/services-tech";
import { LOCAL_SERVICES } from "./definitions/services-local";
import { SEO_SERVICES } from "./definitions/services-seo";
import { AGENCE_SERVICES } from "./definitions/services-agence";
import { getSiloLocalContext } from "./definitions/silo-local-context";

/**
 * 🏭 SERVICE FACTORY - AGGREGATOR (Anti-Monolith)
 * 
 * Les données sont maintenant modulaires dans `src/lib/data/definitions/`.
 * Respect du workflow Grade A+ : max 250 lignes par fichier.
 */

export const SERVICES: Service[] = [
  ...TECH_SERVICES,
  ...LOCAL_SERVICES,
  ...ALL_METIER_SERVICES,
  ...SEO_SERVICES,
  ...AGENCE_SERVICES,
];

// Re-export CITIES for use in other files
export { CITIES };

export function getServicesBySilo(silo: ServiceSilo) {
  return SERVICES.filter((s) => s.silo === silo);
}

export function getComboData(solutionSlug: string, citySlug: string, silo: ServiceSilo) {
  const solution = SERVICES.find(
    (s) => s.slug === solutionSlug && s.silo === silo
  );
  const city = CITIES.find((c) => c.slug === citySlug);

  if (!solution || !city) return null;

  // MERGE LOGIC: Create a synthetic Service object tailored to the city
  // Anti-Thin Content: We inject Variable Data (Spintax-like)
  
  const localIntro = city.neighborhoods 
    ? `Intervenant à ${city.name}, du quartier ${city.neighborhoods[0]} à ${city.neighborhoods[1] || "centre-ville"}, nous connaissons le tissu local.`
    : `Expert digital local basé dans le ${city.department === "64" ? "Pays Basque" : "Sud Landes"}.`;

  const landmarkHook = city.landmarks
    ? `Que vous soyez près de ${city.landmarks[0]} ou ailleurs à ${city.name}, nous venons à votre rencontre.`
    : `Disponibles sur toute la commune de ${city.name}.`;

  return {
    ...solution,
    slug: `${solution.slug}/${city.slug}`, 
    title: `${solution.title} à ${city.name}`, 
    description: `${solution.description} Service pour les professionnels de ${city.name} (${city.zipCode}). ${localIntro}`,
    hero: {
      ...solution.hero,
      title: `${solution.hero.title} à ${city.name}`,
      subtitle: `${solution.hero.subtitle} ${city.name}`,
      description: `${solution.hero.description} ${localIntro} ${landmarkHook}`,
    },
    localContext: {
      city: city.name,
      zipCode: city.zipCode,
      siloContext: getSiloLocalContext(city, silo),
    },
  };
}
