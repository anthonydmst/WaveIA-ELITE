"use client";

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function SeoLocalCtaSection() {
  return (
    <section className="py-24 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <div className="glass-card bg-ocean/10 border-ocean/30 p-10 md:p-16 text-center animate-in rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Prêt à devenir la référence locale de votre secteur ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Obtenez un <strong>audit gratuit et sans engagement</strong> de votre visibilité locale actuelle, réalisé par un expert Wave.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-lg px-10 py-5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                🎯 Je réserve mon audit gratuit <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Sans engagement</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Réponse sous 24h</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Diagnostic personnalisé</span>
            </div>
         </div>
      </div>
    </section>
  );
}
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
"use client";

import React, { useState } from 'react';

export function SeoLocalFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      q: "Combien de temps avant de voir des résultats ?",
      a: "Les premiers effets sur votre fiche Google Business Profile peuvent apparaître en quelques semaines. Une stratégie complète (site + fiche + avis + backlinks) se construit généralement sur 3 à 6 mois pour des résultats durables."
    },
    {
      q: "Le SEO local fonctionne-t-il pour tous les secteurs ?",
      a: "Il est particulièrement efficace pour les artisans, commerces de proximité, professions libérales, immobilier, santé/bien-être et tout établissement recevant du public ou intervenant sur une zone géographique définie."
    },
    {
      q: "Dois-je avoir un site web pour faire du SEO local ?",
      a: "Un site est fortement recommandé : il agit en complément de votre fiche Google et démultiplie vos chances d'apparaître à la fois sur la carte et dans les résultats classiques."
    },
    {
      q: "Quelle est la différence entre SEO local et publicité locale (Ads) ?",
      a: "Le SEO local génère du trafic organique et durable sans coût par clic, tandis que la publicité offre une visibilité immédiate mais s'arrête dès que le budget s'arrête. Les deux sont complémentaires."
    },
    {
      q: "Comment mesurez-vous les résultats ?",
      a: "Nous suivons votre position sur une carte quadrillée de votre zone, le nombre d'appels et de demandes générées via votre fiche, et l'évolution du trafic vers votre site."
    },
    {
      q: "J'interviens sur plusieurs villes : dois-je créer plusieurs fiches Google ?",
      a: "Non. Une seule fiche par adresse physique réelle : créer plusieurs fiches pour une même entreprise expose à une suspension. La bonne pratique consiste à créer des pages dédiées sur votre site pour chaque ville ou quartier ciblé, reliées à votre fiche unique."
    },
    {
      q: "Le SEO local et les IA (ChatGPT, Gemini) sont-ils vraiment liés ?",
      a: "Oui : ces outils s'appuient sur les mêmes données que Google Maps (nom, adresse, téléphone, avis) pour recommander des entreprises locales. Une présence NAP cohérente sert donc doublement votre visibilité."
    },
    {
      q: "Est-ce risqué de modifier ma fiche Google trop souvent ?",
      a: "Oui. L'algorithme local pénalise les modifications trop fréquentes ou trop nombreuses en une seule fois. C'est pourquoi nous appliquons chaque optimisation avec un rythme mesuré."
    },
    {
      q: "Combien coûte un accompagnement SEO local ?",
      a: "Le budget dépend de votre secteur, de la concurrence locale et du nombre de zones à couvrir. Nous établissons un devis sur mesure après l'audit gratuit — sans coût caché ni engagement de durée."
    },
    {
      q: "J'ai déjà été déçu par une agence SEO, pourquoi ce serait différent avec Wave ?",
      a: "C'est une inquiétude légitime et largement partagée : 37 % des dirigeants de TPE/PME françaises déclarent avoir du mal à trouver un prestataire numérique fiable. Chez Wave, chaque action est documentée, chaque résultat est mesurable dans votre reporting mensuel, et vous n'êtes jamais engagé sur la durée."
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-center mx-auto">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Vos questions sur le SEO Local</h2>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card border border-border rounded-2xl overflow-hidden hover:border-ocean/30 transition-colors">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-5 flex justify-between font-heading font-bold text-foreground text-left items-center group"
              >
                <span className="text-[0.95rem]">{faq.q}</span>
                <span className={`text-ocean text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'group-hover:scale-110'}`}>+</span>
              </button>
              <div className={`px-6 text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { BookOpen } from 'lucide-react';

export function SeoLocalLexiconSection() {
  const terms = [
    {
      title: "Fiche Google Business Profile",
      alias: "ex-Google My Business",
      desc: "Votre fiche d'établissement gratuite sur Google, visible sur Maps et dans les résultats de recherche."
    },
    {
      title: "Pack Local",
      alias: "ou Map Pack",
      desc: "Le bloc des 3 entreprises affichées en haut des résultats pour une recherche géolocalisée."
    },
    {
      title: "NAP",
      alias: "Name, Address, Phone",
      desc: "Vos Nom, Adresse et Téléphone, qui doivent être identiques partout sur le web."
    },
    {
      title: "Citations locales",
      alias: "",
      desc: "Les mentions de votre NAP sur des annuaires (Pages Jaunes, Apple Maps, CCI, etc.), qui renforcent votre crédibilité."
    },
    {
      title: "Backlinks locaux",
      alias: "",
      desc: "Des liens provenant de sites de votre région, qui signalent votre ancrage géographique à Google."
    },
    {
      title: "Schema / données structurées",
      alias: "",
      desc: "Un code technique invisible pour l'internaute, qui aide Google à comprendre précisément qui vous êtes."
    },
    {
      title: "GEO",
      alias: "Generative Engine Optimization",
      desc: "L'optimisation de votre visibilité sur les moteurs IA (ChatGPT, Gemini, Claude), en complément du SEO classique."
    },
    {
      title: "Référencement local",
      alias: "ou SEO local",
      desc: "Deux termes strictement équivalents pour désigner l'ensemble de cette stratégie de visibilité géolocalisée."
    }
  ];

  return (
    <section className="py-24 border-y border-border/50 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <BookOpen className="w-4 h-4" /> Glossaire
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Le SEO Local expliqué simplement</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {terms.map((term, i) => (
            <div key={i} className="glass-card border border-border p-6 rounded-xl hover:border-ocean/40 transition-colors">
              <strong className="block font-heading text-lg text-foreground mb-1">{term.title}</strong>
              {term.alias && <span className="block text-xs font-semibold text-ocean uppercase tracking-widest mb-3">{term.alias}</span>}
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">{term.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function SeoLocalMethodologySection() {
  const steps = [
    {
      num: "01",
      title: "Audit complet et diagnostic (12 points de contrôle)",
      desc: "Nous ne nous contentons pas de regarder votre fiche en surface. Notre audit couvre : la cohérence de votre NAP sur le web, le choix de catégorie (vs concurrents Top 3), l'exhaustivité des champs, l'indexation et la vitesse du site, la structure des balises, l'existence de pages locales, la qualité sémantique des avis, la présence sur les annuaires stratégiques, et votre visibilité sur les moteurs IA (ChatGPT, Gemini, Claude)."
    },
    {
      num: "02",
      title: "Optimisation chirurgicale de votre fiche Google Business Profile",
      desc: "Catégorie principale et jusqu'à 9 catégories secondaires alignées sur les concurrents. Rédaction optimisée de votre description sans bourrage de mots-clés. Services détaillés reliés à votre site. Calendrier éditorial de publications étalées dans le temps. Paramétrage précis des horaires, zones desservies et attributs."
    },
    {
      num: "03",
      title: "Création de vos pages locales et maillage interne",
      desc: "Nous créons des pages web dédiées à chacune de vos zones d'intervention (règle '1 service = 1 ville' ou '1 quartier'). Contenu unique ancré localement, balises Title et H1 optimisées, maillage interne structuré géographique, et intégration technique de la carte Google Maps sur chaque page locale."
    },
    {
      num: "04",
      title: "Balisage technique (Schema / données structurées)",
      desc: "Nous intégrons un balisage Schema JSON-LD (type LocalBusiness) strictement identique à votre fiche Google, testé et validé sans erreur avec l'outil officiel, et placé exclusivement sur la page liée à votre fiche — jamais dilué sur tout le site."
    },
    {
      num: "05",
      title: "Cohérence NAP & citations locales",
      desc: "Nous auditons et corrigeons vos informations sur l'ensemble des annuaires stratégiques (Pages Jaunes, Apple Maps, Bing Places, Waze) et réseaux sociaux. Cette cohérence à la lettre près est le socle indispensable de toute stratégie locale durable et sécurise votre visibilité auprès des IA génératives."
    },
    {
      num: "06",
      title: "Stratégie d'avis clients qualitatifs",
      desc: "Mise en place d'un processus simple et automatisé de collecte d'avis (SMS post-prestation, scripts de demande), à un rythme régulier et naturel. Respect total du RGPD. Nous assurons également la gestion professionnelle de vos réponses pour rassurer vos prospects."
    },
    {
      num: "07",
      title: "Développement de l'autorité locale (netlinking)",
      desc: "Acquisition de liens locaux qualitatifs (partenariats, presse régionale, CCI, mairies, associations locales, annuaires ciblés) pour renforcer la confiance que Google et les IA accordent à votre entreprise. La qualité primera toujours sur la quantité."
    },
    {
      num: "08",
      title: "Suivi, reporting et itération raisonnée",
      desc: "Suivi mensuel de votre position sur carte quadrillée (par quartier), reporting transparent sur les appels et demandes générés, et ajustements réguliers. L'algorithme local récompense la régularité et pénalise les modifications trop brusques."
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> Processus de A à Z
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground leading-tight">
            Notre méthode, étape par étape
          </h2>
        </div>
        
        <div className="relative max-w-4xl mt-10 mb-20">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ocean via-purple-500 to-transparent hidden md:block"></div>
          
          {steps.map((p, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-7 mb-10 pb-10 border-b border-border/50 last:border-0 last:pb-0 relative z-10 w-full animate-in fade-in slide-in-from-right-8" style={{animationDelay: `${i * 100}ms`}}>
              <div className="w-14 h-14 rounded-full glass-card border border-border flex items-center justify-center font-heading font-bold text-lg text-ocean shrink-0 bg-background/80 relative md:-left-0">
                {p.num}
              </div>
              <div className="pt-2 flex-1">
                <h4 className="text-xl font-bold font-heading text-foreground mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-24">
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
            📅 Discuter de ma stratégie avec un expert Wave
          </a>
        </div>

        {/* Audit Checklist Box */}
        <div className="glass-card bg-background/40 border border-border rounded-3xl p-10 lg:p-14 animate-in">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-3">Notre grille d'audit SEO Local (18 facteurs)</h3>
            <p className="text-muted-foreground">Une vérification exhaustive pour ne laisser aucune faille à vos concurrents.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">Fiche Google Business Profile</h4>
              <ul className="space-y-4">
                {['Catégorie principale et secondaires', 'Nom conforme (Kbis, sans sur-optimisation)', 'Description et champ lexical', 'Services, produits et tarifs', 'Horaires et attributs', 'Photos et fraîcheur de publication'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">Site web & technique</h4>
              <ul className="space-y-4">
                {['Pages locales par ville/quartier', 'Balises Title, H1, Meta description', 'Balisage Schema (LocalBusiness)', 'Maillage interne géographique', 'Intégration carte Google Maps', 'Vitesse et indexation'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">Autorité & réputation</h4>
              <ul className="space-y-4">
                {['Cohérence NAP sur les annuaires', 'Volume et qualité sémantique des avis', 'Réponses aux avis', 'Backlinks locaux qualitatifs', 'Signaux comportementaux (itinéraires, appels)', 'Visibilité sur les moteurs IA (GEO)'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function SeoLocalOfferSection() {
  const inclusions = [
    "Audit complet de votre visibilité locale actuelle",
    "Optimisation complète de votre fiche Google Business Profile",
    "Création de pages locales optimisées sur votre site",
    "Correction et harmonisation de votre NAP sur le web",
    "Stratégie de collecte d'avis clients",
    "Acquisition de backlinks locaux qualitatifs",
    "Suivi de position mensuel et reporting"
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> Ce qui est inclus
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Ce que comprend notre accompagnement SEO Local</h2>
        </div>

        <div className="glass-card border border-border rounded-3xl p-10 lg:p-14 animate-in fade-in slide-in-from-bottom-4">
          <ul className="grid sm:grid-cols-2 gap-6 mb-12">
            {inclusions.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm font-medium">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center pt-8 border-t border-border/50">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[0.95rem] px-10 py-4 rounded-full hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
              📞 Demander mon devis personnalisé
            </a>
            <p className="mt-4 text-xs text-muted-foreground italic">
              Réponse sous 24h ouvrées, sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { AlertCircle, MapPin, Globe, Star, Bot, SearchX } from 'lucide-react';

export function SeoLocalProblemSection() {
  const problems = [
    {
      icon: <MapPin className="w-8 h-8 text-red-400" />,
      title: "Fiche incomplète ou mal catégorisée",
      desc: "Votre fiche Google Business Profile n'exploite pas tout son potentiel. Sans les bonnes catégories, Google ne vous affichera pas pour les requêtes de vos clients."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: "Informations incohérentes",
      desc: "Nom, adresse, téléphone (NAP) diffèrent sur le web. Google déteste les incohérences et pénalisera votre positionnement local."
    },
    {
      icon: <SearchX className="w-8 h-8 text-yellow-400" />,
      title: "Aucune page dédiée par zone",
      desc: "Si vous intervenez sur plusieurs villes sans avoir une page spécifique pour chacune, vous perdez le trafic ciblé de ces localités."
    },
    {
      icon: <Star className="w-8 h-8 text-blue-400" />,
      title: "Avis insuffisants ou trop anciens",
      desc: "Vos clients satisfaits ne laissent pas d'avis, alors que vos concurrents en accumulent. Un profil sans preuve sociale récente ne convertit pas."
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: "Invisible pour les moteurs IA",
      desc: "Les recherches via ChatGPT, Gemini ou Claude augmentent. Sans présence optimisée, vous disparaissez des recommandations de ces nouvelles IA."
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div> Le Constat
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground leading-tight">
            Vos concurrents captent vos clients avant même qu'ils ne vous connaissent
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-6">
            Selon le Baromètre France Num 2025 (Direction Générale des Entreprises), <strong>65 % des TPE/PME françaises ont un site web</strong> — mais avoir un site ne veut pas dire être visible. L'<strong>acquisition de nouveaux clients</strong> reste le premier bénéfice attendu du numérique par les dirigeants, cité par 48 % d'entre eux. Le problème n'est donc plus l'outil, mais la visibilité.
          </p>
          <p className="text-lg text-muted-foreground font-light">
            Aujourd'hui, un client qui cherche votre activité ne "cherche" plus vraiment — il <strong>tape sa ville et clique sur le premier résultat qui s'affiche.</strong> Si ce n'est pas vous :
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {problems.map((card, i) => (
            <div key={i} className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:border-ocean/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 100}ms`}}>
              <div className="w-12 h-12 bg-ocean/5 border border-border rounded-xl flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold font-heading text-foreground mb-3">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card bg-ocean/5 border-l-4 border-ocean rounded-r-2xl p-8 flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-ocean shrink-0 mt-1" />
            <p className="text-lg font-heading text-foreground italic font-medium leading-relaxed">
              "Un site en position 1 sur Google ne suffit plus si votre fiche Google Maps n'est pas optimisée : c'est elle qui capte l'attention en premier."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { ArrowRight, TrendingUp, MapPin, PhoneCall } from 'lucide-react';

