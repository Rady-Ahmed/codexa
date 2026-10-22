import { X, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { useLang } from "../context/LangContext";

export default function ProblemSolution() {
  const { t } = useLang();
  const without = [
    [t.problem.without1t, t.problem.without1d],
    [t.problem.without2t, t.problem.without2d],
    [t.problem.without3t, t.problem.without3d],
  ];
  const withUs = [
    [t.problem.with1t, t.problem.with1d],
    [t.problem.with2t, t.problem.with2d],
    [t.problem.with3t, t.problem.with3d],
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-5 py-16 sm:py-24">
      <SectionHeader eyebrow={t.problem.eyebrow} title={t.problem.title} />

      <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-(--color-border) bg-white/[0.015] p-5 sm:p-7">
          <h3 className="text-sm font-medium text-(--color-muted)">{t.problem.withoutTitle}</h3>
          <ul className="mt-6 space-y-6">
            {without.map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                  <X size={13} className="text-red-400" />
                </span>
                <div>
                  <p className="text-sm font-medium text-(--color-ink)/80">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-(--color-muted-2)">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative rounded-2xl border border-(--color-indigo)/40 bg-gradient-to-b from-(--color-indigo)/[0.07] to-transparent p-5 sm:p-7"
        >
          <h3 className="mono-badge text-sm font-medium text-(--color-cyan)">{t.problem.withTitle}</h3>
          <ul className="mt-6 space-y-6">
            {withUs.map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--color-emerald)/10">
                  <Check size={13} className="text-(--color-emerald)" />
                </span>
                <div>
                  <p className="text-sm font-medium text-(--color-ink)">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-(--color-muted)">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
