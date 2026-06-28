"use client";

import React, { useState } from 'react';
import { Palette, TrendingDown, Clock, ShieldAlert, SearchX, Plus, X } from 'lucide-react';

export function RefonteDiagnosticSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const signals = [
    {
      num: "01",
      icon: <Palette className="w-6 h-6" />,
      title: "L'obsolescence esthétique",
      subtitle: "(Le syndrome du site \"daté\")",
      content: "Vos concurrents affichent des interfaces modernes, fluides et élégantes, tandis que votre site semble figé dans les années passées. Sur le web, l'esthétique n'est pas qu'un détail : un design dépassé (typographies vieillissantes, mise en page austère) détruit instantanément la confiance de l'utilisateur avant même qu'il ne lise votre offre."
    },
    {
      num: "02",
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Le syndrome du \"Panier percé\"",
      subtitle: "(Chute de conversion)",
      content: "Vos campagnes publicitaires et votre SEO attirent du trafic, mais les demandes de contact (ou les ventes) stagnent. L'ergonomie (l'UX) de votre site est devenue confuse, créant de la friction et faisant fuir vos visiteurs au moment de passer à l'action."
    },
    {
      num: "03",
      icon: <Clock className="w-6 h-6" />,
      title: "La dette technique accumulée",
      subtitle: "(Lenteur & Bugs)",
      content: "Le site met plus de 3 secondes à charger. Votre back-office est devenu une usine à gaz où la moindre modification de texte ou d'image nécessite l'intervention coûteuse d'un développeur."
    },
    {
      num: "04",
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Le décalage de positionnement",
      subtitle: "(L'érosion de votre image de marque)",
      content: "Votre entreprise a grandi, vos offres sont montées en gamme, mais votre vitrine digitale n'a pas suivi. Ce décalage dégrade directement l'ADN et la perception de votre marque (Branding). Un site qui ne reflète plus votre identité profonde et votre niveau d'exigence actuel décrédibilise votre statut d'expert, vous empêchant de séduire une clientèle \"Premium\" ou de signer des grands comptes."
    },
    {
      num: "05",
      icon: <SearchX className="w-6 h-6" />,
      title: "Le plafond de verre SEO",
      subtitle: "(Technique, Structure & Sémantique)",
      content: "Google ne pardonne plus l'approximation. Au-delà d'un code source trop lourd ou d'un mauvais affichage mobile, c'est souvent l'architecture même de votre contenu qui vous pénalise. Une arborescence vieillissante, l'absence de cocons sémantiques clairs et un maillage interne mal optimisé empêchent les moteurs de recherche de comprendre et de valoriser votre expertise, offrant vos premières positions à la concurrence."
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(248,113,113,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-red-400"></div>
            DIAGNOSTIC
            <div className="w-5 h-[1.5px] bg-red-400"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            5 signaux qui prouvent que votre site <span className="text-red-400">freine votre croissance</span>.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            La décision de refondre un site ne se prend pas sur une simple envie de changement, mais sur un constat d'urgence. Si vous cumulez un ou plusieurs de ces symptômes, votre plateforme actuelle vous coûte de l'argent chaque jour.
          </p>
        </div>

        <div className="space-y-4 animate-in delay-100">
          {signals.map((signal, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-red-400/40 shadow-[0_0_30px_rgba(248,113,113,0.08)] bg-red-500/5' : 'hover:border-red-400/30 bg-background/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4 md:gap-6 pr-6">
                    <span className={`font-heading font-black text-3xl transition-colors duration-300 text-red-400`}>
                      {signal.num}
                    </span>
                    <div>
                      <h3 className={`font-heading font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
                        {signal.title}
                      </h3>
                      <span className={`text-xs md:text-sm transition-colors duration-300 ${isOpen ? 'text-red-400 font-medium' : 'text-muted-foreground group-hover:text-muted-foreground/80'}`}>
                        {signal.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-red-400 text-white shadow-[0_0_15px_rgba(248,113,113,0.3)]' : 'bg-red-500/10 text-red-400 group-hover:bg-red-500/20'}`}>
                    {isOpen ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-border/50 mx-6 md:mx-8 animate-in fade-in slide-in-from-top-2 duration-300 flex gap-6 items-start">
                    <div className="hidden md:flex w-12 h-12 rounded-xl bg-red-500/10 items-center justify-center shrink-0 text-red-400">
                      {signal.icon}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base md:mt-2">
                      {signal.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
