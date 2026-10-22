import { Component, type ErrorInfo, type ReactNode } from "react";
import { Sentry } from "../lib/sentry";
import { translations } from "../data/translations";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Codexa render error:", error, info.componentStack);
    Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      const isEn = typeof window !== 'undefined' && window.location.pathname.startsWith('/en');
      const t = isEn ? translations.en : translations.ar;
      
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-(--color-obsidian) px-5 text-center">
          <span className="mono-badge text-4xl gradient-text">Codexa</span>
          <h1 className="mt-6 text-2xl font-semibold text-(--color-ink)">
            {t.errorBoundary.errorText}
          </h1>
          <p className="mt-2 text-sm text-(--color-muted)">
            {t.errorBoundary.tryRefresh}
          </p>
          <button
            onClick={() => (window.location.href = isEn ? "/en" : "/")}
            className="mt-7 rounded-xl bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-6 py-3 text-sm font-medium text-white"
          >
            {t.errorBoundary.homeCta}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
