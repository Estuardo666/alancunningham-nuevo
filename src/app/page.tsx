import { SmoothScroll } from "@/components/sites/clireo-framer-website-a1614289/shared/SmoothScroll";
import { SiteNav } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/SiteNav";
import { HeroSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/HeroSection";
import { AboutSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/AboutSection";
import { TickerSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/TickerSection";
import { DoctorsSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/DoctorsSection";
import { ServicesSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/ServicesSection";
import { ApproachSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/ApproachSection";
import { TestimonialsSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/TestimonialsSection";
import { BlogSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/BlogSection";
import { FaqsSection } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/FaqsSection";
import { SiteFooter } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/SiteFooter";
import { WhatsAppButton } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/WhatsAppButton";
import {
  HomeCasos,
  HomeInstalaciones,
  HomePrecioCobertura,
  HomeTurismo,
} from "@/components/home/sections";
import { JsonLd } from "@/components/site/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  grafo,
  webPageSchema,
} from "@/lib/schema";
import { FAQS_HOME } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { CLINICA } from "@/content/clinica";

const TITLE = "Dentista en Núñez: Implantes y Estética | Smile Design Center";
const DESCRIPTION =
  "Consultorio odontológico en Núñez, Buenos Aires. Implantes, rehabilitación oral y diseño de sonrisa con planificación digital. Consulta inicial sin cargo.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
});

/**
 * Home sequence: deseo → contexto → prueba → persona → viabilidad → catálogo →
 * derivación → detalle (plan §3.2, with About and Stats kept in place rather
 * than removed).
 *
 * Band rhythm, verified in the DOM:
 * hero · secondary · secondary · background · secondary · background · strong ·
 * background · secondary · background · strong · secondary · background ·
 * secondary · background.
 *
 * Two consecutive `secondary` bands at 02/03 are deliberate — about and ticker
 * read as a single block on the source site.
 *
 * `HomeIntenciones` used to sit between the carousel and WhyUs. It is still
 * exported and still built from `INTENCIONES`; the comparison links it carried
 * now live in the footer, where they do not cost a full section of scroll.
 */
export default function Home() {
  return (
    <div className="relative min-w-0 w-full">
      <SmoothScroll />
      <JsonLd
        data={grafo([
          webPageSchema({ path: "/", title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema([{ label: "Inicio", href: "/" }]),
          faqSchema(FAQS_HOME),
        ])}
      />
      <SiteNav />
      <main id="hero">
        {/* 01 hero */}
        <HeroSection />
        {/* 02 secondary */}
        <AboutSection />
        {/* 03 secondary */}
        <TickerSection />
        {/* 04 background */}
        <HomeCasos />
        {/* 05 secondary */}
        <DoctorsSection />
        {/* 06 background */}
        <HomePrecioCobertura />
        {/* 07 strong — the treatments carousel */}
        <ServicesSection />
        {/* 08 secondary */}
        <ApproachSection />
        {/* 09 background */}
        <TestimonialsSection />
        {/* 10 secondary */}
        <HomeInstalaciones />
        {/* 11 background */}
        <HomeTurismo />
        {/* 12 secondary */}
        <FaqsSection />
        {/* 13 background */}
        <BlogSection />
      </main>
      {/* closing CTA lives in the footer band */}
      <SiteFooter />
      <WhatsAppButton
        contexto={`una consulta en ${CLINICA.direccion.barrio}`}
      />
    </div>
  );
}
