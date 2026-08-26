"use client";

import Link from "next/link";
import { motion, type Transition, type Variants } from "framer-motion";
import { useState, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Text link CTA modelled on the Framer "Text Arrow CTA" component:
 * on hover the trailing arrow spins away while a leading one spins in, and the
 * underline wipes from the right half to the left half on a staggered spring.
 */

const springFast: Transition = { type: "spring", bounce: 0.3, duration: 1 };
const springDelayed: Transition = { ...springFast, delay: 0.3 };

const arrowRight: Variants = {
  rest: { rotate: 0, scale: 1, opacity: 1, width: "1em", marginLeft: "0.5em" },
  active: { rotate: -90, scale: 0, opacity: 0, width: 0, marginLeft: 0 },
};

const arrowLeft: Variants = {
  rest: { rotate: -90, scale: 0, opacity: 0, width: 0, marginRight: 0 },
  active: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    width: "1em",
    marginRight: "0.5em",
  },
};

const lineRight: Variants = {
  rest: { width: "100%", transition: springFast },
  active: { width: "1%", transition: springDelayed },
};

const lineLeft: Variants = {
  rest: { width: "1%", transition: springDelayed },
  active: { width: "100%", transition: springFast },
};

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-[1em] w-[1em] shrink-0", className)}
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

type TextArrowCTAProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "children"
> & {
  children: ReactNode;
};

export function TextArrowCTA({
  className,
  children,
  ...props
}: TextArrowCTAProps) {
  const [active, setActive] = useState(false);

  return (
    <Link
      {...props}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={cn(
        "relative inline-flex w-fit items-center pb-[6px] no-underline",
        "text-[17px] font-medium leading-[23.46px] tracking-[-0.34px] text-accent-coral-strong",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        className,
      )}
    >
      <motion.span
        variants={arrowLeft}
        initial={false}
        animate={active ? "active" : "rest"}
        transition={springFast}
        className="inline-flex overflow-hidden"
      >
        <Arrow />
      </motion.span>

      <span>{children}</span>

      <motion.span
        variants={arrowRight}
        initial={false}
        animate={active ? "active" : "rest"}
        transition={springFast}
        className="inline-flex overflow-hidden"
      >
        <Arrow />
      </motion.span>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <motion.span
          variants={lineLeft}
          initial={false}
          animate={active ? "active" : "rest"}
          className="absolute left-0 top-0 h-px bg-current"
        />
        <motion.span
          variants={lineRight}
          initial={false}
          animate={active ? "active" : "rest"}
          className="absolute right-0 top-0 h-px bg-current"
        />
      </span>
    </Link>
  );
}
