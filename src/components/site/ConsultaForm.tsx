"use client";

import { useId, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/content/clinica";
import { EVENTOS, track } from "@/lib/analytics";
import { TextArrowCTA } from "@/components/ui/text-arrow-cta";

const HORARIOS = ["Mañana (9 a 13 h)", "Tarde (14 a 19 h)", "Indistinto"];

/**
 * The asynchronous conversion rail (plan §8.1). Captures name, phone, treatment
 * of interest and time preference.
 *
 * Not wired to a CRM yet: the submission is logged and the patient is offered
 * the WhatsApp fallback with the same data preloaded, so no lead is lost while
 * the backend is pending (plan §8.4).
 */
export function ConsultaForm({
  titulo = "Agendá tu consulta",
  contexto,
  tratamientos,
  internacional = false,
  sticky = false,
  className,
}: {
  titulo?: string;
  /** Page context, preloaded into the WhatsApp fallback message. */
  contexto?: string;
  /** Options for the "treatment of interest" select. */
  tratamientos: { slug: string; nombre: string }[];
  /** Adds country and city of origin — used on the dental tourism page. */
  internacional?: boolean;
  sticky?: boolean;
  className?: string;
}) {
  // Unique per instance so two forms on the same page never share ids.
  const uid = useId();
  const [enviado, setEnviado] = useState(false);
  const [fallback, setFallback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const datos = new FormData(event.currentTarget);
    const campos = {
      nombre: String(datos.get("nombre") ?? "").trim(),
      telefono: String(datos.get("telefono") ?? "").trim(),
      email: String(datos.get("email") ?? "").trim(),
      tratamiento: String(datos.get("tratamiento") ?? "").trim(),
      horario: String(datos.get("horario") ?? "").trim(),
      pais: String(datos.get("pais") ?? "").trim(),
      ciudad: String(datos.get("ciudad") ?? "").trim(),
    };

    // Pending CRM/email integration — see plan §8.4.
    console.log("[consulta]", campos);
    track(EVENTOS.formularioEnviado, {
      contexto,
      tratamiento: campos.tratamiento,
      internacional,
    });

    const texto = [
      `Hola, quiero agendar una consulta${contexto ? ` por ${contexto}` : ""}.`,
      campos.nombre && `Nombre: ${campos.nombre}`,
      campos.telefono && `Teléfono: ${campos.telefono}`,
      campos.email && `Email: ${campos.email}`,
      campos.tratamiento && `Tratamiento de interés: ${campos.tratamiento}`,
      campos.horario && `Preferencia horaria: ${campos.horario}`,
      campos.pais && `País: ${campos.pais}`,
      campos.ciudad && `Ciudad: ${campos.ciudad}`,
    ]
      .filter(Boolean)
      .join("\n");

    setFallback(
      `https://api.whatsapp.com/send?phone=5491121561445&text=${encodeURIComponent(texto)}`,
    );
    setEnviado(true);
  }

  return (
    <div
      className={cn(
        "w-full rounded-[20px] bg-card p-[30px] shadow-[var(--clireo-shadow-md)]",
        sticky && "lg:sticky lg:top-[90px]",
        className,
      )}
    >
      {enviado ? (
        <div className="flex flex-col gap-4">
          <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
            Recibimos tu consulta
          </h3>
          <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
            Te vamos a contactar para coordinar día y horario. Si preferís
            resolverlo ahora, seguí por WhatsApp con tus datos ya cargados.
          </p>
          <a
            href={fallback}
            onClick={() =>
              track(EVENTOS.whatsappAbierto, { contexto, origen: "fallback" })
            }
            className="flex h-[47px] w-full items-center justify-center rounded-[16px] bg-primary text-[16px] leading-[23.2px] tracking-[-0.24px] text-primary-foreground transition-colors duration-300 hover:bg-brand-hover"
          >
            Continuar por WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
          <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
            {titulo}
          </h3>
          <div className="flex flex-col gap-4">
            <Campo label="Nombre completo" required htmlFor={`${uid}-nombre`}>
              <input
                id={`${uid}-nombre`}
                name="nombre"
                type="text"
                required
                placeholder="Nombre y apellido"
                className={INPUT}
              />
            </Campo>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Campo
                label="Teléfono"
                required
                htmlFor={`${uid}-telefono`}
                className="flex-1"
              >
                <input
                  id={`${uid}-telefono`}
                  name="telefono"
                  type="tel"
                  required
                  placeholder="+54 9 11 …"
                  className={INPUT}
                />
              </Campo>
              <Campo label="Email" htmlFor={`${uid}-email`} className="flex-1">
                <input
                  id={`${uid}-email`}
                  name="email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className={INPUT}
                />
              </Campo>
            </div>
            {internacional ? (
              <div className="flex flex-col gap-4 sm:flex-row">
                <Campo
                  label="País de origen"
                  required
                  htmlFor={`${uid}-pais`}
                  className="flex-1"
                >
                  <input
                    id={`${uid}-pais`}
                    name="pais"
                    type="text"
                    required
                    placeholder="España, Estados Unidos, Chile…"
                    className={INPUT}
                  />
                </Campo>
                <Campo
                  label="Ciudad"
                  htmlFor={`${uid}-ciudad`}
                  className="flex-1"
                >
                  <input
                    id={`${uid}-ciudad`}
                    name="ciudad"
                    type="text"
                    placeholder="Ciudad desde la que viajás"
                    className={INPUT}
                  />
                </Campo>
              </div>
            ) : null}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Campo
                label="Tratamiento de interés"
                required
                htmlFor={`${uid}-tratamiento`}
                className="flex-1"
              >
                <select
                  id={`${uid}-tratamiento`}
                  name="tratamiento"
                  required
                  defaultValue=""
                  className={cn(INPUT, "appearance-none")}
                >
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  {tratamientos.map((t) => (
                    <option key={t.slug} value={t.nombre}>
                      {t.nombre}
                    </option>
                  ))}
                  <option value="Todavía no sé">Todavía no sé</option>
                </select>
              </Campo>
              <Campo
                label="Preferencia horaria"
                required
                htmlFor={`${uid}-horario`}
                className="flex-1"
              >
                <select
                  id={`${uid}-horario`}
                  name="horario"
                  required
                  defaultValue=""
                  className={cn(INPUT, "appearance-none")}
                >
                  <option value="" disabled>
                    Elegí un horario
                  </option>
                  {HORARIOS.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </Campo>
            </div>
          </div>
          <button
            type="submit"
            className="h-[47px] w-full rounded-[16px] bg-primary text-[16px] leading-[23.2px] tracking-[-0.24px] text-primary-foreground transition-colors duration-300 hover:bg-brand-hover"
          >
            Enviar consulta
          </button>
          <TextArrowCTA
            href={whatsappHref(contexto)}
            className="self-center text-center text-[16px] leading-[23.2px] tracking-[-0.24px]"
          >
            Prefiero escribir por WhatsApp
          </TextArrowCTA>
        </form>
      )}
    </div>
  );
}

const INPUT =
  "w-full bg-transparent text-[16px] leading-[23.2px] tracking-[-0.24px] text-foreground outline-none placeholder:text-foreground/40";

function Campo({
  label,
  required,
  htmlFor,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-[7px]", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[16px] leading-[23.2px] tracking-[-0.24px] text-foreground"
      >
        {label}
        {required ? <span className="text-accent-coral-strong">*</span> : null}
      </label>
      <div className="flex min-h-[45px] w-full items-center rounded-[12px] bg-surface-secondary px-4 py-[13px]">
        {children}
      </div>
    </div>
  );
}
