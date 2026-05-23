import { Code2, Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

const footerLinks: Record<string, string[]> = {
  Servicios: ["Landing Pages", "Apps Web", "Diseño UI/UX", "SEO & Performance"],
  Recursos: ["Blog", "Case Studies", "Open Source", "Newsletter"],
  Compañía: ["Sobre mí", "Contacto", "Política de privacidad", "Términos"],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/Samasuarez?tab=repositories", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/samantha-suarez-rico/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sama_developer/", label: "Instagram" },
  { icon: Mail, href: "mailto:joublinsuarez@gmail.com", label: "Email" },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Contact CTA banner */}
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-10 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-slate-500 mb-7 max-w-md mx-auto">
            Construyamos algo increíble juntos. Actualmente estoy disponible
            para nuevos proyectos.
          </p>
          <a
            href="mailto:joublinsuarez@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#0a0a0a] font-semibold hover:bg-cyan-300 transition-colors"
          >
            <Mail size={18} />
            joublinsuarez@gmail.com
          </a>
        </div>

        {/* Main footer grid */}
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-xl text-white mb-4"
            >
              <Code2 className="text-cyan-400" size={22} />
              <span>
                dev<span className="text-cyan-400">.</span>folio
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Construyendo productos digitales rápidos, accesibles y hermosos.
              Disponible en todo el mundo para proyectos freelance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-600 text-sm">
            © {year} dev.folio. Todos los derechos reservados.
          </p>
          <p className="text-slate-600 text-sm">
            Construido con{" "}
            <span className="text-slate-500">Next.js 15 + Tailwind CSS v4</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
