import React from 'react';
import { Search, LineChart, Target } from 'lucide-react';

export function EcommerceCroSection() {
  const cards = [
    {
      title: "Audits Ergonomiques et UX",
      description: "Analyse approfondie de votre entonnoir de vente, de la page d'accueil jusqu'à la page de confirmation de paiement.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "User Testing & Data Comportementale",
      description: "Déploiement d'outils de tracking respectueux de la vie privée (Hotjar, Microsoft Clarity, Google Analytics) pour analyser les cartes de chaleur, enregistrer les sessions réelles et comprendre précisément où vos acheteurs abandonnent leur parcours.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Plan d'Action Chirurgical",
      description: "Traduction des données en optimisations concrètes (A/B testing, refonte de formulaires, simplification du check-out) pour faire grimper votre panier moyen.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-ocean"></div>
            L&apos;OBSESSION WAVEIA : LE CRO & L&apos;ANALYSE COMPORTEMENTALE
            <div className="w-5 h-[1.5px] bg-ocean"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Chaque point de friction éliminé est du chiffre d&apos;affaires récupéré.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Le CRO (Conversion Rate Optimization) n&apos;est pas une option chez nous : c&apos;est le fil rouge de nos 3 pôles. Un site e-commerce qui convertit mieux, ce sont des campagnes publicitaires immédiatement plus rentables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-in delay-100">
          {cards.map((card, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col relative overflow-hidden group hover:border-ocean/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="w-12 h-12 rounded-xl bg-ocean/10 text-ocean flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 relative z-10">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 relative z-10">
                {/* Safe escaping within dynamic rendering by splitting string or relying on React escaping text directly */}
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
