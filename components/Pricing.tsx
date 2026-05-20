"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Star, Building2 } from "lucide-react";
import clsx from "clsx";

type Plan = {
  name: string;
  icon: React.ElementType;
  monthly: number;
  annual: number;
  description: string;
  accent: string;
  border: string;
  glow: string;
  features: string[];
  cta: string;
  ctaClass: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    icon: Zap,
    monthly: 499,
    annual: 399,
    description: "Ideal para pequeños negocios y landing pages.",
    accent: "text-slate-400",
    border: "border-white/10",
    glow: "",
    features: [
      "Landing page (1 página)",
      "Diseño responsive",
      "Formulario de contacto",
      "SEO básico",
      "2 rondas de revisión",
      "Entrega en 1 semana",
    ],
    cta: "Empezar",
    ctaClass:
      "border border-white/10 text-slate-300 hover:border-white/30 hover:text-white",
    featured: false,
  },
  {
    name: "Profesional",
    icon: Star,
    monthly: 1299,
    annual: 999,
    description: "Para negocios que necesitan presencia web completa.",
    accent: "text-cyan-400",
    border: "border-cyan-400/30",
    glow: "shadow-cyan-500/10",
    features: [
      "Sitio multi-página (hasta 8)",
      "Sistema de diseño personalizado",
      "Integración CMS",
      "SEO avanzado + Analytics",
      "5 rondas de revisión",
      "Entrega en 2 semanas",
      "Optimización de performance",
      "1 mes de soporte",
    ],
    cta: "El más popular",
    ctaClass: "bg-cyan-400 text-[#0a0a0a] font-bold hover:bg-cyan-300",
    featured: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    monthly: 2999,
    annual: 2499,
    description: "Aplicaciones a escala y sistemas complejos.",
    accent: "text-violet-400",
    border: "border-white/10",
    glow: "",
    features: [
      "Aplicación web personalizada",
      "Backend + Base de datos",
      "Desarrollo de API",
      "Auth y gestión de usuarios",
      "Revisiones ilimitadas",
      "Entrega en 4-8 semanas",
      "Pipeline CI/CD",
      "3 meses de soporte",
    ],
    cta: "Contactar",
    ctaClass:
      "border border-white/10 text-slate-300 hover:border-white/30 hover:text-white",
    featured: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/5 rounded-full blur-3xl" />
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
            <Star size={11} />
            Precios transparentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple y honesto{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Sin costos ocultos ni sorpresas. Elige el plan que se adapte a tu
            proyecto y construyamos algo increíble juntos.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className={`text-sm transition-colors ${
                !annual ? "text-white" : "text-slate-500"
              }`}
            >
              Mensual
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                annual ? "bg-cyan-400" : "bg-white/10"
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${
                  annual ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span
              className={`text-sm transition-colors ${
                annual ? "text-white" : "text-slate-500"
              }`}
            >
              Anual
              <span className="ml-2 px-1.5 py-0.5 rounded text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                -20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const price = annual ? plan.annual : plan.monthly;
            const saving = plan.monthly - plan.annual;

            return (
              <motion.div
                key={plan.name}
                className={clsx(
                  "relative rounded-2xl border p-8 transition-all duration-300",
                  plan.border,
                  plan.featured
                    ? `bg-[#0d1a1f] shadow-2xl ${plan.glow} md:-mt-4 md:pb-12`
                    : "bg-[#111] hover:border-white/20"
                )}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: plan.featured ? -4 : -6 }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-[#0a0a0a] text-xs font-bold whitespace-nowrap">
                    ✦ Más Popular
                  </div>
                )}

                <div
                  className={`inline-flex p-2.5 rounded-xl bg-white/5 ${plan.accent} mb-5`}
                >
                  <Icon size={20} />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-7">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">
                      ${price}
                    </span>
                    <span className="text-slate-500 text-sm pb-1">
                      /proyecto
                    </span>
                  </div>
                  {annual && (
                    <p className="text-xs text-cyan-400 mt-1">
                      Ahorras ${saving} vs mensual
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <Check
                        size={14}
                        className={`${plan.accent} mt-0.5 shrink-0`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={clsx(
                    "block text-center px-6 py-3 rounded-xl text-sm transition-all duration-200",
                    plan.ctaClass
                  )}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center text-slate-600 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Todos los precios en USD. ¿Necesitas un presupuesto personalizado?{" "}
          <a href="#contact" className="text-cyan-400 hover:underline">
            Hablemos
          </a>
        </motion.p>
      </div>
    </section>
  );
}
