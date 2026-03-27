
import { AProposPageClient } from "@/components/sections/AProposPageClient";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Agence Web WaveIA",
  description: "Découvrez WaveIA, l'agence web premium du Pays Basque. Notre mission : rendre le web d'excellence accessible aux entreprises locales.",
};

export default function AProposPage() {
  const items = generateBreadcrumbs("/a-propos");

  return (
    <>
      <BreadcrumbSchema items={items} />
      <AProposPageClient items={items} />

    </>
  );
}
