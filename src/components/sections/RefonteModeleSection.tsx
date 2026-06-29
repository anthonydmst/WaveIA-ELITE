"use client";

import React from 'react';
import { ArrowRight, Monitor, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Link } from 'next-view-transitions';

export function RefonteModeleSection() {
  const models = [
    {
      icon: <Monitor className="w-8 h-8 text-ocean" />,
      title: "Refonte de Site Vitrine",
      subtitle: "Objectif : Génération de leads & Image de marque.",
      content: "Votre site actuel ne génère plus de contacts qualifiés et dégrade votre image. Nous reconstruisons votre vitrine digitale pour asseoir votre autorité, fluidifier la prise de contact et transformer vos visiteurs en prospects (B2B ou B2C).",
      enjeux: [
        "Design statutaire",
        "Optimisation SEO local/national",
        "Formulaires de conversion",
        "Vitesse d'affichage"
      ],
      linkText: "Explorer la refonte Vitrine",
      linkHref: "/creation-site-internet/site-vitrine"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-ocean" />,
      title: "Refonte E-commerce",
      subtitle: "Objectif : Augmentation du Panier Moyen & Conversion.",
      content: "Votre plateforme actuelle est lente, vos abandons de paniers explosent ou votre back-office est devenu ingérable. Nous migrons votre catalogue vers une infrastructure robuste (Shopify, PrestaShop) et reconnectons vos flux logistiques (ERP).",
      enjeux: [
        "Migration sécurisée du catalogue",
        "Interconnexion SI/ERP",
        "Frictionless Checkout (paiement simplifié)",
        "Rétention"
      ],
      linkText: "Explorer la refonte E-commerce",
      linkHref: "/creation-site-internet/site-ecommerce"
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div>
            VOTRE MODÈLE ÉCONOMIQUE
            <div className="w-5 h-[1.5px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Quel type de plateforme devons-nous transformer ?
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Les enjeux techniques d&apos;une boutique en ligne ne sont pas ceux d&apos;un site institutionnel. Choisissez votre modèle pour découvrir notre protocole de migration et d&apos;optimisation dédié.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 animate-in delay-100">
          {models.map((model, idx) => (
            <Link 
              key={idx}
              href={model.linkHref}
              className="glass-card group p-10 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)] hover:border-ocean/50"
            >
              <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none scale-[3] transform group-hover:scale-[4] text-foreground">
                {model.icon}
              </div>
              
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {model.icon}
              </div>
              
              <h3 className="relative z-10 font-heading font-bold text-3xl text-foreground mb-3 group-hover:text-ocean transition-colors duration-300">
                {model.title}
              </h3>
              
              <div className="relative z-10 inline-block bg-ocean/10 text-ocean text-sm font-semibold uppercase tracking-wider py-2 px-4 rounded-lg w-fit mb-6 border border-ocean/20">
                {model.subtitle}
              </div>
              
              <p className="relative z-10 text-muted-foreground leading-relaxed mb-8">
                {model.content}
              </p>
              
              <div className="relative z-10 mb-10 flex-1">
                <span className="block text-sm font-bold text-foreground mb-4">Enjeux clés :</span>
                <ul className="space-y-3">
                  {model.enjeux.map((enjeu, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                      <span>{enjeu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative z-10 flex items-center gap-2 text-ocean font-heading font-bold mt-auto group-hover:gap-4 transition-all duration-300">
                {model.linkText} <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
