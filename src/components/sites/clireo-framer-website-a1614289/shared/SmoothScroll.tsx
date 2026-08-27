"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Mirrors the target site's scroll feel — clireo.framer.website runs Lenis
 * (its <html> carries the `lenis` class). Native scrolling reads noticeably
 * different, so this is part of the design, not a nicety.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis();
    lenisRef.current = lenis;
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Preserve intentional deep links such as `/contacto#formulario`.
    if (window.location.hash) return;

    const reset = () => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Run once immediately and again after the new route has painted. This
    // wins over browser/Next scroll restoration and also covers page-level
    // layouts that remount during navigation.
    reset();
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      reset();
      secondFrame = requestAnimationFrame(reset);
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  return null;
}
