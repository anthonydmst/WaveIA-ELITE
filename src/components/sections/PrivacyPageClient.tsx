"use client";

import { Shield, Database, Eye, Trash2, Mail, Lock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const sections = [
  {
    icon: Database,
    title: "Données collectées",
    content: `Nous collectons uniquement les données nécessaires à nos services :
    
• **Formulaire de contact** : Nom, email, téléphone, message
• **Newsletter** : Adresse email (avec consentement explicite)
• **Données de navigation** : Cookies techniques, pages visitées (anonymisé)

Nous ne collectons JAMAIS de données sensibles (santé, opinion politique, etc.) et ne faisons AUCUN profilage publicitaire.`,
  },
  {
    icon: Eye,
    title: "Finalité du traitement",
    content: `Vos données sont utilisées exclusivement pour :

• Répondre à vos demandes de contact ou devis
• Vous envoyer notre newsletter (si vous y êtes inscrit)
• Améliorer l'expérience utilisateur de notre site
• Respecter nos obligations légales

Base légale : Consentement (formulaires), Intérêt légitime (analytics), Obligation légale (facturation).`,
  },
  {
    icon: Lock,
    title: "Sécurité des données",
    content: `Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :

• Chiffrement SSL/TLS sur toutes les pages
• Hébergement sécurisé chez Vercel (certifié SOC 2)
• Accès aux données restreint au personnel autorisé
• Sauvegardes régulières et plan de reprise d'activité`,
  },
  {
    icon: Trash2,
    title: "Conservation des données",
    content: `Nous conservons vos données le temps strictement nécessaire :

• **Données de contact** : 3 ans après le dernier échange
• **Données clients** : 10 ans (obligations comptables)
• **Cookies analytics** : 13 mois maximum
• **Newsletter** : Jusqu'à désinscription

Après ces délais, les données sont supprimées ou anonymisées.`,
  },
];

export function PrivacyPageClient() {
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
              <Shield className="w-4 h-4" />
              RGPD Compliant
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chez WaveIA, la protection de vos données personnelles est une priorité. 
              Cette page explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-ocean/20 transition-colors animate-in"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-ocean/10 rounded-xl">
                      <Icon className="w-6 h-6 text-ocean" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {section.content.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vos Droits */}
          <div className="mt-8 p-8 bg-ocean/5 border border-ocean/20 rounded-2xl animate-in">
            <h2 className="text-2xl font-bold mb-4">Vos droits RGPD</h2>
            <p className="text-muted-foreground mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Droit d&apos;accès à vos données
              </li>
              <li className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Droit de rectification
              </li>
              <li className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Droit à l&apos;effacement
              </li>
              <li className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Droit à la portabilité
              </li>
              <li className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Droit d&apos;opposition
              </li>
              <li className="flex items-center gap-2">
                <span className="text-ocean">✓</span> Droit de limitation
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 p-8 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl text-center animate-in delay-100">
            <Mail className="w-12 h-12 text-ocean mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Une question sur vos données ?</h2>
            <p className="text-muted-foreground mb-4">
              Contactez notre délégué à la protection des données.
            </p>
            <a 
              href="mailto:privacy@waveia.fr"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ocean/10 border border-ocean/20 rounded-full text-ocean font-semibold hover:bg-ocean/20 transition-colors"
            >
              privacy@waveia.fr
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
