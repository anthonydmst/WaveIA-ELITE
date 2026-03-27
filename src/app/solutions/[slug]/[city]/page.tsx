import {
  ComboPageFactory,
  generateMetadataForCombo,
  generateStaticParamsForCombo,
} from "@/components/factories/ComboPageFactory";

// 1. Static Params (Matrix)
export async function generateStaticParams() {
  return generateStaticParamsForCombo("metier");
}

// 2. Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  return generateMetadataForCombo(params, "metier");
}

// 3. Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  return <ComboPageFactory params={params} silo="metier" rootPath="/solutions" />;
}

