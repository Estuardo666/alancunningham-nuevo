"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Mirrors the target site's scroll feel — clireo.framer.website runs Lenis
 * (its <html> carries the `lenis` class). Native scrolling reads noticeably
 * different, so this is part of the design, not a nicety.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis();
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
