"use client";

import { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  Brain,
  Layers,
  Box,
  GitBranch,
  Zap,
  Palette,
  type LucideIcon,
} from "lucide-react";

type Tone = "cyan" | "violet" | "emerald" | "orange" | "pink" | "yellow";

const TONE: Record<Tone, { border: string; glow: string; color: string }> = {
  cyan:    { border: "rgba(34,211,238,0.40)",  glow: "rgba(34,211,238,0.35)",  color: "#22d3ee" },
  violet:  { border: "rgba(139,92,246,0.40)",  glow: "rgba(139,92,246,0.35)",  color: "#a78bfa" },
  emerald: { border: "rgba(52,211,153,0.40)",  glow: "rgba(52,211,153,0.30)",  color: "#34d399" },
  orange:  { border: "rgba(251,146,60,0.40)",  glow: "rgba(251,146,60,0.30)",  color: "#fb923c" },
  pink:    { border: "rgba(244,114,182,0.40)", glow: "rgba(244,114,182,0.30)", color: "#f472b6" },
  yellow:  { border: "rgba(250,204,21,0.40)",  glow: "rgba(250,204,21,0.30)",  color: "#facc15" },
};

type Tech = { label: string; tone: Tone; Icon: LucideIcon; x: number; y: number; z: number };

const TECHS: Tech[] = [
  { label: "Next.js",       tone: "cyan",    Icon: Layers,    x: -32, y:  -8, z: -100 },
  { label: "React",         tone: "cyan",    Icon: Code2,     x:  24, y:  18, z:  150 },
  { label: "TypeScript",    tone: "cyan",    Icon: Code2,     x: -16, y:  26, z:   50 },
  { label: "Tailwind CSS",  tone: "cyan",    Icon: Palette,   x: -38, y:  10, z:  220 },
  { label: "Framer Motion", tone: "violet",  Icon: Zap,       x:  30, y: -22, z:  -50 },
  { label: "Python",        tone: "violet",  Icon: Terminal,  x: -28, y: -30, z:  100 },
  { label: "Django",        tone: "violet",  Icon: Server,    x:  18, y:   2, z:  280 },
  { label: "Node.js",       tone: "emerald", Icon: Server,    x:  36, y:  30, z:   80 },
  { label: "PostgreSQL",    tone: "emerald", Icon: Database,  x:   6, y:  30, z: -180 },
  { label: "Docker",        tone: "orange",  Icon: Box,       x:   8, y: -32, z:  180 },
  { label: "AWS",           tone: "orange",  Icon: Cloud,     x:  38, y: -10, z: -100 },
  { label: "Git",           tone: "pink",    Icon: GitBranch, x: -34, y: -18, z:  120 },
  { label: "Claude AI",     tone: "yellow",  Icon: Brain,     x:   0, y: -10, z:    0 },
  { label: "Linux",         tone: "pink",    Icon: Terminal,  x:  22, y:  -2, z:  -60 },
];

type Token = { t: "kw" | "var" | "prop" | "str" | "num" | "punct"; v: string };
type Line  = { n: number; tokens: Token[] };

const CODE_LINES: Line[] = [
  { n: 1, tokens: [{ t: "kw", v: "const " }, { t: "var", v: "developer" }, { t: "punct", v: " = {" }] },
  { n: 2, tokens: [{ t: "prop", v: "  name" }, { t: "punct", v: ": " }, { t: "str", v: "\"Samantha Suarez\"" }, { t: "punct", v: "," }] },
  { n: 3, tokens: [{ t: "prop", v: "  role" }, { t: "punct", v: ": " }, { t: "str", v: "\"Full Stack Dev\"" }, { t: "punct", v: "," }] },
  { n: 4, tokens: [{ t: "prop", v: "  stack" }, { t: "punct", v: ": [" }, { t: "str", v: "\"Next.js\"" }, { t: "punct", v: ", " }, { t: "str", v: "\"React\"" }, { t: "punct", v: ", " }, { t: "str", v: "\"Python\"" }, { t: "punct", v: "]," }] },
  { n: 5, tokens: [{ t: "prop", v: "  remote" }, { t: "punct", v: ": " }, { t: "num", v: "true" }, { t: "punct", v: "," }] },
  { n: 6, tokens: [{ t: "prop", v: "  available" }, { t: "punct", v: ": " }, { t: "num", v: "true" }, { t: "punct", v: "," }] },
  { n: 7, tokens: [{ t: "punct", v: "}" }] },
  { n: 8, tokens: [{ t: "kw", v: "export default " }, { t: "var", v: "developer" }] },
];

