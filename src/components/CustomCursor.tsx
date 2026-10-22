import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !(target instanceof Element)) return;

      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer");

      setIsHovering(Boolean(isInteractive));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* High-precision inner cyan point */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-(--color-cyan) shadow-[0_0_8px_var(--color-cyan)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.08 }}
      />

      {/* Fluid spring outer magnetic aura */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border backdrop-blur-[1px]"
        animate={{
          height: isHovering ? 52 : 30,
          width: isHovering ? 52 : 30,
          x: mousePosition.x - (isHovering ? 26 : 15),
          y: mousePosition.y - (isHovering ? 26 : 15),
          backgroundColor: isHovering ? "rgba(34, 211, 238, 0.15)" : "rgba(108, 76, 241, 0.08)",
          borderColor: isHovering ? "var(--color-cyan)" : "rgba(139, 111, 245, 0.45)",
          boxShadow: isHovering ? "0 0 20px rgba(34, 211, 238, 0.3)" : "none",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.4 }}
      />
    </>
  );
}

