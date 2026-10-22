import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Zap, Code2, Globe, Activity } from "lucide-react";
import { useLang } from "../context/LangContext";
import ParticleNetwork from "./ParticleNetwork";
import SmartCountUp from "./SmartCountUp";

// ── Pen-drawn circle SVG ─────────────────────────────────────────────────────
function PenCircle({ delay = 0.9 }: { delay?: number }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 overflow-visible"
      style={{ top: "-14%", left: "-8%", width: "116%", height: "128%" }}
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Main ellipse path drawn with stroke-dashoffset animation */}
      <motion.ellipse
        cx="60" cy="24" rx="57" ry="21"
        stroke="url(#circleGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        // Circumference ≈ 2π*√((57²+21²)/2) ≈ 296
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { delay, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          opacity: { delay, duration: 0.1 },
        }}
      />
      {/* Second slightly-offset stroke for hand-drawn feel */}
      <motion.ellipse
        cx="60.5" cy="24.5" rx="55" ry="19.5"
        stroke="url(#circleGrad2)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 6"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{
          pathLength: { delay: delay + 0.3, duration: 1.2, ease: "easeOut" },
          opacity: { delay: delay + 0.3, duration: 0.1 },
        }}
      />
      <defs>
        <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C4CF1" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="circleGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#6C4CF1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIdx] ?? "";
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, wordIdx, words, speed, pause]);

  return display;
}

// ── Code editor lines ────────────────────────────────────────────────────────
// Removed unused code editor lines

// ── Floating badge pill ──────────────────────────────────────────────────────
const badgesData = [
  { icon: Zap, delay: 0 },
  { icon: Globe, delay: 0.15 },
  { icon: Code2, delay: 0.3 },
];


