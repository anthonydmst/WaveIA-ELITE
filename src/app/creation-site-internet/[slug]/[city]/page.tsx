import {
  ComboPageFactory,
  generateMetadataForCombo,
  generateStaticParamsForCombo,
} from "@/components/factories/ComboPageFactory";
import { getComboData } from "@/lib/data/services";



// 1. Static Params (Matrix) - Génère pour les silos "web" et "local"
export async function generateStaticParams() {
  const webParams = await generateStaticParamsForCombo("web");
  const localParams = await generateStaticParamsForCombo("local");
  return [...webParams, ...localParams];
}

// 2. Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  // Structural check (not a string match on the title) to pick the silo the
  // combo actually belongs to before delegating to the shared metadata helper.
  const { slug, city } = await params;
  const silo = getComboData(slug, city, "web") ? "web" : "local";
  return generateMetadataForCombo(params, silo);
}

// 3. Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  return <ComboPageFactory params={params} silo={["web", "local"]} rootPath="/creation-site-internet" />;
}
