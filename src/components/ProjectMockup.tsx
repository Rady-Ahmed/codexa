import { motion } from "framer-motion";

interface ProjectMockupProps {
  color: string;
  name: string;
  className?: string;
}

export default function ProjectMockup({ color, name, className = "" }: ProjectMockupProps) {
  const seed = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const barCount = 4 + (seed % 3);
  const bars = Array.from({ length: barCount }, (_, i) => {
    const h = 20 + ((seed * (i + 3)) % 60);
    return h;
  });

  return (
    <motion.svg
      viewBox="0 0 480 300"
      className={className}
      role="img"
      aria-label={`${name} product interface illustration`}
      whileHover="hover"
    >
      <defs>
        <linearGradient id={`mockup-grad-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
        {/* Clip path for the window body so scrolled content doesn't overflow the top bar */}
        <clipPath id={`window-clip-${seed}`}>
          <rect x="0" y="34" width="480" height="266" />
        </clipPath>
      </defs>

      {/* window frame */}
      <rect x="0" y="0" width="480" height="300" rx="14" fill="#13131C" stroke="#1F1F2B" />
      
      {/* Scrollable Content inside the window body */}
      <g clipPath={`url(#window-clip-${seed})`}>
        <motion.g
          variants={{
            hover: { y: -80, transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse" } }
          }}
        >
          {/* sidebar */}
          <rect x="16" y="50" width="90" height="300" rx="8" fill={`url(#mockup-grad-${seed})`} />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect
              key={i}
              x="28"
              y={70 + i * 34}
              width={i === 1 ? 60 : 46}
              height="8"
              rx="4"
              fill={i === 1 ? color : "#2A2A38"}
              opacity={i === 1 ? 0.9 : 0.6}
            />
          ))}

          {/* main content: stat cards */}
          {[0, 1, 2].map((i) => (
            <g key={`card-${i}`}>
              <rect x={120 + i * 118} y="50" width="104" height="54" rx="8" fill="#181822" stroke="#1F1F2B" />
              <rect x={132 + i * 118} y="62" width="40" height="6" rx="3" fill="#2A2A38" />
              <rect x={132 + i * 118} y="78" width="60" height="12" rx="4" fill={color} opacity="0.75" />
            </g>
          ))}

          {/* bar chart */}
          <rect x="120" y="120" width="344" height="164" rx="8" fill="#181822" stroke="#1F1F2B" />
          {bars.map((h, i) => (
            <rect
              key={`bar-${i}`}
              x={140 + i * 44}
              y={264 - h}
              width="26"
              height={h}
              rx="4"
              fill={color}
              opacity={0.35 + (i / bars.length) * 0.5}
            />
          ))}

          {/* extra content that appears when scrolling down */}
          <rect x="120" y="300" width="344" height="100" rx="8" fill="#181822" stroke="#1F1F2B" />
          <rect x="140" y="320" width="100" height="10" rx="5" fill="#2A2A38" />
          <rect x="140" y="340" width="200" height="8" rx="4" fill={color} opacity="0.4" />
          <rect x="140" y="360" width="150" height="8" rx="4" fill={color} opacity="0.4" />
        </motion.g>
      </g>

      {/* top bar (fixed) */}
      <rect x="0" y="0" width="480" height="34" rx="14" fill="#181822" />
      {/* cover bottom rounded corners overflow */}
      <rect x="0" y="17" width="480" height="17" fill="#181822" />
      <circle cx="20" cy="17" r="4" fill="#ff5f56" />
      <circle cx="34" cy="17" r="4" fill="#ffbd2e" />
      <circle cx="48" cy="17" r="4" fill="#27c93f" />
      <rect x="90" y="11" width="200" height="12" rx="6" fill="#1F1F2B" />
      
      {/* Restore bottom border clipping for aesthetics */}
      <path d="M0 286 v 14 q 0 14 14 14 h 452 q 14 0 14 -14 v -14 h -480" fill="#13131C" />
    </motion.svg>
  );
}
