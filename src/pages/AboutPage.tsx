import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Shield, Globe, Heart, Target, Users, Zap,
  ArrowUpRight, CheckCircle2, Cpu, Star
} from "lucide-react";
import { useRef } from "react";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";
import SmartCountUp from "../components/SmartCountUp";

/* ─── DATA ──────────────────────────────────────────────────────────── */
const TECH_STACK = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#68A063" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "GraphQL", color: "#E10098" },
];

const STATS_AR = [
  { value: "99.9%", label: "استقرار الأنظمة", icon: Shield, color: "#22D3EE" },
  { value: "17+",   label: "موقع مُسلَّم",    icon: Globe,  color: "#6C4CF1" },
  { value: "50+",   label: "تعاون ناجح",      icon: Users,  color: "#34D399" },
  { value: "10x",   label: "سرعة التسليم",    icon: Zap,    color: "#F59E0B" },
];
const STATS_EN = [
  { value: "99.9%", label: "System uptime",       icon: Shield, color: "#22D3EE" },
  { value: "17+",   label: "Websites delivered",  icon: Globe,  color: "#6C4CF1" },
  { value: "50+",   label: "Collaborations",      icon: Users,  color: "#34D399" },
  { value: "10x",   label: "Delivery speed",      icon: Zap,    color: "#F59E0B" },
];

const TIMELINE_AR = [
  {
    year: "2020", phase: "التأسيس",
    title: "شرارة الانطلاق",
    desc: "بدأت Codexa برؤية واضحة: تقديم حلول برمجية احترافية تناسب السوق العربي وتتجاوز معايير الجودة العالمية.",
    milestone: "أول 3 مشاريع ويب مُسلَّمة",
  },
  {
    year: "2021", phase: "النمو",
    title: "بناء الفريق الأساسي",
    desc: "استقطبنا أفضل المهندسين والمصممين لبناء نواة فريق متكاملة قادرة على تنفيذ مشاريع معقدة.",
    milestone: "فريق مكوّن من 6 مختصين",
  },
  {
    year: "2023", phase: "الاحتراف",
    title: "مشاريع المؤسسات",
    desc: "تسليم منصات ويب ضخمة لشركات في الشرق الأوسط، وإطلاق أنظمة إدارة وتجارة إلكترونية متكاملة.",
    milestone: "+15 مشروع مؤسسي ناجح",
  },
  {
    year: "2024+", phase: "المستقبل",
    title: "الذكاء والتوسع",
    desc: "دمج تقنيات الذكاء الاصطناعي في منتجاتنا وتوسيع نطاق خدماتنا لتشمل أسواقاً عالمية جديدة.",
    milestone: "أول منتج SaaS بالذكاء الاصطناعي",
  },
];
const TIMELINE_EN = [
  {
    year: "2020", phase: "Foundation",
    title: "The Spark",
    desc: "Codexa started with a clear vision: deliver professional software solutions that match Arab market needs while exceeding global quality standards.",
    milestone: "First 3 web projects delivered",
  },
  {
    year: "2021", phase: "Growth",
    title: "Building the Core Team",
    desc: "We onboarded the best engineers and designers to build a complete core team capable of executing complex projects.",
    milestone: "Team of 6 specialists formed",
  },
  {
    year: "2023", phase: "Enterprise",
    title: "Enterprise Projects",
    desc: "Delivered large-scale web platforms for companies across the Middle East, launching integrated management systems and e-commerce solutions.",
    milestone: "+15 successful enterprise projects",
  },
  {
    year: "2024+", phase: "Future",
    title: "AI & Global Expansion",
    desc: "Integrating AI technologies into our products and expanding our service scope to reach new global markets.",
    milestone: "First AI-powered SaaS product",
  },
];

