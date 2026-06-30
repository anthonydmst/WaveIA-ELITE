
import { RealisationsPageClient } from "@/components/sections/RealisationsPageClient";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réalisations | Agence Web WaveIA",
  description: "Explorez notre portfolio de sites internet premium. Design sur-mesure, vitrines élégantes et e-commerce performants.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  const items = generateBreadcrumbs("/realisations");

  return (
    <>
      <BreadcrumbSchema items={items} />
      <RealisationsPageClient items={items} />

    </>
  );
}
