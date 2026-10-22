import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Activity, CheckCircle2, Clock, Globe, TrendingUp, Layout, Server } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "../context/LangContext";
import SmartCountUp from "./SmartCountUp";

// Live activity — all website/web platform deliveries
const AR_ACTIVITY = [
  { icon: CheckCircle2, color: "#34D399", text: "تم إطلاق موقع شركة جديد بنجاح" },
  { icon: Globe, color: "#22D3EE", text: "متجر إلكتروني نشط ويستقبل طلبات" },
  { icon: TrendingUp, color: "#6C4CF1", text: "أداء موقع عميل ارتفع بنسبة 40%" },
  { icon: Server, color: "#F59E0B", text: "نشر API جديد على سيرفر الإنتاج" },
  { icon: Layout, color: "#EC4899", text: "تسليم لوحة تحكم ويب لعميل مؤسسي" },
];

const EN_ACTIVITY = [
  { icon: CheckCircle2, color: "#34D399", text: "New company website launched successfully" },
  { icon: Globe, color: "#22D3EE", text: "E-commerce store is live and receiving orders" },
  { icon: TrendingUp, color: "#6C4CF1", text: "Client website performance up by 40%" },
  { icon: Server, color: "#F59E0B", text: "New API deployed to production server" },
  { icon: Layout, color: "#EC4899", text: "Enterprise web dashboard delivered to client" },
];

// Live timestamps that update
function useRelativeTime() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const times = isAr
    ? ["الآن", "منذ ٢ د", "منذ ٥ د", "منذ ١٢ د", "منذ ٣٠ د"]
    : ["Now", "2m ago", "5m ago", "12m ago", "30m ago"];
  return times;
}

function PulseDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ background: color }}
      />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: color }} />
    </span>
  );
}

function UptimeBar({ inView }: { inView: boolean }) {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0f0f18]/60 p-6 backdrop-blur-xl h-full">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-[#34D399]" />
          <span className="text-sm font-bold text-white">
            {isAr ? "جاهزية الأنظمة" : "System Uptime"}
          </span>
        </div>
        <span className="text-xs font-mono text-[#34D399] bg-[#34D399]/10 px-2.5 py-1 rounded-full font-bold">
          <SmartCountUp value="99.9" />%
        </span>
      </div>

      {/* Uptime blocks — GitHub-style */}
      <div className="flex gap-1 flex-wrap">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={inView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ delay: i * 0.03, duration: 0.3 }}
            className="h-7 w-3 rounded-sm"
            style={{
              background: `rgba(52,211,153,${0.45 + (i % 4) * 0.15})`,
            }}
          />
        ))}
      </div>

      <div className="mt-3 flex justify-between text-xs text-(--color-muted)">
        <span>{isAr ? "منذ ٣٠ يوم" : "30 days ago"}</span>
        <span>{isAr ? "اليوم" : "Today"}</span>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-4 text-xs text-(--color-muted)">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-[#34D399]/80 inline-block" />
          {isAr ? "يعمل" : "Operational"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-[#EF4444] inline-block" />
          {isAr ? "حادثة" : "Incident"}
        </span>
      </div>
    </div>
  );
}

function ActivityFeed({ inView }: { inView: boolean }) {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const [active, setActive] = useState(0);
  const items = isAr ? AR_ACTIVITY : EN_ACTIVITY;
  const times = useRelativeTime();

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setActive((p) => (p + 1) % items.length), 2500);
    return () => clearInterval(t);
  }, [inView, items.length]);

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0f0f18]/60 p-6 backdrop-blur-xl h-full">
      <div className="flex items-center gap-2 mb-5">
        <PulseDot color="#22D3EE" />
        <span className="text-sm font-bold text-white">
          {isAr ? "نشاط مباشر — تسليمات المواقع" : "Live Activity — Web Deliveries"}
        </span>
      </div>

      <div className="space-y-3.5">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isActive = i === active;
          return (
            <motion.div
              key={i}
              animate={{ opacity: isActive ? 1 : 0.35, x: isActive ? 0 : -4 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 text-sm"
            >
              <Icon size={15} style={{ color: item.color }} className="shrink-0" />
              <span className={`flex-1 leading-snug ${isActive ? "text-white" : "text-(--color-muted)"}`}>
                {item.text}
              </span>
              <span className="text-xs text-(--color-muted) shrink-0 font-mono">{times[i]}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function KpiChip({
  value,
  label,
  color,
  delay,
  inView,
}: {
  value: string;
  label: string;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#0f0f18]/60 p-4 backdrop-blur-xl"
    >
      <div className="h-2 w-2 rounded-full shrink-0" style={{ background: color }} />
      <div>
        <div className="text-xl font-black" style={{ color }}>
          <SmartCountUp value={value} />
        </div>
        <div className="text-xs text-(--color-muted) leading-snug">{label}</div>
      </div>
    </motion.div>
  );
}

export default function LiveDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const isAr = lang === "ar";

  const kpis = isAr
    ? [
        { value: "24/7", label: "مراقبة مستمرة للمواقع", color: "#22D3EE" },
        { value: "<1s", label: "متوسط زمن تحميل الموقع", color: "#6C4CF1" },
        { value: "A+", label: "تقييم أمان المواقع", color: "#34D399" },
        { value: "100", label: "Lighthouse Score", color: "#F59E0B" },
      ]
    : [
        { value: "24/7", label: "Website monitoring", color: "#22D3EE" },
        { value: "<1s", label: "Avg page load time", color: "#6C4CF1" },
        { value: "A+", label: "Security rating", color: "#34D399" },
        { value: "100", label: "Lighthouse Score", color: "#F59E0B" },
      ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute -z-10 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, #22D3EE, #6C4CF1)" }}
      />

      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-cyan)/30 bg-(--color-cyan)/10 px-4 py-1.5 text-sm font-bold text-(--color-cyan) mb-6">
              <Clock size={14} />
              {isAr ? "لوحة المقاييس الحية" : "Live Performance Dashboard"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] tracking-tight">
              {isAr ? (
                <>نتائجنا مش مجرد <span className="gradient-text">أرقام تسويقية</span></>
              ) : (
                <>Our results are <span className="gradient-text">not just marketing</span></>
              )}
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-(--color-muted) text-base sm:text-lg leading-relaxed">
              {isAr
                ? "كل رقم تشوفه هنا ناتج عن عمل هندسي حقيقي ومراقبة مستمرة للمواقع التي بنيناها لعملائنا."
                : "Every number here comes from real engineering work and continuous monitoring of websites we built for our clients."}
            </p>
          </Reveal>
        </div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left: KPI chips 2x2 */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {kpis.map((k, i) => (
              <KpiChip
                key={k.label}
                value={k.value}
                label={k.label}
                color={k.color}
                delay={i * 0.1}
                inView={inView}
              />
            ))}
          </div>

          {/* Center: Uptime bar */}
          <UptimeBar inView={inView} />

          {/* Right: Live activity feed */}
          <ActivityFeed inView={inView} />
        </div>

        {/* Bottom note */}
        <Reveal delay={0.5}>
          <p className="mt-8 text-center text-xs text-(--color-muted) opacity-60">
            {isAr
              ? "* البيانات استرشادية تعكس متوسط أداء مواقع الويب المُسلَّمة"
              : "* Data is indicative and reflects average performance across delivered websites"}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
