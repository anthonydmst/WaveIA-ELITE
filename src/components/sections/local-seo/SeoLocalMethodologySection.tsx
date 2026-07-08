"use client";

import React from 'react';

export function SeoLocalMethodologySection() {
  const steps = [
    {
      num: "01",
      title: "Audit complet et diagnostic",
      sub: "12 points de contrôle",
      desc: "Nous ne nous contentons pas de regarder votre fiche en surface. Notre audit couvre : la cohérence de votre NAP sur le web, le choix de catégorie, l'exhaustivité des champs, la vitesse du site, l'existence de pages locales, la qualité des avis, et votre visibilité sur les moteurs IA (ChatGPT, Gemini, Claude)."
    },
    {
      num: "02",
      title: "Optimisation de votre fiche Google",
      sub: "Chirurgical et complet",
      desc: "Catégorie principale et jusqu'à 9 catégories secondaires. Rédaction optimisée de votre description sans bourrage de mots-clés. Services détaillés reliés à votre site. Paramétrage précis des horaires, zones desservies et attributs."
    },
    {
      num: "03",
      title: "Création de vos pages locales",
      sub: "Maillage interne ciblé",
      desc: "Nous créons des pages web dédiées à chacune de vos zones d'intervention (règle '1 service = 1 ville' ou '1 quartier'). Contenu unique ancré localement, balises Title optimisées, maillage interne géographique, et intégration technique de la carte Google Maps."
    },
    {
      num: "04",
      title: "Balisage technique",
      sub: "Schema / JSON-LD",
      desc: "Nous intégrons un balisage Schema JSON-LD (type LocalBusiness) strictement identique à votre fiche Google, testé et validé sans erreur avec l'outil officiel, et placé exclusivement sur la page liée à votre fiche."
    },
    {
      num: "05",
      title: "Cohérence NAP & citations locales",
      sub: "Sécurisation de la donnée",
      desc: "Nous auditons et corrigeons vos informations sur l'ensemble des annuaires stratégiques (Pages Jaunes, Apple Maps, Bing Places, Waze). Cette cohérence à la lettre près est le socle indispensable et sécurise votre visibilité auprès des IA."
    },
    {
      num: "06",
      title: "Stratégie d'avis clients qualitatifs",
      sub: "Preuve sociale",
      desc: "Mise en place d'un processus simple et automatisé de collecte d'avis (SMS post-prestation, scripts de demande), à un rythme régulier et naturel. Respect total du RGPD. Nous assurons également la gestion professionnelle de vos réponses."
    },
    {
      num: "07",
      title: "Développement de l'autorité",
      sub: "Netlinking local",
      desc: "Acquisition de liens locaux qualitatifs (partenariats, presse régionale, mairies, associations locales) pour renforcer la confiance que Google et les IA accordent à votre entreprise. La qualité primera toujours sur la quantité."
    },
    {
      num: "08",
      title: "Suivi, reporting et itération",
      sub: "Amélioration continue",
      desc: "Suivi mensuel de votre position sur carte quadrillée, reporting transparent sur les appels et demandes générés, et ajustements réguliers. L'algorithme local récompense la régularité et pénalise les modifications trop brusques."
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-border">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl animate-in mb-16">
           <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> PROCESSUS D'INGÉNIERIE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            De l'audit au reporting : un <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">déploiement sans faille.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Une méthodologie structurée avec une rigueur d'ingénierie : prédictible, transparente et rythmée. Voici comment nous construisons votre autorité locale étape par étape.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-ocean/20 to-transparent z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative w-full group">
              <div className="w-14 h-14 rounded-full border border-ocean/30 flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-card relative z-20 shadow-[0_0_15px_rgba(14,165,233,0.1)] group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <div className="pt-2 relative z-10">
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm font-black uppercase tracking-widest text-ocean/80 mb-3">{step.sub}</p>
                <p className="text-[0.95rem] text-muted-foreground leading-relaxed md:w-[90%]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
}
