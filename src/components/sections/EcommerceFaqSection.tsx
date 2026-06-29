"use client";

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export function EcommerceFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Mon entreprise utilise un ERP complexe. Pouvez-vous le connecter au site ?",
      a: "Absolument, c'est même le cœur de notre expertise technique. Un e-commerce ne peut pas fonctionner en silo. Nous maîtrisons les architectures par API et connectons votre boutique à vos outils existants (ERP, WMS, logiciels comptables). L'objectif : automatiser la remontée de vos commandes et synchroniser l'état de vos stocks en temps réel pour éviter toute vente hors-stock."
    },
    {
      q: "Si je migre mon site actuel vers Shopify, vais-je perdre mon référencement naturel (SEO) ?",
      a: "Non, à condition d'appliquer un protocole strict. La perte de trafic est le risque numéro un d'une refonte mal exécutée. Avant toute migration, nos experts SEO cartographient l'intégralité de vos URLs existantes. Nous mettons en place un \"plan de redirection 301\" chirurgical pour transférer la puissance de vos anciennes pages vers les nouvelles. Dans 90% des cas, la migration s'accompagne même d'une hausse du trafic grâce à une meilleure architecture technique."
    },
    {
      q: "Qui est propriétaire du site, du nom de domaine et du code à la livraison ?",
      a: "Vous, à 100 %. Chez Waveia, nous refusons la politique de la \"prise d'otage\" technologique pratiquée par certaines agences. À la livraison et au paiement du solde, la totalité des droits de propriété intellectuelle, le nom de domaine, et les codes sources vous sont intégralement cédés. Vous êtes totalement libre et indépendant."
    },
    {
      q: "Quel est le délai de déploiement pour une plateforme e-commerce complète ?",
      a: "Tout dépend de la complexité de vos flux logistiques. Généralement, pour un projet incluant un design sur-mesure (UX/UI) et des interconnexions à vos logiciels métiers, comptez entre 2 et 4 mois. Notre méthodologie de gestion de projet au forfait garantit le respect strict des délais annoncés lors du cahier des charges."
    },
    {
      q: "J'ai un catalogue de milliers de références. Dois-je les importer une par une ?",
      a: "Surtout pas. La gestion manuelle est une perte de temps et une source d'erreurs. Si vous possédez déjà une base de données (fichier CSV, ERP, PIM), nous automatisons l'import massif de votre catalogue. De plus, notre Studio utilise l'Intelligence Artificielle pour vous aider à générer, structurer et optimiser le SEO de vos centaines de fiches produits en une fraction du temps habituel."
    },
    {
      q: "Je vends exclusivement aux professionnels (B2B). Vos solutions sont-elles adaptées ?",
      a: "Oui, nous déployons des architectures spécifiques pour le B2B. Le e-commerce B2B exige des mécaniques complexes : affichage des prix HT/TTC, grilles tarifaires sur-mesure selon le client, franco de port dynamique, et validation de devis en ligne. Nous configurons des plateformes (comme Shopify Plus ou Sylius) capables de gérer précisément ces contraintes industrielles."
    },
    {
      q: "Proposez-vous un accompagnement une fois le site mis en ligne ?",
      a: "Oui, le lancement n'est que la première étape. Un site e-commerce doit vivre et évoluer. Nous proposons des contrats d'infogérance et de Tierce Maintenance Évolutive (TME) pour assurer la sécurité de vos serveurs et développer de nouvelles fonctionnalités. En parallèle, notre Pôle Performance reste à vos côtés pour analyser les données de ventes (CRO) et piloter vos campagnes d'acquisition."
    },
    {
      q: "Quel est le budget moyen pour la refonte ou la création de mon e-commerce ?",
      a: "Un site transactionnel n'est pas une simple dépense de communication, c'est un outil de production. Nous ne vendons pas de \"packages\" standardisés. Le chiffrage dépend de 3 facteurs : le volume de votre catalogue, le degré de personnalisation du design (UX/UI), et la complexité des flux API à connecter. Lors de notre premier échange de 30 minutes, nous évaluerons précisément vos besoins pour vous fournir un cadrage budgétaire transparent, sans aucun engagement."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-24 bg-card border-y border-border relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div>
            TRANSPARENCE TOTALE
            <div className="w-5 h-[1.5px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Vos dernières questions avant notre échange de cadrage.
          </h2>
        </div>

        <div className="space-y-4 animate-in delay-100">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-ocean/40 shadow-[0_0_30px_rgba(14,165,233,0.1)] bg-background/80' : 'hover:border-ocean/30 bg-background/50'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <h3 className="font-heading font-bold text-lg text-foreground pr-8 group-hover:text-ocean transition-colors">
                  <span className="text-ocean opacity-50 mr-3 font-mono text-sm">0{idx + 1}.</span> 
                  {faq.q}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-ocean/10 text-ocean group-hover:bg-ocean/20'}`}>
                  {openIndex === idx ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 border-t border-border/50 mx-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
