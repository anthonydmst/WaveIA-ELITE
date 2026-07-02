"use client";

import React from 'react';

export function SeoLocalStatsSection() {
  const stats = [
    {
      value: "46 %",
      desc: "des recherches Google ont une intention locale, contre environ 30 % il y a quelques années à peine."
    },
    {
      value: "+900 %",
      desc: "de bond sur les recherches « près de moi » en quelques années."
    },
    {
      value: "75 %",
      desc: "des clics se concentrent sur le Top 3 du « Pack Local »."
    },
    {
      value: "76 %",
      desc: "des internautes se déplacent en magasin dans les 24h après une recherche locale."
    },
    {
      value: "92 %",
      desc: "des Français consultent les avis Google avant un achat."
    },
    {
      value: "62 %",
      desc: "des consommateurs évitent une entreprise dont les informations en ligne sont incorrectes."
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> Impact Business <div className="w-5 h-[1.5px] bg-primary"></div>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Le SEO Local, un levier à fort impact</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card border border-border rounded-2xl p-8 text-center hover:border-ocean/40 transition-colors animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 100}ms`}}>
              <strong className="block text-4xl lg:text-5xl font-extrabold font-heading text-ocean mb-4">{stat.value}</strong>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-xs text-muted-foreground italic max-w-2xl mx-auto">
          * Sources : Baromètre France Num 2025 (Direction Générale des Entreprises), IFOP, BrightLocal, Backlinko, AIOSEO.
        </p>
      </div>
    </section>
  );
}
