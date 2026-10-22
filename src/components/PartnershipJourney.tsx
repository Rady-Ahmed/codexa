import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";

export default function PartnershipJourney() {
  const { t, dir } = useLang();

  return (
    <section className="relative mx-auto w-full max-w-5xl px-5 py-24">
      <div className="absolute inset-0 -z-10 bg-dots opacity-20" style={{ maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }} />
      
      <div className="mb-20 text-center">
        <Reveal>
          <span className="mono-badge inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-white/5 px-3 py-1 text-xs text-(--color-cyan) backdrop-blur-sm">
            {t.partnershipJourney.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-(--color-ink) sm:text-5xl">
            {t.partnershipJourney.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-(--color-muted) sm:text-lg">
            {t.partnershipJourney.subtitle}
          </p>
        </Reveal>
      </div>

      <div className="relative">
        {/* The central line */}
        <div className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-(--color-indigo) to-transparent ${dir === 'rtl' ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`} />

        <div className="flex flex-col gap-12 sm:gap-20">
          {t.partnershipJourney.steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`relative flex w-full items-center justify-between ${isEven ? (dir === 'rtl' ? 'flex-row' : 'flex-row-reverse') : (dir === 'rtl' ? 'flex-row-reverse' : 'flex-row')}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden w-5/12 sm:block" />

                  {/* Center dot */}
                  <div className={`absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-4 border-(--color-obsidian) bg-(--color-cyan) ${dir === 'rtl' ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}>
                    <span className="text-xs font-bold text-(--color-obsidian)">{i + 1}</span>
                  </div>

                  {/* Content card */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="w-full sm:w-5/12 sharp-border bg-white/[0.02] p-6 backdrop-blur-sm"
                  >
                    <div className="mb-2 text-xl font-bold text-(--color-ink) group-hover:text-(--color-cyan) transition-colors">
                      {step.title}
                    </div>
                    <p className="text-sm leading-relaxed text-(--color-muted)">
                      {step.desc}
                    </p>
                  </motion.div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
