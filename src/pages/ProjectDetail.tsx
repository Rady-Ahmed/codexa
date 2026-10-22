import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Wrench,
  TrendingUp,
  MessageCircle,
  ExternalLink,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import ProjectMockup from "../components/ProjectMockup";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioProjects } from "../data/portfolio";
import { useLang } from "../context/LangContext";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, dir, t, path } = useLang();
  const [activeTab, setActiveTab] = useState<"preview" | "architecture">("preview");

  const currentIndex = portfolioProjects.findIndex((p) => p.slug === slug);
  const project = portfolioProjects[currentIndex];
  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft;
  const isAr = lang === "ar";

  if (!project) return <Navigate to={path("/portfolio")} replace />;

  const prevProject =
    currentIndex > 0
      ? portfolioProjects[currentIndex - 1]
      : portfolioProjects[portfolioProjects.length - 1];
  const nextProject =
    currentIndex < portfolioProjects.length - 1
      ? portfolioProjects[currentIndex + 1]
      : portfolioProjects[0];

  const relatedProjects = portfolioProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const storyBlocks = [
    { icon: Target, label: t.portfolio.challenge, text: project.challenge[lang] },
    { icon: Wrench, label: t.portfolio.approach, text: project.approach[lang] },
    { icon: TrendingUp, label: t.portfolio.result, text: project.result[lang] },
  ];

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً كوديكسا، اطلعت على مشروع "${project.name}" وأرغب في مناقشة بناء حل تقني مماثل لمشروعي.`
      : `Hi Codexa, I reviewed your "${project.name}" case study and would like to discuss building a similar digital solution.`
  );

  return (
    <>
      <Seo title={`${project.name} — Codexa`} description={project.summary[lang]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-44 sm:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute start-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
          style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-5">
          <Reveal>
            <Link
              to={path("/portfolio")}
              className="group inline-flex items-center gap-2 text-sm text-(--color-muted) hover:text-(--color-ink) transition-colors"
            >
              <Arrow size={14} className="transition-transform rtl:group-hover:translate-x-1 group-hover:-translate-x-1" />
              {t.portfolio.viewAll}
            </Link>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span
                className="mono-badge inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: `${project.color}40`,
                  background: `${project.color}15`,
                  color: project.color,
                }}
              >
                <Sparkles size={12} />
                {project.category[lang]}
              </span>
              <span className="mono-badge text-xs text-white/40">
                Case Study • {project.slug}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-(--color-muted)">
              {project.description[lang]}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_15px_35px_rgba(16,185,129,0.5)]"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                  </span>
                  <ExternalLink size={17} />
                  {isAr ? "معاينة وزيارة الموقع الحي ↗" : "Visit Live Production Site ↗"}
                </a>
              )}

              <a
                href={`https://wa.me/201101970882?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                {isAr ? "طلب حل مشابه لهذا المشروع" : "Request a Similar Solution"}
              </a>

              <a
                href="https://wa.me/201101970882"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <ExternalLink size={16} className="text-(--color-cyan)" />
                {isAr ? "استشارة مجانية" : "Free Consultation"}
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-1.5 sm:gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="mono-badge rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Impact Metrics Banner */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-[#0c0c16]/80 p-4 sm:p-7 sm:grid-cols-4 backdrop-blur-xl">
              {project.metrics.map((m) => (
                <div key={m.label[lang]}>
                  <div className="mono-badge text-xl font-bold sm:text-3xl" style={{ color: project.color }}>
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-(--color-muted)">{m.label[lang]}</div>
                </div>
              ))}
              <div>
                <div className="mono-badge text-xl font-bold sm:text-3xl text-emerald-400">100%</div>
                <div className="mt-1 text-[11px] sm:text-xs text-(--color-muted)">
                  {isAr ? "جاهزية واستقرار الخوادم" : "Platform Uptime SLA"}
                </div>
              </div>
              <div>
                <div className="mono-badge text-xl font-bold sm:text-3xl text-cyan-400">SOC-2</div>
                <div className="mt-1 text-[11px] sm:text-xs text-(--color-muted)">
                  {isAr ? "معايير الأمان والتشفير" : "Security Architecture"}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visual Showcase: Toggle Tabs (Live Preview vs System Architecture) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-5 pb-12 sm:pb-16">
        <Reveal delay={0.1}>
          {/* Tabs Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex rounded-xl border border-white/10 bg-black/40 p-1 backdrop-blur-md">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  activeTab === "preview"
                    ? "bg-white/15 text-white shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Sparkles size={14} style={{ color: project.color }} />
                {isAr ? "واجهة المستخدم والنظام" : "Product UI Showcase"}
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  activeTab === "architecture"
                    ? "bg-white/15 text-white shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Layers size={14} className="text-cyan-400" />
                {isAr ? "مخطط البنية البرمجية" : "Architecture Blueprint"}
              </button>
            </div>

            <span className="hidden text-xs text-(--color-muted) sm:inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              {isAr ? "نظام معتمد ومختبر بالكامل" : "Fully tested production build"}
            </span>
          </div>

          {/* Tab Content 1: High Fidelity Browser Frame */}
          {activeTab === "preview" ? (
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0e0e1a] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#141424] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex max-w-md flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-black/60 px-4 py-1.5 text-[11px] font-mono text-white/80 transition-all hover:border-emerald-500/50 hover:bg-black/80 hover:text-white"
                    title={isAr ? "افتح الموقع الحي في نافذة جديدة" : "Open live site in new tab"}
                  >
                    <span className="text-emerald-400 font-bold">https://</span>
                    <span>{project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                    <ExternalLink size={12} className="text-emerald-400 ms-1" />
                  </a>
                ) : (
                  <div className="mx-auto flex max-w-sm flex-1 items-center justify-center rounded-lg border border-white/10 bg-black/40 px-4 py-1 text-[11px] font-mono text-white/60">
                    <span className="text-emerald-400 me-1.5">https://</span>
                    {project.slug}.codexa.app
                  </div>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-badge inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-400 font-bold hover:underline"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </a>
                ) : (
                  <span className="mono-badge text-[10px] uppercase tracking-wider text-white/40">
                    MOCK
                  </span>
                )}
              </div>

              {/* Real Project Image with ambient tint & hover live action */}
              <div className="group/mockup relative aspect-[16/9] w-full overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/mockup:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0e1a]/80 via-transparent to-transparent" />

                {project.liveUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover/mockup:opacity-100 bg-black/40">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-black shadow-2xl transition-transform hover:scale-105 active:scale-95"
                    >
                      <ExternalLink size={16} />
                      {isAr ? "معاينة حية للمشروع ↗" : "Launch Live Demo ↗"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Tab Content 2: Architecture Blueprint Mockup */
            <div className="rounded-2xl border border-white/15 bg-[#0e0e1a] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              <ProjectMockup color={project.color} name={project.name} className="w-full rounded-xl" />
            </div>
          )}
        </Reveal>
      </section>

      {/* Case Study Details: Challenge, Approach, Result */}
      <section className="mx-auto max-w-5xl px-4 sm:px-5 pb-16 sm:pb-20">
        <h2 className="mb-5 sm:mb-6 text-xl sm:text-2xl font-bold text-white">
          {isAr ? "كواليس التنفيذ وهندسة الحل" : "Engineering Journey & Execution"}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {storyBlocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.label} delay={i * 0.1}>
                <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c16]/70 p-5 sm:p-6 backdrop-blur-xl transition-all hover:border-white/20">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${project.color}1A`, color: project.color }}
                    >
                      <Icon size={18} />
                    </span>
                    <h3 className="mono-badge text-sm sm:text-base font-bold text-white">{block.label}</h3>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-(--color-muted) flex-1">
                    {block.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Previous / Next Project Navigation Bar */}
      <section className="mx-auto max-w-5xl px-4 sm:px-5 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
          {/* Previous */}
          <Link
            to={path(`/portfolio/${prevProject.slug}`)}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c0c16]/60 p-4 sm:p-5 backdrop-blur-lg transition-all hover:border-white/25 hover:bg-white/[0.03]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition-colors group-hover:bg-white/10 group-hover:text-white">
                <ChevronLeft size={18} className={dir === "rtl" ? "rotate-180" : ""} />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono text-(--color-muted)">
                  {isAr ? "المشروع السابق" : "Previous Project"}
                </span>
                <p className="text-sm sm:text-base font-bold text-white group-hover:text-white">{prevProject.name}</p>
              </div>
            </div>
          </Link>

          {/* Next */}
          <Link
            to={path(`/portfolio/${nextProject.slug}`)}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c0c16]/60 p-4 sm:p-5 backdrop-blur-lg transition-all hover:border-white/25 hover:bg-white/[0.03]"
          >
            <div className="flex items-center gap-3 ms-auto">
              <div className="text-end">
                <span className="text-[10px] sm:text-[11px] font-mono text-(--color-muted)">
                  {isAr ? "المشروع التالي" : "Next Project"}
                </span>
                <p className="text-sm sm:text-base font-bold text-white group-hover:text-white">{nextProject.name}</p>
              </div>
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition-colors group-hover:bg-white/10 group-hover:text-white">
                <ChevronRight size={18} className={dir === "rtl" ? "rotate-180" : ""} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Related Projects Showcase */}
      <section className="mx-auto max-w-5xl px-4 sm:px-5 pb-16 sm:pb-20">
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isAr ? "مشاريع أخرى قد تهمك" : "Related Case Studies"}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-(--color-muted)">
              {isAr ? "استكشف المزيد من الحلول الرقمية التي طورناها" : "Explore more custom digital systems engineered by Codexa"}
            </p>
          </div>
          <Link
            to={path("/portfolio")}
            className="text-xs font-semibold text-(--color-cyan) hover:underline shrink-0"
          >
            {t.portfolio.viewAll} →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {relatedProjects.map((p, i) => (
            <PortfolioCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
