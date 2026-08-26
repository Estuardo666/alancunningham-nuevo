import "./globals.css";
import { JsonLd } from "@/components/site/JsonLd";
import {
  dentistSchema,
  grafo,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import { EQUIPO } from "@/content/equipo";
import { buildMetadata } from "@/lib/seo";
import { CLINICA } from "@/content/clinica";

export const metadata = {
  ...buildMetadata({
    title: `${CLINICA.nombre} — Odontología en Núñez, Buenos Aires`,
    description: CLINICA.descripcionCorta,
    path: "/",
  }),
  icons: {
    icon: "/seo/cropped-Asset-2-32x32.png",
    apple: "/seo/cropped-Asset-2-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      // The anti-flash script below stamps `dark`/`light` on <html> before
      // hydration, so the class list legitimately differs from the SSR output.
      suppressHydrationWarning
      className="light h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try { const theme = localStorage.getItem("clireo-theme"); const root = document.documentElement; root.classList.remove("dark", "light"); if (theme === "dark" || theme === "light") { root.classList.add(theme); root.style.colorScheme = theme; } else { root.classList.add("light"); root.style.colorScheme = "light"; } } catch {}`,
          }}
        />
        {/* Global graph: Dentist + LocalBusiness, Organization, WebSite, Person. */}
        <JsonLd
          data={grafo([
            dentistSchema(),
            ...websiteSchema(),
            ...EQUIPO.map((p) => personSchema(p.slug)),
          ])}
        />
        {children}
      </body>
    </html>
  );
}
