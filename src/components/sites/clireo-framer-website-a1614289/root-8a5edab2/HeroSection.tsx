import { RevealText } from "../shared/RevealText";
import { PrimaryButton } from "../shared/PrimaryButton";
import { GoogleRatingSummary } from "@/components/site/GoogleReviews";
import { T } from "@/i18n/LanguageProvider";
import { CTA_PRIMARIO, whatsappHref } from "@/content/clinica";

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
    <section className="relative flex min-h-[900px] flex-col items-center justify-end overflow-hidden bg-hero px-5 pb-12 lg:justify-end lg:px-8 lg:pb-0">
      <div className="hero-background absolute inset-0 z-0 scale-[1.008]">
        <video
          src="/videos/Smile-BG-pc_1.mp4"
          poster="/images/DSC_0110-1024x683.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="h-full w-full object-cover object-[50%_60%]"
        />
        <div className="hero-overlay-horizontal absolute inset-0" />
        <div className="hero-overlay-vertical absolute inset-0" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1300px] flex-col items-start gap-10 pt-24 lg:gap-[70px] lg:py-24">
        <div className="flex max-w-[640px] flex-col items-start justify-center gap-[14px]">
          <div className="flex flex-col items-start gap-[10px]">
            <div className="hero-entrance hero-entrance-1">
              <p className="text-[15px] leading-[21px] tracking-[1.26px] text-white/80 uppercase">
                <T>Estudio Odontológico Cunningham</T>
              </p>
            </div>
            <div className="hero-entrance hero-entrance-2">
              <RevealText
                as="h1"
                text="Diseño de sonrisa e implantes guiados con planificación digital en Núñez"
                blur={5}
                duration={0.45}
                className="max-w-[640px] text-[46px] leading-[48px] tracking-[-2.3px] text-white lg:text-[74px] lg:leading-[72px] lg:tracking-[-4px]"
              />
            </div>
          </div>
          <div className="hero-entrance hero-entrance-3">
            <p className="max-w-[480px] text-[18px] leading-[25px] tracking-[-0.6px] text-white/90 lg:text-[20px] lg:leading-[27px] lg:tracking-[-0.8px]">
              <T>
                Antes de tocar tus dientes, visualizamos y planificamos cada
                etapa de tu tratamiento.
              </T>
            </p>
          </div>
        </div>

        {/* Primary appointment CTA + condensed proof, before the first scroll. */}
        <div className="hero-entrance hero-entrance-4 flex flex-col items-start gap-5">
          <div className="hero-entrance hero-entrance-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <PrimaryButton
              label={CTA_PRIMARIO}
              href={whatsappHref()}
              variant="dark"
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <GoogleRatingSummary className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
