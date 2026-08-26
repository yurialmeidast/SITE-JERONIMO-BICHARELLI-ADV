import React from "react";
import {
  MapPin,
  Navigation,
  Clock,
  Car,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import {
  OFFICE_ADDRESS,
  OFFICE_MAPS_URL,
  OFFICE_PHONE,
  OFFICE_EMAIL,
  WHATSAPP_URL,
} from "../data/lawFirmData";
import { Reveal } from "./MotionReveal";

export const LocationSection: React.FC = () => {
  // Google Maps embed URL for Edifício Santa Maria - Rua Quintino Bocaiúva, 240, Centro, Itatiba - SP
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.056088267252!2d-46.84328572390825!3d-23.003309941999905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf330545f4bf17%3A0x600f73f4b00ce983!2sR.%20Quintino%20Bocai%C3%BAva%2C%20240%20-%20Centro%2C%20Itatiba%20-%20SP%2C%2013250-320!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  const wazeUrl =
    "https://waze.com/ul?q=Rua%20Quintino%20Bocaiuva%20240%20Itatiba%20SP";

  return (
    <section
      id="localizacao"
      className="py-14 lg:py-20 bg-[#FAF9F6] text-[#081325] relative overflow-hidden border-t border-slate-200/80 scroll-mt-20"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#D96B27]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
              Sede & Atendimento
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#081325] leading-tight">
            Nossa Localização em Itatiba
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 font-light leading-relaxed">
            Um espaço preparado para receber clientes com conforto, privacidade e atendimento profissional.
          </p>
        </Reveal>

        {/* Main Grid: Info Cards + Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Office Details Card */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main Info Card */}
            <div className="bg-[#081325] text-white p-8 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#D96B27]/15 rounded-bl-full pointer-events-none" />

              <div className="space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#D96B27] shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#D96B27] font-semibold block">
                      Edifício Santa Maria
                    </span>
                    <h3 className="font-serif text-lg text-white font-medium">
                      Jeronimo Bicharelli Advogados
                    </h3>
                  </div>
                </div>

                {/* Address Item */}
                <div className="space-y-4 pt-2 border-t border-slate-800/80">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#D96B27] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Endereço:</p>
                      <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5 leading-relaxed">
                        Rua Quintino Bocaiúva, n° 240
                        <br />
                        Sala 61, 6° andar — Centro
                        <br />
                        Itatiba - SP, CEP 13250-320
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#D96B27] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Horário de Funcionamento:</p>
                      <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5">
                        Segunda a Sexta: 08h30 às 18h00
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Atendimento presencial mediante agendamento prévio.
                      </p>
                    </div>
                  </div>

                  {/* Accessibility & Parking */}
                  <div className="flex items-start gap-3.5">
                    <Car className="w-5 h-5 text-[#D96B27] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Acessibilidade & Estacionamento:</p>
                      <p className="text-xs text-slate-300 font-light mt-0.5 leading-relaxed">
                        Prédio corporativo com elevadores, acessibilidade completa e estacionamentos conveniados no entorno.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Navigation Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
                  <a
                    href={OFFICE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold shadow-lg shadow-[#D96B27]/25 transition-all group"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Abrir Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    <span>Waze</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Callout for Appointments */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D96B27] flex items-center justify-center shrink-0 border border-orange-200/60">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#081325]">
                    Deseja agendar uma reunião presencial?
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Reserve seu horário com nossa equipe de recepção.
                  </p>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#081325] hover:bg-[#12233f] text-white text-xs uppercase tracking-wider font-semibold shrink-0 transition-colors inline-flex items-center gap-2"
              >
                <span>Agendar</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D96B27]" />
              </a>
            </div>

          </Reveal>

          {/* Right Column: Google Maps Interactive Embed Frame */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-7">
            <div className="h-full min-h-[420px] lg:min-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative group">
              
              {/* Overlay Top Badge */}
              <div className="absolute top-4 left-4 z-20 bg-[#081325]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D96B27] animate-pulse" />
                <span className="text-xs font-serif text-white font-medium">
                  Edifício Santa Maria • Sala 61
                </span>
              </div>

              {/* Map Iframe */}
              <iframe
                title="Localização do Escritório Jeronimo Bicharelli Advogados no Google Maps"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />

              {/* Bottom Quick Map Pin Info Bar */}
              <div className="absolute bottom-4 inset-x-4 z-20 bg-[#081325]/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 shadow-2xl hidden sm:flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D96B27]" />
                  <span>R. Quintino Bocaiúva, 240 - Centro, Itatiba - SP</span>
                </div>
                <a
                  href={OFFICE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D96B27] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Ver mapa ampliado</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
