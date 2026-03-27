import { Metadata } from "next";
import { Suspense } from "react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { CGVPageClient } from "@/components/sections/CGVPageClient";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | WaveIA - Agence Web Pays Basque",
  description: "Conditions générales de vente de WaveIA. Modalités de commande, paiement, livraison et garanties pour nos prestations de création de sites web.",
  robots: { index: true, follow: true },
};

export default function CGVPage() {
  const breadcrumbItems = generateBreadcrumbs("/cgv");

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-screen" />}>
          <CGVPageClient />
        </Suspense>
      </main>
    </>
  );
}
