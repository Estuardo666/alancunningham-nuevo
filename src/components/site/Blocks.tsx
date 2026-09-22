import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  CalendarDays,
  Landmark,
  MapPinned,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { T } from "@/i18n/LanguageProvider";
import { MEDIOS_DE_PAGO, IMAGENES_PAGO } from "@/content/pagos";
import { TIEMPOS_ESTADIA } from "@/content/turismo";
import {
  rutaPorSlug,
  tratamientoPorSlug,
} from "@/content/tratamientos";

import { TratamientoCard } from "./Cards";

export { Galeria } from "./Galeria";

/** Wrapper that keeps wide tables scrollable inside the band, never the page. */
function TablaScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-0 w-full max-w-full overflow-x-auto rounded-[16px] bg-card shadow-[var(--clireo-shadow)]">
      {children}
    </div>
  );
}

const TH =
  "px-6 py-4 text-left text-[14px] leading-[18.2px] font-medium tracking-[1.26px] text-muted-foreground uppercase";
const TD =
  "px-6 py-4 text-[17px] leading-[23.46px] tracking-[-0.34px] text-foreground";

function TableHeading({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: typeof Stethoscope;
}) {
  return (
    <span className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-primary" strokeWidth={1.8} aria-hidden />
      {children}
    </span>
  );
}

/** Payment methods available for coordinating treatment. */
export function MediosDePago({
  conImagenes = true,
  layout = "grid",
}: {
  conImagenes?: boolean;
  layout?: "grid" | "row";
}) {
  return (
    <div className="flex w-full flex-col gap-8">
      <ul
        className={cn(
          "grid w-full grid-cols-2 gap-4",
          layout === "row"
            ? "sm:grid-cols-2 lg:grid-cols-5"
            : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {MEDIOS_DE_PAGO.map((medio) => (
          <li
            key={medio.nombre}
            className="group flex min-h-[178px] flex-col gap-5 rounded-[15px] border border-primary/10 bg-primary/10 p-5 shadow-[var(--clireo-shadow)] transition-[box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-primary/15 hover:shadow-[var(--clireo-shadow-md)]"
          >
            <PaymentVisual nombre={medio.nombre} />
            <div className="flex flex-col gap-1">
              <p className="min-h-[42px] max-w-[96px] text-[18px] leading-[21px] font-medium tracking-[-0.54px] text-foreground">
                <T>{medio.nombre}</T>
              </p>
              <p className="text-[14px] leading-[18px] tracking-[-0.14px] text-muted-foreground">
                <T>{medio.detalle}</T>
              </p>
            </div>
          </li>
        ))}
      </ul>

      {conImagenes ? (
        <div className="flex flex-col gap-4">
          {IMAGENES_PAGO.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={1024}
              height={300}
              className="h-auto w-full max-w-[520px] rounded-[12px] bg-card object-contain p-4"
            />
          ))}
        </div>
      ) : null}

    </div>
  );
}

function PaymentVisual({ nombre }: { nombre: string }) {
  if (nombre === "Efectivo") {
    return (
      <span className="flex h-10 w-[86px] items-center justify-center rounded-[10px] bg-transparent">
        <Image
          src="/images/pago2.png"
          alt=""
          width={1200}
          height={300}
          className="h-auto w-[83px] object-contain"
        />
      </span>
    );
  }

  if (nombre === "Mercado Pago") {
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#009ee3]/10">
        <Image
          src="/brand-logos/mercadopago.svg"
          alt=""
          width={30}
          height={30}
          className="h-7 w-7"
        />
      </span>
    );
  }

  if (nombre === "Tarjeta de débito" || nombre === "Tarjeta de crédito") {
    return (
      <span className="flex h-10 items-center gap-2" aria-hidden>
        <Image
          src="/brand-logos/visa.svg"
          alt=""
          width={34}
          height={22}
          className="h-5 w-8 object-contain"
        />
        <Image
          src="/brand-logos/mastercard.svg"
          alt=""
          width={34}
          height={22}
          className="h-5 w-8 object-contain"
        />
      </span>
    );
  }

  const Icon = nombre === "Transferencia bancaria" ? Landmark : Banknote;

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-yellow/30 text-accent-yellow-strong">
      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
    </span>
  );
}

/**
 * Stay-time table for dental tourism — the block no other Argentine clinic
 * publishes and the one that answers the segment's dominant objection.
 */
export function StayTimeTable() {
  return (
    <TablaScroll>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className={TH}>
              <TableHeading icon={Stethoscope}>
                <T>Tratamiento</T>
              </TableHeading>
            </th>
            <th scope="col" className={TH}>
              <TableHeading icon={CalendarDays}>Sesiones</TableHeading>
            </th>
            <th scope="col" className={TH}>
              <TableHeading icon={MapPinned}>Estadía estimada</TableHeading>
            </th>
          </tr>
        </thead>
        <tbody>
          {TIEMPOS_ESTADIA.map((t) => {
            const tratamiento = tratamientoPorSlug(t.slug);
            return (
            <tr
              key={t.slug}
              className="border-b border-border even:bg-foreground/[0.035] transition-colors hover:bg-accent-yellow/10 last:border-0"
            >
              <td className={TD}>
                <div className="flex items-start gap-4">
                  {tratamiento ? (
                    <Image
                      src={tratamiento.imagen.src}
                      alt=""
                      width={64}
                      height={52}
                      className="h-[52px] w-16 shrink-0 rounded-[10px] object-cover"
                    />
                  ) : null}
                  <div className="min-w-0">
                    <Link
                      href={rutaPorSlug(t.slug)}
                      className="transition-opacity duration-300 hover:opacity-70"
                    >
                      {t.tratamiento}
                    </Link>
                    {t.nota ? (
                      <span className="mt-1 block text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
                        {t.nota}
                      </span>
                    ) : null}
                  </div>
                </div>
              </td>
              <td className={cn(TD, "whitespace-nowrap text-muted-foreground")}>
                {t.sesiones}
              </td>
              <td
                className={cn(TD, "whitespace-nowrap text-accent-coral-strong")}
              >
                {t.estadia}
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </TablaScroll>
  );
}

/** Related treatments rail — every page links onward, none dead-ends. */
export function Relacionados({ slugs }: { slugs: string[] }) {
  return (
    <ul className="grid w-full gap-4 sm:grid-cols-3">
      {slugs.map((slug, index) => {
        const tratamiento = tratamientoPorSlug(slug);
        if (!tratamiento) return null;

        return (
          <li key={slug}>
            <TratamientoCard
              tratamiento={tratamiento}
              compacto
              sinResumen
              indice={index}
            />
          </li>
        );
      })}
    </ul>
  );
}
