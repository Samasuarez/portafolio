"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";

type Project = {
  name: string;
  description: string;
  long: string;
  tags: string[];
  live: string | null;
  github: string | null;
  featured: boolean;
  gradient: string;
};

const projects: Project[] = [
  {
    name: "Amatista Propiedades",
    description: "Inmobiliaria · Córdoba, Argentina",
    long: "Sitio web para inmobiliaria en Córdoba que vende lotes y casas en la montaña y las sierras. Contenido de calidad con tomas de drone para mostrar la naturaleza del entorno.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    live: "https://amatista-propiedades.vercel.app/",
    github: null,
    featured: true,
    gradient: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    name: "Page Links",
    description: "Link in bio personalizado",
    long: "Página de links estilo Linktree pero con diseño propio. Un solo link para compartir todos tus perfiles y redes sociales.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: null,
    github: null,
    featured: false,
    gradient: "from-violet-500/20 to-pink-500/10",
  },
  {
    name: "E-commerce Python BFF",
    description: "Tienda online con Python backend",
    long: "Aplicación de e-commerce con arquitectura Backend for Frontend en Python. Gestión de productos, carrito y flujo de compra completo.",
    tags: ["Python", "Django", "JavaScript", "SQL"],
    live: null,
    github: null,
    featured: false,
    gradient: "from-orange-500/20 to-yellow-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
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
            <Folder size={11} />
            Proyectos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trabajo{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              seleccionado
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Una muestra de lo que construyo. Desde landing pages hasta
            aplicaciones con backend completo.
          </p>
        </motion.div>

        {/* Featured project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.name}
              className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="grid lg:grid-cols-2">
                {/* Visual */}
                <div
                  className={`h-56 lg:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5`}
                >
                  <div className="text-center px-8">
                    <div className="text-5xl font-bold text-white/10 tracking-tight mb-2">
                      {project.name.split(" ")[0]}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      En vivo
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs text-slate-500 mb-2">
                    {project.description}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.long}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-[#0a0a0a] text-sm font-semibold hover:bg-cyan-300 transition-colors"
                      >
                        <ExternalLink size={15} />
                        Ver en vivo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 text-sm hover:border-white/30 hover:text-white transition-all"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.name}
                className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Top */}
                <div
                  className={`h-28 rounded-xl bg-gradient-to-br ${project.gradient} mb-5 flex items-center justify-center`}
                >
                  <span className="text-3xl font-bold text-white/10">
                    {project.name.split(" ")[0]}
                  </span>
                </div>

                <span className="text-xs text-slate-500">{project.description}</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.long}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 items-center">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={14} /> Ver en vivo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-xs text-slate-600 border border-white/5 px-3 py-1.5 rounded-lg">
                      Próximamente en vivo
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        {/* More coming */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 text-sm">
            Más proyectos próximamente.{" "}
            <a href="#contact" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Hablemos de tu proyecto <ArrowRight size={12} />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
