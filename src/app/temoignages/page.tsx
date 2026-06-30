import { Suspense } from "react";
import { Metadata } from "next";
import { TemoignagesPageClient } from "@/components/sections/TemoignagesPageClient";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
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
  alternates: { canonical: "/temoignages" },
};

export default function TemoignagesPage() {
  const breadcrumbItems = generateBreadcrumbs("/temoignages");

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Suspense fallback={<div className="min-h-screen" />}>
        <TemoignagesPageClient />
      </Suspense>
    </>
  );
}
