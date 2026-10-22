import { Check, Minus, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { useLang } from "../context/LangContext";

const cellIcon: Record<string, React.ReactNode> = {
  yes: <Check size={16} className="text-(--color-emerald)" />,
  partial: <Minus size={16} className="text-(--color-muted-2)" />,
  no: <X size={16} className="text-red-400/70" />,
};

export default function CompareTable() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeader
        eyebrow={t.compare.eyebrow}
        title={t.compare.title}
        subtitle={t.compare.subtitle}
      />

      <Reveal delay={0.1} className="mt-14 overflow-x-auto">
        <table className="w-full min-w-[560px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-(--color-border)">
          <thead>
            <tr>
              <th className="bg-white/[0.02] p-4 text-start text-sm font-medium text-(--color-muted)" />
              {t.compare.cols.map((col, i) => (
                <th
                  key={col}
                  className={`p-4 text-center text-sm font-semibold ${
                    i === 0
                      ? "bg-gradient-to-b from-(--color-indigo)/15 to-transparent text-(--color-ink)"
                      : "bg-white/[0.02] text-(--color-muted)"
                  }`}
                >
                  <span className={i === 0 ? "mono-badge gradient-text" : "mono-badge"}>{col}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.compare.rows.map((row, ri) => (
              <tr key={row.label}>
                <td
                  className={`p-4 text-sm text-(--color-ink) ${
                    ri !== t.compare.rows.length - 1 ? "border-b border-(--color-border)" : ""
                  }`}
                >
                  {row.label}
                </td>
                {row.values.map((v, ci) => (
                  <td
                    key={ci}
                    className={`p-4 text-center ${
                      ri !== t.compare.rows.length - 1 ? "border-b border-(--color-border)" : ""
                    } ${ci === 0 ? "bg-(--color-indigo)/[0.04]" : ""}`}
                  >
                    <span className="inline-flex">{cellIcon[v]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
