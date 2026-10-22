import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    va?: (...args: any[]) => void;
  }
}

/**
 * Global helper to track custom events (like CTA clicks, form submissions, etc.)
 */
export function trackEvent(name: string, data?: Record<string, any>) {
  // Vercel Analytics event
  if (typeof window !== "undefined" && typeof window.va === "function") {
    window.va("event", { name, data });
  }

  // Google Analytics event
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, data);
  }
}

export default function Analytics() {
  const location = useLocation();

  // 1. Initialize Google Analytics if VITE_GA_ID is provided
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID as string | undefined;
    if (!gaId) return;

    if (!document.getElementById("ga-script")) {
      const script = document.createElement("script");
      script.id = "ga-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer?.push(args);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", gaId, { page_path: location.pathname });
    }
  }, []);

  // 2. Track Route Changes (Pageviews) on client-side navigation
  useEffect(() => {
    // Send to Google Analytics on route change
    const gaId = import.meta.env.VITE_GA_ID as string | undefined;
    if (gaId && typeof window.gtag === "function") {
      window.gtag("config", gaId, {
        page_path: location.pathname + location.search,
      });
    }

    // Send to Vercel Analytics on route change
    if (typeof window.va === "function") {
      window.va("pageview");
    }
  }, [location.pathname, location.search]);

  // 3. Plausible Analytics fallback
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
    if (!domain) return;
    if (document.querySelector("script[data-domain]")) return;

    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = domain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }, []);

  return null;
}
