"use client";

import { cn } from "@/lib/utils";
import { useTr } from "@/i18n/LanguageProvider";

/**
 * The small uppercase label that opens most sections, preceded by a solid
 * square bullet. This is the only positive letter-spacing on the whole site.
 */
export function SectionEyebrow({
  children,
  className,
  tone = "navy",
}: {
  children: string;
  className?: string;
  tone?: "navy" | "light" | "coral" | "yellow";
}) {
  const tr = useTr();
  const color =
    tone === "coral"
      ? "text-accent-coral-strong"
      : tone === "yellow"
        ? "text-accent-yellow-strong"
        : tone === "navy"
          ? "text-foreground"
          : "text-on-strong";

  return (
    <div className={cn("flex items-center gap-[10px]", className)}>
      <span
        aria-hidden
        className={cn(
          "block h-[7px] w-[7px] rounded-[2px]",
          tone === "coral"
            ? "bg-accent-coral-strong"
            : tone === "yellow"
              ? "bg-accent-yellow"
              : tone === "navy"
                ? "bg-foreground"
                : "bg-on-strong",
        )}
      />
      <p
        className={cn(
          "text-[14px] leading-[18.2px] tracking-[1.26px] uppercase",
          color,
        )}
      >
        {tr(children)}
      </p>
    </div>
  );
}
