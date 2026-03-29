"use client";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbItem } from "@/lib/breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Link } from "next-view-transitions";
import { ArrowRight, Sparkles } from "lucide-react";

interface Props {
  breadcrumbItems?: BreadcrumbItem[];
}

export function CustomHeroCreationSite({ breadcrumbItems }: Props) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20 light:opacity-15" />
        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:opacity-30 light:block hidden" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 flex justify-start">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="max-w-4xl animate-hero-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-sm font-semibold mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            Agence Web Nouvelle Génération
          </div>

          <SectionHeader as="h1" size="page" className="mb-6 leading-tight">
            Création de Site Internet au Pays Basque{" "}
            <span className="text-3xl md:text-4xl text-muted-foreground font-normal tracking-normal">(Bayonne, Biarritz, Anglet)</span> :{" "}
            <br className="hidden lg:block"/>
            <span className="font-heading italic text-ocean-light">La Technologie "Next-Gen" à votre service</span>
          </SectionHeader>

          <p className="text-xl lg:text-2xl font-medium text-foreground mb-8 leading-snug">
            2 semaines pour définir l'essence de votre projet et bâtir une plateforme sur-mesure pour propulser votre activité.
          </p>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            <p>
              Wave IA n'est pas une simple agence web, c'est la première agence au pays basque a intégré l'IA à toutes les étapes de la création du site web. Fini les compromis entre qualité et budget : grâce à nos processus automatisés par l'Intelligence Artificielle et l'utilisation de technologies ultra-rapides (Next.js), nous concevons des sites performants à partir de 1 000€, là où les agences traditionnelles facturent le double.
            </p>
            <p>
              Wave IA, c'est une équipe jeune compétente en phase avec les nouvelles attentes du marché à votre service pour bâtir ensemble votre présence digitale. Notre ambition : transformer votre potentiel digital en levier de croissance pour votre entreprise.
            </p>
          </div>

          <Button asChild size="lg" className="rounded-full bg-ocean text-white hover:bg-ocean-dark shadow-lg shadow-ocean/30 text-base px-8 h-14 transition-all hover:scale-105 active:scale-95 group">
            <Link href="/contact">
              Discuter de mon projet web avec un expert local
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
