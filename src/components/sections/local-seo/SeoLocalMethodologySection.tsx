"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function SeoLocalMethodologySection() {
  const steps = [
    {
      num: "01",
      title: "Audit complet et diagnostic (12 points de contrôle)",
      desc: "Nous ne nous contentons pas de regarder votre fiche en surface. Notre audit couvre : la cohérence de votre NAP sur le web, le choix de catégorie (vs concurrents Top 3), l'exhaustivité des champs, l'indexation et la vitesse du site, la structure des balises, l'existence de pages locales, la qualité sémantique des avis, la présence sur les annuaires stratégiques, et votre visibilité sur les moteurs IA (ChatGPT, Gemini, Claude)."
    },
    {
      num: "02",
      title: "Optimisation chirurgicale de votre fiche Google Business Profile",
      desc: "Catégorie principale et jusqu'à 9 catégories secondaires alignées sur les concurrents. Rédaction optimisée de votre description sans bourrage de mots-clés. Services détaillés reliés à votre site. Calendrier éditorial de publications étalées dans le temps. Paramétrage précis des horaires, zones desservies et attributs."
    },
    {
      num: "03",
      title: "Création de vos pages locales et maillage interne",
      desc: "Nous créons des pages web dédiées à chacune de vos zones d'intervention (règle '1 service = 1 ville' ou '1 quartier'). Contenu unique ancré localement, balises Title et H1 optimisées, maillage interne structuré géographique, et intégration technique de la carte Google Maps sur chaque page locale."
    },
    {
      num: "04",
      title: "Balisage technique (Schema / données structurées)",
      desc: "Nous intégrons un balisage Schema JSON-LD (type LocalBusiness) strictement identique à votre fiche Google, testé et validé sans erreur avec l'outil officiel, et placé exclusivement sur la page liée à votre fiche — jamais dilué sur tout le site."
    },
    {
      num: "05",
      title: "Cohérence NAP & citations locales",
      desc: "Nous auditons et corrigeons vos informations sur l'ensemble des annuaires stratégiques (Pages Jaunes, Apple Maps, Bing Places, Waze) et réseaux sociaux. Cette cohérence à la lettre près est le socle indispensable de toute stratégie locale durable et sécurise votre visibilité auprès des IA génératives."
    },
    {
      num: "06",
      title: "Stratégie d'avis clients qualitatifs",
      desc: "Mise en place d'un processus simple et automatisé de collecte d'avis (SMS post-prestation, scripts de demande), à un rythme régulier et naturel. Respect total du RGPD. Nous assurons également la gestion professionnelle de vos réponses pour rassurer vos prospects."
    },
    {
      num: "07",
      title: "Développement de l'autorité locale (netlinking)",
      desc: "Acquisition de liens locaux qualitatifs (partenariats, presse régionale, CCI, mairies, associations locales, annuaires ciblés) pour renforcer la confiance que Google et les IA accordent à votre entreprise. La qualité primera toujours sur la quantité."
    },
    {
      num: "08",
      title: "Suivi, reporting et itération raisonnée",
      desc: "Suivi mensuel de votre position sur carte quadrillée (par quartier), reporting transparent sur les appels et demandes générés, et ajustements réguliers. L'algorithme local récompense la régularité et pénalise les modifications trop brusques."
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> Processus de A à Z
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
            Notre méthode, étape par étape
          </h2>
        </div>
        
        <div className="relative max-w-4xl mt-10 mb-20">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent hidden md:block"></div>
          
          {steps.map((p, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-7 mb-10 pb-10 border-b border-border/50 last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 100}ms`}}>
              <div className="w-14 h-14 rounded-full glass-card border border-border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80 relative md:-left-0">
                {p.num}
              </div>
              <div className="pt-2 flex-1">
                <h4 className="text-xl font-bold font-heading text-foreground mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-24">
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
            📅 Discuter de ma stratégie avec un expert Wave
          </a>
        </div>

        {/* Audit Checklist Box */}
        <div className="glass-card bg-background/40 border border-border rounded-3xl p-10 lg:p-14 animate-in">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-3">Notre grille d'audit SEO Local (18 facteurs)</h3>
            <p className="text-muted-foreground">Une vérification exhaustive pour ne laisser aucune faille à vos concurrents.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">Fiche Google Business Profile</h4>
              <ul className="space-y-4">
                {['Catégorie principale et secondaires', 'Nom conforme (Kbis, sans sur-optimisation)', 'Description et champ lexical', 'Services, produits et tarifs', 'Horaires et attributs', 'Photos et fraîcheur de publication'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">Site web & technique</h4>
              <ul className="space-y-4">
                {['Pages locales par ville/quartier', 'Balises Title, H1, Meta description', 'Balisage Schema (LocalBusiness)', 'Maillage interne géographique', 'Intégration carte Google Maps', 'Vitesse et indexation'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">Autorité & réputation</h4>
              <ul className="space-y-4">
                {['Cohérence NAP sur les annuaires', 'Volume et qualité sémantique des avis', 'Réponses aux avis', 'Backlinks locaux qualitatifs', 'Signaux comportementaux (itinéraires, appels)', 'Visibilité sur les moteurs IA (GEO)'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
