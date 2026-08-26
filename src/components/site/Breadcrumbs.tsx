import Link from "next/link";

export interface Miga {
  label: string;
  href: string;
}

/**
 * Visible breadcrumb for every internal page. Uses the system's auxiliary text
 * size (15px) and muted foreground — no new tokens.
 */
export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Miga[];
  /** `light` sits on dark hero bands, `dark` on light bands. */
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-white/70" : "text-muted-foreground";
  const activo = tone === "light" ? "text-white" : "text-foreground";

  return (
    <nav aria-label="Migas de pan">
      <ol
        className={`flex flex-wrap items-center gap-2 text-[15px] leading-[21px] tracking-[-0.15px] ${color}`}
      >
        {items.map((item, index) => {
          const ultimo = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {ultimo ? (
                <span className={activo} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                  <span aria-hidden>›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
