import { FAQItem } from "../types";

// ============================================================
// TECH FAQs - Site Vitrine, E-commerce, Refonte, Maintenance (15 questions)
// ============================================================
export const TECH_FAQS: FAQItem[] = [
  // --- Prix & Budget ---
  {
    question: "Combien coûte un site internet chez WaveIA ?",
    answer: "Chaque projet est unique. Un site vitrine démarre généralement autour de 1 500€, tandis qu'un e-commerce complet ou une solution sur-mesure nécessitera un devis détaillé. Nous proposons toujours 3 options budgétaires pour s'adapter à vos besoins.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, nous proposons un paiement en 3 fois sans frais : 40% à la commande, 40% à la validation du design, 20% à la mise en ligne. Pour les projets importants, nous pouvons étudier des mensualités.",
  },
  {
    question: "Y a-t-il des frais cachés après la livraison ?",
    answer: "Aucun. Le prix annoncé inclut tout : développement, formation, mise en ligne. Seuls l'hébergement (~10€/mois) et le nom de domaine (~15€/an) sont des frais récurrents que vous maîtrisez.",
  },
  // --- Délais & Process ---
  {
    question: "Quels sont les délais de création ?",
    answer: "Pour un site vitrine, comptez 2 à 4 semaines après validation du design. Pour un e-commerce ou une refonte complexe, prévoyez 1 à 2 mois. Nous nous engageons contractuellement sur les dates de livraison.",
  },
  {
    question: "Comment se déroule un projet avec vous ?",
    answer: "Notre process en 5 étapes : 1) Découverte (vos besoins), 2) Maquettes (vous visualisez avant), 3) Développement (nous codons), 4) Recette (vous testez), 5) Go Live (mise en ligne). Vous êtes impliqué à chaque étape.",
  },
  {
    question: "Puis-je voir une maquette avant de m'engager ?",
    answer: "Oui, nous créons systématiquement des maquettes (mockups) avant tout développement. Vous visualisez exactement le résultat final et pouvez demander des ajustements avant le codage.",
  },
  // --- Propriété & Indépendance ---
  {
    question: "Le site m'appartient-il à 100% ?",
    answer: "Oui, totalement. Contrairement aux solutions type Wix ou location, vous êtes propriétaire du nom de domaine, de l'hébergement et du code source. Aucune chaîne.",
  },
  {
    question: "Puis-je changer de prestataire plus tard ?",
    answer: "Absolument. Nous vous livrons tous les accès : code source, hébergement, emails. Vous êtes libre de continuer seul ou avec un autre prestataire sans aucune pénalité.",
  },
  {
    question: "Sur quelle technologie développez-vous ?",
    answer: "Nous utilisons Next.js (React) et Tailwind CSS, les technologies les plus modernes du marché. Votre site sera ultra-rapide, sécurisé et évolutif pour les 10 prochaines années.",
  },
  // --- Maintenance & Support ---
  {
    question: "Comment se passe la maintenance ?",
    answer: "Nous proposons des forfaits de maintenance mensuels (mises à jour, sécurité, sauvegardes) sans engagement. Si vous préférez gérer seul, nous vous formons à l'administration de votre site.",
  },
  {
    question: "Que comprend votre forfait maintenance ?",
    answer: "Mises à jour techniques, sauvegardes quotidiennes, monitoring 24/7, certificat SSL, corrections de bugs, et 2h de modifications mineures par mois. Support prioritaire par email et téléphone.",
  },
  {
    question: "Intervenez-vous en cas de panne urgente ?",
    answer: "Pour nos clients sous contrat, intervention garantie sous 4h en heures ouvrées. Nous avons un monitoring permanent et sommes alertés avant même que vous ne constatiez un problème.",
  },
  // --- SEO & Performance ---
  {
    question: "Mon site sera-t-il bien référencé sur Google ?",
    answer: "Tous nos sites sont optimisés SEO dès la conception : structure technique parfaite, temps de chargement <1s, responsive mobile-first, et balises Schema.org. C'est la base de toute stratégie de référencement.",
  },
  {
    question: "Quelle est la vitesse de chargement de vos sites ?",
    answer: "Score Lighthouse 95+ garanti. Nos sites Next.js chargent en moins d'une seconde grâce au SSR, au CDN Vercel et à l'optimisation automatique des images. C'est 3x plus rapide que WordPress.",
  },
  {
    question: "Pourrai-je modifier le contenu moi-même ?",
    answer: "Oui, nous intégrons un back-office simple et intuitif (CMS headless) pour que vous puissiez modifier textes, images et produits sans toucher au code. Formation incluse à la livraison.",
  },
];

