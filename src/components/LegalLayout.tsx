import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { useLang } from "../context/LangContext";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-2xl px-5 pb-24 pt-36 sm:pt-44">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
          {title}
        </h1>
        <p className="mono-badge mt-3 text-xs text-(--color-muted-2)">
          {t.legal.lastUpdated}: 2026-08-14
        </p>
        <div className="prose-legal mt-8 space-y-5 text-sm leading-relaxed text-(--color-muted)">
          {children}
        </div>
      </Reveal>
    </section>
  );
}
