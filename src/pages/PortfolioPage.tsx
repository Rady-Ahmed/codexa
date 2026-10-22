import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioProjects } from "../data/portfolio";
import { useLang } from "../context/LangContext";

const ALL_KEY = "__all__";

export default function PortfolioPage() {
  const { t, lang } = useLang();

  // Build unique category list
  const categories = [
    { key: ALL_KEY, label: lang === "ar" ? "الكل" : "All" },
    ...portfolioProjects
      .map((p) => ({ key: p.slug + "-cat", label: p.category[lang] }))
      .filter((v, i, arr) => arr.findIndex((x) => x.label === v.label) === i)
      .map((c, i) => ({ key: `cat-${i}`, label: c.label })),
  ];

  const [active, setActive] = useState(ALL_KEY);

  const filtered =
    active === ALL_KEY
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category[lang] === categories.find((c) => c.key === active)?.label);

  return (
    <>
      <Seo title={t.seo.portfolio.title} description={t.seo.portfolio.desc} />
      <PageHeader
        eyebrow={t.portfolio.eyebrow}
        title={t.portfolio.title}
        subtitle={t.portfolio.subtitle}
      />

      {/* Live Production Systems Indicator */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 pb-6">
        <Reveal>
          <div className="flex items-center justify-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 py-2 px-5 text-xs text-emerald-300 w-fit mx-auto backdrop-blur-md shadow-lg shadow-emerald-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-bold">
              {lang === "ar"
                ? "مشاريع حية ومُطلقة — يمكنك معاينة وتجربة كل موقع مباشرة عبر زر LIVE"
                : "Live Production Systems — visit & experience each client project with the LIVE button"}
            </span>
          </div>
        </Reveal>
      </section>

      {/* Filter Tabs */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 pb-6 sm:pb-8">
        <Reveal>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all ${
                  active === cat.key
                    ? "bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) text-white shadow-lg shadow-(--color-indigo)/30"
                    : "border border-(--color-border) text-(--color-muted) hover:text-(--color-ink) hover:border-(--color-indigo)/30 bg-white/3"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Portfolio Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 pb-16 sm:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <PortfolioCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTASection />
    </>
  );
}
