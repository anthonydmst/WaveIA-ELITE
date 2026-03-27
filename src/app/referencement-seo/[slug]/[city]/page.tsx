import {
  ComboPageFactory,
  generateMetadataForCombo,
  generateStaticParamsForCombo,
} from "@/components/factories/ComboPageFactory";

// 1. Static Params (Matrix)
export async function generateStaticParams() {
  return generateStaticParamsForCombo("seo");
}

// 2. Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  return generateMetadataForCombo(params, "seo");
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
      <ComboPageFactory params={params} silo="seo" rootPath="/referencement-seo" />
    </Suspense>
  );
}
