export const SITE_URL = "https://rady-ahmed.github.io/codexa";

// Every real page in the app, used to generate the sitemap and hreflang
// alternates automatically. Add a new page here once and it's covered
// everywhere — no more manually syncing sitemap.xml or route lists.
export const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.8 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/pricing", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/blog", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];
