import React from "react";
import { Logo } from "./Logo";

export const ImpactQuote: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#060F1E] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,107,39,0.06)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Minimal Monogram Emblem */}
        <div className="flex justify-center mb-4">
          <Logo variant="dark-bg" showText={false} size="sm" />
        </div>

        {/* Impact Title */}
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-100 leading-tight">
          Um problema jurídico merece mais do que uma resposta genérica.
        </h2>

        {/* Body Reflections */}
        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
          <p>
            Informações encontradas na internet podem ajudar a compreender um assunto, mas não substituem a análise das particularidades de cada situação.
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            Um documento, uma data, uma conversa, uma cláusula contratual ou outro detalhe pode modificar completamente a interpretação jurídica de um caso.
          </p>
          <p className="font-serif text-xl sm:text-2xl text-[#D96B27] font-medium pt-2">
            Decisões importantes devem considerar o caso concreto.
          </p>
        </div>

      </div>
    </section>
  );
};
