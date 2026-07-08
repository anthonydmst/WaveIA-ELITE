"use client";

import React from 'react';

export function SeoLocalSolutionSection() {
  const pillars = [
    {
      num: "01",
      title: "Proximité (L'ancrage géographique)",
      desc: "Nous optimisons votre visibilité auprès des internautes proches de votre zone de chalandise. Plus l'utilisateur est près de vous, plus vous avez de chances d'apparaître en premier."
    },
    {
      num: "02",
      title: "Pertinence (L'alignement avec l'intention)",
      desc: "L'alignement exact entre vos services, vos catégories et les mots-clés tapés par vos futurs clients. Nous structurons vos offres pour répondre précisément aux recherches locales."
    },
    {
      num: "03",
      title: "Notoriété (La confiance numérique)",
      desc: "Votre crédibilité aux yeux de Google (volume et qualité des avis, citations sur les annuaires, backlinks locaux). C'est ce qui fait la différence entre la 4ème et la 1ère place."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 animate-in">
           <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> INGÉNIERIE DE CONVERSION
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            L'anatomie d'une fiche conçue <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">pour dominer votre ville.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chez Wave, le SEO Local n'est pas une case cochée dans une offre généraliste. C'est un pôle dédié, piloté par une méthodologie construite autour des 3 piliers fondamentaux de l'algorithme local de Google :
          </p>
        </div>

        <div className="space-y-6 animate-in delay-100">
          {pillars.map((pillar, i) => (
            <div key={i} className="glass-card bg-card border border-border p-8 md:p-10 rounded-xl flex flex-col md:flex-row gap-8 items-start group hover:border-ocean/40 transition-colors">
              <div className="text-4xl md:text-5xl font-heading font-black text-ocean/20 group-hover:text-ocean transition-colors duration-500 shrink-0 select-none">
                {pillar.num}.
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 text-foreground">{pillar.title}</h3>
                <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
