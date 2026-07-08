"use client";

import React from 'react';
import { ArrowRight, MapPin, PhoneCall } from 'lucide-react';

export function SeoLocalProofSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 animate-in">
           <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> NOTRE MÉTHODE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            Des leviers concrets, mesurés <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">mois après mois.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous ne laissons aucune part au hasard. Notre accompagnement se traduit par des actions vérifiables et des KPIs transparents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 animate-in delay-100 mb-16">
          <div className="flex flex-col relative group glass-card p-8 rounded-2xl border border-border hover:border-ocean/40 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold font-heading text-ocean uppercase">Google Business Profile</span>
              <PhoneCall className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Optimisation complète de votre fiche</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Catégorie, photos, posts réguliers et stratégie d'avis : nous structurons votre fiche pour capter les appels et itinéraires de vos clients à proximité.
            </p>
          </div>

          <div className="flex flex-col relative group glass-card p-8 rounded-2xl border border-border hover:border-ocean/40 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold font-heading text-ocean uppercase">Pages Locales Dédiées</span>
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Une page par zone d'intervention</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chaque ville ciblée reçoit un contenu unique et documenté, avec un suivi mensuel de vos positions et de votre trafic qualifié.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
            Je veux ces résultats pour mon entreprise <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
