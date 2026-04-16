import Image from 'next/image';

const showcaseCards = [
  {
    id: "graph-rag",
    title: "GraphRAG, Not Keyword Lists",
    description: "Most tools group keywords. TDE builds a knowledge graph and turns it into strategy. Not a list. A map.",
    imagePath: "/images/showcase-1.png",
  },
  {
    id: "url-to-strategy",
    title: "URL to Full Strategy in Minutes",
    description: "Just enter a domain. TDE maps your entire content strategy — topics, briefs, and publishing order — in under 7 minutes. No keywords. No manual work.",
    imagePath: "/images/showcase-2.png",
  },
  {
    id: "edit-ai",
    title: "Edit Your Strategy with AI",
    description: "An AI that doesn't just respond — it updates your strategy. Review and approve every change, one decision at a time.",
    imagePath: "/images/showcase-3.png",
  },
  {
    id: "links-computed",
    title: "Links, Computed — Not Guessed",
    description: "TDE doesn't guess links — it calculates them. Using your knowledge graph, it determines the optimal structure and publishing order so every article strengthens the ones around it.",
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
            From business analysis to publish-ready articles — TDE handles the entire workflow in minutes, not weeks.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseCards.map((card) => (
            <div 
              key={card.id} 
              className="relative flex flex-col h-full rounded-[24px] bg-[#121212] border border-[#1F1F1F] overflow-hidden"
            >
              {/* Text Section - Padded */}
              <div className="pt-10 px-8 lg:px-10 pb-6">
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
                {/* Add your <Image /> component here. 
                  ml-10: Pushes the image container away from the left text alignment.
                  rounded-tl-xl: Matches the "inner" window corner style.
                */}
                <div className="w-full h-full flex items-center justify-center opacity-40">
                   <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                     [Asset: {card.id}]
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}