// ============================================================
// SEO FAQs - Audit, Local, GMB, Netlinking (15 questions)
// ============================================================
export const SEO_FAQS: FAQItem[] = [
  // --- Audit SEO ---
  {
    question: "Qu'est-ce qu'un audit SEO et à quoi ça sert ?",
    answer: "C'est un diagnostic complet de votre visibilité Google : technique (vitesse, mobile), contenu (mots-clés), autorité (backlinks). Il identifie les blocages et priorise les actions pour grimper dans les résultats.",
  },
  {
    question: "Combien coûte un audit SEO ?",
    answer: "Notre audit SEO de base est gratuit et vous donne déjà les points critiques. Pour un audit approfondi avec plan d'action détaillé, comptez à partir de 500€. ROI garanti dès le premier mois.",
  },
  {
    question: "En combien de temps verrai-je des résultats SEO ?",
    answer: "Les premières améliorations techniques sont visibles sous 1 semaine. Pour les positions Google, comptez 2-3 mois pour les requêtes locales, 4-6 mois pour les requêtes compétitives.",
  },
  // --- SEO Local ---
  {
    question: "C'est quoi le SEO local ?",
    answer: "C'est l'optimisation pour les recherches géolocalisées : 'restaurant Bayonne', 'plombier Biarritz'. 46% des recherches Google ont une intention locale. C'est le levier n°1 pour les commerces.",
  },
  {
    question: "Comment apparaître dans le pack local Google (la carte) ?",
    answer: "Google My Business optimisé + avis clients + NAP cohérent (Nom, Adresse, Téléphone) sur tout le web + site techniquement parfait. Nous gérons tout cela pour vous positionner dans les 3 premiers.",
  },
  {
    question: "Gérez-vous les avis Google ?",
    answer: "Oui, nous mettons en place une stratégie de collecte d'avis : QR codes, emails automatiques post-achat, et réponses professionnelles à chaque avis (positif comme négatif).",
  },
  // --- Google My Business ---
  {
    question: "Pourquoi Google My Business est si important ?",
    answer: "GMB génère 50%+ des appels et itinéraires pour les commerces locaux. C'est votre vitrine gratuite sur Google. Une fiche optimisée = plus de clients sans payer de pub.",
  },
  {
    question: "Que comprend l'optimisation GMB ?",
    answer: "Photos pro, description optimisée, catégories pertinentes, horaires précis, Q&A anticipées, posts hebdomadaires, et gestion des avis. Nous transformons votre fiche en machine à leads.",
  },
  {
    question: "Puis-je avoir plusieurs fiches GMB ?",
    answer: "Si vous avez plusieurs adresses physiques, oui. Sinon, Google interdit les fiches multiples. Pour les zones de service, nous configurons correctement les zones d'intervention.",
  },
  // --- Netlinking ---
  {
    question: "C'est quoi le netlinking ?",
    answer: "Ce sont les liens d'autres sites vers le vôtre. Google les considère comme des 'votes de confiance'. Plus vous avez de liens de qualité, plus vous montez. C'est le facteur n°1 du SEO.",
  },
  {
    question: "Comment obtenez-vous des backlinks ?",
    answer: "Relations presse locales, annuaires premium, partenariats avec des sites du secteur, guest blogging, et création de contenu viral. Nous ne faisons JAMAIS de liens toxiques (black hat).",
  },
  {
    question: "Combien de backlinks faut-il pour bien se positionner ?",
    answer: "Qualité > Quantité. 10 liens de sites d'autorité valent mieux que 1000 liens de sites poubelles. Nous analysons vos concurrents et ciblons les liens qui font vraiment la différence.",
  },
  // --- Stratégie & ROI ---
  {
    question: "Le SEO est-il plus rentable que la pub Google Ads ?",
    answer: "À moyen terme, oui. Le SEO demande un investissement initial mais génère du trafic gratuit sur la durée. Ads coûte tant que vous payez. Idéalement, combinez les deux.",
  },
  {
    question: "Comment mesurez-vous les résultats SEO ?",
    answer: "Dashboard mensuel avec : positions sur vos mots-clés, trafic organique, leads générés, score technique. Vous voyez exactement le ROI de votre investissement.",
  },
  {
    question: "Garantissez-vous la première page Google ?",
    answer: "Aucun professionnel sérieux ne peut le garantir (Google décide). Mais nos clients progressent systématiquement. Nous garantissons la qualité du travail et la transparence des résultats.",
  },
];

