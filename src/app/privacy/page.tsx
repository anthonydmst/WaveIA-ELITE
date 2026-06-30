import { Metadata } from "next";
import { Suspense } from "react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { PrivacyPageClient } from "@/components/sections/PrivacyPageClient";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | WaveIA - Agence Web Pays Basque",
  description: "Politique de confidentialité de WaveIA. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const breadcrumbItems = generateBreadcrumbs("/privacy");

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Suspense fallback={<div className="min-h-screen" />}>
        <PrivacyPageClient />
      </Suspense>
    </>
  );
}
