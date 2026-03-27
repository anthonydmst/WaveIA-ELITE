import { JsonLd } from "./JsonLd";
import { StructuredDataSchema } from "@/lib/data/schema-types";

export default function StructuredData({ data }: { data: StructuredDataSchema }) {
  return <JsonLd data={data} />;
}

