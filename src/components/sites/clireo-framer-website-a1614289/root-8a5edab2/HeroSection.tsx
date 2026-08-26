import Image from "next/image";
import { RevealText } from "../shared/RevealText";
import { PrimaryButton } from "../shared/PrimaryButton";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";
import { GoogleRatingSummary } from "@/components/site/GoogleReviews";
import { T } from "@/i18n/LanguageProvider";

/**
 * Home hero. Two corrections from the plan land here:
 *  · the H1 carries treatment + geo modifier (DOHO P2),
 *  · the price anchor and condensed proof are visible above the fold (AM P2).
 * The form is not shown here — it stays the single conversion point lower on
 * the page and in the footer, so the hero reads as headline + proof, not a
 * form landing page.
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-[900px] flex-col items-center justify-end overflow-hidden bg-hero px-5 pb-12 lg:justify-center lg:px-8 lg:pb-0">
      <div className="absolute inset-0 z-0 scale-[1.008]">
        <Image
          src="/images/DSC_0110-1024x683.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
        <div className="hero-overlay-horizontal absolute inset-0" />
        <div className="hero-overlay-vertical absolute inset-0" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1300px] flex-col items-start gap-10 pt-24 lg:gap-[70px] lg:py-24">
        <div className="flex max-w-[640px] flex-col items-start justify-center gap-[14px]">
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-[15px] leading-[21px] tracking-[1.26px] text-white/80 uppercase">
              <T>Odontología con planificación digital</T>
            </p>
            <RevealText
              as="h1"
              text="Implantes y diseño de sonrisa en Núñez"
              blur={5}
              className="max-w-[640px] text-[40px] leading-[42px] tracking-[-2px] text-white lg:text-[64px] lg:leading-[62px] lg:tracking-[-3.5px]"
            />
          </div>
          <p className="max-w-[480px] text-[18px] leading-[25px] tracking-[-0.6px] text-white/90 lg:text-[20px] lg:leading-[27px] lg:tracking-[-0.8px]">
            <T>
              Planificamos en digital y te mostramos el resultado antes de
              tocar un diente.
            </T>
          </p>
        </div>

        {/* Price anchor + condensed proof, before the first scroll (AM P2). */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <PrimaryButton
              label="Ver precios y medios de pago"
              href="/precios"
              variant="dark"
            />
            <TextArrowCTA href="/obras-sociales" className="text-white">
              <T>¿Trabajan con mi obra social?</T>
            </TextArrowCTA>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <GoogleRatingSummary className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
