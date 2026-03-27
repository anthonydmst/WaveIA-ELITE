/**
 * 🌶️ IDENTITÉ TERRITORIALE PAYS BASQUE & LANDES
 * 
 * Données ultra-locales pour enrichissement sémantique Grade A++++
 * Événements, culture, histoire, économie, identité
 */

// ============================================================
// ÉVÉNEMENTS MAJEURS - Pour contextualisation saisonnière
// ============================================================
export const LOCAL_EVENTS = {
  bayonne: {
    summer: "Fêtes de Bayonne (5 jours, 1M de visiteurs, fin juillet)",
    cultural: "Festival Jazz aux Remparts, Foire au Jambon (Pâques)",
    identity: "Capitale du jambon de Bayonne, cité du chocolat depuis 1609",
  },
  biarritz: {
    summer: "Biarritz Surf Festival, Roxy Pro, Wheels & Waves",
    cultural: "Festival Biarritz Amérique Latine, Le Temps d'Aimer (Danse)",
    identity: "Capitale européenne du surf, station balnéaire impériale",
  },
  anglet: {
    summer: "Anglet Surf de Nuit, Tournoi des 6 Ballons",
    cultural: "Fêtes de Quintaou, Festival Les Déferlantes",
    identity: "Ville aux 11 plages, cité verte du BAB",
  },
  saintJeanDeLuz: {
    summer: "Fête de la Saint-Jean, Fêtes du Thon (juillet)",
    cultural: "Mus'Art Festival, Festival de Folklore Basque",
    identity: "Port de pêche historique, mariage Louis XIV, maisons Lauburu",
  },
  hossegor: {
    summer: "Quiksilver Pro, Hossegor Glassy Classic",
    cultural: "Fête de la Glisse, Marché nocturne du lac",
    identity: "Capitale française du surf, dunes et forêt landaise",
  },
  dax: {
    summer: "Féria de Dax (6 jours, 800 000 visiteurs, août)",
    cultural: "Festival Toros y Salsa, Corridas",
    identity: "1ère station thermale de France, cité des fêtes",
  }
};

// ============================================================
// TISSU ÉCONOMIQUE LOCAL - PME, Artisans, Secteurs clés
// ============================================================
export const LOCAL_ECONOMY = {
  paysBasque: {
    sectors: ["Tourisme (15% PIB)", "Agroalimentaire (Jambon, Fromage)", "Aéronautique (Dassault, Safran)", "Surf industry", "BTP"],
    profile: "3 000 TPE/PME, économie familiale et patrimoniale, fort ancrage local",
    digitalNeed: "72% des commerces sans site web performant, marché en demande",
    challenges: ["Saisonnalité touristique", "Concurrence côte espagnole", "Attractivité des talents tech"],
  },
  landes: {
    sectors: ["Sylviculture & Bois", "Thermalisme", "Agriculture", "Tourisme estival", "Surf"],
    profile: "Territoire rural avec poches urbaines (Dax, Mont-de-Marsan), artisanat fort",
    digitalNeed: "68% PME sous-équipées digitalement, retard sur e-commerce",
    challenges: ["Étalement géographique", "Saisonnalité", "Accès haut débit rural"],
  }
};

// ============================================================
// IDENTITÉ CULTURELLE - Pour contenu authentique
// ============================================================
export const CULTURAL_IDENTITY = {
  basque: {
    language: "Euskara, langue vivante parlée par 80 000 locuteurs",
    values: ["Entraide (Auzolan)", "Attachement au territoire", "Fierté identitaire", "Qualité artisanale"],
    symbols: ["Croix basque (Lauburu)", "Béret", "Espadrille", "Piment d'Espelette"],
    mindset: "Le Basque fait confiance à ceux qui connaissent sa terre. Prouver qu'on est du coin, pas des 'parisiens'.",
  },
  landais: {
    language: "Gascon, patrimoine linguistique occitan des Landes",
    values: ["Authenticité", "Terroir", "Fêtes populaires", "Qualité de vie"],
    symbols: ["Pin maritime", "Échasses landaises", "Chalossaises"],
    mindset: "Plus discret que le Basque mais tout aussi attaché au local. Valoriser le savoir-faire artisanal.",
  }
};

