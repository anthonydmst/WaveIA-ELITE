import {
  ComboPageFactory,
  generateMetadataForCombo,
  generateStaticParamsForCombo,
} from "@/components/factories/ComboPageFactory";



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
  // Essaie d'abord "web", puis "local"
  const webMeta = await generateMetadataForCombo(params, "web");
  if (webMeta.title && !webMeta.title.toString().includes("introuvable")) return webMeta;
  return generateMetadataForCombo(params, "local");
}

// 3. Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  return <ComboPageFactory params={params} silo={["web", "local"]} rootPath="/creation-site-internet" />;
}
