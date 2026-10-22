import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
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
  const { lang, path } = useLang();
  const mouseX = useMotionValue(100);
  const mouseY = useMotionValue(100);
  const isAr = lang === "ar";

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c16]/75 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Project-Accent Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              380px circle at ${mouseX}px ${mouseY}px,
              ${project.color}25,
              transparent 75%
            )
          `,
        }}
      />

      {/* Ambient Corner Blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-35"
        style={{ background: project.color }}
      />

      <div>
        {/* Top Header Row: Category Badge & Live Pulse */}
        <div className="relative flex items-center justify-between gap-2">
          <span
            className="mono-badge inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold"
            style={{
              borderColor: `${project.color}40`,
              background: `${project.color}15`,
              color: project.color,
            }}
          >
            <Sparkles size={11} />
            {String(index + 1).padStart(2, "0")} • {project.category[lang]}
          </span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/70 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-emerald-900/90 hover:border-emerald-400 hover:text-white hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]"
              title={isAr ? "معاينة حية للمشروع" : "Live production demo"}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>LIVE</span>
              <ExternalLink size={10} className="opacity-80" />
            </a>
          )}
        </div>

        {/* Project Screenshot / Visual Mockup with Browser Frame */}
        <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-inner">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover object-top filter brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
          />

          {/* Subtle Gradient Vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c16]/90 via-transparent to-black/30" />

          {/* Browser Chrome Window Dots */}
          <div className="absolute top-2.5 start-2.5 flex items-center gap-1.5 rounded-full bg-black/65 px-2 py-1 backdrop-blur-md border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/90" />
          </div>

          {/* Year / Client Tag in opposite corner */}
          {project.year && (
            <div className="absolute top-2.5 end-2.5 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-mono text-white/70 backdrop-blur-md border border-white/10">
              {project.year}
            </div>
          )}

          {/* Hover Quick Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100 bg-black/30">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/90 px-3.5 py-2 text-xs font-black text-black shadow-lg transition-transform hover:scale-105 hover:bg-white"
              >
                <ExternalLink size={13} />
                {isAr ? "زيارة الموقع الحي" : "Visit Live Site"}
              </a>
            )}
            <Link
              to={path(`/portfolio/${project.slug}`)}
              className="inline-flex items-center gap-1 rounded-xl border border-white/30 bg-black/70 px-3 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:bg-black/90"
            >
              {isAr ? "دراسة الحالة" : "Case Study"}
              <ArrowUpRight size={13} className={isAr ? "-scale-x-100" : ""} />
            </Link>
          </div>
        </div>

        {/* Project Title (Clickable to detail) */}
        <Link to={path(`/portfolio/${project.slug}`)} className="block group/title">
          <h3 className="relative mt-4 text-xl font-bold text-white transition-colors duration-200 group-hover/title:text-white flex items-center justify-between">
            <span>{project.name}</span>
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              style={{ color: project.color }}
            >
              <ArrowUpRight size={15} className={isAr ? "-scale-x-100" : ""} />
            </div>
          </h3>
        </Link>

        {/* Summary */}
        <p className="relative mt-2 text-sm leading-relaxed text-(--color-muted) line-clamp-2">
          {project.summary[lang]}
        </p>
      </div>

      {/* Bottom Section: Key Metrics & Stack */}
      <div className="relative mt-6 pt-4 border-t border-white/5">
        {/* Metric Pill */}
        {project.metrics?.[0] && (
          <div className="mb-3 flex items-center justify-between text-xs rounded-lg bg-white/[0.02] px-3 py-1.5 border border-white/5">
            <span className="text-(--color-muted)">{project.metrics[0].label[lang]}</span>
            <span className="font-mono font-bold text-sm" style={{ color: project.color }}>
              {project.metrics[0].value}
            </span>
          </div>
        )}

        {/* Tech Stack Pills & Direct Links */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((s) => (
              <span
                key={s}
                className="mono-badge rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/60 transition-colors group-hover:text-white/90"
              >
                {s}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="mono-badge text-[10px] text-white/40 self-center">
                +{project.stack.length - 3}
              </span>
            )}
          </div>

          <Link
            to={path(`/portfolio/${project.slug}`)}
            className="text-xs font-semibold shrink-0 transition-all duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
            style={{ color: project.color }}
          >
            {isAr ? "التفاصيل" : "Details"} →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
