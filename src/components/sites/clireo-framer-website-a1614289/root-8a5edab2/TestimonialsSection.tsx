import { SectionEyebrow } from "../shared/SectionEyebrow";
import { RevealText } from "../shared/RevealText";
import { CtaConMicrocopy } from "@/components/site/PageShell";
import { GoogleReviews } from "@/components/site/GoogleReviews";

/**
 * 10 · Reviews. Separated from the before/after block, which now lives in
 * position 3 (plan §3.2).
 *
 * The reviews themselves are loaded from the clinic's Google Places profile.
 * No patient quotes are stored or fabricated in the source code.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="flex justify-center overflow-hidden bg-background px-5 pt-20 pb-20 lg:px-8 lg:pt-[110px] lg:pb-[120px]"
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-10 lg:gap-[50px]">
        <div className="flex flex-col items-center gap-[10px]">
          <SectionEyebrow>Opiniones de pacientes</SectionEyebrow>
          <RevealText
            as="h2"
            text="Lo que dicen quienes se atendieron acá"
            blur={8}
            className="max-w-[600px] text-center text-[34px] leading-[38px] tracking-[-1.8px] text-foreground lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]"
          />
        </div>

        <GoogleReviews />

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start sm:gap-10">
          <CtaConMicrocopy contexto="una consulta inicial" align="center" />
        </div>
      </div>
    </section>
  );
}