export function SeoLocalProofSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div> Notre méthode
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Des leviers concrets, mesurés mois après mois</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Fiche Google Business Profile</span>
              <PhoneCall className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-lg font-bold text-foreground mb-2">Optimisation complète de votre fiche</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Catégorie, photos, posts réguliers et stratégie d'avis : nous structurons votre fiche pour capter les appels et itinéraires de vos clients à proximité.
            </p>
          </div>

          <div className="glass-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-transform animate-in fade-in slide-in-from-bottom-4 delay-100">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Pages locales dédiées</span>
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-lg font-bold text-foreground mb-2">Une page par zone d'intervention</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chaque ville ciblée reçoit un contenu unique et documenté, avec un suivi mensuel de vos positions et de votre trafic qualifié.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
            <TrendingUp className="w-4 h-4" /> Je veux ces résultats pour mon entreprise <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { ArrowRight, MapPin, Target, Star } from 'lucide-react';

export function SeoLocalSolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div>
            L'APPROCHE WAVE
            <div className="w-5 h-[1.5px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Wave, l'agence qui maîtrise les rouages<br className="hidden md:block" /> du référencement local
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Chez Wave, le SEO Local n'est pas une case cochée dans une offre généraliste. C'est un <strong>pôle dédié</strong>, piloté par une méthodologie construite autour des <strong>3 piliers fondamentaux</strong> de l'algorithme local de Google.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-in delay-100 mb-16">
          {/* Pillar 1 */}
          <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[350px]">
            <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">01</div>
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-ocean/10 text-ocean flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Proximité</h3>
              <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">L'ancrage géographique.</strong>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                Nous optimisons votre visibilité auprès des internautes proches de votre zone de chalandise. Plus l'utilisateur est près de vous, plus vous avez de chances d'apparaître en premier.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[350px]">
            <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">02</div>
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-ocean/10 text-ocean flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Pertinence</h3>
              <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">L'alignement avec l'intention.</strong>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                L'alignement exact entre vos services, vos catégories et les mots-clés tapés par vos futurs clients. Nous structurons vos offres pour répondre précisément aux recherches locales.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card glass-card-hover p-10 flex flex-col relative overflow-hidden group min-h-[350px]">
            <div className="absolute -right-4 -top-8 font-heading font-black text-[150px] text-ocean/5 group-hover:text-ocean/10 transition-all duration-500 pointer-events-none group-hover:scale-110">03</div>
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-ocean/10 text-ocean flex items-center justify-center mb-6">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Notoriété</h3>
              <strong className="block text-foreground text-[0.95rem] font-medium mb-4 pb-4 border-b border-border/50">La confiance numérique.</strong>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                Votre crédibilité aux yeux de Google (volume et qualité des avis, citations sur les annuaires, backlinks locaux). C'est ce qui fait la différence entre la 4ème et la 1ère place.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-foreground font-heading font-bold text-[0.95rem] px-8 py-3.5 rounded-full border border-border hover:border-ocean hover:text-ocean transition-all">
            📊 Je veux savoir où j'en suis face à mes concurrents <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';

