import { FAQItem } from "../types";

/**
 * ❓ FAQ MASTER (Grade A++ God Mode)
 * Single Source of Truth for all Frequently Asked Questions across all verticals.
 * Consolidated for LLM efficiency and architectural S-Tier compliance.
 */

// ============================================
// PART 1: TECH & DEVELOPMENT
// ============================================
export const TECH_FAQS: FAQItem[] = [
  {
    question: "Pourquoi Next.js plutôt que WordPress ?",
    answer: "WordPress est un outil de blogging conçu en 2003, avec des plugins souvent vulnérables. Next.js est le framework React utilisé par Netflix et TikTok. Il offre une vitesse quasi-instantanée (<100ms), une sécurité native et une évolutivité illimitée."
  },
  {
    question: "Le code m'appartient-il vraiment ?",
    answer: "Oui, à 100%. Nous vous livrons le dépôt GitHub complet. Vous êtes propriétaire de votre actif numérique, sans 'vendor lock-in'. Vous pouvez changer de prestataire à tout moment."
  },
  {
    question: "Qu'est-ce que le 'Vercel Edge Network' ?",
    answer: "Votre site est déployé sur un réseau mondial de serveurs. Il charge aussi vite à Biarritz qu'à New York. C'est l'infrastructure des géants pour garantir une disponibilité de 99.99%."
  },
  {
    question: "Combien coûte un site internet chez WaveIA ?",
    answer: "Chaque projet est unique. Un site vitrine démarre généralement autour de 1 500€, tandis qu'un e-commerce complet nécessite un devis détaillé. Nous proposons toujours 3 options budgétaires."
  },
  {
    question: "Y a-t-il des frais cachés après la livraison ?",
    answer: "Aucun. Le prix annoncé inclut tout. Seuls l'hébergement (~10€/mois) et le nom de domaine (~15€/an) sont des frais récurrents que vous maîtrisez."
  },
  {
    question: "Quels sont les délais de création ?",
    answer: "Pour un site vitrine, comptez 2 à 4 semaines après validation du design. Pour un e-commerce, prévoyez 1 à 2 mois. Nous nous engageons contractuellement sur les dates."
  },
  {
    question: "Puis-je modifier le contenu seul ?",
    answer: "Oui, nous intégrons un back-office simple (CMS headless) pour modifier textes et images sans toucher au code. Formation incluse à la livraison."
  }
];

// ============================================
// PART 2: SEO & PERFORMANCE
// ============================================
export const SEO_FAQS: FAQItem[] = [
  {
    question: "Qu'est-ce qu'un audit SEO et à quoi ça sert ?",
    answer: "C'est un diagnostic de visibilité Google : technique, contenu, et autorité. Il identifie les blocages pour grimper dans les résultats."
  },
  {
    question: "En combien de temps verrai-je des résultats SEO ?",
    answer: "Les améliorations techniques sont visibles sous 1 semaine. Pour les positions Google, comptez 2-3 mois pour le local, 4-6 mois pour le national."
  },
  {
    question: "C'est quoi le SEO local ?",
    answer: "L'optimisation pour les recherches géolocalisées ('restaurant Bayonne'). 46% des recherches Google ont une intention locale. Crucial pour les commerces."
  },
  {
    question: "Comment apparaître sur la carte Google (Pack Local) ?",
    answer: "Google My Business optimisé + avis clients + NAP cohérent. Nous gérons tout cela pour vous positionner dans les 3 premiers."
  },
  {
    question: "C'est quoi le netlinking ?",
    answer: "Ce sont les liens d'autres sites vers le vôtre. Google les considère comme des votes de confiance. C'est le facteur n°1 de l'autorité SEO."
  }
];

// ============================================
// PART 3: AGENCY & BRANDING
// ============================================
export const AGENCY_FAQS: FAQItem[] = [
  {
    question: "Livrez-vous les fichiers sources du logo ?",
    answer: "Absolument. Vous recevez votre logo dans tous les formats professionnels (Vectoriel AI/EPS, PDF, PNG, JPG) et ses déclinaisons."
  },
  {
    question: "Qu'est-ce qu'une charte graphique ?",
    answer: "C'est le 'mode d'emploi' de votre identité : couleurs officielles, typographies, règles d'usage. Elle garantit une cohérence sur tous vos supports."
  },
  {
    question: "Gérez-vous les publicités Meta/Instagram ?",
    answer: "Oui, nous créons et optimisons vos campagnes : ciblage précis, créatifs impactants, et A/B testing pour maximiser votre ROI."
  },
  {
    question: "Puis-je utiliser les photos du shooting partout ?",
    answer: "Oui, nous cédons les droits d'utilisation pour tous vos supports web et print. Vos images vous appartiennent sans limite de temps."
  },
  {
    question: "Comment utilisez-vous l'IA ?",
    answer: "L'IA automatise les tâches répétitives (code, SEO technique). L'humain garde les commandes pour la stratégie, le design émotionnel et le copywriting."
  }
];

