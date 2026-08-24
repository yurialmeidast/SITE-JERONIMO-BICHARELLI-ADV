import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "../data/lawFirmData";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenBlog?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBlog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "O Escritório", href: "#o-escritorio" },
    { label: "Advogados", href: "#advogados" },
    { label: "Áreas de Atuação", href: "#areas-de-atuacao" },
    { label: "Para Empresas", href: "#para-empresas" },
    { label: "Contato", href: "#contato" },
    { label: "Blog", href: "#blog", isBlog: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#081325]/95 backdrop-blur-md border-b border-slate-800/80 py-2.5 sm:py-3.5 shadow-xl shadow-black/20"
          : "bg-[#081325]/85 backdrop-blur-sm border-b border-white/5 py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official Brand Logo */}
        <a
          href="#inicio"
          className="flex items-center group transition-opacity hover:opacity-95 py-0.5"
          aria-label="Jerônimo Bicharelli Advogados - Página Inicial"
        >
          <Logo variant="dark-bg" size="md" />
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                {item.isBlog ? (
                  <a
                    href="#blog"
                    onClick={(e) => {
                      if (onOpenBlog) {
                        e.preventDefault();
                        const target = document.getElementById("blog");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                        onOpenBlog();
                      }
                    }}
                    className="text-xs tracking-wider uppercase font-medium text-slate-300 hover:text-[#D96B27] transition-colors duration-200 py-1 border-b border-transparent hover:border-[#D96B27]/40"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="text-xs tracking-wider uppercase font-medium text-slate-300 hover:text-[#D96B27] transition-colors duration-200 py-1 border-b border-transparent hover:border-[#D96B27]/40"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Highlight Button: Fale com um advogado */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold shadow-lg shadow-[#D96B27]/20 hover:shadow-[#D96B27]/35 transition-all duration-300 group"
          >
            <span>Fale com um advogado</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D96B27] text-white text-[11px] font-semibold tracking-wide"
            aria-label="Atendimento via WhatsApp"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Contato</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700/60"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081325] border-b border-slate-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.isBlog && onOpenBlog) {
                      const target = document.getElementById("blog");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                      onOpenBlog();
                    }
                  }}
                  className={`block text-sm uppercase tracking-wider py-2 font-medium ${
                    item.isBlog
                      ? "text-slate-300 hover:text-[#D96B27]"
                      : "text-slate-200 hover:text-[#D96B27]"
                  } border-b border-slate-800/60`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D96B27] text-white text-xs uppercase tracking-wider font-semibold shadow-md"
            >
              <span>Fale com um advogado</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
