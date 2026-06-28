"use client";

import React from 'react';
import { Search, PenTool, Code, ShieldCheck, TrendingUp } from 'lucide-react';

export function EcommerceTimelineSection() {
  const steps = [
    { 
      num: "01", 
      icon: <Search className="w-5 h-5"/>, 
      title: "Audit Stratégique & Cadrage Technique (L'Alignement)", 
      subtitle: "La fondation du projet.",
      desc: "Avant de dessiner le moindre écran, nos Directeurs Conseil sécurisent le périmètre. Nous définissons vos objectifs de chiffre d'affaires, choisissons l'infrastructure technologique la plus adaptée (Shopify, PrestaShop, Sylius) et cartographions les flux de données nécessaires avec votre système d'information existant (ERP, WMS, CRM)." 
    },
    { 
      num: "02", 
      icon: <PenTool className="w-5 h-5"/>, 
      title: "UX/UI Design E-commerce (Le Prototypage)", 
      subtitle: "L'habillage statutaire et ergonomique.",
      desc: "Le Pôle Studio entre en scène. Nous concevons l'architecture de l'information pour raccourcir le tunnel d'achat. Vous validez d'abord les parcours via des prototypes en fil de fer (Wireframes), puis nous y intégrons votre identité visuelle (UI). Rien n'est développé sans la validation stricte de votre comité de direction." 
    },
    { 
      num: "03", 
      icon: <Code className="w-5 h-5"/>, 
      title: "Développements & Interconnexion SI (La Machine)", 
      subtitle: "L'exécution technologique.",
      desc: "Nos ingénieurs intègrent les maquettes et configurent le back-office. C'est l'étape cruciale de la synchronisation logistique : nous créons les passerelles (API) entre votre site et vos entrepôts pour que vos stocks, vos factures et vos expéditions soient mis à jour en temps réel, sans intervention humaine." 
    },
    { 
      num: "04", 
      icon: <ShieldCheck className="w-5 h-5"/>, 
      title: "Contrôle Qualité, Tracking & Déploiement (Le Crash-Test)", 
      subtitle: "La sécurisation du lancement.",
      desc: "Avant la mise en ligne publique, nous simulons des centaines de commandes. Nous vérifions la robustesse du tunnel de paiement, la vitesse de chargement et le bon fonctionnement des emails automatiques. En parallèle, nous implémentons les outils de tracking (Google Analytics, Hotjar) pour mesurer chaque future interaction." 
    },
    { 
      num: "05", 
      icon: <TrendingUp className="w-5 h-5"/>, 
      title: "Acquisition, CRO & Infogérance (La Croissance)", 
      subtitle: "Le pilotage de la performance.",
      desc: "Une fois le site en ligne, le projet ne fait que commencer. Le Pôle Performance prend le relais pour activer vos campagnes publicitaires (Ads) et vos séquences d'emailing (CRM). Mensuellement, nous analysons les données de navigation (CRO) pour optimiser votre taux de conversion, tout en assurant la maintenance technique (TMA/TME) de votre infrastructure." 
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-ocean"></div> MÉTHODOLOGIE D&apos;INGÉNIERIE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
            De l&apos;audit initial à la scalabilité : un déploiement maîtrisé.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Lancer ou refondre un site e-commerce ne s&apos;improvise pas. Un projet mal cadré, ce sont des mois de retard et un budget qui explose. Notre méthodologie est structurée comme un pipeline industriel : prédictible, transparente et rythmée. Voici comment nous transformons votre vision en une machine de vente, étape par étape.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex gap-7 mb-10 pb-10 border-b border-border last:border-0 last:pb-0 relative w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 150}ms`}}>
              <div className="w-14 h-14 rounded-full border border-ocean/30 flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-card relative z-20 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                {step.num}
              </div>
              <div className="pt-2 relative z-10">
                <h3 className="text-xl font-bold font-heading text-foreground mb-1 flex items-center gap-2">
                  {step.title}
                </h3>
                <span className="block text-ocean text-sm font-semibold uppercase tracking-wider mb-4">
                  {step.subtitle}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed md:w-[90%]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
}
