import { useEffect } from "react";

/**
 * Loads Plausible Analytics only when VITE_PLAUSIBLE_DOMAIN is set.
 * No env var = no script, no third-party request, no tracking —
 * safe default for local dev and forks that don't set it up.
 */
export default function Analytics() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
    if (!domain) return;
    if (document.querySelector('script[data-domain]')) return;

    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = domain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }, []);

  return null;
}
