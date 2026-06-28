"use client";

import React, { useState } from 'react';
import { ChevronDown, Palette, PlaySquare, Sparkles } from 'lucide-react';

export function EcommerceStudioSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      id: "A",
      title: "Direction Artistique, Branding & Brand Content",
      icon: <Palette className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Une identité visuelle forte justifie vos prix et fidélise votre audience. Nous définissons votre ADN de marque et le traduisons en chartes graphiques rigoureuses et en contenus originaux (Shooting photo, banques d&apos;images exclusives).
          </p>
        </div>
      )
    },
    {
      id: "B",
      title: "Creative Content & UGC (User Generated Content)",
      icon: <PlaySquare className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Nous maîtrisons toute la palette de la preuve sociale et de la pédagogie produit. Nous produisons vos vidéos au format Motion Design (idéal pour simplifier une offre complexe) et orchestrons vos campagnes UGC pour injecter de l&apos;authenticité et de la réassurance dans votre parcours client.
          </p>
        </div>
      )
    },
    {
      id: "C",
      title: "Motion & IA Design (L'Exécution Nouvelle Génération)",
      icon: <Sparkles className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Chez Waveia, l&apos;Intelligence Artificielle n&apos;est pas un concept, c&apos;est un levier opérationnel. Au sein de notre studio, nous combinons l&apos;animation traditionnelle aux technologies d&apos;IA générative.
          </p>
          <div className="mt-6 bg-ocean/5 border border-ocean/20 rounded-xl p-5">
            <h4 className="font-heading font-bold text-ocean mb-2 text-sm">Pourquoi c&apos;est stratégique :</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              L&apos;IA nous permet d&apos;accélérer la vitesse de production visuelle par 3, de personnaliser vos messages créatifs à grande échelle et de tester instantanément des dizaines de variations graphiques sur vos Social Ads et vos landing pages. Vous profitez d&apos;une flexibilité graphique réservée jusqu&apos;ici aux multinationales.
            </p>
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
            <div className="w-5 h-[1.5px] bg-ocean"></div>
            IMAGE DE MARQUE
            <div className="w-5 h-[1.5px] bg-ocean"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Donner une voix unique et une force de frappe scalable à votre marque.
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
