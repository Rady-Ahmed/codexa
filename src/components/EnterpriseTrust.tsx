import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { type MouseEvent, useRef } from "react";
import {
  ShieldCheck,
  Cloud,
  Code2,
  Zap,
  ArrowUpRight,
  Lock,
  Server,
  KeyRound,
  Gauge,
} from "lucide-react";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";

const cardConfigs = [
  {
    icon: ShieldCheck,
    subIcon: Lock,
    from: "#22D3EE",
    to: "#6C4CF1",
    glow: "rgba(34, 211, 238, 0.22)",
    tags: {
      ar: ["تشفير كامل", "Zero-Trust", "حماية الثغرات"],
      en: ["End-to-End", "Zero-Trust", "Penetration Tested"],
    },
  },
  {
    icon: Cloud,
    subIcon: Server,
    from: "#6C4CF1",
    to: "#EC4899",
    glow: "rgba(108, 76, 241, 0.22)",
    tags: {
      ar: ["جاهزية 99.9%", "Auto-Scaling", "توزيع جغرافي"],
      en: ["99.9% SLA", "Auto-Scaling", "Multi-Region"],
    },
  },
  {
    icon: Code2,
    subIcon: KeyRound,
    from: "#34D399",
    to: "#22D3EE",
    glow: "rgba(52, 211, 153, 0.22)",
    tags: {
      ar: ["كود نظيف", "ملكية 100%", "توثيق شامل"],
      en: ["Clean Code", "100% IP Ownership", "Fully Documented"],
    },
  },
  {
    icon: Zap,
    subIcon: Gauge,
    from: "#F59E0B",
    to: "#EF4444",
    glow: "rgba(245, 158, 11, 0.22)",
    tags: {
      ar: ["زمن < 200ms", "Lighthouse 100", "CDN عالمي"],
      en: ["< 200ms Latency", "100 Lighthouse", "Global Edge CDN"],
    },
  },
];

function InteractiveCard({
  item,
  index,
  lang,
}: {
  item: { title: string; desc: string };
  index: number;
  lang: "ar" | "en";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cfg = cardConfigs[index % cardConfigs.length];
  const Icon = cfg.icon;

  // Mouse tracking relative to card
  const mouseX = useMotionValue(150);
  const mouseY = useMotionValue(150);

  // 3D Tilt values with spring smoothing
  const rotateXSpring = useSpring(0, { stiffness: 260, damping: 20 });
  const rotateYSpring = useSpring(0, { stiffness: 260, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateXSpring.set(((y - centerY) / centerY) * -7);
    rotateYSpring.set(((x - centerX) / centerX) * 7);
  }

  function handleMouseLeave() {
    rotateXSpring.set(0);
    rotateYSpring.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col h-full rounded-2xl border border-white/[0.08] bg-[#0c0c16]/70 p-7 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
    >
      {/* ── Dynamic Mouse Spotlight ── */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              ${cfg.glow},
              transparent 75%
            )
          `,
        }}
      />

      {/* ── Luminous Top Edge Accent ── */}
      <div
        className="absolute top-0 inset-x-8 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${cfg.from}, ${cfg.to}, transparent)`,
        }}
      />

      {/* ── Corner Cyber Accents ── */}
      <span
        className="absolute top-3.5 right-3.5 h-1.5 w-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: cfg.from, boxShadow: `0 0 8px ${cfg.from}` }}
      />
      <span
        className="absolute bottom-3.5 left-3.5 h-1.5 w-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: cfg.to, boxShadow: `0 0 8px ${cfg.to}` }}
      />

      <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(25px)" }}>
        {/* ── Animated Icon with Floating Ring ── */}
        <div className="mb-6 flex items-center justify-between">
          <div className="relative">
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${cfg.from}25, ${cfg.to}15)`,
                border: `1px solid ${cfg.from}40`,
                boxShadow: `0 8px 24px ${cfg.glow}`,
                color: cfg.from,
              }}
            >
              <Icon size={26} className="transition-transform duration-300 group-hover:scale-110" />
            </motion.div>
            {/* Subtle animated orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1.5 rounded-2xl border border-dashed opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              style={{ borderColor: cfg.from }}
            />
          </div>

          <span className="mono-badge text-[11px] font-bold text-white/30 group-hover:text-white/70 transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* ── Card Title ── */}
        <h3 className="mb-3 text-xl font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-white">
          <span className="bg-gradient-to-r from-white to-white group-hover:from-white group-hover:to-(--color-cyan) bg-clip-text transition-all duration-300">
            {item.title}
          </span>
        </h3>

        {/* ── Description ── */}
        <p className="text-sm leading-relaxed text-(--color-muted) mb-6 flex-1">
          {item.desc}
        </p>

        {/* ── Interactive Tags / Capabilities ── */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {cfg.tags[lang].map((tag, tIdx) => (
            <motion.span
              key={tIdx}
              whileHover={{ scale: 1.05 }}
              className="mono-badge rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/60 transition-colors group-hover:border-white/10 group-hover:text-white/90"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* ── Interactive Explore Action ── */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <span
            className="text-xs font-semibold tracking-wide transition-colors duration-300"
            style={{ color: cfg.from }}
          >
            {lang === "ar" ? "معايير التنفيذ" : "Engineering specs"}
          </span>
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-0.5"
            style={{ color: cfg.from }}
          >
            <ArrowUpRight size={14} className={lang === "ar" ? "-scale-x-100" : ""} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EnterpriseTrust() {
  const { t, lang } = useLang();

  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:py-32" style={{ perspective: "1200px" }}>
      {/* Background cyber grid */}
      <div
        className="absolute inset-0 -z-10 bg-grid opacity-20"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* Ambient background glows */}
      <div
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[750px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #6C4CF1 0%, #22D3EE 50%, transparent 100%)",
        }}
      />

      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <Reveal>
          <span className="mono-badge inline-flex items-center gap-2 rounded-full border border-(--color-cyan)/30 bg-(--color-cyan)/10 px-4 py-1.5 text-xs font-bold text-(--color-cyan) mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-cyan) opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-cyan)" />
            </span>
            {t.enterpriseTrust.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.15] tracking-tight mb-5">
            {t.enterpriseTrust.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-(--color-muted) sm:text-lg">
            {t.enterpriseTrust.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Interactive 3D Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.enterpriseTrust.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <InteractiveCard item={item} index={i} lang={lang} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
