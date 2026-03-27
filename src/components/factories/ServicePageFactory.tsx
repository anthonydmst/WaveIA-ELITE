import { notFound } from "next/navigation";
import { Metadata } from "next";
// import { lazy, Suspense } from "react"; // Removed lazy/Suspense to fix ChunkLoadError
import { SERVICES, getServicesBySilo } from "@/lib/data/services";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { ServiceHero } from "@/components/templates/ServiceHero";
import { ServiceFeatures } from "@/components/templates/ServiceFeatures";
import { ServiceProcess } from "@/components/templates/ServiceProcess";
import { ServiceFAQ } from "@/components/templates/ServiceFAQ";
import { ServiceSilo, Service } from "@/lib/data/types";
import StructuredData from "@/components/seo/StructuredData";
import { SmartLinker } from "@/components/sections/SmartLinker";
import { SubServicesGrid } from "@/components/sections/SubServicesGrid";
import { ServiceZoneLinks } from "@/components/sections/ServiceZoneLinks";
import { DeepContentSection } from "@/components/templates/DeepContentSection";
import { CityTestimonialInline } from "@/components/templates/CityTestimonialInline";
import { CITIES } from "@/lib/data/definitions/cities";
import { CityLocalBusinessSchema } from "@/components/seo/CityLocalBusinessSchema";
import { COMPANY_CONFIG } from "@/lib/seo/company";


// Grade A++++ Performance: Standard imports for Server Components (avoid ChunkLoadError)
import { TerritorialContext } from "@/components/sections/TerritorialContext";
import { LocalContextSection } from "@/components/templates/LocalContextSection";



// Helper for Static Params
export async function generateStaticParamsForSilo(silo: ServiceSilo) {
  const services = getServicesBySilo(silo);
  
  return services
    .filter((service) => service.type !== "hub") // S-Tier: Automated Hub Exclusion via Type
    .map((service) => ({
      slug: service.slug,
    }));
}

// Helper for Metadata
export async function generateMetadataForSilo(
  params: Promise<{ slug: string }>,
  silo: ServiceSilo
): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug && s.silo === silo);

  if (!service) {
    return {
      title: "Service introuvable - WaveIA",
    };
  }

  return {
    title: `${service.title} - Agence Web WaveIA`,
    description: service.description,
  };
}

interface FactoryProps {
  params?: Promise<{ slug: string }>;
  silo?: ServiceSilo | ServiceSilo[];
  rootPath?: string;
  service?: Service; // DIRECT INJECTION MODE
  extraContent?: React.ReactNode; // For Humanization blocks
}

