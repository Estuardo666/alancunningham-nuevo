/**
 * Baked at build time: the site ships as a static export, so this handler runs
 * once during the build and the response is written out as a file. Fresh
 * reviews therefore need a redeploy — Render's deploy hook or a scheduled
 * rebuild covers that.
 */
export const dynamic = "force-static";

import { GOOGLE_REVIEWS } from "@/content/testimonios";
import type { GoogleReviewsPayload } from "@/lib/google-reviews";

const GOOGLE_PLACE_FIELDS = [
  "displayName",
  "googleMapsUri",
  "rating",
  "userRatingCount",
  "reviews",
].join(",");

interface GooglePlaceApiResponse {
  displayName?: { text?: string };
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    authorAttribution?: { displayName?: string; photoUri?: string };
    originalText?: { text?: string };
    rating?: number;
    text?: { text?: string };
    relativePublishTimeDescription?: string;
  }>;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_PLACES_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "La integración de reseñas de Google aún no está configurada." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_REVIEWS.placeId}`,
      {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": GOOGLE_PLACE_FIELDS,
      },
      },
    );

    if (!response.ok) {
      throw new Error(`Google Places respondió ${response.status}`);
    }

    const place = (await response.json()) as GooglePlaceApiResponse;

    if (!place || typeof place.rating !== "number" || !place.reviews?.length) {
      throw new Error("Google Places no devolvió reseñas para el perfil configurado.");
    }

    const payload: GoogleReviewsPayload = {
      placeName: place.displayName?.text ?? GOOGLE_REVIEWS.nombre,
      profileUrl: place.googleMapsUri ?? GOOGLE_REVIEWS.perfil,
      rating: place.rating,
      reviewCount: place.userRatingCount ?? 0,
      // Places returns up to five reviews. Keep that small, curated payload
      // instead of attempting to mirror the complete Google profile.
      reviews: place.reviews
        .filter(
          (review) =>
            Boolean(review.authorAttribution?.displayName) &&
            Boolean(review.originalText?.text ?? review.text?.text) &&
            typeof review.rating === "number",
        )
        .map((review) => ({
          authorName: review.authorAttribution?.displayName ?? "Paciente",
          authorPhotoUrl: review.authorAttribution?.photoUri,
          rating: review.rating ?? 0,
          // Show Google's original wording; do not translate patient copy.
          text: review.originalText?.text ?? review.text?.text ?? "",
          relativeTime: review.relativePublishTimeDescription ?? "",
        }))
        .slice(0, 5),
    };

    return Response.json(payload, {
      headers: {
        // Reviews must stay fresh; this also keeps requests to Places predictable.
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("No se pudieron obtener las reseñas de Google:", error);
    return Response.json(
      { error: "No se pudieron actualizar las reseñas de Google." },
      { status: 502 },
    );
  }
}
