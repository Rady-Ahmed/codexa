import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Settings, Award, Headset, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLang } from "../context/LangContext";

const icons = [Settings, Award, Headset, Target];

// Mini Neural Network Canvas — drawn inside the circle
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 208; // matches h-52 w-52 = 13rem = 208px
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const NUM = 28;
    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2;

    interface Dot { x: number; y: number; vx: number; vy: number; r: number }
    const dots: Dot[] = Array.from({ length: NUM }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (R - 12);
      return {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.4,
      };
    });

    let rafId: number;
    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // Move & bounce inside circle
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        const dist = Math.hypot(d.x - cx, d.y - cy);
        if (dist > R - 14) {
          const nx = (d.x - cx) / dist;
          const ny = (d.y - cy) / dist;
          const dot = d.vx * nx + d.vy * ny;
          d.vx -= 2 * dot * nx;
          d.vy -= 2 * dot * ny;
        }
      });

      // Draw connections
      dots.forEach((a, i) => {
        dots.forEach((b, j) => {
          if (j <= i) return;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 60) {
            const alpha = (1 - dist / 60) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(108, 76, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Draw dots
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.55)";
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

export default function WhyUs() {
  const { t, dir } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.4 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 280, damping: 22 },
    },
  };

  // Card connector dots — small circles at the end of each connector line
  const connectors = [
    { x2: "22%", y2: "22%" },
    { x2: "78%", y2: "22%" },
    { x2: "22%", y2: "78%" },
    { x2: "78%", y2: "78%" },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(108,76,241,0.08)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} />

        <div className="relative mt-24 min-h-[520px]">

          {/* ─── SVG Connector Layer ─── */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <svg className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6C4CF1" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connectors.map((pos, idx) => (
                <g key={idx}>
                  {/* Static dashed base line */}
                  <motion.line
                    x1="50%" y1="50%" x2={pos.x2} y2={pos.y2}
                    stroke="url(#connGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                    className="opacity-15"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: idx * 0.2, ease: "easeOut" }}
                  />

                  {/* Animated travelling light dot */}
                  <motion.circle
                    r="3"
                    fill="url(#connGrad)"
                    filter="url(#glow)"
                    style={{ opacity: 0.85 }}
                    initial={false}
                    animate={{
                      // travel from center (50%,50%) to corner and back
                    }}
                  >
                    <animateMotion
                      dur={`${2.4 + idx * 0.35}s`}
                      repeatCount="indefinite"
                      begin={`${idx * 0.6}s`}
                    >
                      <mpath href={`#path-${idx}`} />
                    </animateMotion>
                  </motion.circle>

                  {/* SVG path for animateMotion */}
                  <path
                    id={`path-${idx}`}
                    d={`M 50% 50% L ${pos.x2} ${pos.y2}`}
                    fill="none"
                  />

                  {/* Endpoint dot on card side */}
                  <motion.circle
                    cx={pos.x2} cy={pos.y2} r="5"
                    fill="none"
                    stroke="url(#connGrad)"
                    strokeWidth="1.5"
                    className="opacity-40"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + idx * 0.2, duration: 0.4 }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* ─── Central Logo Circle ─── */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
            className="absolute left-1/2 top-1/2 z-20 hidden h-52 w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full md:flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(108,76,241,0.08) 0%, rgba(10,10,20,0.95) 70%)",
              boxShadow: "0 0 0 1.5px rgba(108,76,241,0.25), 0 0 60px rgba(108,76,241,0.18), 0 0 120px rgba(34,211,238,0.08)",
            }}
          >
            {/* Neural Network Canvas */}
            <NeuralCanvas />

            {/* Slow rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full"
              style={{ border: "1px dashed rgba(34,211,238,0.30)" }}
            />

            {/* Reverse rotating inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full"
              style={{ border: "1px dashed rgba(108,76,241,0.22)" }}
            />

            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-10 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(108,76,241,0.3) 0%, transparent 70%)" }}
            />

            {/* Modern Logo */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              {/* Icon mark */}
              <motion.div
                animate={{ boxShadow: ["0 0 16px rgba(108,76,241,0.5)", "0 0 30px rgba(34,211,238,0.5)", "0 0 16px rgba(108,76,241,0.5)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #22D3EE 0%, #6C4CF1 100%)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M8 3L3 8l5 5M16 3l5 5-5 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 3l-4 18" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Wordmark */}
              <span
                className="text-[15px] font-black tracking-[0.22em] text-white/90 uppercase"
                style={{ letterSpacing: "0.22em" }}
              >
                Code
                <span
                  style={{
                    background: "linear-gradient(90deg, #6C4CF1, #22D3EE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  xa
                </span>
              </span>
            </div>
          </motion.div>

          {/* ─── 4 Feature Cards ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-72 md:gap-y-20 relative z-10"
          >
            {t.why.items.map((item, i) => {
              const Icon = icons[i];
              const isLeft = i === 0 || i === 2;
              const alignClass = isLeft
                ? dir === "rtl" ? "md:mr-auto md:text-right" : "md:ml-auto"
                : dir === "rtl" ? "md:ml-auto" : "md:mr-auto";

              return (
                <motion.div
                  key={item.t}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -6 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className={`group relative flex max-w-[280px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] p-6 backdrop-blur-sm ${alignClass}`}
                  style={{
                    background: "linear-gradient(135deg, rgba(108,76,241,0.07) 0%, rgba(10,10,20,0.6) 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover border glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(108,76,241,0.4), 0 8px 32px rgba(108,76,241,0.18)" }}
                  />

                  {/* Icon */}
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white/80 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(108,76,241,0.3) 0%, rgba(34,211,238,0.15) 100%)" }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-white/90">{item.t}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.d}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
