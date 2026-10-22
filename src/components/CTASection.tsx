import { Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "../context/LangContext";

export default function CTASection() {
  const { t, dir, path } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-(--color-border) bg-gradient-to-b from-(--color-indigo)/10 to-transparent px-5 py-12 text-center sm:px-16 sm:py-16">
        <div
          aria-hidden
          className="glow-orb pointer-events-none absolute start-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #6C4CF1 0%, transparent 70%)" }}
        />
        <h2 className="relative text-2xl font-semibold tracking-tight text-(--color-ink) sm:text-3xl lg:text-4xl">
          {t.cta.title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-base text-(--color-muted)">
          {t.cta.subtitle}
        </p>
        <div className="relative mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            to={path("/contact")}
            className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-6 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
          >
            {t.cta.primary}
            <Arrow size={16} className="transition-transform rtl:group-hover:-translate-x-1 group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/201101970882"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-(--color-border) px-6 py-4 text-sm font-medium text-(--color-ink) transition-colors hover:border-(--color-emerald)/50 hover:bg-white/5 w-full sm:w-auto"
          >
            <MessageCircle size={16} className="text-(--color-emerald)" />
            {t.cta.secondary}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
