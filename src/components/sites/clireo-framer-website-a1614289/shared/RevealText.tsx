"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

/**
 * Framer's per-word text effect: every word starts at `opacity: 0.001`,
 * `filter: blur(Npx)` and `translateY(20px)`, then resolves as the block scrolls
 * into view, staggered left-to-right.
 *
 * The blur radius is tiered by role on the source site, which is why it is a
 * prop rather than a constant:
 *   h1 -> 5px · h2 -> 8px · h4/card titles -> 3px · body copy -> 1px
 *
 * The initial and final states are transcribed from the live DOM. The stagger
 * and duration are applied at runtime by Framer and were not recoverable from
 * the page, so they are tuned to match its feel using the site's own easing
 * curve (taken from its appear-animation config).
 */
export function RevealText({
  as: Tag = "span",
  text,
  blur = 8,
  className,
  stagger = 0.045,
  duration = 0.7,
  delay = 0,
}: {
  as?: ElementType;
  text: string;
  blur?: number;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    // No IntersectionObserver (very old browser): show the copy rather than
    // leave it stranded at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={{
            display: "inline-block",
            willChange: "opacity, filter, transform",
            opacity: shown ? 1 : 0.001,
            filter: shown ? "blur(0px)" : `blur(${blur}px)`,
            transform: shown ? "translateY(0px)" : "translateY(20px)",
            transition: `opacity ${duration}s cubic-bezier(0.44, 0, 0.56, 1) ${
              delay + index * stagger
            }s, filter ${duration}s cubic-bezier(0.44, 0, 0.56, 1) ${
              delay + index * stagger
            }s, transform ${duration}s cubic-bezier(0.44, 0, 0.56, 1) ${
              delay + index * stagger
            }s`,
          }}
        >
          {word}
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
