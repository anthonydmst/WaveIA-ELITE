import { Service } from "../types";
import { PROCESS_SEO_IA } from "./process";
import { TECH_FAQS } from "./specific-faqs";
import { CITIES } from "./cities";
import { CONTENT_SEO_HUB, CONTENT_SEO_AUDIT, CONTENT_SEO_LOCAL_SPECIFIC } from "./content-seo";
import { CONTENT_SEO_GMB, CONTENT_SEO_NETLINKING } from "./content-seo-2";
import { getSiloLocalContext } from "./silo-local-context";
import { generateHeroDescription, generateHeroSubtitle } from "./hero-descriptions";

export const SEO_SERVICES: Service[] = [
  // Hub
  {
    slug: "referencement-seo",
    type: "hub",
    silo: "seo",
    title: "Agence SEO Pays Basque",
    description: "Expert en référencement naturel Google. Audit, stratégie et netlinking pour la 1ère place.",
    hero: {
      title: "Agence SEO Pays Basque & France",
      subtitle: "Expert Référencement Google",
      description: "Propulsez votre site en 1ère page. Audit technique, Sémantique et Netlinking pour une visibilité durable et un ROI maximisé.",
      badge: "Audit SEO Offert 🎁",
    },
    features: [
      {
        title: "Audit Technique",
        description: "Analyse complète : Vitesse, Mobile, Indexation. Nous détectons tous les freins.",
      },
      {
        title: "Stratégie de Contenu",
        description: "Des textes optimisés qui plaisent à Google et captivent vos lecteurs.",
      },
      {
        title: "Netlinking Puissant",
        description: "Obtenez des liens d'autorité pour booster votre TrustFlow et dépasser vos concurrents.",
      },
      {
        title: "Suivi & Reporting",
        description: "Transparence totale. Suivez votre progression mois après mois.",
      },
    ],
    process: PROCESS_SEO_IA,
    faq: TECH_FAQS,
    content: CONTENT_SEO_HUB,
  },
  // Services
  {
    slug: "audit-seo-gratuit",
    silo: "seo",
    title: "Audit SEO Gratuit",
    description: "Demandez votre audit SEO offert. Analyse technique et sémantique de votre site.",
    hero: {
      title: "Audit SEO Offert",
      subtitle: "Diagnostic complet",
      description: "Découvrez pourquoi vous ne rankez pas et comment y remédier rapidement.",
      badge: "Analyse 100% Gratuite 🔍",
    },
    features: [
      { title: "Analyse Technique", description: "Vitesse, indexation, erreurs 404." },
      { title: "Opportunités", description: "Les mots-clés que vos concurrents vous volent." },
    ],
    process: PROCESS_SEO_IA,
    faq: TECH_FAQS,
    content: CONTENT_SEO_AUDIT,
  },
  {
    slug: "google-my-business",
    silo: "seo",
    title: "Optimisation Google My Business",
    description: "Expert Fiche d'Établissement Google. Soyez visible sur Google Maps.",
    hero: {
      title: "Google Maps & Local Pack",
      subtitle: "Visibilité Locale",
      description: "Optimisez votre fiche GMB pour apparaître dans le pack local et attirer les clients du quartier.",
      badge: "Top 3 Maps Garanti 📍",
    },
    features: [
        { title: "Optimisation Fiche", description: "Titre, catégories, horaires, photos géolocalisées." },
        { title: "Gestion Avis", description: "Stratégie pour récolter plus d'avis positifs et y répondre." }
    ],
    process: PROCESS_SEO_IA,
    faq: TECH_FAQS,
    content: CONTENT_SEO_GMB,
  },
  {
    slug: "local",
    silo: "seo",
    title: "Référencement Local",
    description: "Stratégie SEO Local pour PME. Soyez le premier sur 'Activité + Ville'.",
    hero: {
      title: "SEO Local",
      subtitle: "Soyez le Roi du Quartier",
      description: "Une stratégie ciblée pour capter les recherches géolocalisées à forte intention d'achat.",
      badge: "Dominance Locale 👑",
    },
    features: [
        { title: "Mots-clés Géolocalisés", description: "Ciblage précis des requêtes 'Service + Ville'." },
        { title: "Maillage Local", description: "Création de pages ville pour couvrir votre zone de chalandise." }
    ],
    process: PROCESS_SEO_IA,
    faq: TECH_FAQS,
    content: CONTENT_SEO_LOCAL_SPECIFIC,
  },
  {
    slug: "netlinking",
    silo: "seo",
    title: "Campagne de Netlinking",
    description: "Achat de liens et backlinks de qualité. Boostez l'autorité de votre domaine.",
    hero: {
      title: "Netlinking & Autorité",
      subtitle: "Boostez votre TrustFlow",
      description: "Des backlinks thématiques et puissants pour propulser vos pages en top position.",
      badge: "Partenaires Premium 🔗",
    },
    features: [
        { title: "Spots Exclusifs", description: "Accès à des milliers de sites partenaires thématiques." },
        { title: "Articles Sponsorisés", description: "Rédaction de contenu haute qualité pour insérer vos liens." }
    ],
    process: PROCESS_SEO_IA,
    faq: TECH_FAQS,
    content: CONTENT_SEO_NETLINKING,
  },
  // Landing SEO par ville (15 Villes)
  ...CITIES.map((city): Service => {
    // Natural Content
    const neighborhoodText = city.neighborhoods && city.neighborhoods.length > 0
    ? `De ${city.neighborhoods[0]} à ${city.neighborhoods[1] || city.neighborhoods[0]}`
    : "Dans votre zone";

    return {
      slug: city.slug,
      silo: "seo",
      title: `Consultant SEO ${city.name}`,
      description: `Expert SEO à ${city.name} (${city.zipCode}). Audit, Optimisation et Netlinking pour être N°1 sur Google.`,
      hero: {
        title: `Agence SEO ${city.name}`,
        subtitle: generateHeroSubtitle(city, "seo"),
        description: generateHeroDescription(city, "seo"), // ✅ Unique, no duplicate
        badge: `Expert SEO ${city.name} 🚀`,
      },
      features: [
        { title: "Audit Digital", description: "Nous analysons votre présence actuelle sur le web local." },
        { title: "Concurrents Locaux", description: `Nous étudeons les stratégies de vos rivaux à ${city.name}.` },
        { title: "Visibilité Maps", description: `Optimisation spécifique pour apparaître quand on cherche 'votre métier ${city.name}'.` },
        { title: "Rencontre", description: `Discutons de vos objectifs ${neighborhoodText}.` }
      ],
      process: PROCESS_SEO_IA,
      faq: TECH_FAQS,
      // ✅ PAS DE CONTENT ICI - Pages ville ont TerritorialContext unique via siloContext
      localContext: { 
        city: city.name, 
        zipCode: city.zipCode,
        siloContext: getSiloLocalContext(city, "seo")
      },
    };
  }),
];
