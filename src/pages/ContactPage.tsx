import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { useLang } from "../context/LangContext";

type Status = "idle" | "sending" | "success" | "error";

const projectTypes: Record<"ar" | "en", string[]> = {
  ar: ["موقع تعريفي", "متجر إلكتروني", "منصة SaaS", "نظام إداري / HR", "منصة تعليمية", "تانى"],
  en: ["Brochure site", "E-commerce", "SaaS platform", "Admin / HR system", "Education platform", "Other"],
};

export default function ContactPage() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Honeypot — bots tend to fill every field, humans never see this one
    if (form.get("company_website")) {
      setStatus("success");
      e.currentTarget.reset();
      return;
    }

    setStatus("sending");
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      projectType: form.get("projectType"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Seo title={t.seo.contact.title} description={t.seo.contact.desc} />
      <PageHeader
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        subtitle={t.contactPage.subtitle}
      />

      <section className="mx-auto max-w-2xl px-5 pb-24">
        <Reveal>
          <a
            href="https://wa.me/201101970882"
            target="_blank"
            rel="noreferrer"
            className="mb-8 flex items-center justify-center gap-2 rounded-xl border border-(--color-emerald)/30 bg-(--color-emerald)/5 px-5 py-3.5 text-sm font-medium text-(--color-emerald) transition-colors hover:bg-(--color-emerald)/10"
          >
            <MessageCircle size={17} />
            {t.cta.secondary}
          </a>

          <form onSubmit={handleSubmit} className="glass relative rounded-2xl p-6 sm:p-8">
            {/* Honeypot — hidden from real users, bots tend to fill every field */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-(--color-muted)">
                  {t.contactPage.name}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-(--color-border) bg-white/[0.02] px-4 py-3 text-sm text-(--color-ink) outline-none transition-colors focus:border-(--color-indigo-soft)"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-(--color-muted)">
                  {t.contactPage.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-(--color-border) bg-white/[0.02] px-4 py-3 text-sm text-(--color-ink) outline-none transition-colors focus:border-(--color-indigo-soft)"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="projectType" className="mb-2 block text-sm text-(--color-muted)">
                {t.contactPage.projectType}
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full rounded-lg border border-(--color-border) bg-white/[0.02] px-4 py-3 text-sm text-(--color-ink) outline-none transition-colors focus:border-(--color-indigo-soft)"
                defaultValue=""
              >
                <option value="" disabled>
                  —
                </option>
                {projectTypes[lang].map((opt) => (
                  <option key={opt} value={opt} className="bg-(--color-surface)">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm text-(--color-muted)">
                {t.contactPage.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-(--color-border) bg-white/[0.02] px-4 py-3 text-sm text-(--color-ink) outline-none transition-colors focus:border-(--color-indigo-soft)"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-6 py-3.5 text-sm font-medium text-white transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? (
                t.contactPage.sending
              ) : (
                <>
                  <Send size={15} />
                  {t.contactPage.send}
                </>
              )}
            </motion.button>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-(--color-emerald)/10 px-4 py-3 text-sm text-(--color-emerald)">
                <CheckCircle2 size={16} />
                {t.contactPage.success}
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
                <div className="flex items-center gap-2 font-medium">
                  <AlertCircle size={16} />
                  {t.contactPage.error}
                </div>
                <p className="mt-2 text-xs text-(--color-muted)">
                  <a
                    href="https://wa.me/201101970882"
                    target="_blank"
                    rel="noreferrer"
                    className="text-(--color-cyan) underline hover:text-white"
                  >
                    {lang === "ar" ? "أو اضغط هنا للمراسلة المباشرة عبر واتساب (+201101970882)" : "Or click here to chat directly via WhatsApp (+201101970882)"}
                  </a>
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </section>
    </>
  );
}
