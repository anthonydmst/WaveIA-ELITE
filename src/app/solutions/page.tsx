import { notFound } from "next/navigation";
import { ServicePageFactory } from "@/components/factories/ServicePageFactory";
import { SERVICES } from "@/lib/data/services";

export function generateMetadata() {
  const service = SERVICES.find((s) => s.slug === "solutions");
  if (!service) return { title: "Page introuvable" };
  
  return {
    title: "Solutions Web par Métier : Restaurant, Hôtel, Immo | WaveIA",
    description: "Sites web spécialisés par secteur d'activité : restaurant, hôtel, immobilier, artisan, santé. Fonctionnalités sur-mesure pensées pour votre métier.",
    alternates: { canonical: "/solutions" },
  };
}

export default function Page() {
  const service = SERVICES.find((s) => s.slug === "solutions");
  if (!service) return notFound();

  return <ServicePageFactory service={service} />;
}
