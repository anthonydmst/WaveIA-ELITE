
import { ContactPageClient } from "@/components/sections/ContactPageClient";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";



export function generateMetadata() {
  return {
    title: "Contact | Agence Web WaveIA - Devis Gratuit Pays Basque",
    description: "Contactez WaveIA pour discuter de votre projet de site internet, SEO ou communication digitale. Réponse sous 24h, devis gratuit et sans engagement.",
    alternates: { canonical: "/contact" },
  };
}

export default function ContactPage() {
  const items = generateBreadcrumbs("/contact");

  return (
    <>
      <BreadcrumbSchema items={items} />
      <ContactPageClient items={items} />

    </>
  );
}
