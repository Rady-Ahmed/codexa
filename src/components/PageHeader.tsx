import Reveal from "../components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-44 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-[-20%] h-[380px] w-[380px] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(circle, #6C4CF1 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-5 text-center">
        <Reveal>
          <span className="mono-badge inline-block rounded-full border border-(--color-border) px-3 py-1 text-xs text-(--color-cyan)">
            {eyebrow}
          </span>
          <h1 className="mt-4 sm:mt-5 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-(--color-ink)">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-(--color-muted)">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
