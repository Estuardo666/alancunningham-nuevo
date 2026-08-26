"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "../shared/PrimaryButton";
import { ThemeToggle } from "../shared/ThemeToggle";
import { LanguageSwitch } from "@/i18n/LanguageSwitch";
import { useTr } from "@/i18n/LanguageProvider";
import type { NavLink } from "@/types/clireo";
import { CLINICA, whatsappHref } from "@/content/clinica";

/**
 * Six destinations, no more (plan §2.1). This is the correction of AM's double
 * navigation: one vocabulary, one bar.
 */
const LINKS: NavLink[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Casos", href: "/casos" },
  { label: "Turismo odontológico", href: "/turismo-odontologico" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Spring feel without a spring: the curve overshoots past 1 and settles back,
 * which is what reads as "premium" here. A CSS curve also survives a busy main
 * thread, where a JS-driven spring silently snaps to its end value.
 */
const RESORTE = "cubic-bezier(0.22, 1.28, 0.36, 1)";
/** Closing is faster and flat — nobody wants to wait for a dismissal. */
const CIERRE = "cubic-bezier(0.4, 0, 1, 1)";
/** Small enough that six links never read as a queue. */
const ESCALON = 45;

/**
 * Two variants, matching Framer's "Desktop Transparent" and "Desktop navigation":
 * over the hero the bar is fully visible but transparent, and once the 1px
 * sentinel at the top of the page scrolls out of view it gains the navy fill.
 */
export function SiteNav({ overLight = false }: { overLight?: boolean } = {}) {
  const tr = useTr();
  const sentinel = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);

  /** Over a light page the bar starts dark-on-light instead. */
  const onDark = scrolled || !overLight;
  const textClass = onDark ? "text-white" : "text-foreground";

  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute top-0 h-px w-full" />
      <nav
        aria-label={tr("Navegación principal")}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex flex-col items-center px-5 transition-colors duration-300 ease-out lg:px-8",
          scrolled || abierto ? "bg-hero" : "bg-transparent",
        )}
      >
        <div className="flex h-[68px] w-full max-w-[1300px] items-center justify-between py-1">
          <Link
            href="/"
            aria-label={CLINICA.nombre}
            className="flex w-[170px] items-center"
          >
            <Image
              src="/logo.png"
              alt={CLINICA.nombre}
              width={782}
              height={300}
              priority
              className={cn(
                "h-[52px] w-auto",
                onDark || abierto
                  ? "brightness-0 invert"
                  : "dark:brightness-0 dark:invert",
              )}
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex lg:gap-8">
            {LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="group">
                <SwapLabel label={tr(link.label)} className={textClass} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Agendá tu consulta"
              href={whatsappHref()}
              variant="dark"
              className="hidden rounded-[11px] lg:flex"
            />

            <LanguageSwitch onDark={onDark || abierto} />

            <ThemeToggle onDark={onDark || abierto} />

            <button
              type="button"
              aria-label={tr(abierto ? "Cerrar menú" : "Abrir menú")}
              aria-expanded={abierto}
              aria-controls="menu-mobile"
              onClick={() => setAbierto((v) => !v)}
              className={cn(
                abierto ? "text-white" : textClass,
                "flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-150 ease-out active:scale-[0.92] lg:hidden",
              )}
            >
              <HamburguesaIcon abierto={abierto} />
            </button>
          </div>
        </div>

        {/* Always mounted: a CSS transition runs off the main thread and, unlike
            a mount/unmount animation, cannot be skipped when the thread is busy
            — which is exactly when a tap on the menu happens. `inert` keeps the
            closed panel out of the tab order and out of the a11y tree. */}
        <div
          id="menu-mobile"
          inert={!abierto}
          style={{
            transformOrigin: "top center",
            transitionTimingFunction: abierto ? RESORTE : CIERRE,
          }}
          className={cn(
            "flex w-full max-w-[1300px] origin-top flex-col items-start gap-5 overflow-hidden pt-3 lg:hidden",
            "transition-[opacity,scale,translate,padding-bottom] motion-reduce:transition-opacity",
            abierto
              ? "translate-y-0 scale-y-100 pb-8 opacity-100 duration-[520ms]"
              : "pointer-events-none -translate-y-[8px] scale-y-[0.86] pb-0 opacity-0 duration-[180ms]",
          )}
        >
          {LINKS.map((link, indice) => (
            <ItemMenu key={link.label} abierto={abierto} indice={indice}>
              <Link
                href={link.href}
                onClick={() => setAbierto(false)}
                className="block text-[23px] leading-[31px] tracking-[-0.9px] text-white"
              >
                {tr(link.label)}
              </Link>
            </ItemMenu>
          ))}
          <ItemMenu abierto={abierto} indice={LINKS.length} className="mt-2">
            <PrimaryButton
              label="Agendá tu consulta"
              href={whatsappHref()}
              variant="dark"
              className="rounded-[12px]"
            />
          </ItemMenu>
        </div>
      </nav>
    </>
  );
}

/**
 * One row of the mobile menu. Entering, the rows stagger in behind the panel;
 * leaving, they all go at once — a staggered exit only delays a dismissal the
 * user already asked for.
 */
function ItemMenu({
  abierto,
  indice,
  className,
  children,
}: {
  abierto: boolean;
  indice: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        transitionDelay: abierto ? `${90 + indice * ESCALON}ms` : "0ms",
        transitionTimingFunction: abierto ? RESORTE : CIERRE,
      }}
      className={cn(
        "transition-[opacity,translate] motion-reduce:transition-opacity",
        abierto
          ? "translate-y-0 opacity-100 duration-[420ms]"
          : "translate-y-[12px] opacity-0 duration-[150ms]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Three lines that fold into a cross: the middle bar fades, the outer two meet
 * in the centre and rotate. Only `transform` and `opacity` move, so the whole
 * thing stays on the compositor.
 */
function HamburguesaIcon({ abierto }: { abierto: boolean }) {
  const barra =
    "absolute left-0 h-[2px] w-[22px] rounded-full bg-current transition-[translate,rotate,opacity] duration-[260ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none";

  return (
    <span aria-hidden className="relative block h-[16px] w-[22px]">
      <span
        className={cn(
          barra,
          "top-0",
          abierto ? "translate-y-[7px] rotate-45" : "rotate-0",
        )}
      />
      <span
        className={cn(
          barra,
          "top-[7px]",
          abierto ? "scale-x-0 opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          barra,
          "top-[14px]",
          abierto ? "-translate-y-[7px] -rotate-45" : "rotate-0",
        )}
      />
    </span>
  );
}

/**
 * Two stacked copies of the label inside a one-line clip; hovering slides the
 * pair up so the duplicate takes the original's place.
 */
function SwapLabel({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative block h-[21px] overflow-hidden whitespace-nowrap text-[14.5px] leading-[21px] tracking-[-0.2px]",
        className,
      )}
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[21px]">
        <span className="block">{label}</span>
        <span className="block">{label}</span>
      </span>
    </span>
  );
}
