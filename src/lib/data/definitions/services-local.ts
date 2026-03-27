import { Service } from "../types";
import { CITIES } from "./cities";
import { PROCESS_WAVE_PREMIUM, FEATURES_TECH_PREMIUM } from "./premium-defaults";
import { LOCAL_FAQS } from "./specific-faqs";
import { CONTENT_TECH_HUB } from "./content-seo-2";
import { getSiloLocalContext } from "./silo-local-context";
import { generateHeroDescription, generateHeroSubtitle } from "./hero-descriptions";

export const LOCAL_SERVICES: Service[] = [
  // Hub
  {
    slug: "creation-site-internet",
    type: "hub",
    silo: "local",
    title: "Création Site Internet",
    description: "Agence Web locale au Pays Basque et Landes. Création de sites internet sur-mesure à Bayonne, Biarritz, Anglet, Hossegor.",
    hero: {
      title: "Création Site Internet Pays Basque & Landes",
      subtitle: "Agence Web 64 / 40",
      description: "Votre partenaire digital local. Nous concevons des sites vitrines et e-commerce performants pour les artisans, PME et commerçants de Bayonne à Hossegor.",
      badge: "Proximité 100% Locale 🌶️",
    },
    features: [
      FEATURES_TECH_PREMIUM[0] ?? { title: "Vitesse Éclair", description: "Score Google PageSpeed 95+" }, // Vitesse
      {
        title: "Référencement Local (SEO)",
        description: "Soyez visible là où vos clients vous cherchent : sur Google et Google Maps.",
      },
      FEATURES_TECH_PREMIUM[1] ?? { title: "Design Exclusif", description: "Une identité visuelle unique" }, // Design Exclusif
      {
        title: "Proximité & Écoute",
        description: "Un chef de projet dédié à Anglet pour vous accompagner de A à Z.",
      },
    ],
    process: PROCESS_WAVE_PREMIUM,
    faq: LOCAL_FAQS,
    content: CONTENT_TECH_HUB,
  },
  // Dynamic Generation of "Invasion" Landing Pages (Cities with enriched data)
  ...CITIES.map((city): Service => {
    // Extract localSEO for type safety  
    const localSEO = city.localSEO;
    
    // Neighborhood text from localSEO zones or fallback
    const zonesText = localSEO && localSEO.zones.length > 0
      ? `Intervention rapide de ${localSEO.zones[0] ?? "la commune"} à ${localSEO.zones[localSEO.zones.length - 1] ?? "ses environs"}.`
      : city.neighborhoods && city.neighborhoods.length > 0
        ? `Intervention rapide de ${city.neighborhoods[0] ?? "le centre"} à ${city.neighborhoods[1] ?? city.neighborhoods[0] ?? "ses environs"}.`
        : "Intervention sur toute la commune et ses environs.";
    
    // Economic context for description (Grade A++ SEO)
    const economicText = localSEO
      ? (localSEO.economicContext.split(".")[0] ?? localSEO.economicContext) + "."
      : `Spécialiste ${city.description}.`;
    
    // Population info for trust
    const populationText = city.population
      ? `${city.population} habitants`
      : "";

    return {
      slug: city.slug, // /creation-site-internet/bayonne
      silo: "local",
      title: `Création Site Internet ${city.name}`,
      description: `Agence Web à ${city.name} (${city.zipCode}). Création de site vitrine et e-commerce. ${zonesText} ${economicText}`,
      hero: {
        title: `Agence Web à ${city.name}`,
        subtitle: generateHeroSubtitle(city, "local"),
        description: generateHeroDescription(city, "local"), // ✅ Unique, no duplicate with LocalContextSection
        badge: populationText ? `${city.name} - ${populationText} 🎯` : `Expert Web ${city.name} 🎯`,
      },
      features: [
        { 
          title: "Ancrage Local", 
          description: localSEO
            ? `${localSEO.localUSPs[0] ?? `Nous connaissons parfaitement le tissu économique de ${city.name}.`}`
            : `Nous connaissons parfaitement le tissu économique de ${city.name}. ${zonesText}` 
        },
        { 
          title: "Proximité Totale", 
          description: localSEO?.localUSPs[3]
            ?? "Vos interlocuteurs sont ici, pas dans un call-center. Réactivité garantie." 
        },
        { 
          title: "Expertise Sectorielle", 
          description: localSEO?.localUSPs[1]
            ?? `Connaissance approfondie du marché local de ${city.name}.` 
        },
        ...(FEATURES_TECH_PREMIUM.slice(2).filter((f): f is typeof f & {} => f !== undefined))
      ],
      process: PROCESS_WAVE_PREMIUM,
      faq: LOCAL_FAQS,
      // ✅ PAS DE CONTENT ICI - Les pages ville ont TerritorialContext unique via siloContext
      localContext: { 
        city: city.name, 
        zipCode: city.zipCode,
        siloContext: getSiloLocalContext(city, "local")
      },
    };
  }),
];
