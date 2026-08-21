import React from "react";
import { COMPANY_SERVICES, WHATSAPP_URL } from "../data/lawFirmData";
import { ArrowUpRight, ShieldCheck, Building2, Briefcase } from "lucide-react";

export const ForCompanies: React.FC = () => {
  return (
    <section
      id="para-empresas"
      className="py-14 lg:py-20 bg-[#081325] text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D96B27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#D96B27]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
              Advocacia Empresarial
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-50 leading-tight">
            Segurança jurídica também faz parte da estratégia do negócio.
          </h2>

          <div className="space-y-3 text-slate-300 text-base sm:text-lg mt-4 font-light leading-relaxed">
            <p>
              Empresas tomam diariamente decisões envolvendo contratos, funcionários, tributos, fornecedores, clientes e sócios. Cada uma delas pode gerar consequências jurídicas importantes.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Uma atuação preventiva permite identificar riscos, revisar procedimentos e estruturar decisões antes que situações evitáveis se transformem em conflitos ou passivos.
            </p>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {COMPANY_SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#0d1e36] border border-slate-800 hover:border-[#D96B27]/50 hover:bg-[#112644] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400">
                  0{index + 1}
                </span>
                <ShieldCheck className="w-4 h-4 text-[#D96B27] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-serif text-lg text-white font-medium group-hover:text-[#D96B27] transition-colors">
                {service}
              </h3>
            </div>
          ))}
        </div>

        {/* Highlight Banner & CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0C1B33] to-[#122442] border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D96B27] font-semibold">
              Visão Preventiva & Estratégica
            </span>
            <p className="font-serif-title text-xl sm:text-2xl text-white font-normal leading-snug">
              “O jurídico não deve atuar apenas quando surge um problema. Ele também pode fazer parte da estratégia de prevenção e crescimento da empresa.”
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold shadow-xl shadow-[#D96B27]/25 hover:shadow-[#D96B27]/40 transition-all duration-300 group"
            >
              <span>Fale sobre sua empresa</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
