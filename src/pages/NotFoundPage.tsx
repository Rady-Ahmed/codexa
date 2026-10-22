import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

export default function NotFoundPage() {
  const { t, dir, path } = useLang();
  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <>
      <Seo title={`404 — Codexa`} description={t.notFound.subtitle} />
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-32">
        <div
          aria-hidden
          className="glow-orb pointer-events-none absolute start-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[110px]"
          style={{ background: "radial-gradient(circle, #6C4CF1 0%, transparent 70%)" }}
        />
        <Reveal className="relative text-center">
          <div className="mono-badge gradient-text text-7xl font-bold sm:text-9xl">404</div>
          <h1 className="mt-4 text-2xl font-semibold text-(--color-ink) sm:text-3xl">
            {t.notFound.title}
          </h1>
          <p className="mt-3 text-(--color-muted)">{t.notFound.subtitle}</p>
          <Link
            to={path("/")}
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            <Arrow size={16} className="transition-transform rtl:group-hover:translate-x-1 group-hover:-translate-x-1" />
            {t.notFound.cta}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