// ── Main Component ───────────────────────────────────────────────────────────
export default function Hero() {
  const { t, dir, path } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const typewriterWords = t.hero.typewriter;
  const typeDisplay = useTypewriter(typewriterWords);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Parallax particle layer ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <ParticleNetwork />
      </motion.div>

      {/* ── Ambient gradient orbs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(108,76,241,0.22) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 65%)" }}
      />

      {/* ── Scroll fade wrapper ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pt-36 pb-20 sm:pt-44 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8"
      >
        {/* ── LEFT: Copy ── */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span className="mono-badge inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-white/[0.04] px-3 py-1 text-xs text-(--color-cyan) backdrop-blur-sm">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-(--color-emerald)"
              />
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.07, delayChildren: 0.15 },
              },
            }}
            className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-(--color-ink) sm:text-[3.6rem]"
          >
            {/* Line 1 — special-case the circled word */}
            <span className="block">
              {t.hero.title1.split(" ").map((word, i) => {
                // Target word: Arabic = "أفكارك", English = "idea," or first gradient word
                const isHighlight =
                  word === "أفكارك" || word.toLowerCase().startsWith("idea") || i === 1;
                return isHighlight ? (
                  <motion.span
                    key={`t1-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 32, rotateX: -20 },
                      visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="relative inline-block me-3 gradient-text"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {word}
                    <PenCircle delay={0.9} />
                  </motion.span>
                ) : (
                  <motion.span
                    key={`t1-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 32, rotateX: -20 },
                      visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="inline-block me-3"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
            {/* Line 2 — gradient */}
            <span className="block mt-1">
              {t.hero.title2.split(" ").map((word, i) => (
                <motion.span
                  key={`t2-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 32, rotateX: -20 },
                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="gradient-text inline-block me-3"
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Typewriter line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-3 flex items-center gap-2 text-base text-(--color-muted) sm:text-lg"
          >
            <span>{t.hero.weBuild}</span>
            <span className="font-semibold text-(--color-cyan)">
              {typeDisplay}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="ms-0.5 inline-block h-5 w-[2px] bg-(--color-cyan) align-middle"
              />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.03, delayChildren: 0.6 },
              },
            }}
            className="mt-5 max-w-lg text-base leading-relaxed text-(--color-muted) sm:text-lg"
          >
            {t.hero.subtitle.split("").map((char, i) => (
              <motion.span
                key={`sub-${i}`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to={path("/contact")}
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #6C4CF1 0%, #22D3EE 100%)" }}
            >
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%", skewX: -10 }}
                whileHover={{ x: "120%", skewX: -10 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              />
              {t.hero.ctaPrimary}
              <Arrow size={16} className="transition-transform rtl:group-hover:-translate-x-1 group-hover:translate-x-1" />
            </Link>
            <Link
              to={path("/services")}
              className="group flex items-center gap-2 rounded-xl border border-(--color-border) bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-(--color-ink) backdrop-blur-sm transition-all hover:border-(--color-indigo-soft) hover:bg-white/[0.07]"
            >
              {t.hero.ctaSecondary}
              <Arrow size={14} className="opacity-40 transition-all rtl:group-hover:-translate-x-1 group-hover:translate-x-1 group-hover:opacity-80" />
            </Link>
          </motion.div>

          {/* Badge pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {badgesData.map(({ icon: Icon, delay }, i) => {
              const badgeContent = t.hero.badges[i];
              return (
                <motion.span
                  key={badgeContent.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75 + delay, type: "spring", stiffness: 300, damping: 22 }}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm"
                  style={{ borderColor: `${badgeContent.color}30`, background: `${badgeContent.color}10`, color: badgeContent.color }}
                >
                  <Icon size={11} />
                  {badgeContent.label}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 grid max-w-2xl grid-cols-3 sm:grid-cols-5 gap-4 border-t border-(--color-border) pt-8"
          >
            {[
              { num: t.hero.stat1n, label: t.hero.stat1l },
              { num: t.hero.stat2n, label: t.hero.stat2l },
              { num: t.hero.stat3n, label: t.hero.stat3l },
              { num: t.hero.stat4n, label: t.hero.stat4l },
              { num: t.hero.stat5n, label: t.hero.stat5l },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <div className="mono-badge text-xl sm:text-2xl font-bold gradient-text leading-none">
                  <SmartCountUp value={num} />
                </div>
                <div className="mt-1.5 text-xs text-(--color-muted) leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>


        {/* ── RIGHT: Premium Isometric 3D Scene ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center w-full"
          style={{ minHeight: "560px", perspective: "1500px" }}
        >
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-cyan) opacity-10 blur-[100px]" />
          <div className="absolute left-1/4 top-1/4 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-indigo) opacity-10 blur-[80px]" />

          {/* ── 3D Isometric Group ── */}
          <motion.div
            initial={{ rotateX: 60, rotateZ: dir === "rtl" ? 25 : -25, y: 40, opacity: 0 }}
            animate={{ rotateX: 55, rotateZ: dir === "rtl" ? 20 : -20, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[340px] h-[400px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* LAYER 1: Base Platform */}
            <div 
              className="absolute inset-0 rounded-3xl border border-white/10 bg-[#0a0a16]/80 p-5 shadow-2xl backdrop-blur-xl"
              style={{ transform: "translateZ(0px)" }}
            >
              {/* Fake UI Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <div className="h-3 w-20 rounded-full bg-white/5" />
              </div>
              {/* Fake UI Body */}
              <div className="mt-4 flex flex-col gap-4">
                <div className="h-24 w-full rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5" />
                <div className="flex gap-4">
                  <div className="h-32 w-1/2 rounded-xl bg-white/5 border border-white/5" />
                  <div className="h-32 w-1/2 rounded-xl bg-white/5 border border-white/5" />
                </div>
              </div>
            </div>

            {/* LAYER 2: Floating Analytics Card */}
            <motion.div
              animate={{ translateZ: [40, 55, 40] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-10 w-[220px] rounded-2xl border border-(--color-cyan)/30 bg-(--color-cyan)/10 p-5 shadow-xl backdrop-blur-md"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-(--color-cyan)/20 flex items-center justify-center">
                  <Activity size={18} className="text-(--color-cyan)" />
                </div>
                <div>
                  <div className="h-2 w-20 bg-white/40 rounded-full mb-2" />
                  <div className="h-2 w-12 bg-white/20 rounded-full" />
                </div>
              </div>
              <div className="h-14 w-full rounded-lg bg-gradient-to-t from-(--color-cyan)/20 to-transparent" />
            </motion.div>

            {/* LAYER 3: Floating Component / Code */}
            <motion.div
              animate={{ translateZ: [90, 105, 90] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-12 w-[240px] rounded-2xl border border-(--color-indigo)/30 bg-[#0a0a16]/90 p-5 shadow-2xl backdrop-blur-md"
              style={{ transform: "translateZ(90px)" }}
            >
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                <Code2 size={14} className="text-(--color-indigo-soft)" />
                <span className="text-xs font-mono text-white/50">core/optimize.ts</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/20 rounded-full" />
                <div className="h-2 w-5/6 bg-(--color-indigo-soft) rounded-full" />
                <div className="h-2 w-4/6 bg-white/20 rounded-full" />
                <div className="h-2 w-full bg-white/10 rounded-full" />
              </div>
            </motion.div>

          </motion.div>

          {/* ── 2D Professional Annotations (Digital Notes) ── */}
          {/* We position these relative to the flex container so they are flat and perfectly legible */}
          
          {/* Annotation 1: Top Right */}
          <div className={`absolute top-[15%] ${dir === 'rtl' ? 'left-[0%]' : 'right-[0%]'} flex items-start gap-4`}>
             <div className="mt-3 h-[1px] w-16 bg-gradient-to-r from-transparent to-(--color-cyan)" />
             <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md">
                <p className="text-sm font-semibold text-white mb-0.5">{t.hero.annotations[0].title}</p>
                <p className="text-xs text-white/50">{t.hero.annotations[0].desc}</p>
             </div>
          </div>

          {/* Annotation 2: Bottom Left */}
          <div className={`absolute bottom-[20%] ${dir === 'rtl' ? 'right-[0%]' : 'left-[0%]'} flex items-end gap-4`}>
             <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md text-right">
                <p className="text-sm font-semibold text-white mb-0.5">{t.hero.annotations[1].title}</p>
                <p className="text-xs text-white/50">{t.hero.annotations[1].desc}</p>
             </div>
             <div className="mb-4 h-[1px] w-16 bg-gradient-to-l from-transparent to-(--color-indigo-soft)" />
          </div>

        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1"
        >
          <motion.div className="h-1.5 w-0.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
