import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div dir="ltr" className={`flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      {/* Custom stylized </ > Mark */}
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0 drop-shadow-sm"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M9 7L3 12L9 17"
          stroke="#22D3EE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0, x: 5 },
            visible: {
              pathLength: 1,
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        />
        <motion.path
          d="M14 4L10 20"
          stroke="url(#slashGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            },
          }}
        />
        <motion.path
          d="M15 7L21 12L15 17"
          stroke="#6C4CF1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0, x: -5 },
            visible: {
              pathLength: 1,
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
            },
          }}
        />
        <defs>
          <linearGradient id="slashGrad" x1="14" y1="4" x2="10" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C4CF1" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Typography with pulsing terminal cursor */}
      <span className="text-xl text-(--color-ink) flex items-baseline">
        Cod<span className="gradient-text">exa</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="text-(--color-cyan) ms-0.5 font-black"
        >
          _
        </motion.span>
      </span>
    </div>
  );
}
