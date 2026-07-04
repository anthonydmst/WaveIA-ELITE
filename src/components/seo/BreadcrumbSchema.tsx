import { JsonLd } from "./JsonLd";
import { BreadcrumbItem } from "@/lib/breadcrumbs";

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://waveia.fr"}${item.href}`,
    })),
  };

  return <JsonLd data={schema} />;
}

