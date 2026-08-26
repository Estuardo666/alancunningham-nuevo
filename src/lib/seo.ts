import type { Metadata } from "next";
import { CLINICA, SITE_URL } from "@/content/clinica";

/**
 * Metadata generator used by every route. Enforces the plan's rules (§7.2):
 * self-referencing canonical, es-AR locale, OG image per section and a title
 * that already carries the geo modifier from the content layer.
 */
/** See `src/app/robots.ts` — same switch, meta-tag side. */
const PROTOTIPO = process.env.NEXT_PUBLIC_NOINDEX === "true";

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex,
}: {
  title: string;
  description: string;
  /** Absolute path, e.g. `/tratamientos/implantes-dentales`. */
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const ogImage = new URL(
    image ?? "/images/DSC_0110-1024x683.jpg",
    SITE_URL,
  ).toString();

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    // A prototype on a temporary URL is noindex everywhere: robots.txt alone
    // does not keep a URL out of the index, the meta tag does.
    robots:
      PROTOTIPO || noIndex ? { index: false, follow: !PROTOTIPO } : undefined,
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: CLINICA.nombre,
      locale: "es_AR",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
