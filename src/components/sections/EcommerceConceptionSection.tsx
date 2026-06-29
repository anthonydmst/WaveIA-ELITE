"use client";

import React, { useState } from 'react';
import { ChevronDown, Palette, Code, LineChart, ShieldCheck } from 'lucide-react';

export function EcommerceConceptionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = [
    {
      id: "3.1",
      title: "UX/UI Design : L'expérience client au service de la conversion",
      icon: <Palette className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            L&apos;esthétique attire, mais c&apos;est l&apos;ergonomie qui fait vendre. Nous scindons la conception en deux phases distinctes pour garantir que la beauté de votre site ne nuise jamais à son efficacité commerciale.
          </p>
          <div className="grid gap-4 mt-6">
            <div className="bg-background/50 border border-border/50 rounded-xl p-5">
              <h4 className="font-heading font-bold text-foreground mb-2 text-sm flex items-center gap-2">L&apos;UX (User Experience) — La Mécanique</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nous architecturons l&apos;information. Nous définissons les parcours d&apos;achat les plus courts possibles, la structure des menus et le placement des éléments de réassurance pour lever les freins psychologiques.
              </p>
            </div>
            <div className="bg-background/50 border border-border/50 rounded-xl p-5">
              <h4 className="font-heading font-bold text-foreground mb-2 text-sm flex items-center gap-2">L&apos;UI (User Interface) — L&apos;Habillage</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nous créons l&apos;identité visuelle (typographies, couleurs, design des boutons) en stricte adéquation avec votre charte graphique, pour asseoir votre statut et rassurer l&apos;acheteur.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-heading font-bold text-foreground mb-2 text-sm">Notre méthodologie de validation :</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Vous gardez le contrôle. Nous procédons par itérations (généralement 2 à 3 allers-retours). Le comité de direction valide d&apos;abord les parcours &quot;en fil de fer&quot; (Wireframes) avant qu&apos;aucune couleur ne soit appliquée, puis valide les maquettes graphiques avant qu&apos;aucune ligne de code ne soit écrite.
            </p>
            <p className="text-ocean font-medium text-xs uppercase tracking-wider mt-4">
              Livrables tangibles : Wireframes structurels, maquettes haute définition (Desktop & Mobile), prototypes cliquables testables, et charte d&apos;interactions (StyleGuide).
            </p>
          </div>
        </div>
      )
    },
    {
      id: "3.2",
      title: "Ingénierie & Développements Techniques",
      icon: <Code className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            La technologie doit s&apos;adapter à votre modèle économique, et non l&apos;inverse. Nous sélectionnons le CMS (système de gestion) ou le Framework le plus rentable selon votre volume de commandes et vos ambitions de croissance.
          </p>
          <div className="mt-6">
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Le choix de votre infrastructure :</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong className="text-foreground text-sm block">Shopify / Shopify Plus</strong>
                  <span className="text-muted-foreground text-sm">La solution reine pour les PME et DNVB. Idéal pour un déploiement rapide, une scalabilité infinie (encaisse les forts pics de trafic) et une maintenance technique proche de zéro.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong className="text-foreground text-sm block">PrestaShop & WooCommerce</strong>
                  <span className="text-muted-foreground text-sm">Les standards Open-Source. Recommandés si vous avez besoin d&apos;une très grande flexibilité sur la gestion d&apos;un catalogue complexe, tout en maîtrisant vos coûts d&apos;hébergement.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong className="text-foreground text-sm block">Sylius & Headless Commerce</strong>
                  <span className="text-muted-foreground text-sm">L&apos;ingénierie sur-mesure. Réservé aux architectures complexes (Marketplaces, B2B volumineux) nécessitant une séparation totale entre la base de données et le design pour des performances de vitesse extrêmes.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-6 bg-ocean/5 border border-ocean/20 rounded-xl p-5">
            <h4 className="font-heading font-bold text-ocean mb-2 text-sm">L&apos;interconnexion au Système d&apos;Information (Le nerf de la guerre)</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Le vrai point de friction d&apos;un projet e-commerce se situe rarement sur le site lui-même, mais dans les entrepôts. Nous assurons la connexion (via API) de votre nouvelle boutique avec vos outils métiers (ERP, WMS, CRM) pour automatiser la remontée des commandes, la mise à jour des stocks en temps réel et la gestion comptable.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "3.3",
      title: "Optimisation du Taux de Conversion (CRO)",
      icon: <LineChart className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Attirer du trafic coûte cher. Si votre site ne transforme pas ces visiteurs en acheteurs, vous brûlez votre budget d&apos;acquisition. Notre processus d&apos;optimisation est purement scientifique.
          </p>
          <div className="mt-6">
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">La méthode d&apos;optimisation en 3 étapes :</h4>
            <div className="space-y-4">
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-1">1. L&apos;Audit Comportemental</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">Nous ne devinons rien, nous mesurons. Nous couplons les données quantitatives (Google Analytics) aux données qualitatives (cartes de chaleur et enregistrements de sessions via Hotjar ou Microsoft Clarity).</p>
              </div>
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-1">2. Le Diagnostic des Frictions</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">Nous identifions exactement où et pourquoi vos clients abandonnent. (Exemple classique : un taux d&apos;abandon de panier de 70 % dû à une obligation de créer un compte client avant l&apos;achat, ou à des frais de port découverts à la toute dernière étape).</p>
              </div>
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-1">3. Le Plan d&apos;Action Priorisé</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">Nous déployons des correctifs (A/B testing, simplification du tunnel d&apos;achat, réécriture des appels à l&apos;action) classés par impact direct sur votre chiffre d&apos;affaires.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "3.4",
      title: "Maintenance & Infogérance (TMA / TME)",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Un actif numérique livré n&apos;est pas un projet terminé : c&apos;est un point de départ. Pour garantir la sécurité de vos transactions et la pérennité de votre investissement, nous encadrons l&apos;exploitation de votre plateforme.
          </p>
          <div className="mt-6">
            <h4 className="font-heading font-bold text-foreground mb-4 text-sm">Un accompagnement sur 3 niveaux :</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-2">Maintenance Préventive</h5>
                <p className="text-muted-foreground text-xs leading-relaxed">Monitoring en temps réel, sauvegardes régulières et application des correctifs de sécurité pour anticiper toute vulnérabilité.</p>
              </div>
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-2">Maintenance Corrective</h5>
                <p className="text-muted-foreground text-xs leading-relaxed">Intervention rapide pour corriger d&apos;éventuels bugs (affichage, tunnel de paiement) garantissant un taux de disponibilité maximal.</p>
              </div>
              <div className="bg-background/50 border border-border/50 rounded-xl p-5">
                <h5 className="font-heading font-bold text-foreground text-sm mb-2">Maintenance Évolutive (TME)</h5>
                <p className="text-muted-foreground text-xs leading-relaxed">Développement de nouvelles fonctionnalités métier pour suivre l&apos;évolution de vos besoins (module de livraison, programme de fidélité).</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-card border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div>
            LE DÉVELOPPEMENT
            <div className="w-5 h-[1.5px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            De l&apos;ergonomie à la logistique : la mécanique d&apos;une plateforme performante.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Un site e-commerce n&apos;est pas une simple vitrine, c&apos;est le cœur de votre réacteur commercial. Notre pôle Conception ne se contente pas d&apos;aligner des lignes de code : il construit une infrastructure robuste, pensée pour vos utilisateurs et connectée à votre réalité logistique.
          </p>
        </div>

        <div className="space-y-4 animate-in delay-100">
          {sections.map((section, idx) => (
            <div 
              key={section.id} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'ring-1 ring-ocean/50 shadow-[0_0_30px_rgba(14,165,233,0.1)]' : 'hover:border-ocean/30'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center">
                  <h3 className="font-heading font-bold text-lg text-foreground">{section.title}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 border-t border-border/50 mx-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
