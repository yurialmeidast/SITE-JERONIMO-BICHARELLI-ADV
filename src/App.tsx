import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SecondSection } from "./components/SecondSection";
import { PracticeAreas } from "./components/PracticeAreas";
import { ForIndividuals } from "./components/ForIndividuals";
import { ForCompanies } from "./components/ForCompanies";
import { Differentials } from "./components/Differentials";
import { HowItWorks } from "./components/HowItWorks";
import { EditorialBlog } from "./components/EditorialBlog";
import { ImpactQuote } from "./components/ImpactQuote";
import { FinalCTA } from "./components/FinalCTA";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { BlogModal } from "./components/BlogModal";
import { AreaModal } from "./components/AreaModal";
import { BlogPost, PracticeArea } from "./data/lawFirmData";

export default function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsBlogModalOpen(true);
  };

  const handleOpenAllPosts = () => {
    setSelectedPost(null);
    setIsBlogModalOpen(true);
  };

  const handleSelectArea = (area: PracticeArea) => {
    setSelectedArea(area);
    setIsAreaModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#081325] text-slate-100 selection:bg-[#D96B27] selection:text-white flex flex-col">
      {/* Fixed Sticky Header */}
      <Navbar onOpenBlog={handleOpenAllPosts} />

      {/* Main Landing Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero / Primeira Dobra - Mantém a foto dos prédios */}
        <Hero />

        {/* 2. O Escritório + Extensão com Dr. Marcos Jerônimo e Dr. Jerody Bicharelli */}
        <SecondSection />

        {/* 3. Áreas de Atuação */}
        <PracticeAreas onSelectArea={handleSelectArea} />

        {/* 4. Para Você / Pessoas Físicas */}
        <ForIndividuals />

        {/* 5. Para Empresas / Advocacia Empresarial */}
        <ForCompanies />

        {/* 6. Diferenciais / 4 Pilares */}
        <Differentials />

        {/* 7. Como Funciona / Timeline 01-04 */}
        <HowItWorks />

        {/* 8. Seção Editorial / Autoridade */}
        <EditorialBlog
          onReadPost={handleReadPost}
          onOpenAllPosts={handleOpenAllPosts}
        />

        {/* 9. Frase de Impacto Minimalista */}
        <ImpactQuote />

        {/* 10. CTA Final de Conversão */}
        <FinalCTA />

        {/* 11. Sessão de Localização & Google Maps */}
        <LocationSection />
      </main>

      {/* Footer Oficial */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppFloating />

      {/* Editorial Blog Article Reader Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        onSelectPost={(post) => setSelectedPost(post)}
      />

      {/* Practice Area Deep Details Modal */}
      <AreaModal
        area={selectedArea}
        isOpen={isAreaModalOpen}
        onClose={() => setIsAreaModalOpen(false)}
      />
    </div>
  );
}
