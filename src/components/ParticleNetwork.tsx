import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;        // color variance
  pulsePhase: number; // for size pulsing
  layer: number;      // 0=slow background, 1=medium, 2=fast foreground
}

interface Hub {
  x: number;
  y: number;
  radius: number;
  hue: number;
  glowPhase: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { dir } = useLang();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf: number;
    let particles: Particle[] = [];
    let hubs: Hub[] = [];           // larger attractor nodes
    let tick = 0;
    let mouse = { x: -2000, y: -2000 };

    /* ── Setup ── */
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect() ?? {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      init(rect.width, rect.height);
    };

    const init = (w: number, h: number) => {
      particles = [];
      hubs = [];

      // 3 "hub" nodes – large glowing anchor points
      for (let i = 0; i < 3; i++) {
        hubs.push({
          x: w * (0.2 + i * 0.3),
          y: h * (0.3 + (i % 2) * 0.35),
          radius: 4 + Math.random() * 3,
          hue: [265, 190, 155][i],   // indigo, cyan, emerald
          glowPhase: Math.random() * Math.PI * 2,
        });
      }

      // Dense particle field – 3 layers
      const count = Math.min(Math.floor((w * h) / 6500), 160);
      for (let i = 0; i < count; i++) {
        const layer = i % 3;
        const speed = [0.15, 0.28, 0.45][layer];
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: [0.6, 1.0, 1.5][layer] + Math.random() * 0.5,
          hue: 240 + Math.random() * 60,   // indigo→cyan range
          pulsePhase: Math.random() * Math.PI * 2,
          layer,
        });
      }
    };

    /* ── Draw loop ── */
    const draw = () => {
      tick++;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      /* ─ Update & Draw Hubs ─ */
      hubs.forEach((hub) => {
        hub.glowPhase += 0.012;
        const glow = 18 + Math.sin(hub.glowPhase) * 8;

        // Outer glow ring
        const grad = ctx.createRadialGradient(hub.x, hub.y, 0, hub.x, hub.y, glow * 3);
        grad.addColorStop(0, `hsla(${hub.hue},90%,68%,0.22)`);
        grad.addColorStop(1, `hsla(${hub.hue},90%,68%,0)`);
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, glow * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.radius + Math.sin(hub.glowPhase) * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hub.hue},90%,72%,0.9)`;
        ctx.fill();
      });

      /* ─ Update & Draw Particles ─ */
      particles.forEach((p) => {
        p.pulsePhase += 0.025;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse repel
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 180) {
          const f = (180 - md) / 180;
          p.x -= (mdx / md) * f * 2.5;
          p.y -= (mdy / md) * f * 2.5;
        }

        // Soft attraction toward nearest hub
        let closestHub = hubs[0];
        let closestDist = Infinity;
        hubs.forEach((hub) => {
          const d = Math.hypot(hub.x - p.x, hub.y - p.y);
          if (d < closestDist) { closestDist = d; closestHub = hub; }
        });
        if (closestDist < 280) {
          const strength = 0.0006 * (1 - closestDist / 280);
          p.vx += (closestHub.x - p.x) * strength;
          p.vy += (closestHub.y - p.y) * strength;
          // Clamp speed
          const spd = Math.hypot(p.vx, p.vy);
          const maxSpd = [0.25, 0.4, 0.6][p.layer];
          if (spd > maxSpd) { p.vx = (p.vx / spd) * maxSpd; p.vy = (p.vy / spd) * maxSpd; }
        }

        // Pulsing radius
        const r = p.radius + Math.sin(p.pulsePhase) * 0.35;

        // Draw particle with layered glow
        const alpha = [0.45, 0.6, 0.8][p.layer];
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},80%,65%,${alpha * 0.18})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},80%,70%,${alpha})`;
        ctx.fill();
      });

      /* ─ Connections between particles ─ */
      const connectionDist = [90, 130, 160]; // per layer pair

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const maxDist = connectionDist[Math.max(a.layer, b.layer)];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) continue;

          const t = 1 - dist / maxDist;
          // Blend hues for the line color
          const blendHue = (a.hue + b.hue) / 2;
          const opacity = t * t * 0.35;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `hsla(${blendHue},75%,65%,${opacity})`;
          ctx.lineWidth = t * 1.2;
          ctx.stroke();
        }

        /* ─ Connections from particle to hubs ─ */
        hubs.forEach((hub) => {
          const dist = Math.hypot(a.x - hub.x, a.y - hub.y);
          if (dist < 200) {
            const t = 1 - dist / 200;
            const grad = ctx.createLinearGradient(a.x, a.y, hub.x, hub.y);
            grad.addColorStop(0, `hsla(${a.hue},80%,65%,${t * 0.3})`);
            grad.addColorStop(1, `hsla(${hub.hue},90%,68%,${t * 0.5})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(hub.x, hub.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = t * 1.5;
            ctx.stroke();
          }
        });
      }

      /* ─ Inter-hub connections (always visible backbone) ─ */
      for (let i = 0; i < hubs.length; i++) {
        for (let j = i + 1; j < hubs.length; j++) {
          const a = hubs[i];
          const b = hubs[j];
          const gAlpha = 0.18 + 0.07 * Math.sin(tick * 0.015 + i);
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `hsla(${a.hue},85%,65%,${gAlpha})`);
          grad.addColorStop(1, `hsla(${b.hue},85%,65%,${gAlpha})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.setLineDash([6, 10]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Travelling light dot along the backbone
          const progress = ((tick * 0.008 + i * 0.5) % 1);
          const dotX = a.x + (b.x - a.x) * progress;
          const dotY = a.y + (b.y - a.y) * progress;
          ctx.beginPath();
          ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${(a.hue + b.hue) / 2},90%,78%,0.9)`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse = { x: -2000, y: -2000 }; };

    let isDestroyed = false;
    
    // Delay initialization to improve LCP (Largest Contentful Paint)
    const initTimer = setTimeout(() => {
      if (isDestroyed) return;
      window.addEventListener("resize", resize);
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseleave", onMouseLeave);
      resize();
      draw();
    }, 800);

    return () => {
      isDestroyed = true;
      clearTimeout(initTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [dir]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 z-0 h-full w-full"
      style={{ opacity: 0.75, mixBlendMode: "screen" }}
    />
  );
}
