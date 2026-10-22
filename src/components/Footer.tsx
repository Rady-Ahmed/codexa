import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { useLang } from "../context/LangContext";

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.42-3.88-1.42-.53-1.32-1.28-1.68-1.28-1.68-1.05-.7.08-.69.08-.69 1.16.08 1.77 1.18 1.77 1.18 1.03 1.75 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Footer() {
  const { t, path, lang } = useLang();
  
  const megaText = lang === 'ar' ? 'نبني المستقبل معاً' : "LET'S BUILD THE FUTURE";
  const subscribeText = lang === 'ar' ? 'اشترك في نشرتنا التقنية' : 'Subscribe to our newsletter';
  const subscribeBtn = lang === 'ar' ? 'انضمام' : 'Join';

  return (
    <footer className="relative border-t border-(--color-border) bg-[#09090b] overflow-hidden">
      {/* ── Background Glow ── */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
           style={{ background: "radial-gradient(circle, #6C4CF1 0%, transparent 60%)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full opacity-10 blur-[100px]"
           style={{ background: "radial-gradient(circle, #22D3EE 0%, transparent 60%)" }} />

      <div className="mx-auto max-w-7xl px-5 pt-24 pb-12">
        {/* ── Mega CTA Section ── */}
        <div className="flex flex-col items-center justify-center text-center mb-28">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tight text-white/5 uppercase leading-none select-none relative group cursor-default">
            {megaText}
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite]"
                 style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />
          </h2>
          <div className="-mt-6 sm:-mt-10 md:-mt-12 relative z-10">
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-white">{subscribeText}</h3>
              <a
                href={`https://wa.me/201101970882?text=${encodeURIComponent(lang === 'ar' ? 'أريد الاشتراك في النشرة التقنية لـ Codexa' : 'I want to subscribe to the Codexa tech newsletter')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: "linear-gradient(135deg, #6C4CF1 0%, #22D3EE 100%)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {subscribeBtn}
              </a>
            </div>
          </div>
        </div>

        {/* ── Links Grid ── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand column */}
          <div>
            <Logo className="text-2xl" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-(--color-muted)">
              {t.footer.tagline}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://github.com/Rady-Ahmed" target="_blank" rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-(--color-muted) transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                aria-label="GitHub"><GithubIcon /></a>
              <a href="https://linkedin.com/in/rady-ahmed" target="_blank" rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-(--color-muted) transition-all hover:-translate-y-1 hover:bg-[#0a66c2]/20 hover:border-[#0a66c2]/50 hover:text-[#0a66c2]"
                aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="mailto:radyahmed117@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-(--color-muted) transition-all hover:-translate-y-1 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400"
                aria-label="Email"><Mail size={18} /></a>
              <a href="https://wa.me/201101970882" target="_blank" rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-(--color-muted) transition-all hover:-translate-y-1 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 hover:text-[#25D366]"
                aria-label="WhatsApp"><Phone size={18} /></a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide">{t.footer.product}</h4>
            <ul className="mt-6 space-y-4 text-sm text-(--color-muted)">
              {t.services.categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={path(`/services/${cat.id}`)} className="hover:text-(--color-cyan) transition-colors flex items-center gap-2 group">
                    <span className="h-px w-3 bg-(--color-border) transition-all group-hover:w-5 group-hover:bg-(--color-cyan)" />
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide">{t.footer.company}</h4>
            <ul className="mt-6 space-y-4 text-sm text-(--color-muted)">
              {[
                { to: "/about", label: t.nav.about },
                { to: "/portfolio", label: t.nav.portfolio },
                { to: "/pricing", label: t.pricing.eyebrow },
                { to: "/blog", label: t.nav.blog },
                { to: "/contact", label: t.nav.contact }
              ].map((link) => (
                <li key={link.to}>
                  <Link to={path(link.to)} className="hover:text-(--color-cyan) transition-colors flex items-center gap-2 group">
                    <span className="h-px w-3 bg-(--color-border) transition-all group-hover:w-5 group-hover:bg-(--color-cyan)" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide">{t.footer.links}</h4>
            <ul className="mt-6 space-y-4 text-sm text-(--color-muted)">
              {[
                { to: "/privacy", label: t.legal.privacyTitle },
                { to: "/terms", label: t.legal.termsTitle }
              ].map((link) => (
                <li key={link.to}>
                  <Link to={path(link.to)} className="hover:text-(--color-cyan) transition-colors flex items-center gap-2 group">
                    <span className="h-px w-3 bg-(--color-border) transition-all group-hover:w-5 group-hover:bg-(--color-cyan)" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-(--color-muted-2) sm:flex-row">
          <span className="mono-badge bg-white/5 border-white/10 px-4 py-2 rounded-full">© {new Date().getFullYear()} Codexa. {t.footer.rights}</span>
          <span className="flex items-center gap-2">Built with <span className="animate-pulse text-red-500">❤️</span> by Codexa Engineering</span>
        </div>
      </div>
    </footer>
  );
}
