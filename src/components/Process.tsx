import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { useLang } from "../context/LangContext";

export default function Process() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader eyebrow={t.process.eyebrow} title={t.process.title} />

      <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden
          className="absolute top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-(--color-border) to-transparent lg:block"
        />
        {t.process.steps.map((step, i) => (
          <Reveal key={step.t} delay={i * 0.1} className="relative">
            <div className="mono-badge relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-(--color-border) bg-(--color-obsidian) text-sm text-(--color-cyan)">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-5 text-base font-medium text-(--color-ink)">{step.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">{step.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
