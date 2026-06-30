
import { PricingSeoClient } from "@/components/sections/pricing/PricingSeoClient";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Référencement SEO & Audit | WaveIA",
  description: "Boostez votre visibilité sur Google. Audits techniques, stratégie de contenu et netlinking. Nos forfaits SEO à partir de 490€. Agence SEO Biarritz.",
  alternates: { canonical: "/tarifs/referencement-seo" },
};

export default function PricingSeoPage() {
  const items = generateBreadcrumbs("/tarifs/referencement-seo");

  return (
    <>
      <BreadcrumbSchema items={items} />
      <PricingSeoClient breadcrumbItems={items} />

    </>
  );
}
