import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/clinica";

/** Static export: emitted as a file at build time. */
export const dynamic = "force-static";

/**
 * While the site lives on a temporary URL (Render preview, staging) the whole
 * host is closed to crawlers: a prototype that gets indexed competes with the
 * real domain for its own content. Flip NEXT_PUBLIC_NOINDEX off for production.
 */
const PROTOTIPO = process.env.NEXT_PUBLIC_NOINDEX === "true";

export default function robots(): MetadataRoute.Robots {
  if (PROTOTIPO) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/nosotros/instalaciones"] },
    ],
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
    host: SITE_URL,
  };
}
