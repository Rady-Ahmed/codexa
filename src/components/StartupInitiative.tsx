import { motion } from "framer-motion";
import { Lightbulb, Compass, Code, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "../context/LangContext";

export default function StartupInitiative() {
  const { lang, dir } = useLang();

  const isAr = lang === "ar";
  
  const content = {
    badge: isAr ? "مبادرة كوديكسا" : "Codexa Initiative",
    title: isAr ? "نحن شريكك التقني، وليس مجرد منفذ" : "Your Technical Partner, Not Just a Vendor",
    desc: isAr 
      ? "لديك فكرة طموحة لشركة ناشئة؟ نحن نضع خبراتنا الهندسية بين يديك. بدءاً من التخطيط التقني وحتى إطلاق النسخة الأولية (MVP) والتوسع، سنكون معك في كل خطوة لضمان نجاح منتجك."
      : "Have an ambitious startup idea? We put our engineering expertise in your hands. From technical planning to MVP launch and scaling, we'll be with you every step to ensure your product's success.",
    cta: isAr ? "ابدأ التخطيط معنا مجاناً" : "Start Planning With Us",
    features: [
      {
        icon: Compass,
        title: isAr ? "التخطيط الهندسي" : "Technical Planning",
        desc: isAr ? "دراسة الجدوى التقنية، اختيار أفضل لغات البرمجة والتقنيات التي تناسب فكرتك." : "Technical feasibility, choosing the best stack for your idea."
      },
      {
        icon: Rocket,
        title: isAr ? "بناء الـ MVP" : "MVP Development",
        desc: isAr ? "إطلاق نسخة أولية قوية وسريعة للسوق لاختبار الفكرة وجذب المستثمرين." : "Launch a robust and fast MVP to test the market and attract investors."
      },
      {
        icon: Code,
        title: isAr ? "استشارات وبناء فرق" : "Consultancy & Scaling",
        desc: isAr ? "نساعدك في توسيع النظام، حماية البيانات، أو حتى توظيف فريقك التقني الخاص لاحقاً." : "Help scaling the system, securing data, or hiring your own tech team later."
      }
    ]
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#09090b] border-t border-(--color-border)">
      {/* Background Glows */}
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-10 blur-[100px]"
           style={{ background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)" }} />
      <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] translate-x-1/2 rounded-full opacity-10 blur-[80px]"
           style={{ background: "radial-gradient(circle, #6C4CF1 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ── Left Content (Text & CTA) ── */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-(--color-cyan)/30 bg-(--color-cyan)/10 px-4 py-1.5 text-sm font-bold text-(--color-cyan) mb-6">
                <Lightbulb size={16} />
                <span>{content.badge}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight mb-6">
                {content.title}
              </h2>
              
              <p className="text-lg text-(--color-muted) leading-relaxed mb-10 max-w-xl">
                {content.desc}
              </p>
              
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                style={{ background: "linear-gradient(135deg, #22D3EE 0%, #6C4CF1 100%)" }}
              >
                {content.cta}
              </a>
            </Reveal>
          </div>

          {/* ── Right Content (Feature Cards) ── */}
          <div className="relative">
            {/* Connecting dashed line behind cards */}
            <div className={`absolute top-10 bottom-10 w-px border-l-2 border-dashed border-white/10 ${dir === 'rtl' ? 'right-12' : 'left-12'} hidden md:block -z-10`} />

            <div className="space-y-6">
              {content.features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Reveal key={idx} delay={idx * 0.15}>
                    <motion.div 
                      whileHover={{ x: dir === 'rtl' ? -8 : 8 }}
                      className="group flex gap-6 items-start rounded-2xl border border-white/5 bg-[#13131c]/50 p-6 backdrop-blur-md transition-colors hover:border-white/10 hover:bg-[#13131c]/80 shadow-lg"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-(--color-cyan)/20 to-(--color-indigo)/10 text-(--color-cyan) shadow-inner">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-(--color-muted) text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
