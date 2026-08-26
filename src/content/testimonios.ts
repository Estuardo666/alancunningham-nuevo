/**
 * Canonical public profile used by the live Google Places integration.
 *
 * The place is resolved by the official API at request time, rather than
 * storing reviewer names, scores, or copy in the source tree.
 */
export const GOOGLE_REVIEWS = {
  nombre: "Estudio Odontologico Dr.Cunningham",
  consulta:
    "Estudio Odontologico Dr.Cunningham, Manuel Ugarte 2548, Ciudad Autónoma de Buenos Aires, Argentina",
  placeId: "ChIJdX89lI23vJURdg5GYo87rQg",
  perfil: "https://maps.app.goo.gl/EBXBmYGQMNZsjRHq6",
} as const;
