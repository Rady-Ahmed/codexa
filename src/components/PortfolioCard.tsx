import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type MouseEvent } from "react";
import type { PortfolioProject } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function PortfolioCard({
  project,
  index = 0,
}: {
  project: PortfolioProject;
  index?: number;
}) {
  const { lang, t, path } = useLang();
  const mouseX = useMotionValue(100);
  const mouseY = useMotionValue(100);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="h-full"
    >
      <Link
        to={path(`/portfolio/${project.slug}`)}
        onMouseMove={handleMouseMove}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c16]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
      >
        {/* Dynamic Project-Accent Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                ${project.color}25,
                transparent 75%
              )
            `,
          }}
        />

        {/* Ambient Corner Blur */}
        <div
          aria-hidden
          className="absolute -end-10 -top-10 h-36 w-36 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: project.color }}
        />

        <div>
          {/* Header Row: Index & Category */}
          <div className="relative flex items-center justify-between">
            <span
              className="mono-badge inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold"
              style={{
                borderColor: `${project.color}40`,
                background: `${project.color}15`,
                color: project.color,
              }}
            >
              <Sparkles size={10} />
              {String(index + 1).padStart(2, "0")} • {project.category[lang]}
            </span>

            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-0.5"
              style={{ color: project.color }}
            >
              <ArrowUpRight size={16} className={lang === "ar" ? "-scale-x-100" : ""} />
            </div>
          </div>

          {/* Project Screenshot / Visual Mockup */}
          {project.image && (
            <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-full w-full object-cover object-top filter brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
              />
              {/* Subtle Gradient Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c16] via-transparent to-transparent opacity-80" />
              
              {/* Browser Dots Mock in corner */}
              <div className="absolute top-2.5 start-2.5 flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-1 backdrop-blur-md border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>
          )}

          {/* Project Title */}
          <h3 className="relative mt-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-white">
            {project.name}
          </h3>

          {/* Summary */}
          <p className="relative mt-2 text-sm leading-relaxed text-(--color-muted) line-clamp-2">
            {project.summary[lang]}
          </p>
        </div>

        {/* Bottom Section: Metrics & Tech Stack */}
        <div className="relative mt-6 pt-4 border-t border-white/5">
          {/* Primary Metric Preview */}
          {project.metrics?.[0] && (
            <div className="mb-3 flex items-center justify-between text-xs">
              <span className="text-(--color-muted)">{project.metrics[0].label[lang]}:</span>
              <span className="font-mono font-bold" style={{ color: project.color }}>
                {project.metrics[0].value}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="mono-badge rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/60 transition-colors group-hover:text-white/90"
                >
                  {s}
                </span>
              ))}
            </div>

            <span
              className="text-xs font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              style={{ color: project.color }}
            >
              {t.portfolio.viewProject} →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
