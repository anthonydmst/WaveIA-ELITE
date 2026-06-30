
import { PricingComClient } from "@/components/sections/pricing/PricingComClient";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Agence Communication & Branding | WaveIA",
  description: "Identité visuelle, logos, réseaux sociaux. Donnez à votre marque l'image qu'elle mérite. Packs démarrage à 990€.",
  alternates: { canonical: "/tarifs/agence-communication" },
};

export default function PricingComPage() {
  const items = generateBreadcrumbs("/tarifs/agence-communication");

  return (
    <>
      <BreadcrumbSchema items={items} />
      <PricingComClient breadcrumbItems={items} />

    </>
  );
}
