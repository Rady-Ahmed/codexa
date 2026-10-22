import { useParams, Navigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import CTASection from "../components/CTASection";
import Process from "../components/Process";
import EnterpriseTrust from "../components/EnterpriseTrust";
import SpotlightCard from "../components/SpotlightCard";
import Reveal from "../components/Reveal";
import { CheckCircle2, MonitorSmartphone, GraduationCap, Building2, Server, Paintbrush } from "lucide-react";

const categoryIcons = {
  "web-mobile": MonitorSmartphone,
  "edtech": GraduationCap,
  "enterprise": Building2,
  "infrastructure": Server,
  "design-digital": Paintbrush,
};

export default function ServiceCategoryPage() {
  const { categoryId } = useParams();
  const { t, lang } = useLang();

  // Find category based on URL param
  const category = (t.services.categories as any[]).find((c) => c.id === categoryId);

  // If the category ID doesn't exist, redirect to the main services page
  if (!category) {
    return <Navigate to={`/${lang === "en" ? "en/" : ""}services`} replace />;
  }

  const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || MonitorSmartphone;

  return (
    <>
      <Seo
        title={`${category.title} — Codexa`}
        description={category.desc}
      />
      
      <PageHeader 
        eyebrow={t.services.eyebrow}
        title={category.title}
        subtitle={category.desc}
      />

      {/* Main Details Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 py-8 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          
          {/* Left Column: Sub-Services */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <Reveal>
              <div className="mb-4 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-(--color-indigo)/20 to-(--color-cyan)/20 text-(--color-cyan)">
                <Icon size={26} className="sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-(--color-ink) mb-4 sm:mb-6">
                {lang === "ar" ? "ماذا نقدم في هذا القسم؟" : "What we offer in this section"}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {category.items.map((item: any, idx: number) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <SpotlightCard className="h-full p-4 sm:p-6 hover:border-(--color-cyan)/30 transition-colors">
                    <h3 className="mb-2 text-base sm:text-lg font-semibold text-(--color-ink)">{item.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-(--color-muted)">{item.desc}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Benefits & Tech Stack */}
          <div className="flex flex-col gap-8 sm:gap-12">
            
            {/* Benefits */}
            {category.benefits && (
              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-(--color-border) bg-white/2 p-5 sm:p-8 shadow-sm backdrop-blur-xl">
                  <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-(--color-ink)">
                    {lang === "ar" ? "لماذا تختارنا لهذا القسم؟" : "Why choose us for this?"}
                  </h3>
                  <ul className="flex flex-col gap-3 sm:gap-4">
                    {category.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-(--color-cyan)" size={16} />
                        <span className="text-xs sm:text-sm leading-relaxed text-(--color-muted)">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {/* Technologies */}
            {category.technologies && (
              <Reveal delay={0.3}>
                <div>
                  <h3 className="mb-6 text-xl font-bold text-(--color-ink)">
                    {lang === "ar" ? "التقنيات المستخدمة" : "Technologies we use"}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-(--color-border) bg-white/5 px-4 py-2 text-sm font-medium text-(--color-ink) shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

          </div>
        </div>
      </section>

      {/* Global Sections */}
      <Process />
      <div className="py-12 bg-gradient-to-b from-transparent to-(--color-border)/20">
        <EnterpriseTrust />
      </div>
      <CTASection />
    </>
  );
}
