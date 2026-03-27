import {
  ComboPageFactory,
  generateMetadataForCombo,
  generateStaticParamsForCombo,
} from "@/components/factories/ComboPageFactory";

// 1. Static Params (Matrix)
export async function generateStaticParams() {
  return generateStaticParamsForCombo("agence");
}

// 2. Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  return generateMetadataForCombo(params, "agence");
}

import { Suspense } from "react";

// 3. Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ComboPageFactory params={params} silo="agence" rootPath="/agence-communication" />
    </Suspense>
  );
}
