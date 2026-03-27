import { Suspense } from "react";
import { Metadata } from "next";
import { TemoignagesPageClient } from "@/components/sections/TemoignagesPageClient";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import StructuredData from "@/components/seo/StructuredData";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Témoignages Clients | Avis sur WaveIA - Agence Web Pays Basque",
  description: "Découvrez les témoignages de nos clients satisfaits : entrepreneurs, commerces et PME du Pays Basque et des Landes. Note 5/5 sur Google.",
  openGraph: {
    title: "Témoignages Clients | WaveIA",
    description: "Ce que disent nos clients : +150 projets livrés, 98% de satisfaction, note 5/5 sur Google. Découvrez leurs retours d'expérience.",
    url: "https://waveia.fr/temoignages",
    type: "website",
  },
};

// Review Schema for SEO
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://waveia.fr/#localbusiness",
  "name": "WaveIA",
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
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "WaveIA a transformé notre présence digitale. Site livré en 3 semaines, résultats immédiats sur Google.",
      "datePublished": "2024-10-15"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Thomas Aguirre" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Équipe réactive et professionnelle. Notre e-commerce génère maintenant 40% de notre chiffre d'affaires.",
      "datePublished": "2024-09-20"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Marie Etcheverry" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Leur connaissance du marché local fait toute la différence. Notre visibilité sur Bayonne a explosé.",
      "datePublished": "2024-08-10"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jean-Pierre Lacoste" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Un site à l'image de notre établissement : élégant et efficace. Les réservations en ligne ont augmenté de 60%.",
      "datePublished": "2024-07-15"
    }
  ]
};

export default function TemoignagesPage() {
  const breadcrumbItems = generateBreadcrumbs("/temoignages");

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <StructuredData data={reviewSchema} />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-screen" />}>
          <TemoignagesPageClient />
        </Suspense>
      </main>
    </>
  );
}
