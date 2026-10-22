import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Share } from "lucide-react";
import { useLang } from "../context/LangContext";

export default function PWAInstallPrompt() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSTip, setShowIOSTip] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone;
    if (isStandalone) return;

    // Check if user dismissed recently
    const dismissed = localStorage.getItem("codexa_pwa_dismissed");
    if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000) {
      return;
    }

    // Detect iOS Safari
    const ua = window.navigator.userAgent;
    const isAppleDevice = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    setIsIOS(isAppleDevice);

    // Listen for beforeinstallprompt (Android / Chrome)
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // If on iOS and not standalone, show prompt after 4s
    if (isAppleDevice && !isStandalone) {
      const timer = setTimeout(() => setShowPrompt(true), 4000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      };
    }

    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSTip(true);
      return;
    }
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("codexa_pwa_dismissed", String(Date.now()));
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-20 sm:bottom-6 start-4 end-4 sm:start-auto sm:end-6 sm:max-w-sm z-40"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0e0e1a]/95 p-4 shadow-2xl backdrop-blur-xl">
            {/* Ambient glow */}
            <div className="absolute -top-10 -end-10 h-28 w-28 rounded-full bg-(--color-cyan)/20 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3.5">
              {/* App Icon */}
              <img
                src="/pwa-icon.svg"
                alt="Codexa App"
                className="h-12 w-12 rounded-xl border border-white/15 shadow-md shrink-0"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white truncate">
                    {isAr ? "تثبيت تطبيق Codexa" : "Install Codexa App"}
                  </h4>
                  <button
                    onClick={handleDismiss}
                    aria-label="Close"
                    className="text-white/40 hover:text-white p-1 -me-1 -mt-1 transition-colors"
                  >
                    <X size={15} />
                  </button>
                </div>
                <p className="mt-1 text-xs text-(--color-muted) leading-relaxed">
                  {isAr
                    ? "أضف الموقع لشاشتك الرئيسية لتصفح أسرع وتجربة تطبيق كاملة."
                    : "Add to your home screen for quick access and full app experience."}
                </p>

                {showIOSTip ? (
                  <div className="mt-3 rounded-lg border border-(--color-cyan)/30 bg-(--color-cyan)/10 p-2.5 text-[11px] text-white/90">
                    <span className="flex items-center gap-1.5 font-bold text-(--color-cyan) mb-1">
                      <Share size={12} />
                      {isAr ? "طريقة التثبيت على آيفون:" : "On your iPhone:"}
                    </span>
                    {isAr
                      ? "اضغط زر المشاركة (Share) أسفل المتصفح، ثم اختر 'إضافة إلى الشاشة الرئيسية' (Add to Home Screen)."
                      : "Tap the Share button below, then select 'Add to Home Screen'."}
                  </div>
                ) : (
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={handleInstallClick}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-(--color-indigo) to-(--color-cyan) px-3.5 py-1.5 text-xs font-bold text-white shadow-md transition-transform active:scale-95"
                    >
                      <Download size={13} />
                      {isAr ? "تثبيت الآن" : "Install Now"}
                    </button>
                    <button
                      onClick={handleDismiss}
                      className="rounded-xl px-3 py-1.5 text-xs text-(--color-muted) hover:text-white transition-colors"
                    >
                      {isAr ? "لاحقاً" : "Later"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
