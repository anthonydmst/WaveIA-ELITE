"use client";

import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function SeoLocalProofSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div> Études de cas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Des résultats concrets, mesurables, durables</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Artisanat du bâtiment</span>
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <strong className="block text-4xl font-extrabold font-heading text-emerald-400 mb-4">+670 %</strong>
            <p className="text-lg font-bold text-foreground mb-2">d'appels en 4 mois</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Après optimisation de sa fiche Google et création de pages locales, un artisan est passé de quelques appels par mois à plus de 30 appels mensuels qualifiés.
            </p>
          </div>

          <div className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4 delay-100">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Service local</span>
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <strong className="block text-4xl font-extrabold font-heading text-emerald-400 mb-4">+125 %</strong>
            <p className="text-lg font-bold text-foreground mb-2">de résultats en 3 mois</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preuve qu'une stratégie locale bien exécutée ne nécessite pas un budget publicitaire important pour générer une croissance mesurable.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card bg-ocean/5 border border-ocean/20 rounded-2xl p-10 text-center animate-in">
            <p className="text-xl md:text-2xl font-heading font-medium text-foreground italic leading-relaxed mb-6">
              "Wave a remis de l'ordre dans notre présence Google. On reçoit enfin des appels de clients proches de notre zone, sans avoir touché à notre budget pub."
            </p>
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-bold">W</div>
              <div className="text-left">
                <strong className="block text-sm text-foreground">Gérant d'une PME</strong>
                <span className="text-xs text-muted-foreground">Client Wave</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
            🚀 Je veux les mêmes résultats pour mon entreprise <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
