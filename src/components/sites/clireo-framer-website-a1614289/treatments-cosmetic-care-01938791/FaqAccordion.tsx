import { FaqBlock } from "@/components/site/FaqBlock";
import type { Faq } from "@/content/types";

/**
 * Click-driven accordion; the first row is open on load, as on the source.
 *
 * Kept as the named entry point the treatment pages used, now delegating to
 * `site/FaqBlock` so every accordion on the site shares one implementation and
 * one `FAQPage` source of truth.
 */
export function FaqAccordion({
  faqs,
  titulo = "Preguntas frecuentes",
}: {
  faqs: Faq[];
  titulo?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
        {titulo}
      </h2>
      <FaqBlock faqs={faqs} />
    </div>
  );
}