export function SeoLocalStatsSection() {
  const stats = [
    {
      value: "46 %",
      desc: "des recherches Google ont une intention locale, contre environ 30 % il y a quelques années à peine."
    },
    {
      value: "+900 %",
      desc: "de bond sur les recherches « près de moi » en quelques années."
    },
    {
      value: "75 %",
      desc: "des clics se concentrent sur le Top 3 du « Pack Local »."
    },
    {
      value: "76 %",
      desc: "des internautes se déplacent en magasin dans les 24h après une recherche locale."
    },
    {
      value: "92 %",
      desc: "des Français consultent les avis Google avant un achat."
    },
    {
      value: "62 %",
      desc: "des consommateurs évitent une entreprise dont les informations en ligne sont incorrectes."
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-ocean mb-4">
             <div className="w-5 h-[1.5px] bg-primary"></div> Impact Business <div className="w-5 h-[1.5px] bg-primary"></div>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Le SEO Local, un levier à fort impact</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card border border-border rounded-2xl p-8 text-center hover:border-ocean/40 transition-colors animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: `${i * 100}ms`}}>
              <strong className="block text-4xl lg:text-5xl font-extrabold font-heading text-ocean mb-4">{stat.value}</strong>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-xs text-muted-foreground italic max-w-2xl mx-auto">
          * Sources : Baromètre France Num 2025 (Direction Générale des Entreprises), IFOP, BrightLocal, Backlinko, AIOSEO.
        </p>
      </div>
    </section>
  );
}
