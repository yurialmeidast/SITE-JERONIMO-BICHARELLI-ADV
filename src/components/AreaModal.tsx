import React from "react";
import { PracticeArea, WHATSAPP_URL } from "../data/lawFirmData";
import { X, Check, ArrowUpRight, ShieldCheck } from "lucide-react";

interface AreaModalProps {
  area: PracticeArea | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AreaModal: React.FC<AreaModalProps> = ({
  area,
  isOpen,
  onClose
}) => {
  if (!isOpen || !area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0A182E] text-white rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#081325]/80">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D96B27] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Área de Atuação Especializada</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
            {area.title}
          </h2>

          <p className="text-slate-200 text-base leading-relaxed font-light">
            {area.shortDesc}
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {area.fullDesc}
          </p>

          <div className="p-5 rounded-xl bg-slate-900/80 border-l-4 border-[#D96B27]">
            <p className="text-slate-100 font-serif italic text-base">
              “{area.highlight}”
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-serif uppercase tracking-widest text-slate-400 block font-semibold">
              Serviços prestados nesta especialidade:
            </span>
            <div className="space-y-2">
              {area.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-[#D96B27] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Jeronimo Bicharelli Advogados
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-all duration-200"
            >
              <span>Consultar sobre {area.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
