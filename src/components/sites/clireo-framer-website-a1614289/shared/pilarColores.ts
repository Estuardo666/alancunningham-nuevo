/**
 * Fill colours for the treatment tiles' circle-expand hover state.
 *
 * Every value comes from the established palette (globals.css): the two brand
 * violets, the deep purple surface, coral and lime, plus the two hover shades.
 * `fg` is chosen so the text on top clears WCAG AA 4.5:1 against `bg` — that is
 * why the light fills carry deep-purple text instead of white.
 *
 * None of them may be the section background (`--surface-strong`, #30005b) or a
 * near neighbour of it: the circle would expand into the backdrop invisibly.
 *
 * Treatments have no hierarchy, so the colour comes from the position in the
 * list, not from a category.
 */
export const TILE_COLORES: { bg: string; fg: string }[] = [
  { bg: "#6e55ff", fg: "#ffffff" }, // brand
  { bg: "#f2f0ff", fg: "#30005b" }, // surface-secondary
  { bg: "#ff6852", fg: "#30005b" }, // accent-coral
  { bg: "#4f37d1", fg: "#ffffff" }, // brand-hover
  { bg: "#b4e843", fg: "#30005b" }, // accent-yellow
  { bg: "#d94332", fg: "#ffffff" }, // coral-hover (dark)
  { bg: "#8f7bff", fg: "#1d0038" }, // brand tint
];

export function colorTile(indice: number) {
  return TILE_COLORES[indice % TILE_COLORES.length];
}
