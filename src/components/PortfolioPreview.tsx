import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import PortfolioCard from "./PortfolioCard";
import Reveal from "./Reveal";
import { portfolioProjects } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function PortfolioPreview() {
  const { t, dir, path } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const featured = portfolioProjects.slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader
        eyebrow={t.portfolio.eyebrow}
        title={t.portfolio.title}
        subtitle={t.portfolio.subtitle}
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08} className="h-full">
            <PortfolioCard project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Link
          to={path("/portfolio")}
          className="group flex items-center gap-2 rounded-xl border border-(--color-border) px-6 py-3 text-sm font-medium text-(--color-ink) transition-colors hover:border-(--color-indigo-soft) hover:bg-white/5"
        >
          {t.portfolio.viewAll}
          <Arrow size={16} className="transition-transform rtl:group-hover:-translate-x-1 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
