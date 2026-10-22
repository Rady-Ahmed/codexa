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

      {/* Filter Tabs */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
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
      <section className="mx-auto max-w-6xl px-5 pb-24">
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
