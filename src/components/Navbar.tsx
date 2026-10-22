import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Languages, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { useLang } from "../context/LangContext";

export default function Navbar() {
  const { t, lang, toggleLang, path } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/pricing", label: t.pricing.eyebrow },
    { to: "/about", label: t.nav.about },
    { to: "/blog", label: t.nav.blog },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-lg shadow-black/20" : ""
          }`}
        >
          <Link to={path("/")} onClick={() => setOpen(false)}>
            <Logo className="text-lg" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => 
              l.to === "/services" ? (
                <div key={l.to} className="relative group">
                  <NavLink
                    to={path(l.to)}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm transition-colors ${
                        isActive
                          ? "text-(--color-ink) bg-white/5"
                          : "text-(--color-muted) hover:text-(--color-ink)"
                      }`
                    }
                  >
                    {l.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </NavLink>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-[320px] glass rounded-xl p-2 shadow-2xl flex flex-col gap-1 border border-(--color-border)">
                      {t.services.categories.map((cat) => (
                        <Link 
                          key={cat.id} 
                          to={path(`/services/${cat.id}`)} 
                          className="px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                        >
                          <div className="text-sm font-semibold text-(--color-ink) group-hover/item:text-(--color-cyan) transition-colors">
                            {cat.title}
                          </div>
                          <div className="text-xs text-(--color-muted) mt-1 line-clamp-1">
                            {cat.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={l.to}
                  to={path(l.to)}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-3.5 py-2 text-sm transition-colors ${
                      isActive
                        ? "text-(--color-ink) bg-white/5"
                        : "text-(--color-muted) hover:text-(--color-ink)"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm text-(--color-muted) hover:text-(--color-ink) transition-colors"
              aria-label="Toggle language"
            >
              <Languages size={16} />
              <span className="mono-badge text-xs">{lang === "ar" ? "EN" : "AR"}</span>
            </button>
            <Link
              to={path("/contact")}
              className="rounded-lg bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.nav.cta}
            </Link>
          </div>

          <button
            className="md:hidden text-(--color-ink)"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3">
                {links.map((l) => 
                  l.to === "/services" ? (
                    <div key={l.to} className="flex flex-col">
                      <NavLink
                        to={path(l.to)}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2.5 text-sm text-(--color-ink) flex items-center justify-between"
                      >
                        {l.label}
                      </NavLink>
                      <div className="flex flex-col border-s border-(--color-border) ms-4 ps-4 my-1 gap-3">
                        {t.services.categories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={path(`/services/${cat.id}`)}
                            onClick={() => setOpen(false)}
                            className="text-xs text-(--color-muted) hover:text-(--color-ink) transition-colors"
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={l.to}
                      to={path(l.to)}
                      end={l.to === "/"}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm text-(--color-ink)"
                    >
                      {l.label}
                    </NavLink>
                  )
                )}
                <div className="mt-1 flex items-center justify-between px-3">
                  <button
                    onClick={toggleLang}
                    className="flex items-center gap-1.5 py-2 text-sm text-(--color-muted)"
                  >
                    <Languages size={16} />
                    <span className="mono-badge text-xs">{lang === "ar" ? "EN" : "AR"}</span>
                  </button>
                  <Link
                    to={path("/contact")}
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-4 py-2 text-sm font-medium text-white"
                  >
                    {t.nav.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
