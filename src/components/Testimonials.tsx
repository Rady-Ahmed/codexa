import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useLang } from "../context/LangContext";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Testimonial {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  company: { ar: string; en: string };
  quote: { ar: string; en: string };
  project: { ar: string; en: string };
  metric: { ar: string; en: string };
  rating: number;
  initials: string;
  accent: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "care-hospital",
    name: { ar: "د. أحمد عبد الفتاح", en: "Dr. Ahmed Abdel Fattah" },
    role: { ar: "رئيس قسم التكنولوجيا الطبية", en: "Chief Medical Information Officer" },
    company: { ar: "مجموعة كير الطبية — القاهرة", en: "Care Medical Group — Cairo" },
    quote: {
      ar: "تجربتنا مع Codexa في تطوير نظام الـ ERP للمستشفى فاقت كل التوقعات. استقرار النظام وحماية بيانات المرضى والتكامل اللحظي بين الصيدلية والاستقبال والعيادات وفّر علينا مئات الساعات شهرياً وقلل نسبة الأخطاء الورقية إلى الصفر تقريباً.",
      en: "Working with Codexa on our Hospital ERP system exceeded all expectations. System stability, patient data security, and seamless sync between reception, pharmacy, and clinics saved us hundreds of manual hours and virtually eliminated paper errors.",
    },
    project: { ar: "نظام Care Hospital ERP", en: "Care Hospital ERP System" },
    metric: { ar: "تقليص زمن الانتظار بنسبة 40%", en: "40% Wait Time Reduction" },
    rating: 5,
    initials: "أع",
    accent: "#ff5f56",
  },
  {
    id: "masar-lms",
    name: { ar: "م. ياسين الشريف", en: "Eng. Yassin El-Sherif" },
    role: { ar: "المؤسس والرئيس التنفيذي", en: "Founder & CEO" },
    company: { ar: "منصة مسار التعليمية", en: "Masar EdTech Academy" },
    quote: {
      ar: "حماية الفيديوهات من القرصنة وسرعة الاستجابة كانتا التحدي الأكبر لنا. فريق كوديكسا بنى لنا خوادم بث مشفرة بنظام DRM عالي الأمان وواجهة تفاعلية جعلت معدل إكمال الطلاب للكورسات يقفز بنسبة 74% خلال أول فصل دراسي.",
      en: "DRM video protection and sub-second latency were our biggest challenges. Codexa engineered an ultra-secure video streaming infrastructure and engaging UI that boosted student course completion by 74% in our very first term.",
    },
    project: { ar: "منصة Masar LMS", en: "Masar LMS Platform" },
    metric: { ar: "حماية تامة للمحتوى +74% إكمال", en: "100% DRM +74% Completion" },
    rating: 5,
    initials: "يش",
    accent: "#6C4CF1",
  },
  {
    id: "alsharea",
    name: { ar: "أ. كريم منصور", en: "Karim Mansour" },
    role: { ar: "مدير التحول الرقمي والتطوير", en: "Head of Digital Transformation" },
    company: { ar: "الجمعية الشرعية الرئيسية", en: "Al-Sharea Relief Society" },
    quote: {
      ar: "المنصة الخيرية التي طورتها Codexa أحدثت قفزة نوعية في تاريخ الجمعية. ارتفعت التبرعات الرقمية بنسبة 185%، ولوحة التحكم الموحدة جعلتنا نتابع كل تبرع وكل حملة إغاثية بلحظتها وبشفافية تامة حازت ثقة المتبرعين والجهات الرقابية.",
      en: "The digital platform engineered by Codexa created a quantum leap for our organization. Online donations surged by 185%, and the unified admin portal gave us real-time, transparent tracking across all humanitarian campaigns.",
    },
    project: { ar: "بوابة الجمعية الشرعية للتبرعات", en: "Al-Sharea Donation Portal" },
    metric: { ar: "+185% نمو في التبرعات الإلكترونية", en: "+185% Digital Donation Surge" },
    rating: 5,
    initials: "كم",
    accent: "#22D3EE",
  },
  {
    id: "roaa-quran",
    name: { ar: "الشيخ عبد الله بن راشد", en: "Sheikh Abdullah Bin Rashid" },
    role: { ar: "المشرف العام على الأكاديمية", en: "Director of Academic Affairs" },
    company: { ar: "أكاديمية رؤى العالمية", en: "Roaa Global Quran Academy" },
    quote: {
      ar: "ربط آلاف الطلاب بمعلمين معتمدين في شتى أنحاء العالم بدون تقطيع صوتي كان بمثابة إعجاز تقني. بفضل دمج WebRTC والخوادم الموزعة، أصبحت حلقات التحفيظ تعقد بجودة صوتية فائقة ودقة متناهية في المواعيد.",
      en: "Connecting thousands of students with certified scholars worldwide with near-zero audio latency was a huge engineering feat. Codexa's WebRTC implementation delivered crystal-clear sessions across multiple time zones flawlessly.",
    },
    project: { ar: "منصة رؤى للتعليم المباشر", en: "Roaa Remote Learning Platform" },
    metric: { ar: "زمن استجابة صوتية أقل من 65ms", en: "< 65ms Voice Latency" },
    rating: 5,
    initials: "عر",
    accent: "#34D399",
  },
];

