/**
 * One fill colour per treatment pillar for the circle-expand hover state.
 *
 * Every value comes from the established palette (globals.css): the two brand
 * violets, the deep purple surface, coral and lime, plus the two hover shades.
 * `fg` is chosen so the text on top clears WCAG AA 4.5:1 against `bg` — that is
 * why the light fills carry deep-purple text instead of white.
 *
 * None of them may be the section background (`--surface-strong`, #30005b) or a
 * near neighbour of it: the circle would expand into the backdrop invisibly.
 */
export const PILAR_COLORES: Record<string, { bg: string; fg: string }> = {
  "estetica-dental": { bg: "#6e55ff", fg: "#ffffff" }, // brand
  "implantes-dentales": { bg: "#f2f0ff", fg: "#30005b" }, // surface-secondary
  ortodoncia: { bg: "#ff6852", fg: "#30005b" }, // accent-coral
  endodoncia: { bg: "#4f37d1", fg: "#ffffff" }, // brand-hover
  "cirugia-y-periodoncia": { bg: "#b4e843", fg: "#30005b" }, // accent-yellow
  "rehabilitacion-oral": { bg: "#d94332", fg: "#ffffff" }, // coral-hover (dark)
  "odontologia-general": { bg: "#8f7bff", fg: "#1d0038" }, // brand tint
};

export const PILAR_COLOR_FALLBACK = { bg: "#6e55ff", fg: "#ffffff" };

export function colorPilar(slug: string) {
  return PILAR_COLORES[slug] ?? PILAR_COLOR_FALLBACK;
}
