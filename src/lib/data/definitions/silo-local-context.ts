import { City } from "../types";
import { TERRITORIAL_HOOKS, LOCAL_CHALLENGES, LOCAL_EVENTS, CULTURAL_IDENTITY } from "./territorial-identity";

/**
 * 🌶️ CONTEXTE LOCAL PAR SILO - Grade A++++ Ultra-Localisé
 * 
 * Génère du contenu sémantique UNIQUE basé sur :
 * - Identité territoriale Pays Basque / Landes
 * - Événements locaux (Fêtes, festivals, saisons)
 * - Problématiques économiques spécifiques
 * - Références culturelles authentiques
 */

export interface SiloLocalContext {
  intro: string;
  hook: string;
  expertise: string[];
  cta: string;
  // Grade A++++ Enrichissements
  localTrust: string;
  eventReference?: string;
  culturalProof: string;
}

type SiloType = "service" | "web" | "seo" | "agence" | "metier" | "local";

/**
 * Récupère les hooks territoriaux pour une ville
 */
function getTerritorialHook(citySlug: string): typeof TERRITORIAL_HOOKS.bayonne | null {
  const hooks: Record<string, typeof TERRITORIAL_HOOKS.bayonne> = {
    bayonne: TERRITORIAL_HOOKS.bayonne,
    biarritz: TERRITORIAL_HOOKS.biarritz,
    anglet: TERRITORIAL_HOOKS.anglet,
    "saint-jean-de-luz": TERRITORIAL_HOOKS.saintJeanDeLuz,
    hossegor: TERRITORIAL_HOOKS.hossegor,
    dax: TERRITORIAL_HOOKS.dax,
  };
  return hooks[citySlug] || null;
}

/**
 * Récupère les événements locaux pour une ville
 */
function getLocalEvents(citySlug: string): typeof LOCAL_EVENTS.bayonne | null {
  const events: Record<string, typeof LOCAL_EVENTS.bayonne> = {
    bayonne: LOCAL_EVENTS.bayonne,
    biarritz: LOCAL_EVENTS.biarritz,
    anglet: LOCAL_EVENTS.anglet,
    "saint-jean-de-luz": LOCAL_EVENTS.saintJeanDeLuz,
    hossegor: LOCAL_EVENTS.hossegor,
    dax: LOCAL_EVENTS.dax,
  };
  return events[citySlug] || null;
}

/**
 * Détermine le département pour adapter le contenu
 */
function getDepartmentContext(department: string): { region: string; identity: typeof CULTURAL_IDENTITY.basque } {
  if (department === "64") {
    return { region: "Pays Basque", identity: CULTURAL_IDENTITY.basque };
  }
  return { region: "Landes", identity: CULTURAL_IDENTITY.landais };
}

/**
 * Génère le contexte local adapté au silo - VERSION ULTRA-ENRICHIE
 */
