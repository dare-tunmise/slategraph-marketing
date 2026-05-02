"use client";

import Image from 'next/image';
import Reveal from './Reveal';

const showcaseCards = [
  {
    id: "graph-rag",
    category: "Knowledge graph",
    title: "GraphRAG Architecture",
    description: "300+ concepts and relationships extracted from your domain. Every cluster, brief, and link is anchored to real relationships, not keyword frequency.",
    imagePath: "/images/showcase-1.png",
  },
  {
    id: "pipeline",
    category: "Pipeline & Compilation",
    title: "URL to Published Article",
    description: "Paste a domain. TDE crawls, researches SERPs, builds clusters and briefs, then compiles full articles that are coherence-checked, entity-verified, and ship with structured markup. End to end.",
    imagePath: "/images/showcase-2.png",
  },
  {
    id: "refinement",
    category: "Refinement & Trust",
    title: "AI Strategist with Provenance",
    description: "Chat with an AI that proposes versioned, reversible changes. Every recommendation ships with a confidence score and a clear trail of where it came from and why.",
    imagePath: "/images/showcase-3.png",
  },
  {
    id: "interlinking",
    category: "Interlinking",
    title: "Computed, not guessed.",
    description: "Automatic internal linking that connects every page. Pillar-to-child, sibling-to-sibling, cluster-to-cluster. Zero orphan pages.",
    imagePath: "/images/showcase-4.png",
  },
];

export default function Showcase() {
  return (
    <section id="moat" className="bg-black py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Top Tag & Header */}
        <div className="mb-16 lg:mb-20">
          <div className="inline-block px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#2A2A2A] mb-8">
            <span className="text-[11px] font-medium text-[#9CA3AF] uppercase tracking-widest">
              Moat advantage
            </span>
          </div>
          
          <h2 className="text-[32px] md:text-[44px] font-bold text-white leading-tight max-w-3xl tracking-tight">
            Content Strategy, Reinvented <br /> at the Core
          </h2>
          <p className="mt-4 text-[16px] text-[#6B7280] max-w-xl leading-relaxed">
            From business analysis to publish-ready articles, TDE handles the entire workflow in minutes, not weeks.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseCards.map((card, i) => (
            <Reveal key={card.id} delay={(i % 2) * 100} className="h-full">
            <div
              className="relative flex flex-col h-full rounded-[24px] bg-[#121212] border border-[#1F1F1F] overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Text Section - Padded */}
              <div className="pt-10 px-8 lg:px-10 pb-6">
                <span className="inline-block text-[11px] font-medium text-[#4262FF] uppercase tracking-widest mb-3">
                  {card.category}
                </span>
                <h3 className="text-[20px] font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#6B7280]">
                  {card.description}
                </p>
              </div>

              {/* Image Container - Shifted Right & Flushed to Wall */}
              <div className="relative mt-auto ml-10 h-[280px] rounded-tl-xl bg-[#0A0A0A] border-l border-t border-[#1F1F1F] overflow-hidden">
                <Image
                  src={card.imagePath}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}