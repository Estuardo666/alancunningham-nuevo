import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/sites/clireo-framer-website-a1614289/shared/SectionEyebrow";
import { RevealText } from "@/components/sites/clireo-framer-website-a1614289/shared/RevealText";
import { PrimaryButton } from "@/components/sites/clireo-framer-website-a1614289/shared/PrimaryButton";
import { Breadcrumbs, type Miga } from "./Breadcrumbs";
import { CTA_PRIMARIO, whatsappHref } from "@/content/clinica";

/** The four background bands of the system, in Tailwind form. */
export type Banda = "hero" | "background" | "secondary" | "strong";

const BANDA: Record<Banda, string> = {
  hero: "bg-hero",
  background: "bg-background",
  secondary: "bg-surface-secondary",
  strong: "bg-surface-strong",
};

/**
 * Internal page hero: navy band with a real photograph behind it and the
 * system's two gradient overlays on top, plus a flat tint so the copy holds
 * contrast over any image. A solid colour band is the fallback when a page has
 * no photograph worth showing.
 *
 * Deliberately shorter than the template's `pt-[300px]`: these are internal
 * pages, and the content should start near the fold.
 */
export function PageHero({
  eyebrow,
  h1,
  bajada,
  migas,
  imagen,
  children,
}: {
  eyebrow: string;
  h1: string;
  bajada?: string;
  migas: Miga[];
  /** Background photograph. The alt stays empty: it is decorative here. */
  imagen?: { src: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[500px] items-end justify-center overflow-hidden bg-hero px-5 pt-[130px] pb-12 lg:min-h-[640px] lg:px-8 lg:pt-[170px] lg:pb-16">
      {imagen ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={imagen.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Only the vertical gradient: it darkens the top so the fixed nav
              stays legible and fades out below. The horizontal one is tuned for
              the home hero, where the copy sits hard left — stacked here it
              took the left edge to ~97% and the photograph disappeared. */}
          <div className="hero-overlay-vertical absolute inset-0" />
          {/* Flat tint: enough for white copy to hold, light enough that the
              photograph still reads as a photograph. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--hero) 55%, transparent)",
            }}
          />
        </div>
      ) : null}

      <div className="relative z-10 flex w-full max-w-[1300px] flex-col items-start gap-6">
        <Breadcrumbs items={migas} />
        <div className="flex flex-col items-start gap-[10px]">
          <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow>
          <RevealText
            as="h1"
            text={h1}
            blur={5}
            className="max-w-[900px] text-[36px] leading-[40px] tracking-[-2px] text-white lg:text-[54px] lg:leading-[56.16px] lg:tracking-[-3.24px]"
          />
        </div>
        {bajada ? (
          <p className="max-w-[640px] text-[18px] leading-[24.3px] tracking-[-0.54px] text-white/80">
            {bajada}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

/**
 * Compact page header for content that should start immediately — a clinical
 * case, where the before/after is the argument and a full-bleed navy band would
 * just push it below the fold.
 *
 * Breadcrumb, eyebrow, H1 and a metadata row, on the light band, then straight
 * into the content.
 */
export function PageHeaderCompacto({
  eyebrow,
  h1,
  bajada,
  migas,
  datos,
}: {
  eyebrow: string;
  h1: string;
  bajada?: string;
  migas: Miga[];
  /** Inline key/value row: treatment, duration, sessions. */
  datos?: { etiqueta: string; valor: string; icon?: LucideIcon }[];
}) {
  return (
    <section className="flex justify-center bg-background px-5 pt-[110px] pb-10 lg:px-8 lg:pt-[140px] lg:pb-12">
      <div className="flex w-full max-w-[1300px] flex-col items-start gap-5">
        <Breadcrumbs items={migas} tone="dark" />
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="max-w-[900px] text-[32px] leading-[36px] tracking-[-1.6px] text-foreground lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]">
          {h1}
        </h1>
        {bajada ? (
          <p className="max-w-[720px] text-[18px] leading-[24.3px] tracking-[-0.54px] text-muted-foreground">
            {bajada}
          </p>
        ) : null}
        {datos?.length ? (
          <dl className="flex flex-wrap gap-2 border-t border-border pt-5 lg:flex-nowrap">
            {datos.map((dato, index) => {
              const tonos = [
                "bg-accent-coral/15 text-accent-coral-strong",
                "bg-secondary/20 text-secondary-foreground",
                "bg-accent-yellow/30 text-accent-yellow-strong",
              ];

              return (
                <div
                  key={dato.etiqueta}
                  className={cn(
                    "flex min-w-0 items-center gap-2 rounded-full px-3 py-2",
                    tonos[index % tonos.length],
                  )}
                >
                  <dt className="flex shrink-0 items-center gap-1.5 text-[12px] leading-[17px] tracking-[-0.12px]">
                    {dato.icon ? (
                      <dato.icon
                        className="h-[15px] w-[15px]"
                        strokeWidth={1.8}
                        aria-hidden
                      />
                    ) : null}
                    {dato.etiqueta}
                  </dt>
                  <dd className="min-w-0 truncate text-[14px] leading-[19px] tracking-[-0.14px]">
                    {dato.valor}
                  </dd>
                </div>
              );
            })}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

/** A standard content band with the system's vertical rhythm. */
export function Section({
  banda = "background",
  id,
  className,
  children,
}: {
  banda?: Banda;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "flex justify-center px-5 py-20 lg:px-8 lg:py-[120px]",
        BANDA[banda],
        className,
      )}
    >
      <div className="flex w-full max-w-[1300px] flex-col items-start gap-10">
        {children}
      </div>
    </section>
  );
}

/** Eyebrow + H2 + optional lead, in the two tones the system uses. */
export function SectionHeading({
  eyebrow,
  titulo,
  bajada,
  tone = "dark",
  align = "left",
  compact = false,
  as = "h2",
}: {
  eyebrow?: string;
  titulo: string;
  bajada?: string;
  /** `light` for copy on the navy bands. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  compact?: boolean;
  as?: "h1" | "h2";
}) {
  const claro = tone === "light";
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-[10px]",
        align === "center" ? "items-center" : "items-start",
      )}
    >
      {eyebrow ? (
        <SectionEyebrow tone={claro ? "light" : "navy"}>
          {eyebrow}
        </SectionEyebrow>
      ) : null}
      <RevealText
        as={as}
        text={titulo}
        blur={8}
        className={cn(
          compact
            ? "max-w-[620px] text-[28px] leading-[32px] tracking-[-1.4px] lg:text-[34px] lg:leading-[38px] lg:tracking-[-1.8px]"
            : "max-w-[700px] text-[34px] leading-[38px] tracking-[-1.8px] lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]",
          claro ? "text-white" : "text-foreground",
          align === "center" && "text-center",
        )}
      />
      {bajada ? (
        <p
          className={cn(
            "max-w-[640px] text-[18px] leading-[24.3px] tracking-[-0.54px]",
            claro ? "text-white/80" : "text-muted-foreground",
            align === "center" && "text-center",
          )}
        >
          {bajada}
        </p>
      ) : null}
    </div>
  );
}

/** Body copy at the system's 17px paragraph size. */
export function Prose({
  parrafos,
  tone = "dark",
  className,
  compact = false,
}: {
  parrafos: string[];
  tone?: "dark" | "light";
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("flex max-w-[720px] flex-col gap-5", className)}>
      {parrafos.map((p) => (
        <p
          key={p.slice(0, 40)}
          className={cn(
            compact
              ? "text-[14px] leading-[19px] tracking-[-0.14px]"
              : "text-[17px] leading-[23.46px] tracking-[-0.34px]",
            tone === "light" ? "text-white/85" : "text-muted-foreground",
          )}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

/** Bullet list in the system's language: coral square + 17px copy. */
export function Checklist({
  items,
  tone = "dark",
  columnas = 2,
  compact = false,
}: {
  items: string[];
  tone?: "dark" | "light";
  columnas?: 1 | 2;
  compact?: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid w-full gap-4",
        columnas === 2 ? "sm:grid-cols-2" : "grid-cols-1",
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden
            className={cn(
              "mt-[9px] block h-[7px] w-[7px] shrink-0 rounded-[2px]",
              tone === "light" ? "bg-accent-coral" : "bg-accent-coral-strong",
            )}
          />
          <span
            className={cn(
              compact
                ? "text-[14px] leading-[19px] tracking-[-0.14px]"
                : "text-[17px] leading-[23.46px] tracking-[-0.34px]",
              tone === "light" ? "text-white/85" : "text-muted-foreground",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered process steps, reusing the Approach card anatomy. */
export function Pasos({
  pasos,
  tone = "dark",
  compact = false,
}: {
  pasos: { titulo: string; descripcion: string }[];
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const compactTones = [
    "border-[#f1c9bf] bg-[#fff1ed]",
    "border-[#bce9e5] bg-[#e9fbf9]",
    "border-[#dce8af] bg-[#f4f8e2]",
  ];

  return (
    <ol
      className={cn(
        "grid w-full gap-4",
        compact ? "lg:grid-cols-3" : "md:grid-cols-2",
      )}
    >
      {pasos.map((paso, index) => (
        <li
          key={paso.titulo}
          className={cn(
            "flex flex-col gap-3 rounded-[16px] border p-8 shadow-[var(--clireo-shadow)]",
            compact
              ? `${compactTones[index % compactTones.length]} p-5`
              : tone === "light"
                ? "border-transparent bg-white/[0.06]"
                : "border-transparent bg-card",
          )}
        >
          <span
            className={cn(
              "font-mono text-[15px] leading-[21px] tracking-[-0.15px]",
              tone === "light" ? "text-accent-yellow" : "text-primary",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              compact
                ? "text-[18px] leading-[23px] tracking-[-0.45px]"
                : "text-[22px] leading-[29.7px] tracking-[-0.88px]",
              tone === "light" ? "text-white" : "text-foreground",
            )}
          >
            {paso.titulo}
          </h3>
          <p
            className={cn(
              compact
                ? "text-[14px] leading-[19px] tracking-[-0.14px]"
                : "text-[17px] leading-[23.46px] tracking-[-0.34px]",
              tone === "light" ? "text-white/80" : "text-muted-foreground",
            )}
          >
            {paso.descripcion}
          </p>
        </li>
      ))}
    </ol>
  );
}

/**
 * The single primary CTA shared across the site.
 */
export function CtaConMicrocopy({
  contexto,
  variant = "primary",
  align = "left",
}: {
  /** Page context preloaded into the WhatsApp message. */
  contexto?: string;
  variant?: "dark" | "primary" | "secondary";
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center" : "items-start",
      )}
    >
      <PrimaryButton
        label={CTA_PRIMARIO}
        href={whatsappHref(contexto)}
        variant={variant}
      />
    </div>
  );
}
