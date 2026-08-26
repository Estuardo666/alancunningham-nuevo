import { CLINICA } from "@/content/clinica";

const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${CLINICA.direccion.calle}, ${CLINICA.direccion.barrio}, ${CLINICA.direccion.ciudad}`,
)}&z=16&output=embed`;

/** Map band closing the contact page, same embed approach as the source. */
export function MapSection() {
  return (
    <section className="bg-surface-secondary px-5 pb-24 lg:px-8 lg:pb-[110px]">
      <div className="mx-auto w-full max-w-[1300px] overflow-hidden rounded-[16px] pt-20 lg:pt-[120px]">
        <iframe
          title={`Ubicación del consultorio en ${CLINICA.direccion.calle}, ${CLINICA.direccion.barrio}, Buenos Aires`}
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full rounded-[16px] border-0 lg:h-[600px]"
        />
      </div>
    </section>
  );
}