const TOKEN_COLOR: Record<Token["t"], string> = {
  kw: "#a78bfa", var: "#67e8f9", prop: "#cbd5e1", str: "#4ade80", num: "#fb923c", punct: "#64748b",
};

function CodeLine({ scrollYProgress, index, line, showCursor = false }: {
  scrollYProgress: MotionValue<number>; index: number; line: Line; showCursor?: boolean;
}) {
  const start        = 0.20 + index * 0.06;
  const peak         = start + 0.18;
  const fadeOutStart = 0.62 + index * 0.012;
  const fadeOutEnd   = 0.78 + index * 0.012;

  const opIn  = useTransform(scrollYProgress, [start, peak], [0, 1], { clamp: true });
  const opOut = useTransform(scrollYProgress, [fadeOutStart, fadeOutEnd], [0, 1], { clamp: true });
  const opacity = useTransform<number, number>([opIn, opOut], ([a, b]) => a * (1 - b));

  const zIn  = useTransform(scrollYProgress, [start, peak], [0, 220 + index * 25], { clamp: true });
  const zOut = useTransform(scrollYProgress, [fadeOutStart, fadeOutEnd], [0, 200], { clamp: true });
  const z    = useTransform<number, number>([zIn, zOut], ([a, b]) => a + b);

  const yIn  = useTransform(scrollYProgress, [start, peak], [16, 0], { clamp: true });
  const yOut = useTransform(scrollYProgress, [fadeOutStart, fadeOutEnd], [0, -30 - index * 3], { clamp: true });
  const y    = useTransform<number, number>([yIn, yOut], ([a, b]) => a + b);

  return (
    <motion.div
      className="flex items-center gap-3"
      style={{
        opacity, y, z,
        filter: "drop-shadow(0 0 8px rgba(34,211,238,0.45)) drop-shadow(0 0 18px rgba(139,92,246,0.25))",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
    >
      <span className="w-3.5 text-right text-[0.85em] select-none flex-shrink-0" style={{ color: "#334155" }}>{line.n}</span>
      <span>
        {line.tokens.map((tok, i) => <span key={i} style={{ color: TOKEN_COLOR[tok.t] }}>{tok.v}</span>)}
        {showCursor && (
          <span aria-hidden className="inline-block align-middle ml-0.5"
            style={{ width: 7, height: "1.1em", background: "#22d3ee", animation: "sdsBlink 1s steps(1) infinite" }} />
        )}
      </span>
    </motion.div>
  );
}

function Chip({ scrollYProgress, tech, index }: { scrollYProgress: MotionValue<number>; tech: Tech; index: number }) {
  const start = 0.65 + index * 0.04;
  const end   = start + 0.35;
  const p     = useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true });
  const x     = useTransform(p, [0, 1], [0, tech.x]);
  const y     = useTransform(p, [0, 1], [0, tech.y]);
  const z     = useTransform(p, [0, 1], [-400, tech.z]);
  const scale = useTransform(p, [0, 1], [0.6, 1]);
  const transform = useMotionTemplate`translate(-50%, -50%) translate3d(${x}vw, ${y}vh, ${z}px) scale(${scale})`;
  const t = TONE[tech.tone];
  const { Icon } = tech;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-[13px] font-medium"
      style={{
        transform, opacity: p, color: "#f1f5f9",
        background: "rgba(17,17,17,0.85)", border: `1px solid ${t.border}`,
        boxShadow: `0 0 30px -8px ${t.glow}, 0 20px 60px -20px rgba(0,0,0,0.8)`,
        backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", willChange: "transform, opacity",
      }}
    >
      <span className="inline-flex items-center gap-2"
        style={{ animation: `sdsChipFloat 6s ease-in-out ${index * 0.4}s infinite`, willChange: "transform" }}>
        <Icon size={16} style={{ color: t.color }} />
        <span>{tech.label}</span>
      </span>
    </motion.div>
  );
}

