// Generates public/sitemap.xml automatically from the real route list and
// portfolio slugs — keeps the sitemap in sync with the app instead of a
// hand-maintained XML file that silently goes stale.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SITE_URL = "https://codexa.dev";

const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/services", priority: "0.8" },
  { path: "/portfolio", priority: "0.8" },
  { path: "/pricing", priority: "0.7" },
  { path: "/about", priority: "0.6" },
  { path: "/blog", priority: "0.7" },
  { path: "/contact", priority: "0.7" },
  { path: "/privacy", priority: "0.3" },
  { path: "/terms", priority: "0.3" },
];

const serviceCategories = [
  "web-mobile",
  "edtech",
  "enterprise",
  "infrastructure",
  "design-digital",
].map((cat) => ({ path: `/services/${cat}`, priority: "0.7" }));

const blogPosts = [
  "how-to-build-mvp",
  "why-react-for-startups",
  "ui-ux-importance",
  "cloud-hosting-guide",
].map((id) => ({ path: `/blog/${id}`, priority: "0.6" }));

const portfolioSource = readFileSync(join(root, "src/data/portfolio.ts"), "utf-8");
const slugs = [...portfolioSource.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const portfolioRoutes = slugs.map((slug) => ({ path: `/portfolio/${slug}`, priority: "0.6" }));

const allRoutes = [...staticRoutes, ...serviceCategories, ...blogPosts, ...portfolioRoutes];

function urlBlock({ path, priority }) {
  const ar = `${SITE_URL}${path}`;
  const en = `${SITE_URL}/en${path === "/" ? "" : path}`;
  return `  <url>
    <loc>${ar}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${ar}" />
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${ar}" />
    <priority>${priority}</priority>
  </url>
  <url>
    <loc>${en}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${ar}" />
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${ar}" />
    <priority>${priority}</priority>
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allRoutes.map(urlBlock).join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${allRoutes.length * 2} URLs (ar + en)`);
