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
