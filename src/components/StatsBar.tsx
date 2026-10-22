import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Zap, Users, Package, Handshake } from "lucide-react";
import { useLang } from "../context/LangContext";
import SmartCountUp from "./SmartCountUp";

// Map each stat to an icon
const statIcons = [TrendingUp, Zap, Users, Package, Handshake];

// Individual color accent per stat
const statColors = [
  { color: "#22D3EE", glow: "rgba(34,211,238,0.2)" },
  { color: "#6C4CF1", glow: "rgba(108,76,241,0.2)" },
  { color: "#34D399", glow: "rgba(52,211,153,0.2)" },
  { color: "#F59E0B", glow: "rgba(245,158,11,0.2)" },
  { color: "#EC4899", glow: "rgba(236,72,153,0.2)" },
];

interface StatItemProps {
  n: string;
  l: string;
  index: number;
  inView: boolean;
}

function StatItem({ n, l, index, inView }: StatItemProps) {
  const Icon = statIcons[index % statIcons.length];
  const { color, glow } = statColors[index % statColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
    >
      {/* Hover glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 100%, ${glow} 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Icon circle */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${color}18`,
          border: `1px solid ${color}30`,
          color,
        }}
      >
        <Icon size={22} />
      </div>

      {/* Number */}
      <div
        className="font-black text-4xl sm:text-5xl leading-none tracking-tight mb-2"
        style={{
          background: `linear-gradient(135deg, ${color}, #ffffff88)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <SmartCountUp value={n} />
      </div>

      {/* Label */}
      <div className="text-sm text-(--color-muted) leading-snug max-w-[120px]">{l}</div>

      {/* Bottom dot */}
      <div
        className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        style={{ background: color }}
      />
    </motion.div>
  );
}

export default function StatsBar() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isAr = lang === "ar";

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(108,76,241,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 bg-grid opacity-10"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
          ref={ref}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-(--color-cyan)/30 bg-(--color-cyan)/10 px-4 py-1.5 text-sm font-bold text-(--color-cyan) mb-4">
            {isAr ? "📊 بالأرقام" : "📊 By the numbers"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
            {t.stats.title}
          </h2>
          <p className="mt-3 text-(--color-muted) text-base max-w-md mx-auto">
            {isAr
              ? "نتائج حقيقية تُقاس بمعايير عالمية، تعكس التزامنا بالتميز في كل مشروع"
              : "Real outcomes measured by global standards, reflecting our commitment to excellence"}
          </p>
        </motion.div>

        {/* Stats Grid — 5 columns on large, 3 on medium, 2 on small */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.stats.items.map((s, i) => (
            <StatItem key={s.l} n={s.n} l={s.l} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-16 mx-auto max-w-2xl h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), rgba(108,76,241,0.4), transparent)",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
