import { City } from "@/lib/data/types";
import { JsonLd } from "./JsonLd";
import { COMPANY_CONFIG } from "@/lib/seo/company";

interface LocalBusinessSchemaProps {
  city: City;
  silo: string;
  serviceName: string;
}

/**
 * Grade A++++ LocalBusiness Schema.org
 * Structured data for each city page to boost local SEO
 */
export function CityLocalBusinessSchema({ city, silo, serviceName }: LocalBusinessSchemaProps) {
  const getSiloBusinessType = (): string => {
    switch (silo) {
      case "web":
      case "service":
      case "local":
        return "WebDesignStudio";
      case "seo":
        return "SEOAgency";
      case "agence":
        return "AdvertisingAgency";
      case "metier":
        return "ProfessionalService";
      default:
        return "WebDesignStudio";
    }
  };

  const getSiloDescription = (): string => {
    switch (silo) {
      case "web":
      case "service":
      case "local":
        return `Agence création site internet à ${city.name}. Sites web modernes, rapides et optimisés SEO pour les entreprises du Pays Basque et des Landes.`;
      case "seo":
        return `Agence référencement SEO à ${city.name}. Expert SEO local pour propulser votre entreprise en 1ère page Google.`;
      case "agence":
        return `Agence communication à ${city.name}. Identité visuelle, branding et stratégie digitale pour entreprises ${city.department === "64" ? "basques" : "landaises"}.`;
      case "metier":
        return `Solutions web métier à ${city.name}. Sites spécialisés restaurant, hôtel, immobilier et artisan.`;
      default:
        return `Agence digitale à ${city.name}. Solutions web sur-mesure pour entreprises locales.`;
    }
  };

  // Get city coordinates if available
  const latitude = city.coordinates?.lat || null;
  const longitude = city.coordinates?.lng || null;

  const schema = {
    "@context": "https://schema.org",
    "@type": getSiloBusinessType(),
    "name": `WaveIA - ${serviceName} ${city.name}`,
    "description": getSiloDescription(),
    "url": `https://waveia.fr/${silo === "local" ? "creation-site-internet" : silo}/${city.slug}`,
    "telephone": "+33695913669",
    "email": "contact@waveia.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_CONFIG.address.street, // Consistent corporate address
      "addressLocality": city.name,
      "postalCode": city.zipCode,
      "addressRegion": city.department === "64" ? "Pyrénées-Atlantiques" : "Landes",
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://fr.wikipedia.org/wiki/${city.name.replace(/ /g, "_")}`
    },
    "serviceArea": city.neighborhoods
      ? city.neighborhoods.map(neighborhood => ({
          "@type": "Place",
          "name": neighborhood
        }))
      : [],
    ...(latitude && longitude && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      }
    }),
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    },
    "image": `${COMPANY_CONFIG.url}/icon-512.png`,
    "logo": COMPANY_CONFIG.logo,
    "sameAs": [
      COMPANY_CONFIG.socials.linkedin,
      COMPANY_CONFIG.socials.instagram,
    ]
  };

  return <JsonLd data={schema} />;
}
