import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Several of the cloned icons are SVGs served from /public; the optimizer
    // rejects SVG unless it is explicitly allowed. Locked down with a CSP that
    // forbids scripts inside the images.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    contentDispositionType: "attachment",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
  /**
   * NOTE: `output: "export"` ignores these — Next prints a warning at build
   * time saying so. They are mirrored as Render routes in `render.yaml`, which
   * is what actually serves them in production; this block is what still works
   * under `next dev`. Change one, change the other.
   *
   * D2 (plan §0): the site moved to Spanish routes. These 301s cover the
   * English routes the template shipped with and the legacy routes from the
   * previous site, which shares the domain. 301 rather than Next's default
   * 308, because the plan specifies 301 (§2.1).
   */
  async redirects() {
    return [
      { source: "/treatments", destination: "/tratamientos", statusCode: 301 },
      {
        source: "/treatments/cosmetic-care",
        destination: "/tratamientos/estetica-dental",
        statusCode: 301,
      },
      {
        source: "/treatments/:slug",
        destination: "/tratamientos",
        statusCode: 301,
      },
      { source: "/contact", destination: "/contacto", statusCode: 301 },
      { source: "/blogs", destination: "/blog", statusCode: 301 },
      { source: "/blogs/:slug", destination: "/blog/:slug", statusCode: 301 },
      { source: "/galeria", destination: "/tratamientos", statusCode: 301 },
      { source: "/quienes-somos", destination: "/nosotros", statusCode: 301 },
    ];
  },
};

export default nextConfig;
