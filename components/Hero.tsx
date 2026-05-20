"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";

const techBadges = [
  "Python",
  "JavaScript",
  "Django",
  "Flask",
  "Spring Boot",
  "HTML5",
  "CSS3",
  "SQL",
  "AWS",
  "Docker",
  "Git",
  "GitHub",
  "Linux",
  "Postman",
  "VS Code",
];

const stats = [
  { value: "20+", label: "Proyectos" },
  { value: "4yr", label: "Experiencia" },
  { value: "13+", label: "Tecnologías" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — content */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Disponible para proyectos freelance
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hola, soy
            <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Samantha Suarez
            </span>
            Full Stack Dev.
          </motion.h1>

          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer con 4 años de experiencia construyendo
            productos web modernos. Trabajo rápido, entrego con calidad y estoy
            disponible para proyectos remotos en todo el mundo.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#0a0a0a] font-semibold hover:bg-cyan-300 transition-all hover:gap-3 duration-200"
            >
              Ver trabajo <ArrowRight size={18} />
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:border-white/30 hover:text-white transition-all duration-200"
            >
              <Download size={18} /> Descargar CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-10 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — code card */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Terminal */}
          <div className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500 font-mono">
                portfolio.tsx
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-7">
              <p>
                <span className="text-slate-600 select-none mr-4">1</span>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-slate-300">= {"{"}</span>
              </p>
              <p>
                <span className="text-slate-600 select-none mr-4">2</span>
                <span className="ml-6 text-slate-300">name</span>
                <span className="text-slate-500">: </span>
                <span className="text-green-400">&quot;Samantha Suarez&quot;</span>
                <span className="text-slate-500">,</span>
              </p>
              <p>
                <span className="text-slate-600 select-none mr-4">3</span>
                <span className="ml-6 text-slate-300">role</span>
                <span className="text-slate-500">: </span>
                <span className="text-green-400">&quot;Full Stack Dev&quot;</span>
                <span className="text-slate-500">,</span>
              </p>
              <p>
                <span className="text-slate-600 select-none mr-4">4</span>
                <span className="ml-6 text-slate-300">location</span>
                <span className="text-slate-500">: </span>
                <span className="text-green-400">&quot;Remoto / Mundial&quot;</span>
                <span className="text-slate-500">,</span>
              </p>
              <p>
                <span className="text-slate-600 select-none mr-4">5</span>
                <span className="ml-6 text-slate-300">available</span>
                <span className="text-slate-500">: </span>
                <span className="text-orange-400">true</span>
                <span className="text-slate-500">,</span>
              </p>
              <p>
                <span className="text-slate-600 select-none mr-4">6</span>
                <span className="text-slate-300">{"}"}</span>
              </p>
              <p>
                <span className="text-slate-600 select-none mr-4">7</span>
              </p>
              <p>
                <span className="text-slate-600 select-none mr-4">8</span>
                <span className="text-violet-400">export default</span>{" "}
                <span className="text-slate-300">developer</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </p>
            </div>
          </div>

          {/* Tech badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200 cursor-default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
