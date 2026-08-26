import React from "react";
import { WHATSAPP_URL, OFFICE_ADDRESS, OFFICE_MAPS_URL } from "../data/lawFirmData";
import { ArrowUpRight, MessageSquare, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Reveal } from "./MotionReveal";

export const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="py-14 lg:py-20 bg-[#081325] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#D96B27]/15 via-[#132c4f]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <Reveal direction="up" className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#0b1c36] border border-slate-700/80 shadow-2xl space-y-6">
          
          {/* Brand Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs tracking-[0.2em] uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27]" />
            <span>Jeronimo Bicharelli Advogados</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight max-w-3xl mx-auto">
            Seu caso merece uma análise individual.
          </h2>

          {/* Subtext */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Se você precisa compreender uma situação jurídica, tomar uma decisão importante ou prevenir problemas futuros, converse com nossa equipe.
          </p>

          {/* Direct CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold shadow-xl shadow-[#D96B27]/30 hover:shadow-[#D96B27]/50 transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale com um advogado</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Guarantee Badges & Office Address */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D96B27]" />
              <span>Sigilo profissional e confidencialidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D96B27]" />
              <span>Retorno ágil e direcionado</span>
            </div>
            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#D96B27]" />
              <span>Ed. Santa Maria • Itatiba - SP</span>
            </a>
          </div>

        </Reveal>

      </div>
    </section>
  );
};
