import { RevealText } from "../shared/RevealText";
import { PrimaryButton } from "../shared/PrimaryButton";
import { GoogleRatingSummary } from "@/components/site/GoogleReviews";
import { T } from "@/i18n/LanguageProvider";
import { CTA_PRIMARIO, TURNOS_HREF } from "@/content/clinica";

/**
 * Home hero. Two corrections from the plan land here:
 *  · the H1 carries treatment + geo modifier (DOHO P2),
 *  · the primary appointment CTA and condensed proof are visible above the fold.
 * The form is not shown here — it stays the single conversion point lower on
 * the page and in the footer, so the hero reads as headline + proof, not a
 * form landing page.
 */
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-hero px-5 pt-28 pb-14 lg:min-h-[860px] lg:justify-center lg:px-8 lg:pt-32 lg:pb-20">
      <div className="relative z-10 grid w-full max-w-[1300px] items-center gap-10 lg:grid-cols-[minmax(0,500px)_1fr] lg:gap-16">
        {/* Column 1 · real clinic reel. Above the copy on mobile. */}
        <div className="hero-entrance hero-entrance-2 order-1 mx-auto w-full max-w-[400px] lg:order-1 lg:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-foreground shadow-[var(--clireo-shadow-md)] lg:max-h-[700px]">
            <video
              src="/videos/estudio/web/reel-1.mp4"
              poster="/videos/estudio/web/reel-1.webp"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Column 2 · headline, CTA and proof. */}
        <div className="order-2 flex flex-col items-start gap-10 lg:order-2 lg:gap-[56px]">
          <div className="flex max-w-[640px] flex-col items-start justify-center gap-[14px]">
            <div className="flex flex-col items-start gap-[10px]">
              <div className="hero-entrance hero-entrance-1">
                <p className="text-[15px] leading-[21px] tracking-[1.26px] text-white/80 uppercase">
                  <T>Estudio Odontológico Dr. Esp. Cunningham</T>
                </p>
              </div>
              <div className="hero-entrance hero-entrance-2">
                <RevealText
                  as="h1"
                  text="Diseño de sonrisa y planificación implantológica guiada"
                  blur={5}
                  duration={0.45}
                  className="max-w-[640px] text-[46px] leading-[48px] tracking-[-2.3px] text-white lg:text-[74px] lg:leading-[72px] lg:tracking-[-4px]"
                />
              </div>
            </div>
            <div className="hero-entrance hero-entrance-3">
              <p className="max-w-[480px] text-[18px] leading-[25px] tracking-[-0.6px] text-white/90 lg:text-[20px] lg:leading-[27px] lg:tracking-[-0.8px]">
                <T>
                  De la estética a la rehabilitación. Un gran cambio conlleva
                  una gran responsabilidad y orden.
                </T>
              </p>
            </div>
          </div>

          {/* Primary appointment CTA + condensed proof, before the first scroll. */}
          <div className="hero-entrance hero-entrance-4 flex flex-col items-start gap-5">
            <div className="hero-entrance hero-entrance-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <PrimaryButton
                label={CTA_PRIMARIO}
                href={TURNOS_HREF}
                variant="dark"
              />
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <GoogleRatingSummary className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
