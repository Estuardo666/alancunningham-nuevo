import type { Faq } from "@/content/types";
import { CtaConMicrocopy, SectionHeading } from "./PageShell";
import { FaqBlock } from "./FaqBlock";

export function ContextualFaq({
  eyebrow = "Preguntas frecuentes",
  titulo,
  bajada,
  faqs,
  contexto,
}: {
  eyebrow?: string;
  titulo: string;
  bajada?: string;
  faqs: Faq[];
  contexto?: string;
}) {
  return (
    <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16">
      <div className="flex flex-col gap-8 lg:sticky lg:top-[104px] lg:self-start">
        <SectionHeading eyebrow={eyebrow} titulo={titulo} />
        {bajada || contexto ? (
          <div className="flex max-w-[300px] flex-col items-start gap-4">
            {bajada ? (
              <p className="text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground">
                {bajada}
              </p>
            ) : null}
            {contexto ? <CtaConMicrocopy contexto={contexto} /> : null}
          </div>
        ) : null}
      </div>
      <FaqBlock faqs={faqs} />
    </div>
  );
}
