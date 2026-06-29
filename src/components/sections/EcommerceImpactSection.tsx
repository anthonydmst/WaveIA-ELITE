"use client";

import React from 'react';
import { Star, TrendingUp, ShoppingCart, Target } from 'lucide-react';

export function EcommerceImpactSection() {
  const metrics = [
    {
      value: "+ 45 %",
      label: "sur le taux de conversion global",
      desc: "(grâce au CRO et à l'UX).",
      icon: <TrendingUp className="w-5 h-5 text-ocean" />
    },
    {
      value: "+ 28 %",
      label: "d'augmentation du Panier Moyen",
      desc: "(grâce à l'up-sell automatisé).",
      icon: <ShoppingCart className="w-5 h-5 text-ocean" />
    },
    {
      value: "- 35 %",
      label: "sur le Coût d'Acquisition Client",
      desc: "(grâce à la Creative Strategy et aux landing pages optimisées).",
      icon: <Target className="w-5 h-5 text-ocean" />
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column : Texts & Metrics */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div>
              IMPACT MESURÉ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-foreground">
              Nous ne vendons pas des sites. Nous livrons des actifs <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">rentables.</em>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
              L&apos;ingénierie, le design et le CRO n&apos;ont qu&apos;un seul but : faire exploser vos indicateurs de performance (KPIs). Voici l&apos;impact d&apos;une refonte e-commerce couplée à une stratégie d&apos;acquisition Waveia.
            </p>

            <div className="space-y-8">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {metric.icon}
                  </div>
                  <div>
                    <div className="text-4xl font-black font-heading text-foreground mb-1 group-hover:text-ocean transition-colors duration-300">
                      {metric.value}
                    </div>
                    <div className="text-base font-semibold text-foreground mb-1">
                      {metric.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column : Testimonial Card */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-ocean/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="glass-card p-10 md:p-12 rounded-3xl border border-ocean/20 bg-card/60 backdrop-blur-xl relative z-10 shadow-[0_20px_60px_rgba(14,165,233,0.1)] hover:shadow-[0_20px_80px_rgba(14,165,233,0.2)] transition-shadow duration-500">
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-heading font-medium leading-relaxed text-foreground mb-10 relative">
                <span className="absolute -top-6 -left-6 text-6xl text-ocean/20 font-serif">&ldquo;</span>
                Notre ancienne boutique sous-performait malgré un trafic important. L&apos;équipe Waveia a totalement restructuré notre tunnel d&apos;achat et connecté notre site à notre ERP. En 3 mois, nous avons récupéré les paniers abandonnés qui nous échappaient et notre chiffre d&apos;affaires en ligne a décollé sans augmenter notre budget publicitaire.
                <span className="absolute -bottom-10 -right-2 text-6xl text-ocean/20 font-serif leading-none">&rdquo;</span>
              </blockquote>
              
              <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-ocean/20 flex items-center justify-center font-bold text-ocean uppercase">
                  DR
                </div>
                <div>
                  <div className="font-bold text-foreground">Dirigeant</div>
                  <div className="text-sm text-muted-foreground">Secteur Retail BtoC</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
