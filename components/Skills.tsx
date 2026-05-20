"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Wrench, Brain } from "lucide-react";

const categories = [
  {
    label: "Frontend",
    icon: Code2,
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/5",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    label: "Backend",
    icon: Server,
    color: "text-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    skills: ["Python", "Java", "Django", "Flask", "Spring Boot"],
  },
  {
    label: "Bases de datos",
    icon: Database,
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    skills: ["SQL"],
  },
  {
    label: "DevOps & Cloud",
    icon: Cloud,
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    skills: ["AWS", "Docker", "Linux", "Bash"],
  },
  {
    label: "Herramientas",
    icon: Wrench,
    color: "text-pink-400",
    border: "border-pink-400/20",
    bg: "bg-pink-400/5",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    label: "IA & Automatización",
    icon: Brain,
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
    skills: ["Claude AI", "Prompting", "Automatización con IA"],
  },
];

const competencias = [
  "Desarrollo de aplicaciones Full Stack",
  "APIs REST con Python",
  "Backend con frameworks modernos",
  "Consumo e integración de APIs",
  "Bases de datos relacionales (SQL)",
  "Despliegue y manejo de entornos (AWS)",
  "Arquitectura modular y buenas prácticas",
  "Debugging y resolución de problemas",
  "Documentación técnica",
  "Metodologías ágiles y trabajo autónomo",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs mb-5">
            <Code2 size={11} />
            Stack tecnológico
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              habilidades
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Tecnologías y herramientas con las que construyo soluciones
            escalables, desde el frontend hasta el despliegue en la nube.
          </p>
        </motion.div>

        {/* Tech categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                className="rounded-2xl border border-white/10 bg-[#111] p-6 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={`inline-flex p-2.5 rounded-xl ${cat.bg} ${cat.color} mb-4`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold mb-3">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg border ${cat.border} ${cat.bg} ${cat.color} text-xs`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Competencias */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-[#111] p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white font-semibold text-lg mb-6">
            Competencias clave
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {competencias.map((c, i) => (
              <motion.div
                key={c}
                className="flex items-center gap-3 text-sm text-slate-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                {c}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
