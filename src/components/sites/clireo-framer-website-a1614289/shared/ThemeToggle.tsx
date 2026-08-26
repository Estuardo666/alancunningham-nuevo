"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const THEME_STORAGE_KEY = "clireo-theme";
type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
}

export function ThemeToggle({ onDark = true }: { onDark?: boolean }) {
  const handleToggle = () => {
    const theme: Theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      onClick={handleToggle}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border border-transparent transition-colors duration-300",
        onDark
          ? "bg-surface-strong text-white hover:bg-black"
          : "bg-background text-foreground hover:bg-accent-yellow hover:text-black",
      )}
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden />
    </button>
  );
}
