"use client";

import React from 'react';
import { Database, Route, FileCode2, TestTube2, Activity } from 'lucide-react';

export function RefonteMigrationProtocolSection() {
  const phases = [
    {
      num: "01",
      icon: <Database className="w-5 h-5" />,
      title: "Audit d'exploration et extraction des données (Crawl)",
      content: "Avant toute intervention, nos ingénieurs lancent un crawl exhaustif de votre architecture de site actuelle. Nous extrayons 100 % des URLs indexées, des balises sémantiques et des médias. Cette étape analytique nous permet d'isoler vos pages stratégiques (celles générant le plus fort volume de trafic qualifié) afin de garantir leur intégrité lors de la bascule."
    },
    {
      num: "02",
      icon: <Route className="w-5 h-5" />,
      title: "Plan de routage d'URL (Redirections 301)",
      content: "C'est l'étape critique de toute migration technique. Chaque URL de l'ancien site fait l'objet d'une correspondance stricte (mapping) vers la nouvelle arborescence. L'implémentation de redirections 301 permanentes indique aux algorithmes de Google la nouvelle localisation de vos contenus. Cela prévient la génération d'erreurs 404 et transfère l'historique d'autorité (PageRank) vers vos nouvelles pages."
    },
    {
      num: "03",
      icon: <FileCode2 className="w-5 h-5" />,
      title: "Préservation et optimisation sémantique",
      content: "Le transfert technique s'accompagne d'une migration sémantique rigoureuse. Nous intégrons et optimisons l'ensemble de vos balises stratégiques (Title, Meta Description, structure Hn) pour maintenir la compréhension de vos pages par les moteurs de recherche. Vos contenus les plus performants sont conservés et adaptés aux nouvelles exigences techniques (Core Web Vitals)."
    },
    {
      num: "04",
      icon: <TestTube2 className="w-5 h-5" />,
      title: "Recette technique en environnement de pré-production",
      content: "Afin d'assurer une continuité de service pour votre entreprise, l'ensemble de la nouvelle infrastructure est d'abord déployé sur un serveur de pré-production sécurisé, bloqué à l'indexation (balise noindex). Nous y simulons la bascule de domaine pour valider manuellement les chaînes de redirection, l'absence de boucles, et la stabilité des serveurs avant la mise en ligne publique."
    },
    {
      num: "05",
      icon: <Activity className="w-5 h-5" />,
      title: "Déploiement et monitoring post-migration",
      content: "La mise en production s'effectue de manière transparente pour vos utilisateurs. Dès le déploiement, nous soumettons le nouveau sitemap XML via la Google Search Console pour forcer l'indexation. Cette phase est suivie d'un monitoring actif sur 30 jours (analyse des logs serveurs, suivi des erreurs d'exploration) pour isoler et corriger instantanément la moindre anomalie."
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-border relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-ocean"></div>
            GOUVERNANCE DES DONNÉES | PROTOCOLE DE MIGRATION
            <div className="w-5 h-[1.5px] bg-ocean"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Sécurisation stricte de vos acquis SEO <br className="hidden md:block" />
            <span className="text-ocean">notre plan de transition</span>.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            Une erreur technique lors d'une refonte entraîne en moyenne une perte de <strong className="text-foreground font-semibold">30 à 50 % du trafic organique historique</strong>. Pour une entreprise générant des revenus ou des leads via Google, ce risque est inacceptable. Chez Waveia, le maintien de vos positions SEO n'est pas laissé au hasard : il obéit à un processus d'ingénierie strict en 5 phases techniques pour garantir le transfert intégral de votre autorité vers la nouvelle plateforme.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto animate-in delay-100">
          <div className="absolute left-[39px] md:left-[47px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-ocean via-ocean/50 to-transparent opacity-30"></div>
          
          <div className="space-y-12">
            {phases.map((phase, idx) => (
              <div key={idx} className="relative flex gap-6 md:gap-10 group">
                {/* Timeline Node */}
                <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border-2 border-ocean/30 flex items-center justify-center relative z-10 shadow-sm group-hover:border-ocean/60 group-hover:bg-ocean/5 transition-colors">
                  <span className="font-heading font-black text-3xl md:text-4xl text-ocean leading-none">{phase.num}</span>
                </div>
                
                {/* Content */}
                <div className="pt-2 pb-6 border-b border-border/50 last:border-0 last:pb-0">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 text-foreground group-hover:text-ocean transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-[0.95rem] md:text-base text-muted-foreground leading-relaxed font-light">
                    {phase.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
