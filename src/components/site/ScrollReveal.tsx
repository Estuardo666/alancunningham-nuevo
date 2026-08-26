"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const REVEAL_BASE =
  "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export function ScrollReveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-revealed={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        REVEAL_BASE,
        visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-5 opacity-0 blur-[5px]",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ScrollRevealItem({ children, className, delay = 0 }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      data-revealed={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        REVEAL_BASE,
        visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-5 opacity-0 blur-[5px]",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0",
        className,
      )}
    >
      {children}
    </li>
  );
}
