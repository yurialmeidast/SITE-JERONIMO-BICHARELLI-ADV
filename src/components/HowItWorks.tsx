import React from "react";
import { TIMELINE_STEPS, WHATSAPP_URL } from "../data/lawFirmData";
import { ArrowUpRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./MotionReveal";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#FAF9F6] text-[#081325] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#D96B27]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
              Jornada do Cliente
            </span>
            <span className="h-px w-8 bg-[#D96B27]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#081325] leading-tight">
            Como funciona o atendimento
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light max-w-xl mx-auto">
            Um processo simples e organizado para compreender sua situação e definir os próximos passos.
          </p>
        </Reveal>

        {/* Sophisticated 4-Step Timeline */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative mb-10 lg:mb-12">
          {TIMELINE_STEPS.map((step, index) => (
            <StaggerItem
              key={step.number}
              className="relative p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Display */}
                <div className="flex items-baseline justify-between pb-6 border-b border-slate-100">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-[#D96B27]">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                    Etapa
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#081325] font-medium mt-6">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100/80">
                <span className="text-xs text-slate-400 font-serif">
                  Jerônimo Bicharelli
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Central CTA Button */}
        <Reveal direction="up" delay={0.2} className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#081325] hover:bg-[#132c4f] text-white text-xs uppercase tracking-wider font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <span>Iniciar atendimento</span>
            <ArrowUpRight className="w-4 h-4 text-[#D96B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Reveal>

      </div>
    </section>
  );
};
