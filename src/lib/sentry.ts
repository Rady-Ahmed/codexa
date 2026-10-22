import * as Sentry from "@sentry/react";

/**
 * Initializes Sentry only when VITE_SENTRY_DSN is provided. Safe to call
 * unconditionally at app startup — without the env var this is a no-op,
 * so local dev and forks without a Sentry project don't send anything.
 */
export function initSentry() {
  const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;
  if (!dsn) return;

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    tracesSampleRate: 0.1,
  });
}

export { Sentry };
