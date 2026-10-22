import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical() {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", window.location.origin + window.location.pathname);
}

function stripLangPrefix(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

function setHreflangAlternates() {
  document.querySelectorAll('link[rel="alternate"][data-hreflang]').forEach((el) => el.remove());

  const base = stripLangPrefix(window.location.pathname);
  const arHref = window.location.origin + base;
  const enHref = window.location.origin + (base === "/" ? "/en" : `/en${base}`);

  const entries: [string, string][] = [
    ["ar", arHref],
    ["en", enHref],
    ["x-default", arHref],
  ];

  for (const [hreflang, href] of entries) {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", href);
    link.setAttribute("data-hreflang", "true");
    document.head.appendChild(link);
  }
}

function setOrgJsonLd() {
  const id = "org-jsonld";
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Codexa",
    description: "Software studio building web platforms and SaaS products from scratch.",
    url: window.location.origin,
    areaServed: ["EG", "SA", "AE", "QA", "KW", "BH", "OM"],
    sameAs: ["https://github.com/Rady-Ahmed", "https://linkedin.com/in/rady-ahmed"],
  });
  document.head.appendChild(script);
}

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", window.location.href, "property");
    setMeta("og:image", window.location.origin + "/og-image.jpg", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:image", window.location.origin + "/og-image.jpg");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setCanonical();
    setHreflangAlternates();
    setOrgJsonLd();
  }, [title, description]);

  return null;
}
