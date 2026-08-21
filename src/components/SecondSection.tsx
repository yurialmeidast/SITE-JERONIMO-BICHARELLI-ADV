import React from "react";
import {
  Shield,
  Compass,
  Scale,
  MapPin,
  ArrowUpRight,
  UserCheck,
  Building2,
  FileText,
  Briefcase,
  HeartHandshake,
  Gavel,
  Home,
  CheckCircle2,
} from "lucide-react";
import { OFFICE_ADDRESS, WHATSAPP_URL, TEAM_MEMBERS } from "../data/lawFirmData";

interface SecondSectionProps {
  onOpenPhotoModal?: (photo: any) => void;
}

export const SecondSection: React.FC<SecondSectionProps> = () => {
  const drMarcos = TEAM_MEMBERS[0];
  const drJerody = TEAM_MEMBERS[1];

  const [activePhoto, setActivePhoto] = React.useState(0);

  const officePhotos = [
    {
      url: "/IMG_8235.jpg",
      title: "Recepção & Identidade",
      alt: "Placa oficial Jerônimo Bicharelli Advogados no Edifício Santa Maria",
    },
    {
      url: "/unnamed (3).webp",
      title: "Sala de Reuniões Executiva",
      alt: "Mesa executiva para reuniões e videoconferências",
    },
    {
      url: "/IMG_8245.jpg",
      title: "Espaço de Acolhimento & Café",
      alt: "Ambiente reservado para atendimento e consultoria presencial",
    },
  ];

  const marcosWhatsApp = `https://wa.me/5511921556211?text=${encodeURIComponent(
    "Olá, Dr. Marcos Jerônimo! Vim pelo site e gostaria de tirar dúvidas sobre meu caso."
  )}`;

  const jerodyWhatsApp = `https://wa.me/5511921556211?text=${encodeURIComponent(
    "Olá, Dr. Jerody Bicharelli! Vim pelo site e gostaria de uma consultoria jurídica."
  )}`;

  return (
    <section
      id="o-escritorio"
      className="py-14 lg:py-20 bg-[#FAF9F6] text-[#081325] relative overflow-hidden"
    >
      {/* Editorial Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 lg:space-y-16">
        
        {/* PARTE 1: Introdução & Pilares do Escritório */}
        <div>
          {/* Section Header */}
          <div className="max-w-3xl mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#D96B27]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
                O Escritório
              </span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#081325] leading-tight">
              Direito não precisa ser complicado.
            </h2>
          </div>

          {/* Editorial Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Main Copy */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <p className="text-xl font-serif text-[#081325] italic font-medium leading-snug">
                Cada cliente chega ao escritório com uma realidade, uma preocupação e um objetivo diferente.
              </p>

              <p>
                Empresas precisam tomar decisões com segurança. Famílias enfrentam questões patrimoniais e sucessórias. Pessoas físicas podem precisar proteger direitos diante de conflitos, prejuízos ou mudanças importantes da vida.
              </p>

              <div className="p-6 rounded-2xl bg-white border-l-4 border-[#D96B27] shadow-sm my-4">
                <p className="text-[#081325] font-serif text-lg font-semibold tracking-wide">
                  “Por isso, não trabalhamos com respostas prontas.”
                </p>
                <p className="text-slate-600 text-sm mt-1 font-sans">
                  Cada caso é analisado individualmente, com comunicação clara, atenção aos detalhes e estratégia jurídica adequada à situação apresentada.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-[#D96B27] shrink-0" />
                <span>Edifício Santa Maria • {OFFICE_ADDRESS}</span>
              </div>
            </div>

            {/* Right Visual / Office Real Photos + 3 Pillars (Titles Only) */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Main Active Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-slate-900 group aspect-[4/3]">
                <img
                  src={officePhotos[activePhoto].url}
                  alt={officePhotos[activePhoto].alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081325]/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Photo Title Overlay */}
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                  <span className="text-xs font-serif font-medium bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-slate-100 border border-white/10">
                    {officePhotos[activePhoto].title}
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 bg-black/40 px-2 py-0.5 rounded-md">
                    0{activePhoto + 1} / 0{officePhotos.length}
                  </span>
                </div>
              </div>

              {/* 3 Thumbnails Row */}
              <div className="grid grid-cols-3 gap-2.5">
                {officePhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhoto(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all duration-200 cursor-pointer ${
                      activePhoto === idx
                        ? "border-[#D96B27] ring-2 ring-[#D96B27]/40 shadow-md scale-[1.02]"
                        : "border-slate-200/80 opacity-70 hover:opacity-100 hover:border-slate-400"
                    }`}
                    aria-label={`Ver foto ${photo.title}`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* 3 Pillars Icons (Titles Only, No Description) */}
              <div className="grid grid-cols-3 gap-2.5 pt-1.5">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col items-center text-center justify-center gap-2 hover:border-[#D96B27]/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#D96B27] shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-xs font-medium text-[#081325] leading-tight">
                    Segurança
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col items-center text-center justify-center gap-2 hover:border-[#D96B27]/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#D96B27] shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-xs font-medium text-[#081325] leading-tight">
                    Orientação
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col items-center text-center justify-center gap-2 hover:border-[#D96B27]/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#D96B27] shrink-0">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-xs font-medium text-[#081325] leading-tight">
                    Estratégia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PARTE 2: Extensão de "O Escritório" — Corpo Jurídico & Sócios */}
        <div id="advogados" className="pt-8 border-t border-slate-200/80 space-y-10 lg:space-y-12 scroll-mt-24">
          
          {/* Header da Extensão */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#D96B27]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
                Advogados & Atuação
              </span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#081325] leading-tight">
              Conheça os profissionais à frente de cada caso
            </h3>
            <p className="text-slate-600 text-base mt-3 font-light">
              Atuação próxima e estratégica, respeitando as particularidades de pessoas, famílias e empresas.
            </p>
          </div>

          {/* BLOCO 1: Dr. Marcos Jerônimo (Foto na Esquerda, Texto na Direita) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Foto do Dr. Marcos Jerônimo na Esquerda */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] max-h-[460px] w-full shadow-lg border-2 border-slate-100 group">
                  <img
                    src="/unnamed (1).webp"
                    alt="Dr. Marcos Jerônimo - Advogado especialista em Pessoas Físicas, Família, Trabalhista e Criminal"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081325]/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#D96B27] font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-1">
                      Advogado Especialista
                    </span>
                    <h4 className="font-serif text-xl font-medium text-white">
                      Dr. Marcos Jerônimo
                    </h4>
                  </div>
                </div>
              </div>

              {/* Texto em Resumo sobre Dr. Marcos Jerônimo na Direita */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-[#D96B27] text-xs font-semibold tracking-wide mb-3">
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>Atendimento a Pessoas e Famílias</span>
                  </div>

                  <h4 className="font-serif-title text-2xl sm:text-3xl text-[#081325] font-normal">
                    Dr. Marcos Jerônimo
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                    Advogado Especialista • Atendimento a Pessoas e Famílias
                  </p>
                </div>

                <div className="space-y-4 text-slate-700 text-base leading-relaxed font-light">
                  <p>
                    O <strong>Dr. Marcos Jerônimo</strong> atua no atendimento a <strong>pessoas e famílias</strong>, com foco em Direito de Família, Pensão Alimentícia, Direito Trabalhista e Direito Criminal.
                  </p>
                  <p>
                    Sua atuação é pautada pela análise cuidadosa de cada situação, comunicação próxima e definição da estratégia jurídica adequada às circunstâncias apresentadas.
                  </p>
                </div>

                {/* Áreas de Atuação do Dr. Marcos */}
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
                    Principais Áreas de Atendimento:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <UserCheck className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Direito de Família & Divórcio
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <HeartHandshake className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Pensão Alimentícia
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Briefcase className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Direito Trabalhista
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Gavel className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Direito Criminal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botão de Contato */}
                <div className="pt-2">
                  <a
                    href={marcosWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#081325] hover:bg-[#12233f] text-white text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-200 group"
                  >
                    <span>Falar com o Dr. Marcos Jerônimo</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D96B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* BLOCO 2: Dr. Jerody Bicharelli (Foto na Direita, Texto na Esquerda) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Texto em Resumo sobre Dr. Jerody Bicharelli na Esquerda */}
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-[#D96B27] text-xs font-semibold tracking-wide mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Atuação Estratégica Empresarial & Patrimonial</span>
                  </div>

                  <h4 className="font-serif-title text-2xl sm:text-3xl text-[#081325] font-normal">
                    Dr. Jerody Bicharelli
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                    Advogado Estrategista • Consultoria Empresarial e Patrimonial
                  </p>
                </div>

                <div className="space-y-4 text-slate-700 text-base leading-relaxed font-light">
                  <p>
                    O <strong>Dr. Jerody Bicharelli</strong> atua com foco em <strong>Direito Empresarial, contratos, Direito Imobiliário, indenizações, inventários e planejamento sucessório</strong>.
                  </p>
                  <p>
                    Sua atuação combina análise preventiva, estruturação jurídica e condução estratégica de questões empresariais e patrimoniais para empresas, empresários e famílias.
                  </p>
                </div>

                {/* Áreas de Atuação do Dr. Jerody */}
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
                    Principais Áreas de Atendimento:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Building2 className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Direito Empresarial & Contratos
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Home className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Direito Imobiliário
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Scale className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Ações de Indenização
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <FileText className="w-4 h-4 text-[#D96B27] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        Inventário & Planejamento Sucessório
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botão de Contato */}
                <div className="pt-2">
                  <a
                    href={jerodyWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#081325] hover:bg-[#12233f] text-white text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-200 group"
                  >
                    <span>Falar com o Dr. Jerody Bicharelli</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D96B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Foto do Dr. Jerody Bicharelli na Direita */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] max-h-[460px] w-full shadow-lg border-2 border-slate-100 group">
                  <img
                    src="/unnamed (2).webp"
                    alt="Dr. Jerody Bicharelli - Advogado especialista em Direito Empresarial, Imobiliário, Indenização e Inventário"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081325]/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#D96B27] font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-1">
                      Advogado Estrategista
                    </span>
                    <h4 className="font-serif text-xl font-medium text-white">
                      Dr. Jerody Bicharelli
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
