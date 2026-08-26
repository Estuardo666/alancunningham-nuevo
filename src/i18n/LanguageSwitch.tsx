"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "./LanguageProvider";

/**
 * Argentina and the United Kingdom, drawn inline: emoji flags do not render as
 * flags on Windows, and a remote flag sprite would be a network request for
 * 18 pixels. Both are clipped to a circle by the button.
 */
function BanderaAr({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" fill="#fff" />
      <rect width="24" height="8" fill="#74acdf" />
      <rect y="16" width="24" height="8" fill="#74acdf" />
      <circle cx="12" cy="12" r="3" fill="#f6b40e" />
    </svg>
  );
}

function BanderaEn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#fff" strokeWidth="5" />
      <path d="M0 0l24 24M24 0L0 24" stroke="#c8102e" strokeWidth="2.5" />
      <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="8" />
      <path d="M12 0v24M0 12h24" stroke="#c8102e" strokeWidth="4.5" />
    </svg>
  );
}

/**
 * One control, two states: it shows the language currently in use and swaps to
 * the other one on click. A two-flag segmented control was the alternative and
 * it costs twice the width in a bar that already carries a theme toggle and a
 * hamburger.
 */
export function LanguageSwitch({ onDark = true }: { onDark?: boolean }) {
  const { lang, setLang } = useLanguage();
  const enEspanol = lang === "es";

  return (
    <button
      type="button"
      onClick={() => setLang(enEspanol ? "en" : "es")}
      aria-label={enEspanol ? "Switch to English" : "Cambiar a español"}
      title={enEspanol ? "Switch to English" : "Cambiar a español"}
      className={cn(
        // Flag only up to `sm`: the bar already carries a theme toggle and a
        // hamburger there, and the two-letter code is what pushes it over.
        "flex h-11 min-w-11 items-center justify-center gap-0 rounded-full border border-transparent px-0 transition-colors duration-300 sm:gap-2 sm:px-3",
        onDark
          ? "bg-surface-strong text-white hover:bg-black"
          : "bg-background text-foreground hover:bg-accent-yellow hover:text-black",
      )}
    >
      <span className="flex h-[18px] w-[18px] shrink-0 overflow-hidden rounded-full">
        {enEspanol ? (
          <BanderaAr className="h-full w-full" />
        ) : (
          <BanderaEn className="h-full w-full" />
        )}
      </span>
      <span className="hidden text-[12px] leading-none tracking-[0.6px] uppercase sm:inline">
        {enEspanol ? "ES" : "EN"}
      </span>
    </button>
  );
}