// ============================================================
// AGENCE FAQs - Identité, Communication, Photo, Vidéo (15 questions)
// ============================================================
export const AGENCE_FAQS: FAQItem[] = [
  // --- Identité Visuelle ---
  {
    question: "Livrez-vous les fichiers sources du logo ?",
    answer: "Absolument. Vous recevez votre logo dans tous les formats professionnels (Vectoriel AI/EPS, PDF, PNG, JPG) et ses déclinaisons (Noir & Blanc, Couleur, Réseaux Sociaux).",
  },
  {
    question: "Combien de propositions de logo recevrai-je ?",
    answer: "Vous recevez 3 pistes créatives différentes. Après vos retours, nous affinons la direction choisie avec 2 tours de corrections inclus. Le logo final vous plaira à 100%.",
  },
  {
    question: "Qu'est-ce qu'une charte graphique ?",
    answer: "C'est le 'mode d'emploi' de votre identité : couleurs officielles, typographies, règles d'utilisation du logo. Elle garantit une cohérence parfaite sur tous vos supports.",
  },
  {
    question: "Créez-vous aussi les supports print (cartes, flyers) ?",
    answer: "Oui, nous déclinons votre identité sur tous les supports : cartes de visite, flyers, brochures, enseignes, véhicules, packaging. Du digital au physique, tout est cohérent.",
  },
  // --- Réseaux Sociaux ---
  {
    question: "Quelle est votre méthode pour les réseaux sociaux ?",
    answer: "Nous ne postons pas 'au feeling'. Nous définissons une ligne éditoriale, un calendrier de publication et nous produisons des contenus (Reels, Photos) qui apportent de la valeur à votre audience.",
  },
  {
    question: "Sur quels réseaux êtes-vous spécialisés ?",
    answer: "Instagram, Facebook, LinkedIn et TikTok principalement. Nous analysons où se trouve VOTRE audience et concentrons les efforts là où ça compte pour votre business.",
  },
  {
    question: "Combien de posts par semaine recommandez-vous ?",
    answer: "3-4 posts/semaine minimum pour être visible. Mais la régularité compte plus que la quantité. Mieux vaut 3 posts de qualité qu'un post médiocre par jour.",
  },
  {
    question: "Gérez-vous les publicités Meta/Instagram ?",
    answer: "Oui, nous créons et optimisons vos campagnes publicitaires : ciblage précis, créatifs impactants, et A/B testing permanent. Nous maximisons chaque euro investi.",
  },
  // --- Photo & Vidéo ---
  {
    question: "Puis-je utiliser les photos du shooting partout ?",
    answer: "Oui, nous cédons les droits d'utilisation pour tous vos supports digitaux et print. Vos images vous appartiennent pour booster votre communication sans limite de temps.",
  },
  {
    question: "Combien de photos livre-t-on après un shooting ?",
    answer: "Comptez 30-50 photos retouchées et exploitables pour une demi-journée de shooting. Suffisant pour alimenter vos réseaux et votre site pendant 6 mois minimum.",
  },
  {
    question: "Faites-vous des vidéos pour les réseaux sociaux ?",
    answer: "Oui, du Reel Instagram de 15 secondes au film corporate de 2 minutes. Nous produisons, montons et optimisons vos vidéos pour maximiser l'engagement.",
  },
  {
    question: "Quelle est la différence entre photo produit et photo ambiance ?",
    answer: "Photo produit : fond neutre, focus sur l'objet (e-commerce). Photo ambiance : mise en situation, storytelling (réseaux, site). Nous recommandons les deux pour une com' complète.",
  },
  // --- Stratégie & Accompagnement ---
  {
    question: "Proposez-vous des formations community management ?",
    answer: "Oui, nous pouvons vous former ou former votre équipe à gérer vous-mêmes vos réseaux : création de contenu, outils de planification, analyse des statistiques.",
  },
  {
    question: "Comment mesurez-vous l'impact de la communication ?",
    answer: "Reach, engagement, followers, trafic vers le site, leads générés. Nous vous envoyons un reporting mensuel clair avec les KPIs qui comptent pour votre business.",
  },
  {
    question: "Travaillez-vous avec des influenceurs locaux ?",
    answer: "Oui, nous avons un réseau de micro-influenceurs Pays Basque / Landes. Nous pouvons orchestrer des collaborations authentiques qui résonnent avec votre cible locale.",
  },
];

