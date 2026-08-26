import React, { useState } from "react";
import { PRACTICE_AREAS, PracticeArea, WHATSAPP_URL } from "../data/lawFirmData";
import { ArrowUpRight, ChevronRight, Check } from "lucide-react";
import { Reveal } from "./MotionReveal";
import { motion, AnimatePresence } from "motion/react";

interface PracticeAreasProps {
  onSelectArea: (area: PracticeArea) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectArea }) => {
  const [activeTab, setActiveTab] = useState<string>(PRACTICE_AREAS[0].id);

  const selectedArea = PRACTICE_AREAS.find((a) => a.id === activeTab) || PRACTICE_AREAS[0];

  return (
    <section
      id="areas-de-atuacao"
      className="py-14 lg:py-20 bg-[#081325] text-white relative overflow-hidden border-t border-slate-800/80"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#102a4e]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#D96B27]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
              Especialidades
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-50 leading-tight">
            Atuação jurídica para diferentes momentos e decisões.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mt-3 font-light leading-relaxed">
            Soluções jurídicas para pessoas, famílias, patrimônios e empresas.
          </p>
        </Reveal>

        {/* Master-Detail Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Navigation List of Areas */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-5 space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-slate-400 block px-4 mb-3">
              Selecione uma área:
            </span>
            {PRACTICE_AREAS.map((area, index) => {
              const isActive = area.id === activeTab;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-slate-800/90 border-l-4 border-l-[#D96B27] border-slate-700 shadow-lg text-white"
                      : "bg-slate-900/40 hover:bg-slate-800/40 border border-slate-800/60 text-slate-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono text-slate-400">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                      {area.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive
                        ? "text-[#D96B27] translate-x-1"
                        : "text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </Reveal>

          {/* Right Detailed View for Selected Area */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#0C1B33] p-8 sm:p-10 lg:p-12 rounded-2xl border border-slate-800 shadow-2xl relative"
              >
                
                {/* Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D96B27] font-semibold">
                    Área em Destaque
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Jeronimo Bicharelli Advogados
                  </span>
                </div>

                {/* Area Title */}
                <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-white font-normal mt-6 leading-tight">
                  {selectedArea.title}
                </h3>

                {/* Short & Full Description */}
                <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed font-light">
                  {selectedArea.shortDesc}
                </p>
                <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {selectedArea.fullDesc}
                </p>

                {/* Highlight Quote Box */}
                <div className="my-8 p-6 rounded-xl bg-[#081325] border-l-4 border-[#D96B27] shadow-inner">
                  <p className="text-slate-100 font-serif italic text-base sm:text-lg font-medium leading-snug">
                    “{selectedArea.highlight}”
                  </p>
                </div>

                {/* Scope Checklist */}
                <div className="space-y-3">
                  <span className="text-xs font-serif uppercase tracking-widest text-slate-400 block mb-2">
                    Atuação especializada inclui:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedArea.scope.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-[#D96B27] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectArea(selectedArea)}
                    className="text-xs uppercase tracking-wider text-slate-300 hover:text-white underline underline-offset-4 font-medium transition-colors cursor-pointer text-left"
                  >
                    Ver detalhes completos da área
                  </button>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-md group"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
