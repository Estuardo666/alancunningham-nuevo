import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "./icons";

/**
 * The site's only three CTA treatments: one for dark surfaces and two for
 * light surfaces. Every variant keeps its body stable on hover; the arrow tile
 * supplies the state change without changing text contrast or layout bounds.
 */
export function PrimaryButton({
  label,
  variant = "primary",
  className,
  ...props
}: {
  label: string;
  variant?: "dark" | "primary" | "secondary";
} & ComponentPropsWithoutRef<"a">) {
  const isDark = variant === "dark";
  const isSecondary = variant === "secondary";

  return (
    <a
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-[22px] overflow-hidden rounded-[16px] py-[5px] pr-[5px] pl-8 shadow-[var(--clireo-shadow)]",
        isDark
          ? "bg-button-dark-bg text-button-dark-foreground"
          : isSecondary
            ? "bg-button-secondary-bg text-button-secondary-foreground"
            : "bg-button-primary-bg text-button-primary-foreground",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "block h-[23px] overflow-hidden whitespace-nowrap text-[17px] leading-[23.46px] tracking-[-0.34px]",
          isDark
            ? "text-button-dark-foreground"
            : isSecondary
              ? "text-button-secondary-foreground"
              : "text-button-primary-foreground",
        )}
      >
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[23px]">
          <span className="block">{label}</span>
          <span className="block">{label}</span>
        </span>
      </span>

      <span
        className={cn(
          "relative flex h-[38px] w-[38px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] p-[7px] transition-colors duration-200",
          isDark
            ? "bg-button-dark-arrow text-button-dark-arrow-foreground group-hover:bg-button-dark-arrow-hover group-hover:text-button-dark-arrow-hover-foreground"
            : isSecondary
              ? "bg-button-secondary-arrow text-button-secondary-arrow-foreground group-hover:bg-button-secondary-arrow-hover group-hover:text-button-secondary-arrow-hover-foreground"
              : "bg-button-primary-arrow text-button-primary-arrow-foreground group-hover:bg-button-primary-arrow-hover group-hover:text-button-primary-arrow-hover-foreground",
        )}
      >
        <ArrowUpRightIcon
          aria-hidden
          className="h-6 w-6 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}
