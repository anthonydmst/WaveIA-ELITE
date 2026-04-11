import { JsonLd } from "./JsonLd";
import { COMPANY_CONFIG } from "@/lib/seo/company";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY_CONFIG.url}/#localbusiness`,
    "name": COMPANY_CONFIG.name,
    "alternateName": `${COMPANY_CONFIG.name} - Agence Web Pays Basque`,
    "description": COMPANY_CONFIG.description,
    "image": `${COMPANY_CONFIG.url}/opengraph-image.png`,
    "logo": COMPANY_CONFIG.logo,
    "url": COMPANY_CONFIG.url,
    "telephone": COMPANY_CONFIG.telephone,
    "email": COMPANY_CONFIG.email,
    "priceRange": COMPANY_CONFIG.priceRange,
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Virement, Carte bancaire",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_CONFIG.address.street,
      "addressLocality": COMPANY_CONFIG.address.city,
      "postalCode": COMPANY_CONFIG.address.postalCode,
      "addressRegion": COMPANY_CONFIG.address.region,
      "addressCountry": COMPANY_CONFIG.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": COMPANY_CONFIG.geo.latitude,
      "longitude": COMPANY_CONFIG.geo.longitude
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bayonne",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Pyrénées-Atlantiques" }
      },
      {
        "@type": "City",
        "name": "Biarritz",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Pyrénées-Atlantiques" }
      },
      {
        "@type": "City",
        "name": "Anglet",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Pyrénées-Atlantiques" }
      },
      {
        "@type": "City",
        "name": "Saint-Jean-de-Luz",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Pyrénées-Atlantiques" }
      },
      {
        "@type": "City",
        "name": "Hendaye",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Pyrénées-Atlantiques" }
      },
      {
        "@type": "City",
        "name": "Hossegor",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Landes" }
      },
      {
        "@type": "City",
        "name": "Dax",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Landes" }
      },
      {
        "@type": "City",
        "name": "Capbreton",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Landes" }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Création de site vitrine",
            "description": "Site internet professionnel sur-mesure optimisé SEO"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Création de site e-commerce",
            "description": "Boutique en ligne performante avec paiement sécurisé"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Référencement SEO local",
            "description": "Optimisation pour la visibilité locale sur Google"
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": COMPANY_CONFIG.aggregateRating.ratingValue,
      "reviewCount": COMPANY_CONFIG.aggregateRating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sophie Mendiburu" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "WaveIA a transformé notre présence digitale. Site livré en 3 semaines, résultats immédiats sur Google.",
        "datePublished": "2024-10-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Thomas Aguirre" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Équipe réactive et professionnelle. Notre e-commerce génère maintenant 40% de notre chiffre d'affaires.",
        "datePublished": "2024-09-20"
      }
    ],
    "knowsAbout": [
      "Création de sites internet",
      "Développement web",
      "SEO local",
      "Référencement Google",
      "E-commerce",
      "Identité visuelle",
      "Web design",
      "Next.js",
      "React"
    ],
    "sameAs": [
      COMPANY_CONFIG.socials.linkedin,
      COMPANY_CONFIG.socials.instagram,
      COMPANY_CONFIG.socials.twitter
    ],
    "founder": {
      "@type": "Person",
      "name": "WaveIA Team",
      "jobTitle": "Fondateurs"
    },
    "foundingDate": COMPANY_CONFIG.foundingDate,
    "slogan": "Votre vague digitale commence ici"
  };

  return <JsonLd data={jsonLd} />;
}
