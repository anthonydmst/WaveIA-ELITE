
import { ContactPageClient } from "@/components/sections/ContactPageClient";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";



export function generateMetadata() {
  return {
    title: "Contact | WaveIA",
    description: "Contactez notre agence web pour discuter de votre projet digital.",
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
