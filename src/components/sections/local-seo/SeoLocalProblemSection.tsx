"use client";

import React from 'react';
import { AlertCircle, MapPin, Globe, Star, Bot, SearchX } from 'lucide-react';

export function SeoLocalProblemSection() {
  const problems = [
    {
      icon: <MapPin className="w-8 h-8 text-red-400" />,
      title: "Fiche incomplète ou mal catégorisée",
      desc: "Votre fiche Google Business Profile n'exploite pas tout son potentiel. Sans les bonnes catégories, Google ne vous affichera pas pour les requêtes de vos clients."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: "Informations incohérentes",
      desc: "Nom, adresse, téléphone (NAP) diffèrent sur le web. Google déteste les incohérences et pénalisera votre positionnement local."
    },
    {
      icon: <SearchX className="w-8 h-8 text-yellow-400" />,
      title: "Aucune page dédiée par zone",
      desc: "Si vous intervenez sur plusieurs villes sans avoir une page spécifique pour chacune, vous perdez le trafic ciblé de ces localités."
    },
    {
      icon: <Star className="w-8 h-8 text-blue-400" />,
      title: "Avis insuffisants ou trop anciens",
      desc: "Vos clients satisfaits ne laissent pas d'avis, alors que vos concurrents en accumulent. Un profil sans preuve sociale récente ne convertit pas."
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: "Invisible pour les moteurs IA",
      desc: "Les recherches via ChatGPT, Gemini ou Claude augmentent. Sans présence optimisée, vous disparaissez des recommandations de ces nouvelles IA."
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div> Le Constat
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground leading-tight">
            Vos concurrents captent vos clients avant même qu'ils ne vous connaissent
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-6">
            Selon le Baromètre France Num 2025 (Direction Générale des Entreprises), <strong>65 % des TPE/PME françaises ont un site web</strong> — mais avoir un site ne veut pas dire être visible. L'<strong>acquisition de nouveaux clients</strong> reste le premier bénéfice attendu du numérique par les dirigeants, cité par 48 % d'entre eux. Le problème n'est donc plus l'outil, mais la visibilité.
          </p>
          <p className="text-lg text-muted-foreground font-light">
            Aujourd'hui, un client qui cherche votre activité ne "cherche" plus vraiment — il <strong>tape sa ville et clique sur le premier résultat qui s'affiche.</strong> Si ce n'est pas vous :
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {problems.map((card, i) => (
            <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:border-ocean/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 100}ms`}}>
              <div className="w-12 h-12 bg-ocean/5 border border-border rounded-xl flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold font-heading text-foreground mb-3">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card bg-ocean/5 border-l-4 border-ocean rounded-r-2xl p-8 flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-ocean shrink-0 mt-1" />
            <p className="text-lg font-heading text-foreground italic font-medium leading-relaxed">
              "Un site en position 1 sur Google ne suffit plus si votre fiche Google Maps n'est pas optimisée : c'est elle qui capte l'attention en premier."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