// ============================================================
// LOCAL FAQs - Proximité, Côte Basque, Service Client (15 questions)
// ============================================================
export const LOCAL_FAQS: FAQItem[] = [
  // --- Proximité & Rencontre ---
  {
    question: "Pouvons-nous nous rencontrer physiquement ?",
    answer: "Avec plaisir ! Nous sommes basés sur la Côte Basque. Nous pouvons venir dans vos locaux à Bayonne, Biarritz, Anglet ou alentours pour discuter de votre projet autour d'un café.",
  },
  {
    question: "Où sont vos bureaux ?",
    answer: "Nous sommes installés au Technopôle Izarbel à Bidart, au cœur du BAB (Bayonne-Anglet-Biarritz). Parking gratuit et vue sur les Pyrénées !",
  },
  {
    question: "Travaillez-vous uniquement avec des clients locaux ?",
    answer: "Non, nous avons des clients dans toute la France. Mais notre ancrage local nous permet d'offrir un service de proximité unique pour les entreprises du Pays Basque et des Landes.",
  },
  // --- Connaissance du Marché Local ---
  {
    question: "Connaissez-vous le marché local ?",
    answer: "Parfaitement. Nous travaillons avec des entreprises locales depuis des années. Nous connaissons les habitudes de consommation et les spécificités économiques du Pays Basque et des Landes.",
  },
  {
    question: "Quels secteurs locaux connaissez-vous bien ?",
    answer: "Tourisme (hôtels, restaurants, surf camps), immobilier, thermes, commerce de détail, artisans BTP, professions libérales. Chaque secteur a ses codes, nous les maîtrisons.",
  },
  {
    question: "Avez-vous des références locales à montrer ?",
    answer: "Oui, des dizaines. Restaurants de Biarritz, boutiques de Bayonne, artisans de l'intérieur... Nous pouvons vous montrer des exemples concrets de projets similaires au vôtre.",
  },
  // --- Réactivité & Urgences ---
  {
    question: "Intervenez-vous en urgence ?",
    answer: "Pour nos clients locaux sous contrat de maintenance, nous garantissons une intervention prioritaire. Votre business ne doit jamais s'arrêter.",
  },
  {
    question: "Quels sont vos délais de réponse ?",
    answer: "Email : réponse sous 24h max (souvent 2h). Téléphone : disponibles de 9h à 18h. Urgence weekend : pour les clients sous contrat, nous avons une ligne dédiée.",
  },
  {
    question: "Faites-vous des interventions sur site ?",
    answer: "Oui, pour les shootings photo/vidéo évidemment, mais aussi pour les réunions stratégiques, les formations, ou la résolution de problèmes techniques nécessitant du matériel sur place.",
  },
  // --- Tarifs & Spécificités Locales ---
  {
    question: "Vos tarifs sont-ils adaptés aux petits commerces ?",
    answer: "Oui, nous avons des offres pensées pour les TPE locales. Un site vitrine performant ne coûte pas 10 000€. Nous démocratisons le web premium pour les entrepreneurs du territoire.",
  },
  {
    question: "Acceptez-vous les paiements en espèces ?",
    answer: "Pour les petits montants (< 500€), oui. Sinon, virement ou carte bancaire. Nous éditons toujours une facture conforme.",
  },
  {
    question: "Travaillez-vous pendant les fêtes de Bayonne ?",
    answer: "Pas pendant les fêtes elles-mêmes (on est Basques aussi !), mais nous assurons une continuité de service pour les urgences. Le support reste actif.",
  },
  // --- Partenariats & Écosystème ---
  {
    question: "Êtes-vous membre de la CCI ou d'associations locales ?",
    answer: "Nous sommes en lien avec l'écosystème entrepreneurial local : French Tech Pays Basque, pépinières d'entreprises, et événements business du territoire.",
  },
  {
    question: "Recommandez-vous des prestataires locaux complémentaires ?",
    answer: "Oui, nous avons un réseau de confiance : imprimeurs, vidéastes spécialisés, rédacteurs bilingues FR/Basque/Espagnol, experts Google Ads. On vous met en relation gratuitement.",
  },
  {
    question: "Faites-vous des tarifs préférentiels entre voisins ?",
    answer: "Pour les projets groupés (ex: 3 commerçants d'une même rue), nous proposons des packages avantageux. La force du collectif pour digitaliser les quartiers !",
  },
];
