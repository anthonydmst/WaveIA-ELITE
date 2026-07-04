"use client";

import React from 'react';
import { Quote, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function RefontePerformanceSection() {
  const metrics = [
    {
      value: "+ 35 %",
      title: "sur le Taux de Conversion global",
      levier: "Réingénierie des parcours utilisateurs (UX), suppression des étapes superflues dans les formulaires et le tunnel de paiement, rationalisation de l'architecture de l'information."
    },
    {
      value: "- 60 %",
      title: "sur le Temps de Chargement (TTFB)",
      levier: "Éradication de la dette technique, optimisation du code source, déploiement sur des serveurs haute performance. Un chargement ultra-rapide diminue instantanément le taux de rebond de vos visiteurs."
    },
    {
      value: "+ 25 %",
      title: "d'Acquisition Organique (SEO)",
      levier: "Sécurisation des positions historiques via notre protocole de redirection, couplée à une nouvelle structure sémantique qui favorise l'indexation de nouveaux mots-clés par les algorithmes de Google."
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-ocean"></div>
            PERFORMANCE & RENTABILITÉ
            <div className="w-5 h-[1.5px] bg-ocean"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            La validation par les données : <br className="hidden md:block" />
            <span className="text-ocean">l'impact de nos restructurations</span>.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            L'ingénierie technique et l'optimisation de l'interface n'ont qu'une seule finalité : l'amélioration stricte de vos indicateurs de performance (KPIs). Une refonte Waveia vise à rentabiliser votre investissement sur le court terme en maximisant l'efficacité de vos canaux d'acquisition existants. Voici les leviers que nous activons systématiquement, et l'ordre de grandeur de leur impact attendu sur vos indicateurs.
          </p>
        </div>

        {/* 3 Metric Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {metrics.map((metric, idx) => (
            <div key={idx} className="glass-card bg-background/50 border border-border p-8 md:p-10 hover:border-ocean/30 transition-colors animate-in delay-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                {metric.value.startsWith('+') ? <ArrowUpRight className="w-32 h-32 text-foreground" /> : <ArrowDownRight className="w-32 h-32 text-foreground" />}
              </div>
              <div className="relative z-10">
                <div className="font-heading font-black text-5xl md:text-6xl text-foreground mb-4 tracking-tight">
                  {metric.value}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading mb-6 text-foreground">
                  {metric.title}
                </h3>
                <div className="pt-6 border-t border-border/50">
                  <span className="inline-block text-xs font-semibold text-ocean uppercase tracking-wider mb-2">Levier d'action</span>
                  <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed font-light">
                    {metric.levier}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Box */}
        <div className="max-w-4xl mx-auto animate-in delay-200">
          <div className="glass-card bg-ocean/5 border border-ocean/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 md:top-12 left-8 md:left-12 w-10 h-10 md:w-12 md:h-12 text-ocean/20" />

            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-ocean/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 pl-2 md:pl-16 pt-16 md:pt-2">
              <div className="inline-flex items-center gap-2 bg-background border border-border text-ocean text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-sm">
                Notre approche
              </div>

              <h4 className="text-base md:text-lg font-bold font-heading text-foreground mb-6">
                Restructuration de plateforme et suppression de la dette technique
              </h4>

              <blockquote className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                « Une infrastructure qui ne soutient plus votre volume d'activité, des temps de chargement qui dégradent vos campagnes d'acquisition, des mises à jour qui coûtent cher à chaque fois : nous auditons vos flux, sécurisons votre historique d'indexation et déployons une architecture robuste, pensée pour durer. »
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
