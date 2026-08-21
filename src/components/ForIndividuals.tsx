import React from "react";
import { INDIVIDUAL_QUESTIONS, WHATSAPP_URL } from "../data/lawFirmData";
import { ArrowUpRight, HelpCircle } from "lucide-react";

export const ForIndividuals: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#F3F4F6] text-[#081325] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#D96B27]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
                Para Você
              </span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#081325] leading-tight">
              Algumas decisões jurídicas podem impactar uma vida inteira.
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Nem toda questão jurídica começa em um processo. Muitas vezes, começa com uma dúvida, uma decisão importante ou uma situação que exige orientação antes de avançar.
              </p>
              <p>
                Nosso papel é compreender o contexto, identificar os aspectos jurídicos envolvidos e apresentar os caminhos possíveis de forma clara e responsável.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#081325] hover:bg-[#12233f] text-white text-xs uppercase tracking-wider font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Quero analisar meu caso</span>
                <ArrowUpRight className="w-4 h-4 text-[#D96B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Reflective Questions Cards */}
          <div className="lg:col-span-6">
            <div className="bg-[#081325] p-8 sm:p-10 lg:p-11 rounded-3xl border border-slate-700/80 shadow-2xl space-y-6 text-white relative overflow-hidden">
              {/* Subtle internal decorative glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D96B27]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 pb-4 border-b border-slate-700/80">
                <div className="w-8 h-8 rounded-lg bg-[#0d1e38] border border-slate-700 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#D96B27]" />
                </div>
                <span className="text-xs sm:text-sm font-serif uppercase tracking-widest text-[#D96B27] font-semibold">
                  Dúvidas Frequentes de Nossos Clientes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {INDIVIDUAL_QUESTIONS.map((question, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0d1e38] border border-slate-700/70 hover:border-[#D96B27]/60 hover:bg-[#122749] transition-all duration-300 flex items-center shadow-sm"
                  >
                    <p className="font-serif text-slate-100 text-base sm:text-lg italic font-normal leading-snug">
                      {question}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs sm:text-sm text-slate-300">
                <span className="tracking-wide">Orientação clara</span>
                <span className="text-[#D96B27] font-semibold tracking-wide">Atendimento individualizado</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
