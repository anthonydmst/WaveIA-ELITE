"use client";

import React, { useState } from 'react';
import { ChevronDown, Target, Wand2, Users } from 'lucide-react';

export function EcommercePerformanceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      id: "A",
      title: "Acquisition Multicanale & Media Buying",
      icon: <Target className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Nous activons un écosystème de leviers payants (Ads) rigoureusement sélectionnés selon la maturité de votre marché et les habitudes de votre cible. Nous connectons vos données d&apos;achat pour optimiser vos coûts d&apos;acquisition (CAC).
          </p>
          <div className="mt-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong className="text-foreground text-sm block">Search & Shopping (Google Ads, Bing)</strong>
                  <span className="text-muted-foreground text-sm">Capture de la demande intentionniste chaude au moment précis de la recherche.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong className="text-foreground text-sm block">Social & Entertainment Ads (Meta, TikTok, Pinterest, Snapchat, YouTube)</strong>
                  <span className="text-muted-foreground text-sm">Création du besoin, ciblage comportemental et enrichissement continu de votre haut de funnel.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong className="text-foreground text-sm block">Audio Proximité</strong>
                  <span className="text-muted-foreground text-sm">Intégration de campagnes immersives via Spotify Ads pour émerger au cœur du quotidien de vos prospects.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "B",
      title: "Creative Strategy",
      icon: <Wand2 className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Pour pérenniser vos campagnes à grande échelle, la créa est le levier numéro un. Nos Performance Managers collaborent au quotidien avec notre Studio pour analyser la data publicitaire, isoler les hooks visuels qui convertissent et décliner des assets publicitaires hautement performants.
          </p>
        </div>
      )
    },
    {
      id: "C",
      title: "Rétention, CRM & Marketing Automation",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            L&apos;acquisition coûte cher ; la rétention crée votre marge. Nous transformons vos acheteurs d&apos;un jour en clients fidèles et réguliers.
          </p>
          <div className="mt-6">
            <div className="grid gap-4">
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-2">Workflows Automatisés</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">Scénarios de bienvenue, relances automatisées de paniers abandonnés, séquences post-achat, réactivation des clients dormants.</p>
              </div>
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-2">Technologies Maîtrisées</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">Klaviyo, Brevo, Mailchimp. Nous intervenons directement sur vos infrastructures pour optimiser la délivrabilité et la segmentation de votre base de données.</p>
              </div>
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-2">Maillage Interne</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">Nous structurons vos parcours emailing (CRM et Marketing Automation) pour maximiser l&apos;efficacité de vos bases de données.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-card border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div>
            LA PERFORMANCE
            <div className="w-5 h-[1.5px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Le design de la performance publicitaire et de la rétention.
          </h2>
        </div>

        <div className="space-y-4 animate-in delay-100">
          {sections.map((section, idx) => (
            <div 
              key={section.id} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'ring-1 ring-ocean/50 shadow-[0_0_30px_rgba(14,165,233,0.1)]' : 'hover:border-ocean/30'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center">
                  <h3 className="font-heading font-bold text-lg text-foreground">{section.title}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 border-t border-border/50 mx-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
