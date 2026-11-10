import type { APIRoute } from "astro";

const routes = ["/", "/work", "/about", "/contact", "/resume"];

export const GET: APIRoute = ({ site }) => {
  const entries = site
    ? routes
        .map((route) => `  <url><loc>${new URL(route, site).toString()}</loc></url>`)
        .join("\n")
    : "";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
