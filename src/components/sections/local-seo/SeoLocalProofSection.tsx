"use client";

import React from 'react';
import { ArrowRight, TrendingUp, MapPin, PhoneCall } from 'lucide-react';

export function SeoLocalProofSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div> Notre méthode
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Des leviers concrets, mesurés mois après mois</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Fiche Google Business Profile</span>
              <PhoneCall className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-lg font-bold text-foreground mb-2">Optimisation complète de votre fiche</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Catégorie, photos, posts réguliers et stratégie d'avis : nous structurons votre fiche pour capter les appels et itinéraires de vos clients à proximité.
            </p>
          </div>

          <div className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4 delay-100">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Pages locales dédiées</span>
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-lg font-bold text-foreground mb-2">Une page par zone d'intervention</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chaque ville ciblée reçoit un contenu unique et documenté, avec un suivi mensuel de vos positions et de votre trafic qualifié.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
            <TrendingUp className="w-4 h-4" /> Je veux ces résultats pour mon entreprise <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
