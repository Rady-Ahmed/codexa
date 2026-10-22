import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * SmartCountUp — handles all formats:
 *  "17+"   → counts 0→17, appends "+"
 *  "50+"   → counts 0→50, appends "+"
 *  "99.9%" → counts 0→99.9 with one decimal, appends "%"
 *  "10x"   → counts 0→10, appends "x"
 *  "3x"    → counts 0→3, appends "x"
 *  "24/7"  → static (no counting)
 *  "<1s"   → static
 *  "A+"    → static
 *  "100"   → counts 0→100
 */
export default function SmartCountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState<string>("0");

  // Parse: extract numeric part, prefix, suffix
  // Supports: optional prefix like "<", numeric with optional decimal, suffix like "%", "+", "x", "s"
  const prefixMatch = value.match(/^([^0-9]*)/);
  const prefix = prefixMatch ? prefixMatch[1] : "";
  const rest = value.slice(prefix.length);
  const numMatch = rest.match(/^([0-9]+(?:\.[0-9]+)?)(.*)/);

  const hasNumber = !!numMatch;
  const numeric = hasNumber ? parseFloat(numMatch![1]) : NaN;
  const isDecimal = hasNumber && numMatch![1].includes(".");
  const suffix = hasNumber ? numMatch![2] : "";

  useEffect(() => {
    if (!inView) return;

    // If no parseable number → show as-is immediately
    if (!hasNumber || isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setDisplay(isDecimal ? v.toFixed(1) : String(Math.round(v)));
      },
    });
    return () => controls.stop();
  }, [inView, numeric, value, hasNumber, isDecimal]);

  if (!hasNumber || isNaN(numeric)) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
