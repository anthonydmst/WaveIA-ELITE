"use client";

import React from 'react';

export function SeoLocalStatsSection() {
  const stats = [
    {
      value: "46 %",
      title: "Intention Locale",
      desc: "des recherches Google ont une intention locale, contre environ 30 % il y a quelques années à peine."
    },
    {
      value: "+900 %",
      title: "Croissance",
      desc: "de bond sur les recherches « près de moi » en quelques années."
    },
    {
      value: "75 %",
      title: "Pack Local",
      desc: "des clics se concentrent sur le Top 3 du « Pack Local » sur Maps et Google."
    },
    {
      value: "76 %",
      title: "Conversion Physique",
      desc: "des internautes se déplacent en magasin dans les 24h après une recherche locale."
    },
    {
      value: "92 %",
      title: "Preuve Sociale",
      desc: "des Français consultent les avis Google avant un achat ou une prise de contact."
    },
    {
      value: "62 %",
      title: "Friction",
      desc: "des consommateurs évitent une entreprise dont les informations en ligne sont incorrectes."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 animate-in">
           <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> IMPACT COMMERCIAL
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            Le SEO Local, un levier à <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">fort impact.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Les habitudes de consommation ont radicalement changé. Votre présence locale n'est plus une option, c'est le principal moteur d'acquisition de votre zone de chalandise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in delay-200">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border border-border flex flex-col hover:border-ocean/40 transition-colors group">
              <div className="flex-1">
                <h4 className="font-bold text-4xl lg:text-5xl text-ocean mb-1 leading-tight">{stat.value}</h4>
                <p className="text-sm font-black uppercase tracking-widest text-foreground mt-4 mb-3">{stat.title}</p>
                <p className="text-[0.9rem] text-muted-foreground leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
