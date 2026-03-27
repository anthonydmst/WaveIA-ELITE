"use client";


import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHero as ServiceHeroType } from "@/lib/data/types";
import { BreadcrumbItem } from "@/lib/breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Props {
  hero: ServiceHeroType;
  breadcrumbItems?: BreadcrumbItem[];
}


export function ServiceHero({ hero, breadcrumbItems }: Props) {

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20 light:opacity-15" />
        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background to-transparent opacity-50 light:opacity-30 light:block hidden" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumbs - Left aligned (Grade A+ rule) */}
        <div className="mb-8 flex justify-start">
          <Breadcrumbs items={breadcrumbItems} />
        </div>


        <div className="max-w-3xl animate-hero-fade-up">
          {hero.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-6 animate-pulse">
              {hero.badge}
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <span className="text-ocean text-sm font-semibold uppercase tracking-wider">
              {hero.subtitle}
            </span>
            <SectionHeader
              as="h1"
              size="page"
              className="mb-6"
            >
              {hero.title}
            </SectionHeader>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
