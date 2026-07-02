"use client";

import React from 'react';
import { Check, X, ShieldAlert, Bot } from 'lucide-react';

export function SeoLocalDiffSection() {
  const diffs = [
    { title: "Méthodologie transparente", desc: "Pas de 'boîte noire', vous savez ce qui est fait et pourquoi." },
    { title: "Reporting mensuel clair", desc: "Évolution de vos positions, appels générés, ROI mesurable." },
    { title: "Expertise 100 % éthique", desc: "Nous respectons les règles de Google pour une visibilité durable, pas éphémère." },
    { title: "Vision globale", desc: "Fiche Google, site web et publicité travaillent ensemble, pas en silo." },
    { title: "Anticipation IA (GEO)", desc: "Nous optimisons aussi votre visibilité sur les moteurs de recherche IA (ChatGPT, Gemini)." },
    { title: "Un interlocuteur dédié", desc: "Pas de ticket support anonyme, un vrai suivi humain." },
    { title: "Sans engagement de durée", desc: "Vous restez parce que ça fonctionne, pas parce qu'un contrat vous y oblige." },
    { title: "Conformité RGPD", desc: "La collecte d'avis et l'usage des coordonnées respectent strictement le cadre légal." }
  ];

  return (
    <div className="w-full relative z-10">
      {/* ─── DIFFÉRENCIATION ─── */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
              <div className="w-5 h-[1.5px] bg-primary"></div> Notre Différence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Pourquoi choisir Wave plutôt qu'une autre agence ?</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              <strong>37 % des dirigeants de TPE/PME françaises déclarent avoir du mal à trouver un prestataire numérique fiable</strong> — une proportion en hausse de 15 points en un an (Baromètre France Num 2025). Nous savons que la confiance se mérite avant de se demander.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diffs.map((item, i) => (
              <div key={i} className="glass-card border border-border rounded-2xl p-6 hover:border-ocean/40 transition-colors animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 50}ms`}}>
                <div className="flex items-center gap-3 mb-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <strong className="text-foreground font-heading text-sm">{item.title}</strong>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO (L'angle différenciant 2026) ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="glass-card bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.1)_0%,transparent_70%)] border border-border rounded-3xl p-10 lg:p-16 animate-in flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">
                <Bot className="w-4 h-4" /> G.E.O. (Generative Engine Optimization)
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground leading-tight">
                Vos futurs clients ne cherchent plus seulement sur Google
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8">
                <p>
                  <strong>26 % des TPE/PME françaises utilisent déjà l'intelligence artificielle</strong> dans leur activité — un usage qui a doublé en un an. Vos futurs clients suivent la même tendance : un internaute qui demande à une IA "quel est le meilleur prestataire de mon secteur dans ma ville" reçoit déjà une réponse.
                </p>
                <p>
                  Ces outils s'appuient sur les mêmes données que Google Maps — votre NAP, vos avis, vos citations — pour formuler leurs recommandations.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Un <strong>NAP incohérent</strong> provoque des erreurs et des oublis dans les réponses des IA.</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Un <strong>NAP exact et vérifié</strong> vous positionne naturellement dans leurs recommandations.</span>
                </li>
              </ul>
              <p className="text-sm text-foreground font-medium mt-6">
                Nous auditons et corrigeons vos données à la source pour sécuriser cette nouvelle porte d'entrée client.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* Illustration type ChatGPT */}
              <div className="glass-card bg-background/80 border border-border rounded-xl p-6 shadow-2xl relative">
                <div className="absolute top-3 left-4 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mt-6 space-y-6">
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
        </div>
      </section>

      {/* ─── CE QUE NOUS NE FERONS JAMAIS ─── */}
      <section className="py-16 bg-red-500/5 border-y border-red-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-4">
                <ShieldAlert className="w-4 h-4" /> Ligne rouge
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-foreground leading-tight">
                Une croissance qui dure, pas un feu de paille
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Certaines pratiques promettent des résultats rapides mais exposent votre fiche à une <strong>suspension définitive</strong>. Chez Wave, nous les excluons systématiquement pour construire une visibilité qui résiste aux mises à jour de Google.
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              {[
                "Bourrage de mots-clés dans le nom de votre fiche",
                "Faux avis ou avis générés en rafale",
                "Fiches ou adresses fictives",
                "Photos issues de banques d'images génériques"
              ].map((item, i) => (
                <div key={i} className="glass-card bg-background/50 border-red-500/20 p-4 rounded-xl flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
