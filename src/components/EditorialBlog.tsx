import React from "react";
import { BLOG_POSTS, BlogPost } from "../data/lawFirmData";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

interface EditorialBlogProps {
  onReadPost: (post: BlogPost) => void;
  onOpenAllPosts: () => void;
}

export const EditorialBlog: React.FC<EditorialBlogProps> = ({ onReadPost, onOpenAllPosts }) => {
  return (
    <section id="blog" className="py-14 lg:py-20 bg-[#081325] text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#D96B27]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D96B27]">
                Seção Editorial & Autoridade
              </span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-50 leading-tight">
              Informação para decisões mais seguras.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mt-3 font-light leading-relaxed">
              Questões jurídicas fazem parte de decisões pessoais, familiares e empresariais. Por isso, produzimos conteúdos para tornar temas relevantes mais claros e acessíveis.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenAllPosts}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs uppercase tracking-wider font-semibold transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 text-[#D96B27]" />
              <span>Acessar o Blog</span>
            </button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onReadPost(post)}
              className="p-8 rounded-2xl bg-[#0b1c36] border border-slate-800/80 hover:border-[#D96B27]/60 hover:bg-[#0f2444] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Meta info */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pb-4 border-b border-slate-800">
                  <span className="text-[#D96B27] font-semibold uppercase">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Article Headline */}
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal group-hover:text-[#D96B27] transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed font-light line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Read button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
                <span className="font-medium">Ler artigo completo</span>
                <ArrowUpRight className="w-4 h-4 text-[#D96B27] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
