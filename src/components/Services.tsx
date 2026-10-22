import { useNavigate } from "react-router-dom";
import {
  MonitorSmartphone,
  GraduationCap,
  Building2,
  Server,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type MouseEvent } from "react";
import { useLang } from "../context/LangContext";

const categoryIcons = {
  "web-mobile": MonitorSmartphone,
  "edtech": GraduationCap,
  "enterprise": Building2,
  "infrastructure": Server,
  "design-digital": Paintbrush,
};

const categoryAccents = {
  "web-mobile": { from: "#22D3EE", to: "#6C4CF1", glow: "rgba(34, 211, 238, 0.2)" },
  "edtech": { from: "#6C4CF1", to: "#EC4899", glow: "rgba(108, 76, 241, 0.2)" },
  "enterprise": { from: "#34D399", to: "#22D3EE", glow: "rgba(52, 211, 153, 0.2)" },
  "infrastructure": { from: "#F59E0B", to: "#EF4444", glow: "rgba(245, 158, 11, 0.2)" },
  "design-digital": { from: "#8B6FF5", to: "#22D3EE", glow: "rgba(139, 111, 245, 0.2)" },
};

function ServiceBentoCard({
  category,
  index,
  isLarge,
}: {
  category: { id: string; title: string; desc: string; items: { title: string }[] };
  index: number;
  isLarge: boolean;
}) {
  const { path, lang } = useLang();
  const navigate = useNavigate();
  const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || MonitorSmartphone;
  const accent = categoryAccents[category.id as keyof typeof categoryAccents] || {
    from: "#22D3EE",
    to: "#6C4CF1",
    glow: "rgba(34, 211, 238, 0.2)",
  };

  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onClick={() => navigate(path(`/services/${category.id}`))}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6, scale: 1.012 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c16]/70 p-5 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
    >
      {/* ── Dynamic Mouse-Follow Spotlight ── */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${isLarge ? "500px" : "380px"} circle at ${mouseX}px ${mouseY}px,
              ${accent.glow},
              transparent 75%
            )
          `,
        }}
      />

      {/* Luminous top border accent */}
      <div
        className="absolute top-0 inset-x-8 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent.from}, ${accent.to}, transparent)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Header: Icon & Arrow */}
        <div className="flex items-start justify-between mb-5 sm:mb-8">
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.4 }}
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${accent.from}25, ${accent.to}15)`,
              border: `1px solid ${accent.from}40`,
              color: accent.from,
              boxShadow: `0 8px 20px ${accent.glow}`,
            }}
          >
            <Icon size={24} className="sm:w-7 sm:h-7" />
          </motion.div>

          <div
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-0.5"
            style={{ color: accent.from }}
          >
            <ArrowUpRight size={18} className={lang === "ar" ? "-scale-x-100" : ""} />
          </div>
        </div>

        {/* Title & Desc */}
        <div className="flex-1">
          <div className="mb-2">
            <span className="mono-badge text-[11px] font-bold text-white/30 group-hover:text-white/70 transition-colors">
              0{index + 1}
            </span>
          </div>
          <h3
            className={`font-bold text-white tracking-tight ${
              isLarge ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            } mb-3 sm:mb-4 transition-colors group-hover:text-white`}
          >
            <span className="bg-gradient-to-r from-white to-white group-hover:from-white group-hover:to-(--color-cyan) bg-clip-text transition-all duration-300">
              {category.title}
            </span>
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-(--color-muted) mb-5 sm:mb-8">
            {category.desc}
          </p>
        </div>

        {/* Sub-items/Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-5 border-t border-white/5">
          {category.items.slice(0, isLarge ? 4 : 2).map((item, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="mono-badge inline-flex items-center rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70 transition-colors group-hover:border-white/10 group-hover:text-white"
            >
              {item.title}
            </motion.span>
          ))}
          {category.items.length > (isLarge ? 4 : 2) && (
            <span
              className="mono-badge inline-flex items-center rounded-lg border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: `${accent.from}30`,
                background: `${accent.from}15`,
                color: accent.from,
              }}
            >
              + {category.items.length - (isLarge ? 4 : 2)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services({ showHeader = true }: { showHeader?: boolean }) {
  const { t } = useLang();

  // Bento Box Layout configurations for 5 items (2 top, 3 bottom)
  const bentoClasses = [
    "lg:col-span-7", // Web/Mobile (Large)
    "lg:col-span-5", // EdTech (Medium)
    "lg:col-span-4", // Enterprise (Standard)
    "lg:col-span-4", // Infrastructure (Standard)
    "lg:col-span-4", // Design (Standard)
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-5 py-16 sm:py-32">
      {showHeader && (
        <SectionHeader
          eyebrow={`${t.services.eyebrow} & ${t.services.coreSpecializations}`}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 ${
          showHeader ? "mt-10 sm:mt-16" : ""
        }`}
      >
        {t.services.categories.map((category, i) => {
          const spanClass = bentoClasses[i] || "lg:col-span-4";
          const isLarge = i === 0;

          return (
            <Reveal
              key={category.id}
              delay={i * 0.1}
              className={`col-span-1 md:col-span-1 ${spanClass} h-full`}
            >
              <ServiceBentoCard category={category} index={i} isLarge={isLarge} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
