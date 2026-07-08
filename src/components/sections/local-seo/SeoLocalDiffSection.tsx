"use client";

import React from 'react';
import { Bot, Check, X } from 'lucide-react';

export function SeoLocalDiffSection() {
  const diffs = [
    { sub: "Sans Boîte Noire", title: "Méthodologie transparente", desc: "Pas de 'boîte noire', vous savez ce qui est fait et pourquoi." },
    { sub: "Suivi ROI", title: "Reporting mensuel clair", desc: "Évolution de vos positions, appels générés, ROI mesurable." },
    { sub: "White Hat SEO", title: "Expertise 100 % éthique", desc: "Nous respectons les règles de Google pour une visibilité durable, pas éphémère." },
    { sub: "Synergie Digitale", title: "Vision globale", desc: "Fiche Google, site web et publicité travaillent ensemble, pas en silo." },
    { sub: "Innovations 2026", title: "Anticipation IA (GEO)", desc: "Nous optimisons aussi votre visibilité sur les moteurs de recherche IA (ChatGPT, Gemini)." },
    { sub: "Accompagnement", title: "Un interlocuteur dédié", desc: "Pas de ticket support anonyme, un vrai suivi humain." },
    { sub: "Liberté Totale", title: "Sans engagement de durée", desc: "Vous restez parce que ça fonctionne, pas parce qu'un contrat vous y oblige." },
    { sub: "Légalité", title: "Conformité RGPD", desc: "La collecte d'avis et l'usage des coordonnées respectent strictement le cadre légal." }
  ];

  return (
    <div className="w-full relative z-10">
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> NOTRE DIFFÉRENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Pourquoi choisir Wave plutôt qu'<em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">une autre agence ?</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              37 % des dirigeants de TPE/PME françaises déclarent avoir du mal à trouver un prestataire numérique fiable. Nous savons que la confiance se mérite avant de se demander. Voici nos engagements fondamentaux :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in delay-100">
            {diffs.map((diff, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-border flex flex-col hover:border-ocean/40 transition-colors group">
                <div className="flex-1">
                  <p className="text-sm font-black uppercase tracking-widest text-ocean mb-3">{diff.sub}</p>
                  <h4 className="font-bold text-lg text-foreground mb-2 leading-tight">{diff.title}</h4>
                  <p className="text-[0.9rem] text-muted-foreground leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO SECTION USING "EXCELLENCE OPÉRATIONNELLE" CARDS STYLE */}
      <section className="py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 animate-in">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
               <div className="w-5 h-[1.5px] bg-primary"></div> G.E.O. (Generative Engine Optimization)
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Vos futurs clients ne cherchent plus <em className="not-italic text-ocean relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ocean after:to-transparent">seulement sur Google</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              26 % des TPE/PME françaises utilisent déjà l'intelligence artificielle dans leur activité. Vos clients font de même : un internaute qui demande à une IA "quel est le meilleur prestataire de mon secteur" reçoit déjà une réponse basée sur vos données locales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in delay-100">
            <div className="glass-card bg-background/50 backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col items-start relative overflow-hidden group hover:border-ocean/40 transition-colors">
              <h3 className="text-xl font-bold font-heading mb-6 text-foreground relative z-10 flex items-center gap-2">
                <Bot className="w-6 h-6 text-ocean" /> L'enjeu des IA Génératives
              </h3>
              
              <div className="space-y-4 relative z-10 w-full">
                <div className="p-4 rounded-xl bg-card border border-border/50">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2 mb-2"><X className="w-4 h-4"/> Le Risque Actuel</p>
                  <p className="text-[0.9rem] text-foreground/90 leading-relaxed">Un NAP (Nom, Adresse, Téléphone) incohérent provoque des erreurs et des oublis dans les réponses des IA. Vous disparaissez de leurs recommandations.</p>
                </div>
                <div className="p-4 rounded-xl bg-ocean/5 border border-ocean/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2 mb-2"><Check className="w-4 h-4"/> Notre Intervention</p>
                  <p className="text-[0.9rem] text-foreground/90 leading-relaxed">Un NAP exact et vérifié vous positionne naturellement. Nous auditons et corrigeons vos données à la source pour sécuriser cette nouvelle porte d'entrée client.</p>
                </div>
              </div>
            </div>

            <div className="glass-card bg-background/50 backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col items-start relative overflow-hidden group hover:border-ocean/40 transition-colors justify-center">
              <div className="w-full space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center shrink-0 text-xs">Vous</div>
                  <div className="bg-muted/50 rounded-lg rounded-tl-none p-4 text-sm text-muted-foreground">
                    Quel est le meilleur prestataire de ce secteur dans ma ville ?
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0"><Bot className="w-4 h-4" /></div>
                  <div className="bg-ocean/5 border border-ocean/20 rounded-lg rounded-tl-none p-4 text-sm text-foreground">
                    <p className="mb-2">Basé sur les avis clients et la cohérence des données en ligne, je vous recommande <strong>Votre Entreprise</strong>.</p>
                    <p className="text-muted-foreground">Ils ont d'excellents retours concernant leur réactivité et leur adresse est vérifiée dans le centre-ville.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
