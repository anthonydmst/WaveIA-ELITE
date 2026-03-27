import { City } from "../types";

/**
 * Grade A++++ Hero Description Generator
 * Creates unique, silo-specific descriptions that DON'T duplicate LocalContextSection
 * 
 * LocalContextSection uses: city.localSEO.identity (factual)
 * This generates: Expertise-focused descriptions (unique per silo)
 */

export function generateHeroDescription(city: City, silo: string): string {
  const landmark = city.landmarks?.[0] || `le cœur de ${city.name}`;
  const neighborhood1 = city.neighborhoods?.[0] || "centre-ville";
  const department = city.department === "64" ? "Pays Basque" : "Landes";
  
  switch (silo) {
    case "web":
    case "service":
    case "local":
      return `Création site internet à ${city.name} qui cartonne. Sites modernes, rapides et optimisés SEO pour les entreprises du ${department}. Intervention ${neighborhood1} et environs.`;
    
    case "seo":
      return `Référencement SEO ${city.name} pour dominer Google localement. Propulsez votre entreprise en 1ère page sur les recherches "${city.name} + votre activité". Expertise ${department}.`;
    
    case "agence":
      return `Agence communication créative à ${city.name}. Identité visuelle, branding et stratégie digitale pour marques ${department.toLowerCase()}es ambitieuses. Bureau accessible ${neighborhood1}.`;
    
    case "metier":
      return `Solutions web métier à ${city.name} : restaurant, hôtel, immobilier, artisan. Modules spécialisés adaptés à votre activité et à la clientèle du ${department}.`;
    
    default:
      return `Expert digital à ${city.name} pour développer votre présence en ligne. Solutions sur-mesure pour entreprises ${department.toLowerCase()}es. Proche de ${landmark}.`;
  }
}

/**
 * Generates unique subtitle based on silo
 */
export function generateHeroSubtitle(city: City, silo: string): string {
  switch (silo) {
    case "web":
    case "service":
    case "local":
      return `Sites Web Premium ${city.zipCode}`;
    
    case "seo":
      return `Conquête Google ${city.zipCode}`;
    
    case "agence":
      return `Communication ${city.name}`;
    
    case "metier":
      return `Solutions Métier ${city.zipCode}`;
    
    default:
      return `Digital ${city.zipCode}`;
  }
}
