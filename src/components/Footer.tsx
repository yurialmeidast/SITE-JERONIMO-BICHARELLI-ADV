import React from "react";
import { Logo } from "./Logo";
import { WHATSAPP_URL, OFFICE_ADDRESS, OFFICE_MAPS_URL, OFFICE_PHONE, OFFICE_EMAIL } from "../data/lawFirmData";
import { ArrowUpRight, MessageCircle, Instagram, MapPin, Phone, Mail, FileText } from "lucide-react";

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Início", href: "#inicio" },
    { label: "O Escritório", href: "#o-escritorio" },
    { label: "Advogados", href: "#advogados" },
    { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
    { label: "Para Empresas", href: "#para-empresas" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <footer className="bg-[#050C17] text-white pt-14 pb-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#inicio" className="inline-block" aria-label="Ir para o topo">
              <Logo variant="dark-bg" size="lg" />
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              Advocacia estratégica para pessoas, famílias e empresas, com atuação pautada em análise individual, clareza e segurança jurídica.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#D96B27] hover:border-[#D96B27]/60 transition-colors"
                aria-label="WhatsApp do escritório"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#D96B27] hover:border-[#D96B27]/60 transition-colors"
                aria-label="Instagram oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D96B27]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Contact & Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D96B27]">
              Atendimento & Localização
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-400">
              <a
                href={OFFICE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group hover:text-slate-200 transition-colors"
                title="Abrir no Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#D96B27] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  <strong className="text-slate-200 font-medium block">Edifício Santa Maria</strong>
                  R. Quintino Bocaiúva, n° 240 - Sala 61, 6° andar<br />
                  Centro, Itatiba - SP, 13250-320
                </span>
              </a>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D96B27] shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">
                  {OFFICE_PHONE}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D96B27] shrink-0" />
                <a href={`mailto:${OFFICE_EMAIL}`} className="hover:text-slate-200 transition-colors">
                  {OFFICE_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span>Atendimento Presencial e Online em todo o Brasil</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold transition-all duration-200"
              >
                <span>Fale conosco</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© Jerônimo Bicharelli Advogados. Todos os direitos reservados.</p>
          <p className="text-slate-400">
            Advocacia e Consultoria Jurídica Estratégica
          </p>
        </div>

      </div>
    </footer>
  );
};
