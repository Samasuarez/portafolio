"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, MapPin, Globe } from "lucide-react";

const experience = [
  {
    role: "Freelance Full Stack Developer",
    place: "Independiente",
    period: "Abril 2024 - Actual",
    description:
      "Diseño, desarrollo y mantenimiento de aplicaciones web. Trabajo tanto en backend como en frontend creando soluciones escalables y eficientes.",
  },
  {
    role: "Community Manager & Social Media Manager",
    place: "Freelance",
    period: "Enero 2021 - Octubre 2024",
    description:
      "Planificación, creación y gestión de contenido digital. Crecimiento de comunidades y construcción de identidad de marca en redes sociales.",
  },
  {
    role: "Publicidad y Diseño Landing Page",
    place: "Freelance",
    period: "Abril 2018 - Noviembre 2020",
    description:
      "Creación de campañas digitales y páginas de aterrizaje optimizadas para conversión, con foco en diseño atractivo y resultados medibles.",
  },
];

const education = [
  {
    title: "Backend, Cloud Computing & Automatización",
    place: "Coderhouse Buenos Aires",
    period: "Jun 2022 - Jun 2024",
  },
  {
    title: "Carrera Full Stack",
    place: "Coderhouse Buenos Aires",
    period: "Ene 2022 - Ene 2024",
  },
  {
    title: "Bachiller Común",
    place: "Colegio Secundario Bartolomé Mitre",
    period: "Egresada 2018",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-400/20 bg-violet-400/5 text-violet-400 text-xs mb-5">
            <User size={11} />
            Sobre mí
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            La persona{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              detrás del código
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio + info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-8">
              <User size={36} className="text-slate-500" />
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Soy Samantha, desarrolladora Full Stack de Buenos Aires. Empecé en
              el mundo digital creando contenido y diseñando landing pages, y en
              el camino me enamoré del código. Hoy construyo aplicaciones web
              desde el frontend hasta el backend, siempre buscando que las cosas
              funcionen bien y se vean mejor todavía. Me gusta trabajar rápido,
              aprender constantemente y resolver problemas reales. Disponible
              para proyectos remotos en todo el mundo.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={15} className="text-cyan-400 shrink-0" />
                Buenos Aires, Argentina
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Globe size={15} className="text-cyan-400 shrink-0" />
                Disponible para trabajo remoto mundial
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </span>
                Español nativo · Inglés
              </div>
            </div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 text-white font-semibold mb-5">
                <Briefcase size={16} className="text-cyan-400" />
                Experiencia
              </div>
              <div className="relative border-l border-white/10 pl-6 space-y-7">
                {experience.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full border-2 border-cyan-400 bg-[#0a0a0a]" />
                    <p className="text-xs text-cyan-400 mb-1">{item.period}</p>
                    <h4 className="text-white font-semibold text-sm">{item.role}</h4>
                    <p className="text-slate-500 text-xs mb-2">{item.place}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-white font-semibold mb-5">
                <GraduationCap size={16} className="text-violet-400" />
                Formación
              </div>
              <div className="relative border-l border-white/10 pl-6 space-y-6">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full border-2 border-violet-400 bg-[#0a0a0a]" />
                    <p className="text-xs text-violet-400 mb-1">{item.period}</p>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs">{item.place}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
