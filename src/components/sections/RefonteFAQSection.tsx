"use client";

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export function RefonteFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      num: "01",
      question: "Quel est le délai de production pour une refonte complète ?",
      answer: "Le calendrier dépend de la profondeur de la dette technique à purger et du volume de votre architecture. Pour une restructuration globale incluant l'audit SEO, la phase d'ingénierie UX/UI et le développement technique, le cycle de production moyen s'établit entre 2 et 4 mois. Un rétroplanning strict vous est fourni dès la validation du cahier des charges."
    },
    {
      num: "02",
      question: "Cette refonte va-t-elle monopoliser le temps de mes équipes en interne ?",
      answer: "Non, notre agence agit en tant que maître d'œuvre. Nous connaissons le coût du temps de vos équipes. Votre implication (ou celle de votre direction digitale) est concentrée exclusivement sur les jalons stratégiques de validation : l'atelier de cadrage, l'approbation des interfaces (UI), et la recette finale. Nous pilotons l'intégralité de la production technique de notre côté."
    },
    {
      num: "03",
      question: "Le nouveau site sera-t-il connecté à nos outils métiers actuels (ERP, CRM) ?",
      answer: "Absolument. Une plateforme web moderne ne doit pas être un silo isolé, mais le prolongement de votre système d'information. Qu'il s'agisse de votre CRM (HubSpot, Salesforce), de votre ERP logistique ou de vos outils de facturation, nous développons les interconnexions nécessaires (via API ou connecteurs natifs) pour automatiser vos flux de données."
    },
    {
      num: "04",
      question: "Quelle technologie (CMS) utilisez-vous pour reconstruire la plateforme ?",
      answer: "Nous ne forçons aucune technologie par défaut. Le choix du socle technique (WordPress sur-mesure, Shopify, PrestaShop ou architecture Headless) est strictement dicté par votre modèle économique, vos exigences de sécurité et vos objectifs de charge. Notre priorité est de déployer une infrastructure robuste qui garantit à vos équipes une totale autonomie au quotidien."
    },
    {
      num: "05",
      question: "Devons-nous rédiger à nouveau tous les textes de notre site ?",
      answer: "Ce n'est pas une obligation. Lors de l'extraction initiale des données, nous récupérons l'intégralité de vos contenus. S'ils sont déjà performants sur le plan sémantique (SEO), nous les intégrons dans la nouvelle architecture. Si votre positionnement a évolué, notre pôle d'optimisation peut se charger de restructurer et de réécrire vos pages stratégiques."
    },
    {
      num: "06",
      question: "Qui est propriétaire de l'infrastructure et du code à la livraison ?",
      answer: "Votre entreprise, à 100 %. Nous rejetons tout modèle de dépendance ou de \"leasing\" technologique. À la validation du projet et au paiement du solde, la totalité des droits de propriété intellectuelle, les noms de domaine, les accès serveurs et le code source vous sont intégralement et légalement cédés."
    },
    {
      num: "07",
      question: "Que se passe-t-il une fois le nouveau site mis en ligne ?",
      answer: "La mise en production s'accompagne d'un monitoring strict de 30 jours pour surveiller le comportement des serveurs et sécuriser la migration SEO (analyse des logs et du trafic). Par la suite, nous mettons en place des contrats de Tierce Maintenance Applicative (TMA) pour garantir les mises à jour de sécurité, la sauvegarde quotidienne de vos données et le développement de nouvelles fonctionnalités au gré de votre croissance."
    },
    {
      num: "08",
      question: "Comment est calculé le budget d'une telle restructuration ?",
      answer: "Une ingénierie rentable ne se chiffre pas avec un \"forfait générique\". Le budget est évalué sur mesure en fonction de trois variables factuelles : la volumétrie de la plateforme (pages ou références catalogue), la complexité des interconnexions techniques requises, et le niveau d'exigence en matière d'interface sur-mesure. Lors de notre consultation initiale, nous auditons votre périmètre pour vous fournir une enveloppe budgétaire précise et transparente."
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-ocean"></div>
            CADRAGE & LOGISTIQUE
            <div className="w-5 h-[1.5px] bg-ocean"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Vos dernières questions avant d'initier <span className="text-ocean">votre restructuration</span>.
          </h2>
        </div>

        <div className="space-y-4 animate-in delay-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-ocean/40 bg-ocean/5 shadow-[0_0_20px_rgba(14,165,233,0.05)]' : 'border-border/50 bg-card hover:border-ocean/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4 md:gap-6 pr-6">
                    <span className="font-heading font-black text-xl text-ocean/50 group-hover:text-ocean transition-colors">
                      {faq.num}.
                    </span>
                    <h3 className={`font-heading font-bold text-base md:text-lg transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-ocean text-white' : 'bg-ocean/10 text-ocean group-hover:bg-ocean/20'}`}>
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                {/* Always rendered (CSS-only collapse) so the answer stays
                    crawlable and matches the FAQPage JSON-LD for this service. */}
                <div
                  className={`overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out grid ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                      <div className="pl-0 md:pl-[3.25rem]">
                        <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
