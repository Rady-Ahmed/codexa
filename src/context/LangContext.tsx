import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, type Lang } from "../data/translations";

interface LangContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: typeof translations["ar"];
  toggleLang: () => void;
  /** Builds a localized href for the current language, e.g. path("/services") -> "/en/services" when lang is "en". */
  path: (p: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

function stripLangPrefix(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

function withLang(p: string, lang: Lang): string {
  if (lang === "ar") return p;
  return p === "/" ? "/en" : `/en${p}`;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Lang = location.pathname.startsWith("/en") ? "en" : "ar";
  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const path = (p: string) => withLang(p, lang);

  const toggleLang = () => {
    const target: Lang = lang === "ar" ? "en" : "ar";
    const basePath = stripLangPrefix(location.pathname);
    navigate(withLang(basePath, target) + location.search);
  };

  return (
    <LangContext.Provider value={{ lang, dir, t: translations[lang], toggleLang, path }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