export function getSiloLocalContext(city: City, silo: SiloType): SiloLocalContext {
  const neighborhood1 = city.neighborhoods?.[0] || "centre-ville";
  const neighborhood2 = city.neighborhoods?.[1] || city.name;
  const landmark = city.landmarks?.[0] || `le cœur de ${city.name}`;
  const { region, identity } = getDepartmentContext(city.department);
  const hooks = getTerritorialHook(city.slug);
  const events = getLocalEvents(city.slug);
  
  // Phrases de confiance locale
  const localTrustBase = hooks?.trust || LOCAL_CHALLENGES.trust.solution;
  const eventRef = events?.summer || `la saison touristique à ${city.name}`;
  const culturalProofBase = identity.mindset;
  
  switch (silo) {
    case "service":
    case "web":
      // CRÉATION SITE INTERNET
      return {
        intro: hooks?.identity 
          ? `${hooks.identity}. Agence de création site internet à ${city.name}, nous concevons des sites web qui reflètent l'identité ${region.toLowerCase()}e de votre entreprise.`
          : `Expert création site internet à ${city.name}, du quartier ${neighborhood1} à ${neighborhood2}. Sites web authentiques pour entreprises ${region.toLowerCase()}es.`,
        hook: hooks?.knowledge 
          ? `${hooks.knowledge}. Votre site doit parler à vos clients locaux autant qu'aux visiteurs.`
          : `Basés au ${region}, nous intervenons sur toute la commune de ${city.name} et ses environs.`,
        expertise: [
          `Connaissance du tissu économique de ${city.name} et du ${region}`,
          `Sites optimisés pour la saisonnalité touristique locale`,
          `Design qui respecte les codes visuels du ${region}`,
          `Rencontres possibles ${neighborhood1} - on vit ici`
        ],
        cta: `Café à ${city.name} ? Parlons de votre projet web`,
        localTrust: localTrustBase,
        eventReference: `Prêt pour ${eventRef} ? Anticipez avec un site performant.`,
        culturalProof: culturalProofBase,
      };

    case "seo":
      // RÉFÉRENCEMENT SEO
      return {
        intro: `Expert SEO ${city.name} ancré dans le ${region}. Nous propulsons les commerces et entreprises de ${neighborhood1}, ${neighborhood2} en 1ère page Google. SEO local ultra-ciblé.`,
        hook: hooks?.identity 
          ? `${hooks.identity}. Quand un touriste tape '${city.name} restaurant' sur Google Maps, c'est VOUS qu'il doit trouver.`
          : `Quand quelqu'un cherche 'votre métier ${city.name}' sur Google, êtes-vous en première page ?`,
        expertise: [
          `SEO hyper-local ${city.name} et communes voisines`,
          `Optimisation fiche Google Business ${city.name}`,
          `Stratégie d'avis adaptée à la clientèle ${region.toLowerCase()}e`,
          `Suivi positions '${city.name} + mots-clés métier'`
        ],
        cta: `Audit SEO gratuit pour ${city.name} - Voyez où vous en êtes`,
        localTrust: `${LOCAL_CHALLENGES.local_seo.solution}. Nous connaissons les requêtes locales qui comptent.`,
        eventReference: `Pendant ${eventRef}, le trafic explose. Êtes-vous prêt à capter ces recherches ?`,
        culturalProof: `${LOCAL_CHALLENGES.trust.solution}. On parle la même langue.`,
      };

    case "agence":
      // COMMUNICATION
      return {
        intro: hooks?.identity
          ? `${hooks.identity}. Agence de communication créative pour les marques du ${region} qui veulent rayonner sans perdre leur âme.`
          : `Agence de communication ${city.name} créative et audacieuse. Branding authentique pour entreprises ${region.toLowerCase()}es.`,
        hook: city.description
          ? `${city.name}, ${city.description}, mérite une communication qui honore son identité. Pas du marketing générique parisien.`
          : `Nous créons des identités visuelles inspirées de l'âme du ${region}. Pas des templates interchangeables.`,
        expertise: [
          `Identité visuelle ancrée dans l'esprit ${region.toLowerCase()}`,
          `Campagnes réseaux sociaux géolocalisées ${city.name}`,
          `Photos/Vidéos sur site : ${landmark} et environs`,
          `Connaissance des codes culturels locaux`
        ],
        cta: `Brief créatif à ${city.name} - Un café et vos idées`,
        localTrust: hooks?.trust || `Nous connaissons les codes du ${region}. Votre communication sera authentique.`,
        eventReference: events ? `${events.cultural} : opportunités de visibilité locale.` : undefined,
        culturalProof: `${identity.values.join(', ')} : ces valeurs transparaissent dans notre travail.`,
      };

    case "metier":
      // SOLUTIONS MÉTIERS
      return {
        intro: `Solutions web métier à ${city.name} : restaurant, hôtel, immobilier, artisan. Outils digitaux pensés pour les professionnels du ${region}.`,
        hook: hooks?.knowledge
          ? `${hooks.knowledge}. Un restaurant à ${neighborhood1} n'a pas les mêmes besoins qu'un artisan de ${neighborhood2}. Nos solutions s'adaptent.`
          : `Chaque métier a ses spécificités à ${city.name}. Nos modules métier sont conçus pour VOTRE réalité locale.`,
        expertise: [
          `Modules métier adaptés au tissu économique ${city.name}`,
          `Réservations/devis optimisés pour la saisonnalité ${region.toLowerCase()}e`,
          `Formation sur site possible à ${city.name}`,
          `Support local réactif - on est à côté`
        ],
        cta: `Démo solution métier à ${city.name} - On se rencontre`,
        localTrust: `${LOCAL_CHALLENGES.seasonality.solution}. Nous comprenons vos pics d'activité.`,
        eventReference: `${eventRef} : votre site tiendra-t-il la charge ? Les nôtres, oui.`,
        culturalProof: `Artisans, commerçants, restaurateurs du ${region} : nous servons ceux qui font vivre le territoire.`,
      };

    case "local":
      // PAGE VILLE RACINE
      return {
        intro: hooks?.identity 
          ? `${hooks.identity}. Agence web locale ${city.name} : création site, SEO, communication digitale pour les entreprises ${region.toLowerCase()}es.`
          : `Agence web ${city.name} locale et accessible. Solutions digitales pour entreprises de ${neighborhood1}, ${neighborhood2} et environs.`,
        hook: city.population
          ? `Avec ${city.population} habitants et ${city.localSEO?.localStats?.businesses || 'des milliers de commerces'}, ${city.name} est un terrain de jeu digital exigeant. Votre concurrent a peut-être déjà franchi le pas.`
          : `Le marché digital de ${city.name} est compétitif. Êtes-vous visible là où vos clients vous cherchent ?`,
        expertise: [
          `Agence physiquement implantée au ${region}`,
          `Rencontres possibles ${neighborhood1} ou chez vous`,
          `Connaissance du tissu économique de ${city.name}`,
          `Compréhension de la saisonnalité et des événements locaux`
        ],
        cta: hooks?.trust 
          ? `Rencontrons-nous à ${city.name} - Café offert bien sûr`
          : `Rencontrons-nous à ${city.name} - On parle mieux en vrai`,
        localTrust: localTrustBase,
        eventReference: events 
          ? `${events.summer} : préparez votre pic d'activité avec un site performant.`
          : `Saison touristique : êtes-vous prêt à capter le flux de visiteurs ?`,
        culturalProof: `${identity.mindset}`,
      };

    default:
      return {
        intro: `Expert digital ${city.name}`,
        hook: `Solutions web pour ${city.name}`,
        expertise: [`Expertise ${city.name}`],
        cta: `Contactez-nous`,
        localTrust: `Agence locale du ${region}`,
        culturalProof: `Ancrage territorial`,
      };
  }
}

/**
 * Enrichit un service avec le contexte local adapté au silo
 */
export function enrichServiceWithLocalContext<T extends { silo: string }>(
  service: T,
  city: City
): T & { localContext: { city: string; zipCode: string; siloContext: SiloLocalContext } } {
  const siloContext = getSiloLocalContext(city, service.silo as SiloType);
  
  return {
    ...service,
    localContext: {
      city: city.name,
      zipCode: city.zipCode,
      siloContext
    }
  };
}
