import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import { asset } from "../shared/assets";
import { PrimaryButton } from "../shared/PrimaryButton";
import { RevealText } from "../shared/RevealText";
import { CLINICA, CTA_PRIMARIO, whatsappHref } from "@/content/clinica";
import { PILARES, rutaPilar } from "@/content/tratamientos";
import { INTENCIONES } from "@/content/intenciones";
import { GoogleRatingSummary } from "@/components/site/GoogleReviews";
import { T } from "@/i18n/LanguageProvider";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Tratamientos",
      links: PILARES.slice(0, 5).map((p) => ({
        label: p.nombre,
        href: rutaPilar(p.slug),
      })),
    },
    {
      heading: "Secciones",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Tratamientos", href: "/tratamientos" },
        { label: "Casos clínicos", href: "/casos" },
        { label: "Nosotros", href: "/nosotros" },
        { label: "Turismo odontológico", href: "/turismo-odontologico" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      heading: "Información",
      links: [
        { label: "Precios y medios de pago", href: "/precios" },
        { label: "Obras sociales", href: "/obras-sociales" },
        { label: "Preguntas frecuentes", href: "/faq" },
        { label: "Dentista en Núñez", href: "/dentista-en-nunez" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
    {
      // The "explorá por intención" hub used to be a full home section; the two
      // informational entries were already linked above, so what moves here are
      // the comparison pages, which had no other entry point in the footer.
      heading: "Compará opciones",
      links: INTENCIONES.filter((i) => i.href.includes("-vs-")).map((i) => ({
        label: i.titulo,
        href: i.href,
      })),
    },
  ];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/smiledesigncenter.ba",
    icon: "facebook",
  },
  { label: "Instagram", href: CLINICA.instagram, icon: "instagram" },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@smiledesigncenter.ba",
    icon: "tiktok",
  },
  { label: "Google Maps", href: CLINICA.mapa, icon: "maps" },
] as const;

const FOOTER_HOVER_TONES = [
  "hover:text-accent-coral",
  "hover:text-secondary",
  "hover:text-accent-yellow",
  "hover:text-white/70",
] as const;

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c0 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488";

function SocialIcon({ name }: { name: (typeof SOCIAL_LINKS)[number]["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      aria-hidden
      {...common}
    >
      {name === "facebook" ? (
        <path
          fill="currentColor"
          stroke="none"
          d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1Z"
        />
      ) : null}
      {name === "instagram" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="0.7"
            fill="currentColor"
            stroke="none"
          />
        </>
      ) : null}
      {name === "tiktok" ? (
        <path d="M14 4v10.1a3.6 3.6 0 1 1-3-3.55M14 4c.7 2.1 2 3.3 4 3.7" />
      ) : null}
      {name === "maps" ? (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      ) : null}
    </svg>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d={WHATSAPP_PATH} fill="currentColor" />
    </svg>
  );
}

export function SiteFooter({
  /** Pages that already close with their own CTA hide this one (e.g. /contacto). */
  conCta = true,
}: {
  conCta?: boolean;
} = {}) {
  return (
    <footer id="footer" className="flex flex-col items-center bg-hero">
      <div className="flex w-full flex-col items-center pt-20">
        {conCta ? (
          <div className="w-full px-5 lg:px-8">
            <div className="relative flex w-full max-w-[1300px] flex-col items-center justify-end gap-6 overflow-clip rounded-[20px] px-6 pt-12 pb-14 lg:mx-auto lg:min-h-[450px] lg:px-10 lg:pb-[70px]">
              <Image
                src={asset("PnpAr08n1JUeJxXkKediO8U3i0.webp")}
                alt=""
                fill
                sizes="1300px"
                className="absolute inset-0 rounded-[20px] object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[20px]"
                style={{
                  background:
                    "linear-gradient(9deg, color-mix(in srgb, var(--hero) 100%, transparent) -10%, color-mix(in srgb, var(--hero) 65%, transparent) 27%, color-mix(in srgb, var(--hero) 15%, transparent) 93%)",
                }}
              />

              <div className="relative flex w-full max-w-[800px] flex-col items-center gap-6">
                <RevealText
                  as="h2"
                  text="Empecemos por tu próximo paso"
                  blur={8}
                  className="text-center text-[36px] leading-[40px] tracking-[-2px] text-white lg:text-[54px] lg:leading-[56.16px] lg:tracking-[-3.24px]"
                />

                <div className="flex max-w-[520px] flex-col items-center gap-7">
                  <p className="text-center text-[17px] leading-[23.46px] tracking-[-0.34px] text-white">
                    <T>
                      Contanos qué necesitás. Salís con un plan claro y un
                      presupuesto por escrito.
                    </T>
                  </p>

                  <div className="flex flex-col items-center gap-6 sm:flex-row">
                    <div className="flex flex-col items-center gap-2">
                      <PrimaryButton
                        label={CTA_PRIMARIO}
                        href={whatsappHref()}
                        variant="dark"
                      />
                    </div>
                    <GoogleRatingSummary className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="w-full px-5 lg:px-8">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-10 pt-14 pb-16 lg:flex-row lg:items-start lg:gap-8 lg:pb-[90px]">
            <div className="flex max-w-[482px] flex-col items-start gap-[22px]">
              <Image
                src="/logo.png"
                alt={CLINICA.nombre}
                width={782}
                height={300}
                className="h-auto w-[190px] brightness-0 invert sm:w-[220px]"
              />
              <address className="flex flex-col gap-2 text-[17px] leading-[23.46px] tracking-[-0.34px] text-white not-italic">
                <span className="flex items-start gap-2">
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-accent-yellow"
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  <span>
                    {CLINICA.direccion.calle}, {CLINICA.direccion.barrio},{" "}
                    {CLINICA.direccion.ciudad}
                  </span>
                </span>
                <a
                  href={whatsappHref()}
                  className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-70"
                >
                  <WhatsAppMark />
                  <span>{CLINICA.telefono}</span>
                </a>
                <span className="flex items-start gap-2 text-white/70">
                  <Clock3
                    className="mt-1 h-4 w-4 shrink-0 text-accent-yellow"
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  <span>
                    <T>{CLINICA.horariosTexto}</T>
                  </span>
                </span>
              </address>
              <div
                className="flex items-center gap-3"
                aria-label="Redes y ubicación"
              >
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-accent-yellow hover:bg-accent-yellow hover:text-accent-yellow-strong"
                  >
                    <SocialIcon name={icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-8 lg:grid-cols-4">
              {COLUMNS.map((column, columnIndex) => (
                <div key={column.heading} className="flex flex-col gap-3">
                  <p className="text-[14px] leading-[18.2px] tracking-[1.26px] text-white uppercase">
                    <T>{column.heading}</T>
                  </p>
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-[15px] font-normal leading-[21px] tracking-[-0.24px] text-white transition-colors duration-300 ${FOOTER_HOVER_TONES[columnIndex]}`}
                    >
                      <T>{link.label}</T>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-between gap-2 py-10 sm:flex-row">
          <p className="text-[16px] leading-[23.2px] tracking-[-0.24px] text-white">
            © 2026 {CLINICA.nombre}. <T>Todos los derechos reservados.</T>
          </p>
          <p className="text-[16px] leading-[23.2px] tracking-[-0.24px] text-white">
            {CLINICA.titular} · M.N. 42463 · Núñez, Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
