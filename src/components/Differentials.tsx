import React from "react";
import { DIFFERENTIALS } from "../data/lawFirmData";
import { UserCheck, MessageSquare, Lightbulb, ShieldAlert, Award } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";

export const Differentials: React.FC = () => {
  const icons = [
    <UserCheck className="w-5 h-5 text-[#D96B27]" />,
    <MessageSquare className="w-5 h-5 text-[#D96B27]" />,
    <Lightbulb className="w-5 h-5 text-[#D96B27]" />,
    <ShieldAlert className="w-5 h-5 text-[#D96B27]" />
  ];

  return (
    <section className="py-14 lg:py-20 bg-[#081325] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#D96B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#102a4e]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#D96B27]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
              Diferenciais
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-50 leading-tight">
            Uma advocacia baseada em análise, estratégia e clareza.
          </h2>
        </Reveal>

        {/* Main Content Layout with Partners Photo & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Partners Duo Photograph Card */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-slate-800 bg-[#0b1b36] shadow-2xl group flex flex-col justify-end">
              <img
                src="/unnamed.webp"
                alt="Dr. Marcos Jeronimo e Dr. Jherody Bicharelli - Sócios Jeronimo Bicharelli Advogados"
                className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.97] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Refined gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081325] via-[#081325]/40 to-transparent" />

              {/* Photo Caption & Partner Names */}
              <div className="relative z-10 p-6 sm:p-7 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081325]/80 backdrop-blur-md border border-slate-700/80 text-[#D96B27] text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Sócios Fundadores</span>
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl text-white font-normal leading-snug">
                  Dr. Marcos Jeronimo &amp; Dr. Jherody Bicharelli
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  Condução próxima e estratégica em todas as etapas da atuação jurídica.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 4 Pillars Grid (2x2 on lg) */}
          <StaggerContainer staggerDelay={0.08} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {DIFFERENTIALS.map((diff, index) => (
              <StaggerItem
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-[#0b1b36] border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800">
                    {icons[index]}
                  </div>
                  
                  <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                    {diff.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {diff.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#D96B27] tracking-widest uppercase">
                    Pilar 0{index + 1}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>

      </div>
    </section>
  );
};
