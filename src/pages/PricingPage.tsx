import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Star, Zap, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

const faqData = {
  ar: [
    { q: "هل يمكنني تخصيص أي باقة؟", a: "نعم، كل الأسعار تقديرية. نتعاون معك على تحديد النطاق الدقيق للمشروع ونقدم عرضاً مخصصاً بعد جلسة تحليل مجانية." },
    { q: "ما طرق الدفع المتاحة؟", a: "ندعم الدفع بالجنيه المصري، الدولار الأمريكي، والتحويل البنكي. يتم تقسيم المدفوعات على مراحل التسليم." },
    { q: "ماذا يحدث بعد التسليم؟", a: "توفر كل باقة دعماً مرحلياً. يمكنك بعدها الاشتراك في باقة صيانة شهرية أو اختيار التواصل عند الحاجة." },
  ],
  en: [
    { q: "Can I customize any package?", a: "Yes, all prices are indicative. We work with you to determine the exact project scope and provide a custom quote after a free discovery session." },
    { q: "What payment methods are available?", a: "We support EGP, USD, and bank transfers. Payments are split across delivery milestones." },
    { q: "What happens after delivery?", a: "Each package includes staged support. You can then subscribe to a monthly maintenance plan or contact us as needed." },
  ],
};

export default function PricingPage() {
  const { t, lang, path } = useLang();
  const [billingAnnual, setBillingAnnual] = useState(false);
  const faqs = faqData[lang];

  // Retainer tiers displayed when the monthly toggle is selected
  const retainerTiers = lang === "ar"
    ? [
        {
          name: "Care Basic",
          price: lang === "ar" ? "تواصل لمعرفة السعر" : "Contact for pricing",
          desc: "صيانة شهرية أساسية للمواقع القائمة",
          features: ["تحديثات الأمان الشهرية", "نسخ احتياطية أسبوعية", "مراقبة وقت التشغيل", "دعم فني عبر واتساب", "تقرير شهري"],
        },
        {
          name: "Care Pro",
          price: lang === "ar" ? "تواصل لمعرفة السعر" : "Contact for pricing",
          desc: "دعم تقني مكثف وتحسين مستمر للأداء",
          features: ["كل ما في Basic", "10 ساعات تطوير شهرياً", "تحسين SEO شهري", "تقارير أداء تفصيلية", "SLA استجابة 24 ساعة"],
        },
        {
          name: "Care Enterprise",
          price: lang === "ar" ? "حسب الاتفاق" : "Custom",
          desc: "شريك تقني مخصص لمشاريعك المؤسسية",
          features: ["ساعات تطوير غير محدودة", "فريق مخصص", "مراقبة 24/7", "SLA استجابة فورية", "جلسات استراتيجية شهرية"],
        },
      ]
    : [
        {
          name: "Care Basic",
          price: "Contact for pricing",
          desc: "Basic monthly maintenance for existing websites",
          features: ["Monthly security updates", "Weekly backups", "Uptime monitoring", "WhatsApp technical support", "Monthly report"],
        },
        {
          name: "Care Pro",
          price: "Contact for pricing",
          desc: "Intensive technical support and continuous performance improvement",
          features: ["Everything in Basic", "10 dev hours/month", "Monthly SEO improvements", "Detailed performance reports", "24h SLA response"],
        },
        {
          name: "Care Enterprise",
          price: "Custom",
          desc: "A dedicated technical partner for your enterprise projects",
          features: ["Unlimited development hours", "Dedicated team", "24/7 monitoring", "Instant SLA response", "Monthly strategy sessions"],
        },
      ];

  const displayedTiers = billingAnnual ? retainerTiers : t.pricing.tiers;

  return (
    <>
      <Seo title={t.seo.pricing.title} description={t.seo.pricing.desc} />
      <PageHeader eyebrow={t.pricing.eyebrow} title={t.pricing.title} subtitle={t.pricing.subtitle} />

      {/* Billing Toggle */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 pb-4 flex flex-col items-center gap-4">
        {/* Free Offer Banner */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-(--color-emerald)/30 bg-(--color-emerald)/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-(--color-emerald)">
            <Zap size={14} className="fill-current shrink-0" />
            {t.pricing.freeOffer}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-2 sm:gap-3 rounded-xl border border-(--color-border) bg-white/3 p-1.5 mt-2">
            <button
              onClick={() => setBillingAnnual(false)}
              className={`rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                !billingAnnual ? "bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) text-white" : "text-(--color-muted) hover:text-(--color-ink)"
              }`}
            >
              {lang === "ar" ? "مشروع واحد" : "Per project"}
            </button>
            <button
              onClick={() => setBillingAnnual(true)}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                billingAnnual ? "bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) text-white" : "text-(--color-muted) hover:text-(--color-ink)"
              }`}
            >
              {lang === "ar" ? "صيانة شهرية" : "Monthly retainer"}
              <span className="rounded-full bg-white/20 px-1.5 sm:px-2 py-0.5 text-[10px] font-bold">
                {lang === "ar" ? "وفّر 20%" : "Save 20%"}
              </span>
            </button>
          </div>
        </Reveal>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5 pb-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {displayedTiers.map((tier, i) => {
            const isPopular = i === 1;
            return (
              <Reveal key={tier.name} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 sm:p-7 ${
                    isPopular
                      ? "border-(--color-indigo)/50 bg-gradient-to-b from-(--color-indigo)/[0.1] to-transparent"
                      : "border-(--color-border) bg-white/[0.015]"
                  }`}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(108,76,241,0.3), 0 0 40px rgba(108,76,241,0.08)" }} />
                  )}
                  {isPopular && (
                    <span className="mono-badge absolute -top-3 start-1/2 -translate-x-1/2 flex items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-3 py-1 text-[11px] font-medium text-white shadow-lg">
                      <Star size={11} fill="white" />
                      {t.pricing.popular}
                    </span>
                  )}

                  {/* Tier icon */}
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${isPopular ? "bg-gradient-to-br from-(--color-indigo) to-(--color-cyan)" : "border border-(--color-border) bg-white/5"}`}>
                    <Zap size={18} className={isPopular ? "text-white" : "text-(--color-muted)"} />
                  </div>

                  <h3 className="mono-badge text-lg font-semibold text-(--color-ink)">{tier.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-xl font-bold text-(--color-ink)">{tier.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">{tier.desc}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-(--color-muted)">
                        <Check size={15} className="mt-0.5 shrink-0 text-(--color-emerald)" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={path("/contact")}
                    className={`mt-7 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all ${
                      isPopular
                        ? "bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) text-white hover:scale-[1.02] shadow-lg shadow-(--color-indigo)/30"
                        : "border border-(--color-border) text-(--color-ink) hover:border-(--color-indigo)/50 hover:bg-white/5"
                    }`}
                  >
                    {t.pricing.cta}
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center text-xs text-(--color-muted-2)">
          <span className="inline-flex items-center gap-1.5">
            <HelpCircle size={12} />
            {t.pricing.note}
          </span>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-5 pb-16">
        <Reveal>
          <h2 className="text-center text-xl sm:text-2xl font-bold text-(--color-ink) mb-8 sm:mb-10">
            {lang === "ar" ? "أسئلة حول التسعير" : "Pricing questions"}
          </h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <details className="group rounded-xl border border-(--color-border) bg-white/[0.02] p-5">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-(--color-ink) list-none">
                  {faq.q}
                  <span className="ml-3 shrink-0 text-(--color-muted) transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-(--color-muted)">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
