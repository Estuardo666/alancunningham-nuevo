import { SectionEyebrow } from "../shared/SectionEyebrow";
import { RevealText } from "../shared/RevealText";
import { PrimaryButton } from "../shared/PrimaryButton";
import { FaqBlock } from "@/components/site/FaqBlock";
import { FAQS_HOME } from "@/content/faqs";
import { CTA_PRIMARIO, whatsappHref } from "@/content/clinica";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";
import { T } from "@/i18n/LanguageProvider";

/**
 * 13 · FAQ. The six questions are the ones that decide the appointment —
 * coverage and price first — with one answer open at a time so the section
 * keeps the same motion-led interaction as the Framer reference component.
 */
export function FaqsSection() {
  return (
    <section
      id="faq"
      className="flex justify-center bg-surface-secondary px-5 pt-20 pb-24 lg:px-8 lg:pt-[100px] lg:pb-[130px]"
    >
      <div className="flex w-full max-w-[1300px] flex-col items-start gap-10 lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col items-start justify-between gap-8 lg:w-[440px] lg:shrink-0">
          <div className="flex flex-col items-start gap-2 pb-[5px]">
            <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
            <RevealText
              as="h2"
              text="Precios, coberturas y primera consulta"
              blur={8}
              className="max-w-[440px] text-[36px] leading-[40px] tracking-[-2px] text-foreground lg:text-[54px] lg:leading-[56.16px] lg:tracking-[-3.24px]"
            />
          </div>

          <div className="flex max-w-[280px] flex-col items-start gap-4">
            <p className="text-[17px] leading-[23.46px] tracking-[-0.34px] text-muted-foreground">
              <T>
                ¿Tenés otra consulta? Escribinos y te respondemos el mismo día.
              </T>
            </p>
            <PrimaryButton
              label={CTA_PRIMARIO}
              href={whatsappHref()}
              variant="primary"
            />
            <TextArrowCTA
              href="/faq"
              className="text-[16px] leading-[23.2px] tracking-[-0.24px]"
            >
              Ver todas las preguntas
            </TextArrowCTA>
          </div>
        </div>

        <FaqBlock faqs={FAQS_HOME} />
      </div>
    </section>
  );
}
