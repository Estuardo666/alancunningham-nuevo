import { ComparativaPage } from "@/components/site/ComparativaPage";
import { comparativaPorSlug } from "@/content/intenciones";
import { buildMetadata } from "@/lib/seo";

const COMPARATIVA = comparativaPorSlug("carillas-vs-coronas")!;

export const metadata = buildMetadata({
  title: COMPARATIVA.title,
  description: COMPARATIVA.description,
  path: "/carillas-vs-coronas",
});

export default function Page() {
  return <ComparativaPage comparativa={COMPARATIVA} />;
}
