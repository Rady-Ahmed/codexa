import { useLang } from "../context/LangContext";

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS",
  "PostgreSQL", "Prisma", "Tailwind CSS", "Docker", "Redis",
];

export default function TrustMarquee() {
  const { t } = useLang();
  const loop = [...stack, ...stack];

  return (
    <section className="border-y border-(--color-border) py-8">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mono-badge mb-5 text-center text-xs text-(--color-muted-2)">
          {t.trust.label}
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max gap-10">
            {loop.map((name, i) => (
              <span
                key={i}
                className="mono-badge whitespace-nowrap text-sm text-(--color-muted) transition-colors hover:text-(--color-ink)"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
