"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const codeLines = [
  { tokens: [{ t: "keyword", v: "const " }, { t: "var", v: "samantha" }, { t: "punct", v: " = {" }] },
  { tokens: [{ t: "punct", v: "  " }, { t: "prop", v: "role" }, { t: "punct", v: ": " }, { t: "string", v: '"Full Stack Developer",' }] },
  { tokens: [{ t: "punct", v: "  " }, { t: "prop", v: "location" }, { t: "punct", v: ": " }, { t: "string", v: '"Buenos Aires 🇦🇷",' }] },
  { tokens: [{ t: "punct", v: "  " }, { t: "prop", v: "stack" }, { t: "punct", v: ": [" }, { t: "string", v: '"Python"' }, { t: "punct", v: ", " }, { t: "string", v: '"Next.js"' }, { t: "punct", v: ", " }, { t: "string", v: '"AWS"' }, { t: "punct", v: "]," }] },
  { tokens: [{ t: "punct", v: "  " }, { t: "prop", v: "available" }, { t: "punct", v: ": " }, { t: "bool", v: "true" }, { t: "punct", v: "," }] },
  { tokens: [{ t: "punct", v: "  " }, { t: "fn", v: "build" }, { t: "punct", v: "(" }, { t: "var", v: "idea" }, { t: "punct", v: ") {" }] },
  { tokens: [{ t: "punct", v: "    " }, { t: "keyword", v: "return " }, { t: "var", v: "idea" }, { t: "punct", v: "." }, { t: "fn", v: "ship" }, { t: "punct", v: "();" }] },
  { tokens: [{ t: "punct", v: "  }" }] },
  { tokens: [{ t: "punct", v: "}" }] },
];

const color: Record<string, string> = {
  keyword: "#a78bfa",
  var: "#67e8f9",
  string: "#4ade80",
  bool: "#fb923c",
  fn: "#22d3ee",
  prop: "#f1f5f9",
  punct: "#475569",
};

const floatingTech = [
  { label: "Python",  color: "#3b82f6", x: "8%",  y: "18%", delay: 0 },
  { label: "Next.js", color: "#ffffff", x: "78%", y: "12%", delay: 0.1 },
  { label: "AWS",     color: "#fb923c", x: "12%", y: "65%", delay: 0.2 },
  { label: "Django",  color: "#22d3ee", x: "74%", y: "62%", delay: 0.15 },
  { label: "Docker",  color: "#38bdf8", x: "42%", y: "8%",  delay: 0.25 },
  { label: "Git",     color: "#f97316", x: "82%", y: "42%", delay: 0.05 },
  { label: "SQL",     color: "#a78bfa", x: "4%",  y: "42%", delay: 0.3 },
  { label: "Flask",   color: "#94a3b8", x: "52%", y: "82%", delay: 0.2 },
];

export default function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Lid opens from -85deg to 0deg between 0–40% scroll
  const lidRotate   = useTransform(scrollYProgress, [0, 0.40], [-85, 0]);
  // Code reveals once lid is ~halfway open
  const codeOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  // Laptop fades+shrinks at 55–72%
  const laptopOpacity = useTransform(scrollYProgress, [0.55, 0.72], [1, 0]);
  const laptopScale   = useTransform(scrollYProgress, [0.55, 0.72], [1, 0.88]);
  // Tech icons appear after 70%
  const iconsOpacity  = useTransform(scrollYProgress, [0.68, 0.85], [0, 1]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        {/* ── LAPTOP ── */}
        <motion.div
          style={{ opacity: laptopOpacity, scale: laptopScale }}
          className="relative z-10 w-full max-w-[640px] px-4"
        >
          {/* Perspective wrapper so rotateX looks 3D */}
          <div style={{ perspective: "1400px" }}>

            {/* LID — screen */}
            <motion.div
              style={{
                rotateX: lidRotate,
                transformOrigin: "bottom center",
              }}
              className="relative z-10"
            >
              {/* Outer bezel */}
              <div className="rounded-t-2xl bg-[#1a1a1a] p-[10px] shadow-2xl shadow-black/70 border border-white/10">
                {/* Inner screen */}
                <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/5">
                  {/* Menubar */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#111] border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="mx-auto text-[11px] text-slate-500 font-mono tracking-wide">samantha.tsx</span>
                    <span className="flex items-center gap-1 text-[11px] text-cyan-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      running
                    </span>
                  </div>
                  {/* Code */}
                  <motion.div
                    style={{ opacity: codeOpacity }}
                    className="p-5 font-mono text-[13px] leading-[1.8] min-h-[220px]"
                  >
                    {codeLines.map((line, i) => (
                      <motion.div
                        key={i}
                        className="flex"
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.06 }}
                      >
                        <span className="select-none text-slate-700 w-5 shrink-0 text-right mr-4 text-xs leading-[1.8]">{i + 1}</span>
                        <span>
                          {line.tokens.map((tok, j) => (
                            <span key={j} style={{ color: color[tok.t] }}>{tok.v}</span>
                          ))}
                        </span>
                      </motion.div>
                    ))}
                    <div className="flex mt-0.5">
                      <span className="select-none text-slate-700 w-5 shrink-0 text-right mr-4 text-xs leading-[1.8]">10</span>
                      <span className="animate-pulse text-cyan-400 text-base leading-[1.8]">▋</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* Camera notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#111] border border-white/10" />
            </motion.div>

            {/* BASE — keyboard */}
            <div className="relative z-20 -mt-[1px]">
              {/* Hinge strip */}
              <div className="h-[6px] bg-gradient-to-b from-[#2a2a2a] to-[#222] mx-3 rounded-t-sm" />
              {/* Keyboard surface */}
              <div className="bg-gradient-to-b from-[#1e1e1e] to-[#181818] rounded-b-xl border border-white/8 border-t-0 px-6 pt-3 pb-5 shadow-xl shadow-black/50">
                {/* Key rows */}
                {[10, 11, 10, 9].map((keys, row) => (
                  <div key={row} className="flex justify-center gap-1 mb-1">
                    {Array.from({ length: keys }).map((_, k) => (
                      <div
                        key={k}
                        className="h-[9px] rounded-[3px] bg-[#2a2a2a] border border-white/5"
                        style={{ width: row === 3 ? (k === 4 ? 60 : 18) : 28 }}
                      />
                    ))}
                  </div>
                ))}
                {/* Trackpad */}
                <div className="mt-3 mx-auto w-28 h-[22px] rounded-lg bg-[#252525] border border-white/8" />
              </div>
              {/* Bottom shadow lip */}
              <div className="h-[3px] bg-[#111] mx-6 rounded-b-sm shadow-lg shadow-black/60" />
            </div>
          </div>
        </motion.div>

        {/* ── FLOATING TECH ICONS ── */}
        <motion.div
          style={{ opacity: iconsOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {floatingTech.map((tech, i) => (
            <motion.div
              key={tech.label}
              className="absolute"
              style={{ left: tech.x, top: tech.y }}
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tech.delay, type: "spring", stiffness: 180, damping: 14 }}
              animate={{ y: [0, -12, 0], transition: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" } }}
            >
              <div
                className="px-3 py-2 rounded-xl border border-white/10 bg-[#111]/90 text-xs font-mono font-semibold backdrop-blur-sm"
                style={{ color: tech.color, boxShadow: `0 0 18px ${tech.color}30` }}
              >
                {tech.label}
              </div>
            </motion.div>
          ))}

          {/* Center message */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center px-6"
            >
              <p className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Stack listo para{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  construir
                </span>
              </p>
              <p className="text-slate-400 text-lg">todo lo que imagines.</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
