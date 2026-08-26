import { ComparativaPage } from "@/components/site/ComparativaPage";
import { comparativaPorSlug } from "@/content/intenciones";
import { buildMetadata } from "@/lib/seo";

const COMPARATIVA = comparativaPorSlug("implantes-vs-protesis")!;

export const metadata = buildMetadata({
  title: COMPARATIVA.title,
  description: COMPARATIVA.description,
  path: "/implantes-vs-protesis",
});

export default function Page() {
  return <ComparativaPage comparativa={COMPARATIVA} />;
}