// The Universal Factory (RSC)
export async function ServicePageFactory({
  params,
  silo,
  rootPath,
  service: injectedService,
  extraContent,
}: FactoryProps) {
  let service: Service | undefined = injectedService;

  // If no service injected, fetch it dynamically
  if (!service && params && silo) {
    const { slug } = await params;
    
    // Defensive Layout: Prevent Hub pages from being rendered as Slug pages
    // This prevents /creation-site-internet/creation-site-internet
    const foundService = SERVICES.find((s) => s.slug === slug);
    
    // Check if what we found is actually a hub (S-Tier Defense)
    if (foundService?.type === "hub") {
       return notFound();
    }

    const siloArray = Array.isArray(silo) ? silo : [silo];
    service = SERVICES.find((s) => s.slug === slug && siloArray.includes(s.silo));
  }

  if (!service) {
    return notFound();
  }

  // Automatic Breadcrumbs (Grade A++)
  // S-Tier Defense: If rootPath is undefined (Hub pages with direct service injection),
  // use just the service slug to avoid generating "undefined/slug" paths
  const breadcrumbPath = rootPath 
    ? `${rootPath}/${service.slug}` 
    : `/${service.slug}`;
  const breadcrumbItems = generateBreadcrumbs(breadcrumbPath);

  // Grade A++ Local SEO: Find enriched city data if this is a local page
  const enrichedCity = service.localContext 
    ? CITIES.find(c => c.name === service!.localContext?.city)
    : undefined;

  // SEO: Schema.org (Grade A+)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "WaveIA",
      "image": "https://waveia.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_CONFIG.address.street,
        "addressLocality": COMPANY_CONFIG.address.city,
        "postalCode": COMPANY_CONFIG.address.postalCode,
        "addressCountry": COMPANY_CONFIG.address.country,
      },
      "telephone": COMPANY_CONFIG.telephone,
    },
    "areaServed": service.localContext ? {
      "@type": "City",
      "name": service.localContext.city,
      "postalCode": service.localContext.zipCode,
    } : {
      "@type": "AdministrativeArea", // Better type than string
      "name": "Pays Basque, France" 
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map((item) => ({
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
      
      {/* SEO: LocalBusiness Schema for city pages (Grade A++++) */}
      {enrichedCity && (
        <CityLocalBusinessSchema 
          city={enrichedCity} 
          silo={service.silo}
          serviceName={service.title}
        />
      )}
      <StructuredData data={faqSchema} />
      <main id="main-content">
        <ServiceHero hero={service.hero} breadcrumbItems={breadcrumbItems} />

        
        {/* AIDA: Interest Phase (Zone Links immediately after Hero) */}
        <ZoneLinksWrapper service={service} />
        
        {/* HUMANIZATION INJECTION POINT */}
        {extraContent}

        {/* AIDA: Desire Phase (Show Solutions/Expertise immediately) */}
        <SubServicesGridWrapper 
          currentService={service} 
        />

        {/* Conditional rendering based on Silo can be added here if needed */}
        {/* e.g., if (silo === 'local') <LocalMap ... /> */}
        <ServiceFeatures features={service.features} />
        
        {/* GRADE A++++ TERRITORIAL CONTEXT (Expertise & Trust Signals) */}
        {service.localContext?.siloContext && (
            <TerritorialContext 
              siloContext={service.localContext.siloContext} 
              cityName={service.localContext.city}
            />
        )}
        
        {/* GRADE A++++ LOCAL CONTEXT (Factual City Data - History, Stats, Zones) */}
        {enrichedCity && (
            <LocalContextSection city={enrichedCity} silo={service.silo} />
        )}
        
        {/* GRADE A++ CITY TESTIMONIAL (AIDA Desire) */}
        {service.localContext?.city && <CityTestimonialInline cityName={service.localContext.city} />}
        
        {/* DEEP CONTENT INJECTION (Grade A+) */}
        {service.content && <DeepContentSection content={service.content} />}

        <ServiceProcess process={service.process} />
        
        {/* Final CTA (Grade A++) */}

        
        {/* Smart Linking (Grade A++) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <SmartLinker 
             silo={service.silo} 
             slug={service.slug} 
             city={service.localContext?.city}
             citySlug={service.localContext?.city?.toLowerCase()}
           />
        </div>

        <ServiceFAQ faq={service.faq} />
      </main>
    </>
  );
}

// Internal Wrapper to keep logic clean and avoid circular deps in imports if possible

function SubServicesGridWrapper({ currentService }: { currentService: Service }) {
  // Identify if this is a HUB Page (S-Tier Type Check)
  const isHub = currentService.type === "hub";

  if (!isHub) return null;

  // Determine what to show in the bottom grid
  let children: Service[] = [];

  // Strategies by Hub
  if (currentService.slug === "creation-site-internet") {
    // STRATEGY: Show "Tech Services" (Vitrine, Ecom, Maintenance) instead of Cities
    // Because cities are already in the "Zone Links" at the top.
    // We want to show "What to buy" here.
    children = SERVICES.filter(s => s.silo === "web" && s.slug !== currentService.slug);
  } else {
     // STANDARD STRATEGY: Same Silo, but filter out "City Pages" to avoid redundancy with ZoneLinks
     // AND filter out self.
     children = SERVICES.filter(s => 
       s.silo === currentService.silo && 
       s.slug !== currentService.slug &&
       !s.localContext // EXCLUDE Cities (they have localContext defined)
     );
  }

  // Fallback: If no "Services" found (rare), maybe show cities? 
  // For now, let's keep it clean. If empty, component returns null.

  return <SubServicesGrid services={children} title={
     currentService.slug === "creation-site-internet" ? "Nos Solutions Web" : 
     `Nos Expertises ${currentService.title.split(" ")[0]}` 
  } />;
}

function ZoneLinksWrapper({ service }: { service: Service }) {
  // LOGIC: Show on HUB pages OR on CITY pages (to link to neighbors)
  // We exclude "leaf" services like /creation-site-internet/site-vitrine which are not geo-focused
  const isHub = service.type === "hub";
  const isCityPage = !!service.localContext;

  if (!isHub && !isCityPage) return null;

  return <ServiceZoneLinks 
    silo={service.silo} 
    serviceSlug={service.slug} 
    currentCity={service.localContext?.city} 
  />;
}
