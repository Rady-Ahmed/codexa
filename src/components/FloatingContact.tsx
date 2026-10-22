import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Calendar } from "lucide-react";
import { useLang } from "../context/LangContext";

// Facebook SVG
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12.07h2.54V9.845c0-2.507 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.95C20.343 21.203 24 17.065 24 12.073z" />
    </svg>
  );
}

// WhatsApp SVG
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Telegram SVG
function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const socials = [
  {
    key: "meeting",
    href: "https://wa.me/201101970882?text=Hi%2C%20I'd%20like%20to%20book%20a%20consultation%20with%20Codexa",
    icon: Calendar,
    label: "Book a Meeting",
    color: "#6C4CF1",
    bg: "bg-[#6C4CF1]",
  },
  {
    key: "whatsapp",
    href: "https://wa.me/201101970882",
    icon: WhatsAppIcon,
    label: "WhatsApp",
    color: "#25D366",
    bg: "bg-[#25D366]",
  },
  {
    key: "telegram",
    href: "https://t.me/codexa",
    icon: TelegramIcon,
    label: "Telegram",
    color: "#0088cc",
    bg: "bg-[#0088cc]",
  },
  {
    key: "facebook",
    href: "https://facebook.com/codexa",
    icon: FacebookIcon,
    label: "Facebook",
    color: "#1877F2",
    bg: "bg-[#1877F2]",
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3">
      {/* Social buttons */}
      <AnimatePresence>
        {open &&
          socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.4, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.4, y: 20 }}
                transition={{
                  delay: i * 0.07,
                  type: "spring",
                  stiffness: 380,
                  damping: 22,
                }}
                whileHover={{ scale: 1.12 }}
                className="group/btn flex h-12 w-auto min-w-[3rem] items-center gap-3 overflow-hidden rounded-full border border-(--color-border) bg-white/5 px-0 hover:px-4 text-(--color-muted) shadow-lg backdrop-blur-md transition-all hover:border-(--color-cyan)/50 hover:bg-(--color-indigo)/20 hover:text-(--color-cyan) hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <Icon size={20} className={s.icon === Calendar ? "" : "[&>path]:fill-current"} />
                </div>
                <span className="hidden whitespace-nowrap text-sm font-medium opacity-0 transition-opacity group-hover/btn:block group-hover/btn:opacity-100 pe-2 rtl:ps-2 rtl:pe-0">
                  {lang === 'ar' && s.key === 'meeting' ? 'احجز استشارة' : s.label}
                </span>
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* Label tooltip */}
      <AnimatePresence>
        {!open && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="pointer-events-none absolute -top-8 end-0 whitespace-nowrap rounded-lg bg-white/10 backdrop-blur px-3 py-1 text-xs text-(--color-ink) border border-(--color-border)"
          >
            {lang === "ar" ? "تواصل معنا" : "Contact us"}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Toggle contact menu"
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl shadow-black/40 transition-all"
        style={{
          background: open
            ? "linear-gradient(135deg, #ef4444, #dc2626)"
            : "linear-gradient(135deg, #6C4CF1, #22D3EE)",
        }}
      >
        {/* Pulse ring */}
        {!open && (
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ background: "linear-gradient(135deg, #6C4CF1, #22D3EE)" }}
          />
        )}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 text-white"
        >
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.span>
      </motion.button>
    </div>
  );
}
