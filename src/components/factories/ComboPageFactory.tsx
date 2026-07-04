import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CITIES, getComboData, getServicesBySilo } from "@/lib/data/services";
import { COMPANY_CONFIG } from "@/lib/seo/company";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { ServiceHero } from "@/components/templates/ServiceHero";
import { ServiceFeatures } from "@/components/templates/ServiceFeatures";
import { ServiceProcess } from "@/components/templates/ServiceProcess";
import { ServiceFAQ } from "@/components/templates/ServiceFAQ";
import StructuredData from "@/components/seo/StructuredData";
import { SmartLinker } from "@/components/sections/SmartLinker";
import { TerritorialContext } from "@/components/sections/TerritorialContext";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceSilo } from "@/lib/data/types";
import { ServiceZoneLinks } from "@/components/sections/ServiceZoneLinks";

interface Props {
  params: Promise<{ slug: string; city: string }>;
  silo: ServiceSilo | ServiceSilo[];
  rootPath: string; // e.g. "/solutions" or "/creation-site-internet"
}

import { COMBO_WHITELIST, SILO_CITY_SCOPES, POWER_5_CITIES } from "@/lib/data/whitelist";

// ... (skipping generateStaticParamsForCombo and generateMetadataForCombo as they are fine) ...

// 1. Helper to generate Static Params for a specific silo (Restricted)
export async function generateStaticParamsForCombo(silo: ServiceSilo) {
  const services = getServicesBySilo(silo);
  const params: { slug: string; city: string }[] = [];

  // Determine Scope
  const scope = SILO_CITY_SCOPES[silo];
  
  if (scope === "NONE") {
    // V5 Strategy: No recursive combos for these silos. 
    // We only rely on Level 1 pages (Service Factory).
    return [];
  }

  let targetCities = CITIES;
  if (Array.isArray(scope)) {
     // e.g. POWER_5_CITIES (though currently Agence is NONE, we keep logic robust)
     targetCities = CITIES.filter(c => scope.includes(c.slug));
  }
  
  // S-Tier Fix: Use whitelist for any silo with "WHITELIST_ONLY" scope
  // This includes seo, agence, metier, service, web
  const useWhitelist = scope === "WHITELIST_ONLY";

  for (const s of services) {
    // FILTER: Never generate a Combo for a Service that IS a City Landing Page.
    // e.g. do not generate /referencement-seo/bayonne/biarritz
    if (CITIES.find(c => c.slug === s.slug)) {
      continue;
    }

    if (useWhitelist) {
      // Check explicit whitelist
      const allowedCities = COMBO_WHITELIST[s.slug];
      if (allowedCities) {
        allowedCities.forEach(citySlug => {
           // Verify city exists in our DB to be safe
           if (CITIES.find(c => c.slug === citySlug)) {
             params.push({ slug: s.slug, city: citySlug });
           }
        });
      }
      continue; // Skip full loop
    }

    // Default Matrix Loop (only for silos without WHITELIST_ONLY scope)
    for (const city of targetCities) {
      params.push({ slug: s.slug, city: city.slug });
    }
  }

  return params;
}

// 2. Helper for Metadata
export async function generateMetadataForCombo(
  params: Promise<{ slug: string; city: string }>,
  silo: ServiceSilo
): Promise<Metadata> {
  const { slug, city } = await params;
  const combo = getComboData(slug, city, silo);

  if (!combo) {
    return { title: "Page introuvable" };
  }

  // Self-referencing canonical (silo → root path mirrors sitemap.ts)
  const siloToRootPath: Record<string, string> = {
    web: "/creation-site-internet",
    local: "/creation-site-internet",
    service: "/creation-site-internet",
    seo: "/referencement-seo",
    agence: "/agence-communication",
    metier: "/solutions",
  };
  const rootPath = siloToRootPath[silo] ?? "";

  return {
    title: `${combo.title} - WaveIA`,
    description: combo.description,
    alternates: { canonical: `${rootPath}/${slug}/${city}` },
  };
}

// 3. The Universal Combo Factory Component
export async function ComboPageFactory({ params, silo, rootPath }: Props) {
  const { slug, city } = await params;
  const siloArray = Array.isArray(silo) ? silo : [silo];

  // Try to find combo data in any of the silos
  let combo = null;
  let activeSilo: ServiceSilo = siloArray[0]!;
  for (const s of siloArray) {
    combo = getComboData(slug, city, s);
    if (combo) {
        activeSilo = s;
        break;
    }
  }

  if (!combo) {
    return notFound();
  }

  // STRICT RUNTIME CHECK (V5 "Le Réaliste")
  if (activeSilo === "service" || activeSilo === "metier" || activeSilo === "web") {
    const allowedCities = COMBO_WHITELIST[slug];
    if (!allowedCities || !allowedCities.includes(city)) {
      return notFound();
    }
  }

  if (activeSilo === "agence") {
    if (!POWER_5_CITIES.includes(city)) {
      return notFound();
    }
  }

  // Automatic Breadcrumbs
  const breadcrumbItems = generateBreadcrumbs(`${rootPath}/${slug}/${city}`);

  // SEO: Schema.org
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: combo.title,
    description: combo.description,
    provider: {
      "@type": "LocalBusiness",
      name: "WaveIA",
      image: `${COMPANY_CONFIG.url}/icon-512.png`,
      telephone: COMPANY_CONFIG.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY_CONFIG.address.street,
        addressLocality: combo.localContext?.city,
        postalCode: combo.localContext?.zipCode,
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "City",
      name: combo.localContext?.city,
      postalCode: combo.localContext?.zipCode,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": combo.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <div>
        <ServiceHero hero={combo.hero} breadcrumbItems={breadcrumbItems} />
        
        <ServiceFeatures features={combo.features} />
        
        {/* GRADE A++++ TERRITORIAL CONTEXT */}
        {combo.localContext?.siloContext && (
          <TerritorialContext 
            siloContext={combo.localContext.siloContext} 
            cityName={combo.localContext.city}
          />
        )}
        
        <ServiceProcess process={combo.process} />

        <ServiceZoneLinks 
          silo={activeSilo} 
          serviceSlug={slug} 
          currentCity={city} 
          mode="sibling"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SmartLinker 
            silo="combo" 
            slug={slug} 
            city={city} 
            citySlug={city} 
          />
        </div>

        {combo.content?.relatedServices && (
           <RelatedServices services={combo.content.relatedServices} />
        )}
        
        <ServiceFAQ faq={combo.faq} />
      </div>
    </>
  );
}
