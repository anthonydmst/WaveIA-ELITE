import { JsonLd } from "./JsonLd";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://waveia.fr/#localbusiness",
    "name": "WaveIA",
    "alternateName": "WaveIA - Agence Web Pays Basque",
    "description": "Agence web premium du Pays Basque. Création de sites internet haute performance, SEO local et identité de marque pour les entreprises de Biarritz, Bayonne, Anglet et environs.",
    "image": "https://waveia.fr/opengraph-image.png",
    "logo": "https://waveia.fr/logo.png",
    "url": "https://waveia.fr",
    "telephone": "+33695913669",
    "email": "contact@waveia.fr",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Virement, Carte bancaire",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Technopôle Izarbel",
      "addressLocality": "Bidart",
      "postalCode": "64210",
      "addressRegion": "Pyrénées-Atlantiques",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.4285,
      "longitude": -1.5896
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
      "ratingValue": "5.0",
      "reviewCount": "50",
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
      "https://www.linkedin.com/company/waveia",
      "https://www.instagram.com/waveia.fr",
      "https://twitter.com/waveia"
    ],
    "founder": {
      "@type": "Person",
      "name": "WaveIA Team",
      "jobTitle": "Fondateurs"
    },
    "foundingDate": "2023",
    "slogan": "Votre vague digitale commence ici"
  };

  return <JsonLd data={jsonLd} />;
}