// ============================================
// PART 4: LOCAL ROOTS (Côte Basque / Landes)
// ============================================
export const LOCAL_FAQS: FAQItem[] = [
  {
    question: "Pouvons-nous nous rencontrer physiquement ?",
    answer: "Oui ! Nous sommes basés à Bidart (Technopôle Izarbel). Nous nous déplaçons à Bayonne, Biarritz, Anglet et sur toute la côte."
  },
  {
    question: "Connaissez-vous bien le marché local ?",
    answer: "Nous travaillons avec des entreprises locales depuis des années : hôtellerie, restauration, artisans BTP, surf shops. Nous maîtrisons les codes du territoire."
  },
  {
    question: "Faites-vous des tarifs entre voisins ?",
    answer: "Pour les projets groupés (ex: commerçants d'une même rue), nous proposons des packages avantageux pour digitaliser les quartiers."
  }
];

// ============================================
// PART 5: HOME "WHY CHOOSE US" FAQ
// Kept as plain data (not exported from the "use client" component) so it can
// be consumed both by WhyChooseUsFAQ.tsx (accordion UI) and by the Server
// Component that renders the matching FAQPage JSON-LD (app/page.tsx).
// ============================================
export const WHY_CHOOSE_US_FAQS: FAQItem[] = [
  {
    question: "Comment choisir le partenaire idéal pour mon projet web ?",
    answer:
      "Au-delà des références et des technologies, choisissez une agence qui comprend vos enjeux business. Une bonne agence doit être capable de démontrer une méthodologie claire. Chez nous, nous combinons créativité humaine et puissance de l'IA pour auditer votre marché, analyser vos concurrents et vous proposer une solution sur-mesure."
  },
  {
    question: "Nous avons déjà un site, pouvez-vous juste l'améliorer ?",
    answer:
      "Nous réalisons systématiquement un audit préalable. Si votre base technique (code, CMS) est saine et évolutive, nous pouvons l'optimiser et y greffer nos modules. Si la technologie est obsolète et freine votre croissance, nous vous conseillerons une refonte stratégique."
  },
  {
    question: "Mon site va-t-il réellement générer un retour sur investissement (ROI) ?",
    answer:
      "Un site internet n'est pas une dépense, c'est un actif. Nous ne créons pas de simples \"cartes de visite\", mais de véritables machines à convertir. En alliant un design captivant à une structure technique optimisée, nous transformons votre trafic en un flux constant de prospects qualifiés."
  },
  {
    question: "Je n'y connais rien en IA, est-ce un problème ?",
    answer:
      "Absolument pas. L'Intelligence Artificielle est notre moteur, pas le vôtre. Vous n'avez aucune compétence technique à avoir. Nous l'utilisons en coulisses pour automatiser les tâches chronophages et vous livrer une plateforme plus performante, plus rapidement."
  },
  {
    question: "Quel est le budget moyen pour un projet de ce type ?",
    answer:
      "Chaque écosystème est sur-mesure. Cependant, l'intégration de l'IA dans nos process de production nous permet de réduire drastiquement nos coûts. Lors de notre premier échange, nous définirons ensemble le périmètre exact pour vous proposer un devis transparent, sans aucun frais caché, souvent bien plus compétitif qu'une agence classique."
  },
  {
    question: "Quel est le délai de livraison pour mon site internet ?",
    answer:
      "Notre agilité est notre force. Grâce à nos workflows optimisés, nous nous engageons sur un délai de livraison de 2 à 3 semaines pour la majorité de nos projets. Notre priorité reste une mise en ligne rapide pour que votre activité commence à porter ses fruits sans attendre."
  },
  {
    question: "Qu'est-ce que le SEO et pourquoi déléguer cette mission ?",
    answer:
      "Le SEO est l'art de dominer les résultats de recherche Google pour capter l'intention de vos futurs clients. Travailler avec nous, c'est bénéficier d'une méthodologie data-driven : nous identifions les opportunités inexploitées par vos concurrents pour vous garantir un positionnement durable en haut de page."
  },
  {
    question: "Comment se passe la gestion au quotidien une fois le site en ligne ?",
    answer:
      "Vous êtes 100% propriétaire de vos données et de votre outil. Nous vous formons à son utilisation pour être autonome. De plus, nous proposons des accompagnements mensuels pour la maintenance technique (sauvegardes, sécurité 24/7) et pour le pilotage de votre stratégie digitale (SEO, analyse de conversion)."
  }
];
