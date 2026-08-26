import { ConsultaForm } from "@/components/site/ConsultaForm";
import { PILARES } from "@/content/tratamientos";

/**
 * Sticky booking card (top: 75px) that trails an article column.
 *
 * Kept as the named entry point the treatment pages used, now delegating to
 * `site/ConsultaForm`, which is the same six-field card wired to the dual
 * conversion rail (form + preloaded WhatsApp fallback, plan §8.1).
 */
export function BookingForm({
  titulo,
  contexto,
}: {
  titulo?: string;
  contexto?: string;
} = {}) {
  return (
    <ConsultaForm
      titulo={titulo ?? "Agendá tu consulta"}
      contexto={contexto}
      tratamientos={PILARES.map((p) => ({ slug: p.slug, nombre: p.nombre }))}
      sticky
    />
  );
}