type Particle = { x: number; y: number; size: number; tone: "c" | "v" | "w"; speed: number; delay: number };

function Particles({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const particles = useMemo<Particle[]>(() => {
    const out: Particle[] = [];
    let seed = 1;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 60; i++) {
      const r = rand();
      out.push({ x: rand() * 100, y: rand() * 100, size: 1 + rand() * 3, tone: r < 0.4 ? "c" : r < 0.75 ? "v" : "w", speed: 0.5 + rand() * 1.2, delay: rand() * 8 });
    }
    return out;
  }, []);
  const opacity = useTransform(scrollYProgress, [0.25, 0.7], [0, 0.5], { clamp: true });
  const baseZ   = useTransform(scrollYProgress, [0, 1], [-400, 600]);
  return (
    <motion.div className="pointer-events-none absolute inset-0" style={{ opacity, transformStyle: "preserve-3d" }}>
      {particles.map((p, i) => {
        const color = p.tone === "c" ? "#22d3ee" : p.tone === "v" ? "#a78bfa" : "#cbd5e1";
        return (
          <motion.span key={i} className="absolute rounded-full" style={{
            left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
            background: color, boxShadow: `0 0 ${p.size * 3}px ${color}`, z: baseZ,
            animation: `sdsParticleDrift ${4 / p.speed}s ease-in-out ${p.delay}s infinite alternate`,
          }} />
        );
      })}
    </motion.div>
  );
}

const PHASES = ["01 · Display", "02 · Código", "03 · Stack"] as const;

function PhasePill({ label, index, active }: { label: string; index: number; active: MotionValue<number> }) {
  const isActive = useTransform(active, (v): number => (v === index ? 1 : 0));
  const color  = useTransform(isActive, [0, 1], ["rgba(148,163,184,1)", "#22d3ee"]);
  const border = useTransform(isActive, [0, 1], ["rgba(255,255,255,0.08)", "rgba(34,211,238,0.40)"]);
  const bg     = useTransform(isActive, [0, 1], ["rgba(255,255,255,0)", "rgba(34,211,238,0.05)"]);
  return (
    <motion.span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px]"
      style={{ color, borderColor: border, borderWidth: 1, borderStyle: "solid", background: bg }}>
      {label}
    </motion.span>
  );
}