const VALUES_AR = [
  {
    icon: Target, color: "#22D3EE", span: "md:col-span-2",
    title: "الجودة فوق كل شيء",
    desc: "نحن مهووسون بكتابة كود نظيف (Clean Architecture)، اختبارات آلية شاملة، وأداء يصل لـ 100/100 على Lighthouse. لا نرضى بحلول مؤقتة أو كود مكرر.",
    badge: "Clean Code",
  },
  {
    icon: Globe, color: "#6C4CF1", span: "",
    title: "تفكير عالمي",
    desc: "نصمم بمعايير عالمية مع فهم عميق للسوق العربي. كل منتج ننفذه يعمل بكفاءة مع دعم اللغتين وتجربة مستخدم سلسة.",
    badge: "RTL-Native",
  },
  {
    icon: Zap, color: "#F59E0B", span: "",
    title: "سرعة الإنجاز",
    desc: "نستخدم أحدث أطر العمل وأدوات الأتمتة لتسريع دورة التطوير دون التضحية بالاستقرار والجودة.",
    badge: "10x Velocity",
  },
  {
    icon: Heart, color: "#34D399", span: "md:col-span-2",
    title: "شراكة حقيقية مع العميل",
    desc: "نتعامل مع كل مشروع وكأنه منتجنا الخاص. تواصل مباشر بدون وسطاء، تقارير أسبوعية، ونتائج قابلة للقياس في كل مرحلة — لأن نجاحك هو نجاحنا.",
    badge: "Trusted Partner",
  },
];
const VALUES_EN = [
  {
    icon: Target, color: "#22D3EE", span: "md:col-span-2",
    title: "Quality Above All",
    desc: "We are obsessed with Clean Architecture, comprehensive automated testing, and Lighthouse scores of 100. No temporary fixes, no duplicated code.",
    badge: "Clean Code",
  },
  {
    icon: Globe, color: "#6C4CF1", span: "",
    title: "Global Thinking",
    desc: "We design to global standards with deep understanding of the Arab market. Every product works seamlessly in both languages with smooth UX.",
    badge: "RTL-Native",
  },
  {
    icon: Zap, color: "#F59E0B", span: "",
    title: "Velocity",
    desc: "We use the latest frameworks and automation tools to accelerate development cycles without sacrificing stability or quality.",
    badge: "10x Velocity",
  },
  {
    icon: Heart, color: "#34D399", span: "md:col-span-2",
    title: "Real Client Partnership",
    desc: "We treat every project as our own product. Direct communication, weekly reports, and measurable results at every stage — your success is our success.",
    badge: "Trusted Partner",
  },
];

/* ─── COMPONENTS ─────────────────────────────────────────────────────── */