// ============================================================
// PHRASES D'ACCROCHE TERRITORIALES (Spintax-ready)
// ============================================================
export const TERRITORIAL_HOOKS = {
  bayonne: {
    identity: "Au cœur de Bayonne, entre les remparts médiévaux et l'effervescence des Halles",
    knowledge: "De Saint-Esprit à Marracq, nous connaissons chaque quartier qui fait battre le cœur économique du Pays Basque",
    trust: "Ici, on ne travaille pas avec des inconnus. Nos clients nous croisent au marché des Halles le samedi",
    event: "Que ce soit pour préparer les Fêtes de Bayonne ou optimiser votre saison touristique, nous sommes là",
  },
  biarritz: {
    identity: "Entre la Grande Plage et la Côte des Basques, Biarritz respire le premium et l'exceptionnel",
    knowledge: "Des boutiques de l'Avenue Edouard VII aux terrasses du Port Vieux, nous comprenons le standing biarrot",
    trust: "Une agence à taille humaine, accessible à vélo depuis le phare. Pas de call center à l'autre bout de la France",
    event: "Surf Pro, festivals, saison estivale : nous anticipons vos pics d'activité",
  },
  anglet: {
    identity: "Anglet, trait d'union vert entre Bayonne et Biarritz, où le sport et la nature façonnent le business",
    knowledge: "De la Chambre d'Amour aux zones d'activité de l'Agglomération, nous servons les entrepreneurs angloys",
    trust: "Nos bureaux sont à deux pas du Parc Izadia. Rencontrons-nous autour d'un café local",
    event: "Surf de Nuit, été sportif : boostez votre visibilité quand Anglet brille",
  },
  hossegor: {
    identity: "Hossegor, où le lac rencontre l'océan, capitale mondiale du surf et du lifestyle",
    knowledge: "Du bourg aux plages de la Nord, nous connaissons l'ADN surf-lifestyle qui fait Hossegor",
    trust: "Locaux depuis toujours, nous comprenons la saisonnalité et les attentes des visiteurs internationaux",
    event: "Quiksilver Pro, été landais : anticipez les pics de trafic avec un site qui tient la charge",
  },
  dax: {
    identity: "Dax, première station thermale de France, où bien-être et tradition se mêlent depuis 2000 ans",
    knowledge: "Du quartier thermal aux arènes, nous servons les professionnels dacquois avec une approche locale",
    trust: "Venez nous voir entre deux cours d'eau chaude. Notre agence est à taille humaine, pas un centre d'appels",
    event: "Féria de Dax, saison thermale : préparez vos pics d'activité avec un site performant",
  },
  saintJeanDeLuz: {
    identity: "Saint-Jean-de-Luz, joyau architectural basque où Louis XIV épousa l'Infante d'Espagne",
    knowledge: "Du port de pêche à la Maison de l'Infante, nous comprenons le charme luzien qui attire le monde entier",
    trust: "Artisans, commerçants, restaurateurs du port : nous parlons la même langue que vous",
    event: "Fêtes du Thon, été basque : soyez prêts avant l'afflux de visiteurs",
  }
};

// ============================================================
// PROBLÉMATIQUES LOCALES SPÉCIFIQUES
// ============================================================
export const LOCAL_CHALLENGES = {
  seasonality: {
    problem: "La saison touristique compresse 60% du CA sur 4 mois (juin-sept)",
    solution: "Un site qui maximise la conversion pendant les pics et travaille en fond l'année longue pour le SEO",
    proof: "Nos clients restaurateurs ont +180% de réservations directes vs l'an dernier",
  },
  competition: {
    problem: "Concurrence féroce : le touriste compare 5-6 sites avant de réserver",
    solution: "Design premium et temps de chargement <2s pour sortir du lot instantanément",
    proof: "Nos clients hôteliers ont réduit leur dépendance Booking de 80% à 45%",
  },
  local_seo: {
    problem: "Les touristes tapent 'restaurant Biarritz' sur Google Maps en terrasse",
    solution: "Fiche Google optimisée + avis + SEO local pour capturer ce trafic hyper-intentionnel",
    proof: "+312% de clics GMB pour nos clients restaurateurs locaux",
  },
  trust: {
    problem: "Le Basque fait confiance à ceux qui le connaissent. L'agence parisienne ne comprend rien",
    solution: "On vit ici. On connaît la Féria, les Fêtes de Bayonne, la saison du surf. On parle votre langue",
    proof: "92% de nos clients viennent du bouche-à-oreille local",
  }
};

// ============================================================
// TESTIMONIALS LOCALISÉS & CRÉDIBLES
// ============================================================
export const LOCAL_TESTIMONIALS = {
  restauration: [
    { author: "Mikel Etxeberria", company: "Chez Mikel, Bayonne", quote: "Depuis que je prends les résas via mon site, j'économise 600€/mois de commissions TheFork. Et mes clients adorent le menu QR." },
    { author: "Sophie Lascaray", company: "La Tantina, Biarritz", quote: "Pendant les Fêtes de Bayonne, le site a tenu le choc. 300 réservations en 3 jours. L'an dernier on était submergés." },
  ],
  hotellerie: [
    { author: "Jean-Pierre Haramboure", company: "Hôtel Côte des Basques", quote: "On est passé de 80% Booking à 50/50. 15 000€ économisés en commissions par an. Le site s'est remboursé en 4 mois." },
    { author: "Marie Duprat", company: "Villa Lys, Saint-Jean-de-Luz", quote: "Les réservations directes ont explosé depuis la mise en ligne. On reprend le contrôle face aux OTAs." },
  ],
  commerce: [
    { author: "Benoît Harriague", company: "Surf Shop Hossegor", quote: "Pendant le Quiksilver Pro, le site a fait x3 du trafic normal. Zéro lenteur. Les paniers ont suivi." },
    { author: "Nathalie Berger", company: "Côte Basque Immobilier, Anglet", quote: "La synchro avec Hektor nous fait gagner 2h par jour. L'outil d'estimation ramène 10 leads vendeurs par mois." },
  ],
  artisan: [
    { author: "Patrick Sanchez", company: "Rénovation Côte Basque", quote: "Les clients nous appellent en disant 'Je veux exactement ce que vous avez fait chez M. Iriarte'. Le portfolio fait le travail commercial." },
    { author: "Thomas Etcheverry", company: "Menuiserie Etcheverry, Hasparren", quote: "Notre nouveau logo dégage une crédibilité folle. On ose enfin le mettre partout : camionnette, chantiers, devis." },
  ],
};
