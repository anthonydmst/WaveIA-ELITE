import { TarifsHubClient } from "@/components/sections/pricing/TarifsHubClient";
import { DevisSimulator } from "@/components/sections/pricing/DevisSimulator";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tarifs & Prestations Agence Web | WaveIA Biarritz",
  description: "Découvrez nos offres transparentes : Création de site internet, Référencement SEO et Stratégie de Communication. Devis gratuit sous 24h.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  const items = generateBreadcrumbs("/tarifs");

  return (
    <>
      <BreadcrumbSchema items={items} />
      <DevisSimulator />
      <TarifsHubClient items={items} />

    </>
  );
}