function Hud({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const activeIndex = useTransform(scrollYProgress, (p): number => p < 0.20 ? 0 : p < 0.68 ? 1 : 2);
  return (
    <div className="absolute left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-3.5 py-2"
      style={{ top: "5%", background: "rgba(10,10,10,0.6)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", fontSize: 11, color: "#94a3b8", letterSpacing: "0.04em", textTransform: "uppercase" }}>
      {PHASES.map((label, i) => <PhasePill key={label} label={label} index={i} active={activeIndex} />)}
      <div className="ml-2 h-[2px] w-[50px] overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div className="h-full" style={{ background: "linear-gradient(90deg,#22d3ee,#8b5cf6)", scaleX: scrollYProgress, transformOrigin: "left" }} />
      </div>
    </div>
  );
}

export default function ScrollDisplaySection() {
  const ref     = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const displayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.78, 0.96], [0, 1, 1, 0.15]);
  const displayScale   = useTransform(scrollYProgress, [0, 0.15, 0.78, 0.96], [0.7, 1, 1, 0.9]);
  const displayY       = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <section ref={ref} className="relative bg-[#0a0a0a]" style={{ height: "500vh" }} aria-label="Cómo trabajo — animación de scroll">
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ perspective: "2000px", perspectiveOrigin: "50% 50%" }}>

        <div aria-hidden className="pointer-events-none absolute rounded-full"
          style={{ width: 780, height: 780, top: "-10%", left: "-15%", background: "rgba(34,211,238,0.10)", filter: "blur(120px)" }} />
        <div aria-hidden className="pointer-events-none absolute rounded-full"
          style={{ width: 680, height: 680, bottom: "-15%", right: "-10%", background: "rgba(139,92,246,0.10)", filter: "blur(120px)" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)" }} />

        <Hud scrollYProgress={scrollYProgress} />
        <Particles scrollYProgress={scrollYProgress} />

        <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          <motion.div
            className="relative"
            style={{
              width: "min(70vw, 760px)", aspectRatio: "4 / 3",
              opacity: reduced ? 1 : displayOpacity,
              scale: reduced ? 1 : displayScale,
              y: reduced ? 0 : displayY,
              transformStyle: "preserve-3d", willChange: "transform, opacity",
            }}
          >
            <div aria-hidden className="absolute inset-0" style={{
              borderRadius: 18,
              background: "linear-gradient(180deg, #14151a 0%, #0a0b10 100%)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 30px 80px -20px rgba(0,0,0,0.9), 0 0 80px -10px rgba(34,211,238,0.18), 0 0 100px -20px rgba(139,92,246,0.15)",
            }} />
            <div aria-hidden className="pointer-events-none absolute" style={{
              left: "10%", right: "10%", bottom: -80, height: 120,
              background: "radial-gradient(ellipse at center, rgba(34,211,238,0.25) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)",
              filter: "blur(40px)", zIndex: -1,
            }} />
            <div className="absolute left-0 right-0 top-0 z-[2] flex items-center gap-2 px-4"
              style={{ height: 38, borderRadius: "18px 18px 0 0", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
              <span className="block h-[11px] w-[11px] flex-shrink-0 rounded-full" style={{ background: "rgba(255,95,86,0.7)" }} />
              <span className="block h-[11px] w-[11px] flex-shrink-0 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
              <span className="block h-[11px] w-[11px] flex-shrink-0 rounded-full" style={{ background: "rgba(39,201,63,0.7)" }} />
              <span className="ml-3" style={{ fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace", fontSize: 12, color: "#64748b", letterSpacing: "0.02em" }}>
                portfolio.tsx<span style={{ color: "#22d3ee", marginLeft: 6 }}>●</span>
              </span>
            </div>
            <div className="absolute left-0 right-0" style={{ top: 38, bottom: 0, padding: "28px 32px", fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace", fontSize: "clamp(11px, 1.05vw, 14px)", lineHeight: 2, transformStyle: "preserve-3d" }}>
              {CODE_LINES.map((line, i) => (
                <CodeLine key={line.n} scrollYProgress={scrollYProgress} index={i} line={line} showCursor={i === CODE_LINES.length - 1} />
              ))}
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{ borderRadius: 18, background: "linear-gradient(125deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 30%, rgba(34,211,238,0.04) 100%)", mixBlendMode: "screen" }} />
          </motion.div>

          <div className="pointer-events-none absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
            {TECHS.map((tech, i) => <Chip key={tech.label} scrollYProgress={scrollYProgress} tech={tech} index={i} />)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sdsBlink { 50% { opacity: 0; } }
        @keyframes sdsChipFloat { 0% { transform: translate(0px,0px); } 50% { transform: translate(0px,-4px); } 100% { transform: translate(0px,0px); } }
        @keyframes sdsParticleDrift { 0% { transform: translate3d(0,0,0); } 100% { transform: translate3d(0,-12px,0); } }
      `}</style>
    </section>
  );
}
