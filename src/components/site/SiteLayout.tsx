import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/sites/clireo-framer-website-a1614289/shared/SmoothScroll";
import { SiteNav } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/SiteFooter";
import { WhatsAppButton } from "@/components/sites/clireo-framer-website-a1614289/root-8a5edab2/WhatsAppButton";

/** Chrome shared by every internal page: nav, smooth scroll, footer, WhatsApp. */
export function SitePage({
  children,
  contexto,
  ctaFinal = true,
  navOverLight = false,
}: {
  children: ReactNode;
  /** Page context preloaded into the floating WhatsApp message. */
  contexto?: string;
  /** Set false on pages that already close with their own CTA. */
  ctaFinal?: boolean;
  navOverLight?: boolean;
}) {
  return (
    <div className="relative">
      <SmoothScroll />
      <SiteNav overLight={navOverLight} />
      <main>{children}</main>
      <SiteFooter conCta={ctaFinal} />
      <WhatsAppButton contexto={contexto} />
    </div>
  );
}
