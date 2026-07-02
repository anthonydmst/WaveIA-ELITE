"use client";

import React from 'react';
import { BookOpen } from 'lucide-react';

export function SeoLocalLexiconSection() {
  const terms = [
    {
      title: "Fiche Google Business Profile",
      alias: "ex-Google My Business",
      desc: "Votre fiche d'établissement gratuite sur Google, visible sur Maps et dans les résultats de recherche."
    },
    {
      title: "Pack Local",
      alias: "ou Map Pack",
      desc: "Le bloc des 3 entreprises affichées en haut des résultats pour une recherche géolocalisée."
    },
    {
      title: "NAP",
      alias: "Name, Address, Phone",
      desc: "Vos Nom, Adresse et Téléphone, qui doivent être identiques partout sur le web."
    },
    {
      title: "Citations locales",
      alias: "",
      desc: "Les mentions de votre NAP sur des annuaires (Pages Jaunes, Apple Maps, CCI, etc.), qui renforcent votre crédibilité."
    },
    {
      title: "Backlinks locaux",
      alias: "",
      desc: "Des liens provenant de sites de votre région, qui signalent votre ancrage géographique à Google."
    },
    {
      title: "Schema / données structurées",
      alias: "",
      desc: "Un code technique invisible pour l'internaute, qui aide Google à comprendre précisément qui vous êtes."
    },
    {
      title: "GEO",
      alias: "Generative Engine Optimization",
      desc: "L'optimisation de votre visibilité sur les moteurs IA (ChatGPT, Gemini, Claude), en complément du SEO classique."
    },
    {
      title: "Référencement local",
      alias: "ou SEO local",
      desc: "Deux termes strictement équivalents pour désigner l'ensemble de cette stratégie de visibilité géolocalisée."
    }
  ];

  return (
    <section className="py-24 border-y border-border/50 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <BookOpen className="w-4 h-4" /> Glossaire
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Le SEO Local expliqué simplement</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {terms.map((term, i) => (
            <div key={i} className="glass-card border border-border p-6 rounded-xl hover:border-ocean/40 transition-colors">
              <strong className="block font-heading text-lg text-foreground mb-1">{term.title}</strong>
              {term.alias && <span className="block text-xs font-semibold text-ocean uppercase tracking-widest mb-3">{term.alias}</span>}
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">{term.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
