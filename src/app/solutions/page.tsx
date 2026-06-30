import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";

export function generateMetadata() {
  const service = SERVICES.find((s) => s.slug === "solutions");
  if (!service) return { title: "Page introuvable" };
  
  return {
    title: `${service.title} - WaveIA`,
    description: service.description,
    alternates: { canonical: "/solutions" },
  };
}

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "solutions");
  if (!service) return notFound();

  return <ServicePageFactory service={service} />;
}
