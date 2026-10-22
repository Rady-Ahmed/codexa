import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <Reveal className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-start rtl:text-end"}`}>
      <span className="mono-badge inline-block rounded-full border border-(--color-border) px-3 py-1 text-xs text-(--color-cyan)">
        {eyebrow}
      </span>
      <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl font-semibold tracking-tight text-(--color-ink)">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-(--color-muted)">{subtitle}</p>
      )}
    </Reveal>
  );
}
