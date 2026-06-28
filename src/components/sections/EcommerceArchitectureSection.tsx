"use client";

import React from 'react';
import { Home, ListTree, ShoppingBag, CreditCard, CheckCircle2 } from 'lucide-react';

export function EcommerceArchitectureSection() {
  const cards = [
    {
      num: "01",
      icon: <Home className="w-8 h-8" />,
      title: "La Page d'Accueil",
      subtitle: "La Tête de Gondole & L'Acquisition",
      objective: "Pousser vos offres commerciales et capturer la donnée.",
      content: "L'accueil est votre vitrine promotionnelle. Nous y intégrons des grilles de merchandising dynamiques (meilleures ventes, nouveautés, offres saisonnières) pilotables sans code. Surtout, nous y plaçons des mécanismes de capture d'intentions (Pop-ups intelligents liés à votre CRM) pour récolter des emails en échange d'avantages, nourrissant ainsi votre base de données avant même le premier achat.",
      bullets: null
    },
    {
      num: "02",
      icon: <ListTree className="w-8 h-8" />,
      title: "Les Pages Catégories",
      subtitle: "Le Moteur SEO & Le Tri Rapide",
      objective: "Capter la recherche Google et filtrer instantanément.",
      content: "C'est ici que se joue le trafic organique. Nous architecturons vos \"pages listes\" en cocons sémantiques pour dominer les recherches de vos prospects. Pour l'utilisateur, nous implémentons une navigation à facettes (filtres par taille, couleur, disponibilité en stock, prix) avec rafraîchissement instantané (technologie AJAX). Si l'acheteur ne trouve pas son produit en 2 clics, il part chez la concurrence.",
      bullets: null
    },
    {
      num: "03",
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "La Fiche Produit",
      subtitle: "L'Arène de Conversion & L'Up-Sell",
      objective: "Neutraliser les objections et faire exploser le panier moyen.",
      content: "C'est le moment de vérité. L'UI Design se concentre sur l'essentiel : un bouton \"Ajouter au Panier\" (CTA) massif et toujours visible au scroll. Nous y injectons les déclencheurs de vente :",
      bullets: [
        { strong: "Preuve sociale :", text: "Avis clients certifiés et contenus générés par les utilisateurs (UGC)." },
        { strong: "Réassurance logistique :", text: "Délais d'expédition précis, politique de retours, et coût de livraison affichés avant la mise au panier." },
        { strong: "Ingénierie du Panier Moyen :", text: "Modules automatisés de Cross-selling (\"Souvent acheté ensemble\") et d'Up-selling (\"Produit de gamme supérieure\") pour augmenter la rentabilité de chaque transaction." }
      ]
    },
    {
      num: "04",
      icon: <CreditCard className="w-8 h-8" />,
      title: "Le Tunnel d'Achat",
      subtitle: "Le Check-Out & La Rétention",
      objective: "Zéro friction bancaire et récupération des abandons.",
      content: "69 % des paniers sont abandonnés à cette étape. Nous déployons un \"Frictionless Checkout\" : possibilité d'acheter en mode invité (sans créer de compte), intégration des paiements express (Apple Pay, Google Pay, Shop Pay) et suppression totale des menus de navigation pour enfermer l'utilisateur dans l'acte de paiement. Si l'utilisateur quitte tout de même la page, le lien avec votre CRM déclenche automatiquement une séquence d'emails de récupération de panier.",
      bullets: null
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-ocean"></div>
            ARCHITECTURE TRANSACTIONNELLE
            <div className="w-5 h-[1.5px] bg-ocean"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Chaque gabarit de page a un objectif financier précis.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Un site e-commerce ne se lit pas comme une brochure, c&apos;est un entonnoir de ventes (Funnel). De la tête de gondole jusqu&apos;à l&apos;encaissement, nous concevons chaque typologie de page avec des mécaniques de merchandising précises pour maximiser votre taux de conversion et votre panier moyen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 animate-in delay-100">
          {cards.map((card, idx) => (
            <div key={idx} className="glass-card p-10 rounded-2xl flex flex-col relative overflow-hidden group hover:border-ocean/40 transition-all duration-500 hover:shadow-2xl hover:shadow-ocean/5 bg-background/50">
              {/* Decorative Number */}
              <div className="absolute -right-6 -top-10 font-heading font-black text-[120px] text-ocean/5 group-hover:text-ocean/10 transition-colors duration-500 pointer-events-none select-none">
                {card.num}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-ocean/10 text-ocean flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {card.icon}
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">{card.title}</h3>
                <span className="block text-ocean text-sm font-semibold uppercase tracking-wider mb-6 pb-6 border-b border-border/50">
                  {card.subtitle}
                </span>
                
                <div className="bg-ocean/5 border border-ocean/20 rounded-xl p-5 mb-6">
                  <span className="block text-xs font-bold text-ocean uppercase tracking-widest mb-1">L&apos;objectif</span>
                  <strong className="text-foreground text-sm font-medium leading-relaxed">{card.objective}</strong>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {card.content}
                </p>

                {card.bullets && (
                  <ul className="space-y-4">
                    {card.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-ocean shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">{bullet.strong}</strong> {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
