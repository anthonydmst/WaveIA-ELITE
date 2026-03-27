
import { PricingWebClient } from "@/components/sections/pricing/PricingWebClient";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Création Site Internet Biarritz | WaveIA",
  description: "Découvrez nos offres pour la création de sites internet performants, vitrines ou e-commerce. À partir de 990€. Agence Web Pays Basque.",
};

export default function PricingWebPage() {
  const items = generateBreadcrumbs("/tarifs/creation-site-internet");

  return (
    <>
      <BreadcrumbSchema items={items} />
      <PricingWebClient breadcrumbItems={items} />

    </>
  );
}
