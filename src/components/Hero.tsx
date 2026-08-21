import React from "react";
import { WHATSAPP_URL } from "../data/lawFirmData";
import { ArrowUpRight, ChevronDown, ShieldCheck, Award, Users } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-24 bg-[#081325] text-white overflow-hidden"
    >
      {/* Background Architectural & Atmospheric Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial warmth for lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#132c4f]/40 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-12 right-10 w-96 h-96 bg-[#D96B27]/10 rounded-full blur-3xl opacity-40" />
        
        {/* Architectural grid lines (editorial aesthetic) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 text-left">
            
            {/* Office Badge / Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs tracking-[0.22em] uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27]" />
              <span>Jerônimo Bicharelli Advogados</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] leading-[1.08] text-slate-50 font-normal tracking-tight">
              Advocacia estratégica para pessoas, famílias e empresas.
            </h1>

            {/* Lead Description */}
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              <p>
                Soluções jurídicas conduzidas com análise individual, clareza e estratégia.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Da prevenção de riscos à defesa de direitos, cada situação é analisada de forma individual para identificar o caminho jurídico mais adequado.
              </p>
            </div>

            {/* CTAs: Primary & Secondary */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-sm uppercase tracking-wider font-semibold shadow-xl shadow-[#D96B27]/25 hover:shadow-[#D96B27]/40 transition-all duration-300 group"
              >
                <span>Fale com um advogado</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#o-escritorio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm uppercase tracking-wider font-medium transition-all duration-200"
              >
                <span>Conheça o escritório</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span className="leading-tight">Análise individual e criteriosa</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span className="leading-tight">Atuação preventiva e contenciosa</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span className="leading-tight">Orientação jurídica clara</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Executive & Corporate Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Accent Border Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#D96B27]/30 via-slate-700/20 to-transparent blur-sm" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="Arquitetura corporativa e centro financeiro - Jerônimo Bicharelli Advogados"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Gradient Overlay for Editorial Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081325] via-transparent to-transparent opacity-90" />

                {/* Overlaid Editorial Card at bottom */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#081325]/90 backdrop-blur-md border border-slate-700/70 shadow-lg">
                  <div className="flex items-start gap-3.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D96B27] mt-1.5 shrink-0 animate-pulse" />
                    <div>
                      <h2 className="text-white text-xs font-semibold uppercase tracking-wider">
                        Atuação Preventiva & Contenciosa
                      </h2>
                      <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                        Atuação jurídica estruturada para proteger direitos, patrimônios e negócios.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Subtle floating badge */}
              <div className="hidden sm:block absolute -top-4 -left-4 px-4 py-2.5 rounded-xl bg-[#0d1f38] border border-slate-700 shadow-xl">
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#D96B27]">
                  Jerônimo Bicharelli
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
