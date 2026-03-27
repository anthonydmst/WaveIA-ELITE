"use client";



import { Link } from "next-view-transitions";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  Lightbulb,
  Users,
  Award,
  Zap,
  MapPin,
  Globe,
  Palette,
} from "lucide-react";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbItem } from "@/lib/breadcrumbs";

import { AgencyStatsBlock } from "@/components/templates/AgencyStatsBlock";
import { TestimonialsGrid } from "@/components/templates/TestimonialsGrid";
import { ComparisonTable } from "@/components/templates/ComparisonTable";
import { CertificationsBadges } from "@/components/templates/CertificationsBadges";
import { GoogleReviewsWidget } from "@/components/templates/GoogleReviewsWidget";
import { 
  AGENCY_STATS, 
  AGENCY_TESTIMONIALS, 
  AGENCY_COMPARISON,
  AGENCY_VALUES,
  AGENCY_TIMELINE,
  AGENCY_TECH_STACK
} from "@/lib/data";
import { TechnoTranslator } from "@/components/sections/pedagogic/TechnoTranslator";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Heart,
  Target,
  Users,
  Zap,
  Globe,
  Palette,
  Sparkles,
};

export function AProposPageClient({ items }: { items?: BreadcrumbItem[] }) {

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20 light:opacity-15" />
          <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:opacity-30 light:block hidden" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex justify-start">
             <Breadcrumbs items={items} />

          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-hero-fade-up">

              <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
                À propos
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                L&apos;agence web qui
                <br />
                <span className="text-gradient">réinvente les règles</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Waveia est née d&apos;une conviction : les entreprises de la
                Côte Basque méritent l&apos;excellence technique des géants de la Tech,
                avec la proximité d&apos;un artisan local.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="group relative px-6 py-3 text-sm font-semibold overflow-hidden rounded-full"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-ocean to-accent" />
                  <span className="relative flex items-center gap-2 text-background">
                    Nous contacter
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/realisations"
                  className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Voir nos projets
                </Link>
              </div>
            </div>

            <div className="relative animate-hero-fade-up [animation-delay:200ms]">

              <div className="absolute -inset-4 bg-linear-to-br from-ocean to-accent opacity-20 blur-2xl rounded-3xl" />
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="L'équipe Waveia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBjFBgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMr8f8ltazYu2LN6RoJpnkVSqghSScAce/mMYyHyJqQDdpX/2Q=="
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-card rounded-2xl border border-border shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-linear-to-br from-ocean to-accent rounded-xl">
                    <Award className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">100% Local</div>
                    <div className="text-xs text-muted-foreground">
                      Ancrage Basque
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GRADE A++ STATS */}
      <AgencyStatsBlock 
        title={AGENCY_STATS.title} 
        metrics={AGENCY_STATS.metrics} 
      />

      {/* Mission Section */}
      <section className="relative py-20 lg:py-32 bg-card/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--ocean)_0%,transparent_70%)] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
              Notre mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Pourquoi{" "}
              <span className="font-heading italic text-ocean-light">
                Waveia
              </span>{" "}
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Le marché des agences web est souvent opaque. Nous
              avons décidé de changer cela en proposant une approche basée sur
              la preuve, la robustesse et la parole donnée.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in-left">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-sunset" />
                  <span className="text-sm font-semibold text-sunset">
                    Notre secret
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  L&apos;IA comme superpouvoir
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous utilisons les derniers outils d&apos;intelligence
                  artificielle pour automatiser les tâches répétitives : génération
                  de code, optimisation SEO, tests qualité... Cela nous permet de
                  nous concentrer sur ce qui compte vraiment : la stratégie, le
                  design et l&apos;accompagnement humain.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-ocean" />
                  <span className="text-sm font-semibold text-ocean">
                    Ancré localement
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  100% Côte Basque
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous ne sommes pas une agence parisienne déconnectée. Nous
                  vivons et travaillons à Biarritz, Bayonne et Anglet. Nous
                  connaissons le marché local, ses enjeux et ses opportunités.
                </p>
              </div>
            </div>
            <div className="animate-in-right">
              <AgencyStatsBlock 
                metrics={AGENCY_STATS.metrics} 
                variant="compact" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* GRADE A++ COMPARISON TABLE */}
      <section className="py-20 lg:py-32">
        <ComparisonTable 
          title={AGENCY_COMPARISON.title}
          subtitle={AGENCY_COMPARISON.subtitle}
          competitors={AGENCY_COMPARISON.competitors}
          rows={AGENCY_COMPARISON.rows}
        />
      </section>

      {/* Tech Stack Section (Desire) */}
      <section className="relative py-20 lg:py-32 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
           <span className="text-ocean text-sm font-semibold uppercase tracking-wider">Under the hood</span>
           <h2 className="text-3xl font-bold mt-2 mb-12">Une architecture <span className="text-gradient">Grade A+</span></h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {AGENCY_TECH_STACK.map((tech, i) => {
                const IconComponent = iconMap[tech.icon] || Zap;
                return (
                  <div 
                    key={i} 
                    className={`flex flex-col items-center group animate-in ${i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""}`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mb-4 text-ocean group-hover:border-ocean/30 group-hover:scale-110 transition-all">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="font-bold">{tech.label}</div>
                    <div className="text-xs text-muted-foreground">{tech.desc}</div>
                  </div>
                );
              })}
           </div>
           
           {/* Translate Tech Stack to Business Benefits */}
           <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-20">
             <TechnoTranslator 
                title="La Technique au Service de Votre Business" 
                terms={[
                  {
                    tech: "Next.js 15 (React Server Components)",
                    human: "Vitesse Instantanée",
                    description: "Le framework le plus rapide du marché. Vos pages se chargent en moins d'une seconde, même avec beaucoup de contenu. Google adore, vos visiteurs aussi."
                  },
                  {
                    tech: "Vercel Edge Network",
                    human: "Disponibilité 99.99%",
                    description: "Votre site est dupliqué sur 200+ serveurs à travers le monde. Si un visiteur vient du Japon, il accède à une copie locale. Zéro latence, zéro downtime."
                  },
                  {
                    tech: "TypeScript Strict",
                    human: "Zéro Bug en Prod",
                    description: "Un langage de programmation qui détecte 90% des erreurs AVANT la mise en ligne. Votre site ne plante jamais à cause d'une coquille."
                  },
                  {
                    tech: "Framer Motion",
                    human: "Animations Fluides",
                    description: "Des transitions dignes d'Apple. Chaque clic, chaque scroll est une expérience premium qui donne envie de rester."
                  }
                ]}
             />
           </div>
        </div>
      </section>

      {/* Certifications & Trust Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <span className="text-ocean text-sm font-semibold uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl font-bold mt-2">Partenaires & Accréditations</h2>
          </div>
          
          <CertificationsBadges variant="detailed" className="mb-16" />
          
          <div className="max-w-2xl mx-auto">
            <GoogleReviewsWidget variant="full" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
              Nos valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Ce qui nous <span className="text-gradient">anime</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCY_VALUES.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className={`group p-6 bg-card rounded-2xl border border-border hover:border-ocean/30 transition-all text-center animate-in ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-ocean/10 rounded-2xl mb-4 group-hover:bg-ocean/20 group-hover:scale-110 transition-all">
                    <IconComponent className="w-7 h-7 text-ocean" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRADE A++ TESTIMONIALS */}
      <section className="bg-card/50">
        <TestimonialsGrid 
          testimonials={AGENCY_TESTIMONIALS}
          title="Ce que disent nos clients"
        />
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
              Notre histoire
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              L&apos;aventure{" "}
              <span className="font-heading italic text-ocean-light">
                Waveia
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-ocean via-accent to-ocean-light hidden lg:block" />
            <div className="space-y-12">
              {AGENCY_TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 animate-in ${
                    index % 2 === 0 ? "" : "lg:text-right"
                  } ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:pr-16" : "lg:order-2 lg:pl-16"
                    }`}
                  >
                    <div
                      className={`p-6 bg-card rounded-2xl border border-border ${
                        index % 2 === 1 ? "lg:text-left" : ""
                      }`}
                    >
                      <span className="text-ocean font-bold">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden lg:flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end lg:order-1"
                    }`}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-ocean rounded-full border-4 border-background" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
