import Image from "next/image";
import type { SVGProps } from "react";
import { asset } from "../shared/assets";
import { SectionEyebrow } from "../shared/SectionEyebrow";
import { RevealText } from "../shared/RevealText";
import {
  ValueCompassionIcon,
  ValueExcellenceIcon,
  ValuePersonalizedIcon,
  ValueSafetyIcon,
  ValueTrustIcon,
  ValueWellnessIcon,
} from "../shared/icons";
import { DIFERENCIALES } from "@/content/clinica-contenido";
import { CLINICA } from "@/content/clinica";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

interface ValueEntry {
  title: string;
  description: string;
  Icon: IconComponent;
}

const ICONOS: IconComponent[] = [
  ValueCompassionIcon,
  ValueSafetyIcon,
  ValuePersonalizedIcon,
  ValueExcellenceIcon,
  ValueTrustIcon,
  ValueWellnessIcon,
];

/**
 * Six value tiles flanking a portrait.
 *
 * DOM order matters: the grid is 3 columns × 3 rows of 200px and the portrait
 * occupies the middle column across all three rows, so the cards fall into the
 * left and right columns by auto-placement — exactly as Framer lays it out.
 *
 * Not mounted on the home today: the plan fuses Values into "Por qué elegirnos"
 * (§3.2, block 08) to avoid saying the same thing twice on one page. The
 * component stays available for any page that needs this anatomy.
 */
const VALORES: ValueEntry[] = [
  ...DIFERENCIALES.map((d, index) => ({
    title: d.titulo,
    description: d.descripcion,
    Icon: ICONOS[index % ICONOS.length],
  })),
  {
    title: "Registro digital",
    description:
      "Escáner intraoral 3Shape en lugar de moldes de pasta, para registros más precisos y bastante más cómodos.",
    Icon: ValueTrustIcon,
  },
  {
    title: `Desde ${CLINICA.direccion.barrio}`,
    description: `Atendemos en ${CLINICA.direccion.calle}, con pacientes de ${CLINICA.zonas.slice(1, 5).join(", ")} y alrededores.`,
    Icon: ValueWellnessIcon,
  },
];

const LEFT_COLUMN = VALORES.slice(0, 3);
const RIGHT_COLUMN = VALORES.slice(3, 6);

export function ValuesSection() {
  return (
    <section className="flex flex-col items-center overflow-clip bg-background px-5 py-20 lg:px-8 lg:py-[120px]">
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-10 lg:gap-16">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-[10px]">
            <SectionEyebrow>Nuestros valores</SectionEyebrow>
            <RevealText
              as="h2"
              text="El criterio que guía cada tratamiento"
              blur={8}
              className="max-w-[600px] text-center text-[34px] leading-[38px] tracking-[-1.8px] text-foreground lg:text-[46px] lg:leading-[49.68px] lg:tracking-[-2.53px]"
            />
          </div>
          <p className="max-w-[550px] text-center text-[18px] leading-[24.3px] tracking-[-0.54px] text-muted-foreground">
            Planificación digital, criterio conservador y presupuesto por
            escrito antes de empezar.
          </p>
        </div>

        <div className="grid w-full overflow-hidden rounded-[21px] md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            {LEFT_COLUMN.map((entry) => (
              <ValueTile key={entry.title} entry={entry} />
            ))}
          </div>

          {/* Stretches to whatever height the two card columns settle at. */}
          <div className="relative order-first h-[300px] w-full self-stretch overflow-clip md:order-none lg:h-auto lg:min-h-[600px]">
            <Image
              src={asset("wRcbXoDc5Kye6JPiHat2o3ftH6A.webp")}
              alt="Profesional atendiendo a un paciente en el consultorio"
              fill
              sizes="(min-width: 1024px) 433px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            {RIGHT_COLUMN.map((entry) => (
              <ValueTile key={entry.title} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueTile({ entry }: { entry: ValueEntry }) {
  const { Icon, title, description } = entry;

  return (
    <article className="flex min-h-[200px] flex-row items-center gap-10 rounded-[2px] bg-card p-8">
      <Icon className="h-11 w-11 shrink-0 self-start text-accent-coral-strong" />
      <div className="flex flex-col items-start gap-3">
        <h3 className="text-[26px] leading-[31.2px] tracking-[-0.91px] text-foreground">
          {title}
        </h3>
        <p className="text-[15px] leading-[21px] tracking-[-0.15px] text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}
