"use client";

import React from 'react';
import { X } from 'lucide-react';

export function SeoLocalProblemSection() {
  const problems = [
    {
      title: "Fiche incomplète ou mal catégorisée",
      desc: "Votre fiche Google Business Profile n'exploite pas tout son potentiel. Sans les bonnes catégories, Google ne vous affichera pas pour les requêtes de vos clients."
    },
    {
      title: "Informations incohérentes",
      desc: "Nom, adresse, téléphone (NAP) diffèrent sur le web. Google déteste les incohérences et pénalisera votre positionnement local."
    },
    {
      title: "Aucune page dédiée par zone",
      desc: "Si vous intervenez sur plusieurs villes sans avoir une page spécifique pour chacune, vous perdez le trafic ciblé de ces localités."
    },
    {
      title: "Avis insuffisants ou trop anciens",
      desc: "Vos clients satisfaits ne laissent pas d'avis, alors que vos concurrents en accumulent. Un profil sans preuve sociale récente ne convertit pas."
    },
    {
      title: "Invisible pour les moteurs IA",
      desc: "Les recherches via ChatGPT, Gemini ou Claude augmentent. Sans présence optimisée, vous disparaissez des recommandations de ces nouvelles IA."
    }
  ];

  return (
    <section id="why" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 animate-in">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Le coût invisible d'une visibilité locale <span className="text-red-500/80">négligée.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Selon le Baromètre France Num 2025, plus de 65 % des TPE/PME françaises ont un site web. Mais avoir un site ne veut pas dire être visible. L'acquisition de nouveaux clients reste le premier bénéfice attendu.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aujourd'hui, un client qui cherche votre activité tape sa ville et clique sur le premier résultat. Si ce n'est pas vous, voici la sanction immédiate :
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in delay-100">
          {problems.map((feature, i) => (
            <div key={i} className="glass-card bg-red-500/5 border border-red-500/20 p-8 rounded-2xl flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-5">
                <X className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-3 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