function HeroSection({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-20"
             style={{ background: "radial-gradient(circle, #6C4CF1 0%, transparent 70%)" }} />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full blur-[100px] opacity-15"
             style={{ background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-5xl px-4 sm:px-5 text-center pt-20 sm:pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-(--color-cyan)/30 bg-(--color-cyan)/10 px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-(--color-cyan) mb-6 sm:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-cyan) opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-cyan)" />
          </span>
          {isAr ? "شركة تقنية عالمية — تُطلق مشاريعها من قلب العالم العربي" : "A global tech company — launching from the heart of the Arab world"}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6 sm:mb-8"
        >
          {isAr ? (
            <>
              نبني المستقبل
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CF1] via-[#22D3EE] to-[#34D399]">
                سطراً بسطر
              </span>
            </>
          ) : (
            <>
              Building the future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CF1] via-[#22D3EE] to-[#34D399]">
                line by line
              </span>
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-xl text-(--color-muted) max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12"
        >
          {isAr
            ? "Codexa ليست مجرد شركة برمجة. نحن استوديو هندسي متخصص في تحويل الأفكار إلى منتجات رقمية عالمية المستوى — من التصميم إلى الإطلاق وما بعده."
            : "Codexa is not just a coding agency. We are an engineering studio specialized in transforming ideas into world-class digital products — from design to launch and beyond."}
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto"
        >
          <a href="/contact"
             className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(108,76,241,0.3)] hover:shadow-[0_0_40px_rgba(108,76,241,0.5)] transition-all hover:scale-105"
             style={{ background: "linear-gradient(135deg, #6C4CF1, #22D3EE)" }}>
            {isAr ? "ابدأ مشروعك" : "Start your project"}
            <ArrowUpRight size={16} />
          </a>
          <a href="/portfolio"
             className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all">
            {isAr ? "شاهد أعمالنا" : "View our work"}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 sm:mt-20 flex flex-col items-center gap-2 text-xs text-(--color-muted)"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="h-1.5 w-1 rounded-full bg-white/40" />
          </motion.div>
          {isAr ? "تمرر للأسفل" : "Scroll down"}
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatsSection({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const stats = isAr ? STATS_AR : STATS_EN;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-12 sm:py-20 bg-[#09090b] border-y border-white/[0.05]">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-white/[0.06] bg-[#0f0f18]/80 p-4 sm:p-6 text-center backdrop-blur-xl hover:border-white/10 transition-colors"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl"
                       style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}30` }}>
                    <Icon size={18} />
                  </div>
                </div>
                <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-1.5"
                     style={{ color: s.color }}>
                  <SmartCountUp value={s.value} />
                </div>
                <div className="text-xs sm:text-sm text-(--color-muted)">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MissionSection({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  return (
    <section className="py-16 sm:py-32 bg-[#09090b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-indigo)/30 bg-(--color-indigo)/10 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-(--color-indigo) mb-4 sm:mb-6">
              {isAr ? "رسالتنا" : "Our Mission"}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] mb-4 sm:mb-6">
              {isAr ? (
                <>أن نكون الشريك التقني<br /><span className="gradient-text">الذي كنت تبحث عنه</span></>
              ) : (
                <>To be the technical partner<br /><span className="gradient-text">you've been looking for</span></>
              )}
            </h2>
            <p className="text-(--color-muted) text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {isAr
                ? "نؤمن بأن كل شركة ناشئة أو مؤسسة تستحق منتجاً رقمياً يعكس قيمتها الحقيقية. مهمتنا هي تحويل هذا الإيمان إلى واقع ملموس — بكود نظيف، تصميم لافت، وبنية تحتية تصمد أمام النمو."
                : "We believe every startup or enterprise deserves a digital product that reflects its true value. Our mission is to turn that belief into tangible reality — with clean code, striking design, and infrastructure that withstands growth."}
            </p>
            <div className="space-y-3">
              {(isAr
                ? ["كود مملوك بالكامل بعد التسليم", "تواصل مباشر مع فريق التطوير", "دعم فني مستمر بعد الإطلاق"]
                : ["Full code ownership after delivery", "Direct communication with dev team", "Continuous technical support after launch"]
              ).map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-white">
                  <CheckCircle2 size={16} className="text-[#34D399] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — decorative terminal card */}
          <Reveal delay={0.2}>
            <div className="relative rounded-2xl border border-white/[0.07] bg-[#0f0f18] overflow-hidden shadow-2xl">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/[0.06] bg-[#13131c]">
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 sm:ml-3 text-[11px] sm:text-xs text-(--color-muted) font-mono truncate">codexa.sh — {isAr ? "مشروعك التالي" : "your-next-project"}</span>
              </div>
              {/* Terminal content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-2.5 sm:space-y-3">
                {[
                  { prompt: "$", cmd: "codexa init", color: "#22D3EE" },
                  { prompt: "✓", cmd: isAr ? "تحليل المتطلبات..." : "Analyzing requirements...", color: "#34D399" },
                  { prompt: "✓", cmd: isAr ? "تصميم المعمارية..." : "Designing architecture...", color: "#34D399" },
                  { prompt: "✓", cmd: isAr ? "بناء النظام..." : "Building system...", color: "#34D399" },
                  { prompt: "✓", cmd: isAr ? "اختبارات الجودة..." : "Quality assurance...", color: "#34D399" },
                  { prompt: "🚀", cmd: isAr ? "تم الإطلاق بنجاح!" : "Successfully launched!", color: "#F59E0B" },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.4 }}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <span style={{ color: line.color }}>{line.prompt}</span>
                    <span className="text-white/80">{line.cmd}</span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block h-4 w-2 bg-[#22D3EE] mt-1"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const timeline = isAr ? TIMELINE_AR : TIMELINE_EN;

  return (
    <section className="py-16 sm:py-32 relative bg-[#09090b]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-5">
        <Reveal>
          <div className="text-center mb-12 sm:mb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-cyan)/30 bg-(--color-cyan)/10 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-(--color-cyan) mb-4 sm:mb-5">
              {isAr ? "رحلة النمو" : "Our Growth Journey"}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              {isAr ? "من فكرة إلى شركة عالمية" : "From idea to a global company"}
            </h2>
          </div>
        </Reveal>

        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
               style={{ background: "linear-gradient(to bottom, transparent, rgba(108,76,241,0.4) 20%, rgba(34,211,238,0.4) 80%, transparent)" }} />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.year} className={`relative flex ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} items-start md:items-center mb-10 sm:mb-16`}>
                {/* Dot */}
                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                    className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-(--color-indigo) bg-[#09090b] flex items-center justify-center shadow-[0_0_20px_rgba(108,76,241,0.4)]"
                  >
                    <span className="text-[11px] sm:text-xs font-black text-(--color-cyan)">{i + 1}</span>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`pl-12 sm:pl-14 md:pl-0 ${isLeft ? "md:pr-16 md:w-[calc(50%-20px)]" : "md:pl-16 md:w-[calc(50%-20px)] md:ml-auto"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group rounded-2xl border border-white/[0.06] bg-[#0f0f18]/70 p-5 sm:p-7 backdrop-blur-xl hover:border-(--color-indigo)/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                      <span className="rounded-lg bg-(--color-indigo)/20 px-2.5 sm:px-3 py-1 text-xs font-bold text-(--color-indigo)">
                        {item.year}
                      </span>
                      <span className="text-xs text-(--color-muted)">{item.phase}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-(--color-cyan) transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-(--color-muted) text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{item.desc}</p>
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#34D399]/10 border border-[#34D399]/20 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#34D399]">
                      <Star size={11} />
                      {item.milestone}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechStackSection({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  return (
    <section className="py-14 sm:py-20 border-y border-white/[0.05] bg-[#09090b] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <Reveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white/70 mb-3 sm:mb-4">
              <Cpu size={14} />
              {isAr ? "التقنيات التي نتقنها" : "Technologies we master"}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              {isAr ? "بُنيت بأفضل التقنيات في العالم" : "Built with world's best technologies"}
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {TECH_STACK.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-2 sm:gap-2.5 rounded-xl border border-white/[0.06] bg-[#0f0f18]/80 px-3.5 py-2 sm:px-5 sm:py-3 backdrop-blur-sm cursor-default"
              >
                <div className="h-2 w-2 rounded-full" style={{ background: tech.color }} />
                <span className="text-xs sm:text-sm font-semibold text-white/80">{tech.name}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const values = isAr ? VALUES_AR : VALUES_EN;

  return (
    <section className="py-16 sm:py-32 bg-[#09090b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-cyan)/30 bg-(--color-cyan)/10 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-(--color-cyan) mb-4 sm:mb-5">
              {isAr ? "ما يميزنا" : "What defines us"}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">
              {isAr ? "قيم لا نتنازل عنها" : "Values we never compromise"}
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f0f18]/60 p-5 sm:p-8 backdrop-blur-xl ${v.span}`}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                       style={{ background: `radial-gradient(circle at 50% 0%, ${v.color}15 0%, transparent 70%)` }} />
                  {/* Top border */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ background: `linear-gradient(90deg, transparent, ${v.color}, transparent)` }} />

                  <div className="mb-4 sm:mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl"
                         style={{ background: `${v.color}18`, border: `1px solid ${v.color}30`, color: v.color }}>
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold"
                          style={{ background: `${v.color}15`, color: v.color, border: `1px solid ${v.color}25` }}>
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[var(--vc)] transition-colors"
                      style={{ "--vc": v.color } as React.CSSProperties}>
                    {v.title}
                  </h3>
                  <p className="text-(--color-muted) text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  const { t, lang } = useLang();

  return (
    <>
      <Seo title={t.seo.about.title} description={t.seo.about.desc} />
      <HeroSection lang={lang} />
      <StatsSection lang={lang} />
      <MissionSection lang={lang} />
      <TimelineSection lang={lang} />
      <TechStackSection lang={lang} />
      <ValuesSection lang={lang} />
      <CTASection />
    </>
  );
}
