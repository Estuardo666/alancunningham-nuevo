import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/clinica";
import {
  PILARES,
  TRATAMIENTOS,
  rutaPilar,
  rutaTratamiento,
} from "@/content/tratamientos";
import { CASOS } from "@/content/casos";
import { POSTS } from "@/content/posts";
import { EQUIPO } from "@/content/equipo";
import { COMPARATIVAS } from "@/content/intenciones";

/** Static export: emitted as a file at build time. */
export const dynamic = "force-static";

const ahora = new Date();

function entrada(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
) {
  return {
    url: new URL(path, SITE_URL).toString(),
    lastModified: ahora,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entrada("/", 1, "weekly"),
    entrada("/tratamientos", 0.9, "weekly"),
    entrada("/casos", 0.9),
    entrada("/nosotros", 0.7),
    entrada("/nosotros/tecnologia", 0.6),
    entrada("/turismo-odontologico", 0.9),
    entrada("/contacto", 0.8),
    entrada("/precios", 0.9),
    entrada("/obras-sociales", 0.9),
    entrada("/faq", 0.7),
    entrada("/blog", 0.7, "weekly"),
    entrada("/dentista-en-nunez", 0.7),
    ...PILARES.map((p) => entrada(rutaPilar(p.slug), 0.8)),
    ...TRATAMIENTOS.map((t) => entrada(rutaTratamiento(t), 0.7)),
    ...COMPARATIVAS.map((c) => entrada(`/${c.slug}`, 0.7)),
    ...CASOS.map((c) => entrada(`/casos/${c.slug}`, 0.8)),
    ...EQUIPO.map((p) => entrada(`/equipo/${p.slug}`, 0.6)),
    ...POSTS.map((p) => entrada(`/blog/${p.slug}`, 0.6)),
  ];
}
