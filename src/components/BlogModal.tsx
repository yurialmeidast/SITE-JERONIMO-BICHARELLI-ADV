import React from "react";
import { BlogPost, BLOG_POSTS, WHATSAPP_URL } from "../data/lawFirmData";
import { X, Clock, ArrowUpRight, BookOpen } from "lucide-react";

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  isOpen,
  onClose,
  onSelectPost,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0A182E] text-white rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#081325]/80">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D96B27] font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>Jerônimo Bicharelli Editorial</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          {post ? (
            /* Reading Single Article */
            <article className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="text-[#D96B27] font-semibold uppercase">{post.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                  {post.title}
                </h2>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border-l-4 border-[#D96B27]">
                <p className="text-slate-200 text-sm sm:text-base italic font-serif">
                  {post.summary}
                </p>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Dúvidas sobre este tema ou deseja analisar seu caso específico?
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D96B27] hover:bg-[#c35c1d] text-white text-xs uppercase tracking-wider font-semibold transition-all duration-200 shrink-0"
                >
                  <span>Falar com especialista</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ) : (
            /* All Articles Directory */
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif-title text-2xl sm:text-3xl text-white font-normal">
                  Publicações e Artigos do Escritório
                </h2>
                <p className="text-slate-300 text-sm font-light">
                  Selecione um artigo para leitura detalhada.
                </p>
              </div>

              <div className="space-y-4">
                {BLOG_POSTS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectPost(item)}
                    className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-[#D96B27]/50 cursor-pointer transition-all duration-200 space-y-2"
                  >
                    <span className="text-[11px] font-mono text-[#D96B27] uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl text-white font-medium">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-light line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
