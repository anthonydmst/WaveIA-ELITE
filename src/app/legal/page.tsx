import { Metadata } from "next";
import { Suspense } from "react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { LegalPageClient } from "@/components/sections/LegalPageClient";

export const metadata: Metadata = {
  title: "Mentions Légales | WaveIA - Agence Web Pays Basque",
  description: "Mentions légales de WaveIA, agence web basée au Pays Basque. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  const breadcrumbItems = generateBreadcrumbs("/legal");

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Suspense fallback={<div className="min-h-screen" />}>
        <LegalPageClient />
      </Suspense>
    </>
  );
}
