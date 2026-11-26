/**
 * Fill colours for the treatment tiles' circle-expand hover state.
 *
 * Every value comes from the palette in globals.css: off-white, off-black and
 * the royal-blue scale. `fg` is chosen so the text on top clears WCAG AA 4.5:1
 * against `bg`.
 *
 * None of them may be the section background (`--surface-strong`, #0e0f12 /
 * #1a1b20 in dark mode) or a near neighbour of it: the circle would expand
 * into the backdrop invisibly.
 *
 * Treatments have no hierarchy, so the colour comes from the position in the
 * list, not from a category.
 */
export const TILE_COLORES: { bg: string; fg: string }[] = [
  { bg: "#2563eb", fg: "#fafaf7" }, // brand
  { bg: "#fafaf7", fg: "#0e0f12" }, // off-white
  { bg: "#5b8cff", fg: "#0e0f12" }, // brand (dark mode)
  { bg: "#1d4ed8", fg: "#fafaf7" }, // brand-hover
  { bg: "#c9d9fc", fg: "#0e0f12" }, // blue tint
  { bg: "#1e3a8a", fg: "#fafaf7" }, // deep blue
  { bg: "#f2f2ee", fg: "#0e0f12" }, // surface-secondary
];

export function colorTile(indice: number) {
  return TILE_COLORES[indice % TILE_COLORES.length];
}
