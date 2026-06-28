"use client";

import { FileText, CreditCard, Clock, Shield, AlertTriangle, Scale } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Link } from "next-view-transitions";

const articles = [
  {
    number: "1",
    title: "Objet",
    content: `Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre WaveIA et ses clients pour toute prestation de création de sites web, référencement SEO, identité visuelle et services de communication digitale.

Toute commande implique l'acceptation sans réserve des présentes CGV.`,
  },
  {
    number: "2",
    title: "Devis et Commande",
    content: `**Devis gratuit** : Chaque projet fait l'objet d'un devis personnalisé gratuit et sans engagement.

**Validité** : Les devis sont valables 30 jours à compter de leur date d'émission.

**Commande** : La commande est réputée ferme et définitive après signature du devis et versement de l'acompte.`,
  },
  {
    number: "3",
    title: "Tarifs et Paiement",
    content: `**Tarifs** : Les prix sont exprimés en euros TTC (TVA non applicable, art. 293 B du CGI).

**Modalités de paiement** :
• 40% à la commande (acompte)
• 40% à la validation des maquettes
• 20% à la livraison

**Moyens de paiement** : Virement bancaire, carte bancaire.

**Retard de paiement** : En cas de retard, des pénalités de 3 fois le taux d'intérêt légal seront appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.`,
  },
  {
    number: "4",
    title: "Délais de Livraison",
    content: `Les délais de livraison sont indiqués à titre indicatif dans le devis. WaveIA s'engage à respecter les délais convenus, sous réserve :

• De la fourniture par le client des éléments nécessaires (contenus, images, accès)
• De la validation des étapes dans les délais impartis

En cas de retard imputable au client, le calendrier de livraison sera ajusté d'autant.`,
  },
  {
    number: "5",
    title: "Propriété Intellectuelle",
    content: `**Avant paiement intégral** : Les créations restent la propriété exclusive de WaveIA.

**Après paiement intégral** : Le client devient propriétaire des droits d'exploitation des créations livrées (site web, logo, charte graphique).

**Code source** : Le client reçoit l'intégralité du code source et des accès techniques.

**Portfolio** : WaveIA se réserve le droit de mentionner la réalisation dans son portfolio, sauf opposition écrite du client.`,
  },
  {
    number: "6",
    title: "Responsabilités",
    content: `**WaveIA s'engage à** :
• Réaliser les prestations avec professionnalisme
• Conseiller le client sur les meilleures solutions techniques
• Assurer la confidentialité des informations transmises

**Le client s'engage à** :
• Fournir les éléments nécessaires dans les délais
• Valider les étapes pour permettre l'avancement du projet
• S'assurer de disposer des droits sur les contenus fournis

WaveIA ne peut être tenu responsable des dommages indirects, pertes de données, ou manque à gagner.`,
  },
  {
    number: "7",
    title: "Résiliation",
    content: `**Par le client** : En cas de résiliation avant livraison, les acomptes versés restent acquis à WaveIA au titre des travaux déjà réalisés.

**Par WaveIA** : En cas de non-respect des obligations du client (défaut de paiement, absence de collaboration), WaveIA pourra suspendre ou résilier le contrat.

Dans tous les cas, une notification écrite avec un préavis de 15 jours est requise.`,
  },
  {
    number: "8",
    title: "Litiges",
    content: `En cas de litige, les parties s'efforceront de trouver une solution amiable.

À défaut, le litige sera soumis aux tribunaux compétents de Bayonne (64).

Les présentes CGV sont soumises au droit français.`,
  },
];

export function CGVPageClient() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-10 light:opacity-25" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:block hidden" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <Breadcrumbs />
          </div>
          <div className="text-center animate-hero-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ocean/10 border border-ocean/20 rounded-full text-ocean text-sm font-semibold uppercase tracking-wider mb-6">
              <FileText className="w-4 h-4" />
              Conditions Contractuelles
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Conditions Générales de Vente
            </h1>
            <p className="text-muted-foreground">
              Applicables à compter du 1er janvier 2024
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="relative pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: CreditCard, label: "Paiement sécurisé", value: "3x sans frais" },
              { icon: Clock, label: "Devis valide", value: "30 jours" },
              { icon: Shield, label: "Garantie", value: "Satisfaction" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-center animate-in ${i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}`}
                >
                  <Icon className="w-8 h-8 text-ocean mx-auto mb-2" />
                  <div className="font-bold">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="relative pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-ocean/20 transition-colors animate-in"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-ocean/10 rounded-full text-ocean font-bold">
                    {article.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4">Article {article.number} – {article.title}</h2>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {article.content.split('**').map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-8 p-6 bg-sunset/10 border border-sunset/20 rounded-2xl animate-in">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-sunset shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sunset mb-2">Information importante</h3>
                <p className="text-muted-foreground text-sm">
                  En validant votre commande, vous reconnaissez avoir pris connaissance et accepter sans réserve les présentes Conditions Générales de Vente.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl text-center animate-in delay-100">
            <Scale className="w-12 h-12 text-ocean mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Une question sur nos conditions ?</h2>
            <p className="text-muted-foreground mb-4">
              Notre équipe est à votre disposition pour toute clarification.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-ocean to-accent rounded-full text-background font-semibold hover:opacity-90 transition-opacity"
            >
              Nous contacter
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
