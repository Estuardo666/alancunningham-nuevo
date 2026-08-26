/**
 * Emits one JSON-LD `@graph` document. Utility component: renders no UI.
 *
 * Kept as a server component so the payload ships in the HTML rather than being
 * injected after hydration, which is what crawlers need.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own content layer, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
