import { ComparativaPage } from "@/components/site/ComparativaPage";
import { comparativaPorSlug } from "@/content/intenciones";
import { buildMetadata } from "@/lib/seo";

const COMPARATIVA = comparativaPorSlug("alineadores-vs-brackets")!;

export const metadata = buildMetadata({
  title: COMPARATIVA.title,
  description: COMPARATIVA.description,
  path: "/alineadores-vs-brackets",
});

export default function Page() {
  return <ComparativaPage comparativa={COMPARATIVA} />;
}
