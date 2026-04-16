const slategraphFeatures = [
  {
    title: "Built on a knowledge graph",
    desc: "Maps 250-400 interconnected concepts — not just keywords.",
  },
  {
    title: "Strategy from your domain",
    desc: "Enter a URL. Get a complete content system tailored to your business.",
  },
  {
    title: "Computed structure",
    desc: "Pillar pages, clusters, and relationships are calculated — not manually grouped.",
  },
  {
    title: "Internal linking, solved",
    desc: "Automatically determines what should link, where, and why.",
  },
  {
    title: "End-to-end workflow",
    desc: "Strategy → briefs → drafts → linking — all in one system.",
  },
  {
    title: "Publishing order included",
    desc: "Knows what to publish first so every article compounds authority.",
  },
];

const otherToolsFeatures = [
  {
    title: "Keyword-first approach",
    desc: "Lists and clusters keywords without understanding context.",
  },
  {
    title: "Manual strategy setup",
    desc: "You piece together topics, clusters, and structure yourself.",
  },
  {
    title: "Loose organization",
    desc: "No true relationship between topics — just grouped suggestions.",
  },
  {
    title: "Guess-based linking",
    desc: "Internal links are recommended, not calculated.",
  },
  {
    title: "Fragmented workflow",
    desc: "Multiple tools for research, writing, and optimization.",
  },
  {
    title: "No execution logic",
    desc: "No clear direction on what to publish or in what order.",
  },
];

export default function Comparison() {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#0A0A14] leading-tight tracking-tight">
            Not Another SEO Tool. <br />
            <span className="text-[#4361EE]">A New Model.</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 relative">
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#F0F0F0]" />

          {/* SlateGraph Column */}
          <div className="relative">
            <h3 className="text-[24px] font-bold text-[#0A0A14] mb-12">SlateGraph</h3>
            
            {/* Blueprint Texture Background (Optional Decorative) */}
            <div className="absolute -left-10 top-0 bottom-0 w-8 opacity-5 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="space-y-10">
              {slategraphFeatures.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="mt-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15 7L8.125 13.875L5 10.75" stroke="#4361EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#4361EE] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Tools Column */}
          <div className="mt-20 md:mt-0">
            <h3 className="text-[24px] font-bold text-[#0A0A14] mb-12">Other SEO Tools</h3>
            
            <div className="space-y-10">
              {otherToolsFeatures.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="mt-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M14 6L6 14M6 6L14 14" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-[14px] text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}