export default function Testimonials() {
  const { lang, dir } = useLang();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAr = lang === "ar";

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="relative overflow-hidden py-16 sm:py-32">
      {/* Background Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${current.accent} 0%, transparent 70%)`,
          transition: "background 0.5s ease",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <SectionHeader
          eyebrow={isAr ? "شهادات العملاء وشركاء النجاح" : "Client Success Stories"}
          title={
            isAr
              ? "ثقة تبنى على أرقام حقيقية ونتائج ملموسة"
              : "Built on Tangible Results and Proven Metrics"
          }
          subtitle={
            isAr
              ? "نحن لا نكتفي بتسليم برمجيات، بل نبني علاقات شراكة تقنية مستدامة تقود مؤسساتكم إلى الصدارة."
              : "We don't just ship code; we forge enduring technical partnerships that empower ambitious enterprises."
          }
        />

        {/* Featured Testimonial Spotlight */}
        <div className="mt-10 sm:mt-16 mx-auto max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c16]/80 p-5 sm:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Giant Watermark Quote */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-4 -end-4 text-white/[0.03]"
              >
                <Quote size={180} />
              </div>

              {/* Top Row: Rating & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ms-2 font-mono text-xs font-bold text-white/80">
                    5.0 / 5.0
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 size={13} />
                  {isAr ? "مشروع حقيقي معتمد" : "Verified Enterprise Project"}
                </div>
              </div>

              {/* Quote Content with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <p className="text-base leading-relaxed text-white/95 sm:text-xl sm:leading-relaxed font-normal">
                    “{current.quote[lang]}”
                  </p>

                  {/* Impact Metric Highlight */}
                  <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 sm:px-4 sm:py-2">
                    <Sparkles size={14} style={{ color: current.accent }} />
                    <span className="text-xs font-mono font-bold" style={{ color: current.accent }}>
                      {current.metric[lang]}
                    </span>
                  </div>

                  {/* Client Info & Avatar */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 sm:pt-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Initials Avatar */}
                      <div
                        className="flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${current.accent}30, ${current.accent}10)`,
                          border: `1px solid ${current.accent}50`,
                          color: current.accent,
                        }}
                      >
                        {current.initials}
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {current.name[lang]}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-(--color-muted)">
                          {current.role[lang]} •{" "}
                          <span className="text-white/80 font-medium">
                            {current.company[lang]}
                          </span>
                        </p>
                        <p className="mt-0.5 text-[10px] sm:text-[11px] font-mono text-white/40">
                          {current.project[lang]}
                        </p>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2 ms-auto sm:ms-0">
                      <button
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <ChevronLeft
                          size={18}
                          className={dir === "rtl" ? "rotate-180" : ""}
                        />
                      </button>

                      <span className="px-1.5 sm:px-2 font-mono text-xs text-white/50">
                        0{currentIndex + 1} / 0{testimonialsData.length}
                      </span>

                      <button
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <ChevronRight
                          size={18}
                          className={dir === "rtl" ? "rotate-180" : ""}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Small thumbnail cards for all clients */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4 max-w-4xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2.5 sm:gap-3 rounded-xl border p-2.5 sm:p-3 text-start transition-all ${
                idx === currentIndex
                  ? "border-white/30 bg-white/10 shadow-md"
                  : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05]"
              }`}
            >
              <div
                className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                style={{
                  background: `${item.accent}20`,
                  color: item.accent,
                }}
              >
                {item.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] sm:text-xs font-bold text-white">
                  {item.name[lang]}
                </p>
                <p className="truncate text-[9px] sm:text-[10px] text-(--color-muted)">
                  {item.company[lang]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
