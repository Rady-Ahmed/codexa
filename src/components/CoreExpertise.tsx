import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import { GraduationCap, Building2 } from "lucide-react";

export default function CoreExpertise() {
  const { t } = useLang();

  const expertise = [
    {
      icon: GraduationCap,
      title: t.services.core1Title,
      desc: t.services.core1Desc,
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-cyan-400"
    },
    {
      icon: Building2,
      title: t.services.core2Title,
      desc: t.services.core2Desc,
      color: "from-indigo-500/20 to-purple-500/20",
      textColor: "text-indigo-400"
    }
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-(--color-indigo)/10 to-(--color-cyan)/10 blur-[100px]" />

      <div className="mb-16 text-center">
        <Reveal>
          <span className="mono-badge inline-flex items-center rounded-full border border-(--color-border) bg-white/5 px-3 py-1 text-xs text-(--color-cyan)">
            {t.services.coreSpecializations}
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-(--color-ink) sm:text-5xl">
            {t.services.coreMoreThan}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-(--color-muted) sm:text-lg">
            {t.services.coreSub}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {expertise.map((item, index) => (
          <Reveal key={index} delay={index * 0.2}>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-(--color-border) bg-white/[0.015] p-8 hover:bg-white/[0.03]"
            >
              <div>
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-4 ${item.textColor}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-(--color-ink)">{item.title}</h3>
                <p className="text-base leading-relaxed text-(--color-muted)">
                  {item.desc}
                </p>
              </div>

              {/* Decorative elements representing code/UI */}
              <div className="mt-10 h-32 w-full overflow-hidden rounded-xl border border-(--color-border) bg-(--color-surface-2) p-4 opacity-50 transition-opacity group-hover:opacity-100">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400/50" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
                  <div className="h-2 w-2 rounded-full bg-green-400/50" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-3/4 rounded bg-white/10" />
                  <div className="h-2 w-1/2 rounded bg-white/10" />
                  <div className="h-2 w-5/6 rounded bg-white/10" />
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
