import React, { useState } from "react";
import { WHATSAPP_URL } from "../data/lawFirmData";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloating: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Pill */}
      {isHovered && (
        <div
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#081325] border border-slate-700 text-white text-xs font-medium shadow-xl animate-in fade-in slide-in-from-right-3 duration-200"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Fale agora com nosso escritório</span>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-emerald-900/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Atendimento via WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75 duration-1000" />
        
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </aside>
  );
};
