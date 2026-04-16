const extraFeatures = [
  {
    id: "internal-linking",
    title: "Computed Internal Linking",
    description: "Every output—profile, brief, or cluster—shows confidence scores and source trails. High confidence? Approve. Low? Review. Full transparency, no black boxes.",
    image: "/icons/settings.svg",
  },
  {
    id: "confidence-scores",
    title: "Confidence Scores",
    description: "Briefs aren't the end—TDE turns them into publish-ready drafts with section generation, coherence checks, entity verification, image suggestions, and link placeholders—all in one click.",
    image: "/icons/shield.svg",
  },
  {
    id: "compilation-pipeline",
    title: "Full Article Compilation Pipeline",
    description: "Briefs aren't the end product. TDE compiles publish-ready article drafts with parallel section generation, cross-section coherence checking.",
    image: "/icons/file.svg",
  },
  {
    id: "biz-intelligence",
    title: "Business Intelligence Foundation",
    description: "The entire strategy is grounded in a rich business profile: audience, competitors, brand voice, products, SEO semantics, exclusions.",
    image: "/icons/signal.svg",
  },
  {
    id: "real-time",
    title: "Real-Time Transparency",
    description: "Watch the AI work live—entities appear, connections form, and briefs generate with confidence scores and progress updates.",
    image: "/icons/bars.svg",
  },
];

export default function MoreFeatures() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#0A0A14] tracking-tight leading-tight">
            More extra features <br /> from <span className="text-[#0A0A14]">TDE</span>
          </h2>
        </div>

        {/* Feature Grid: The "Sticky" Border Fix */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#F0F0F0]">
          {extraFeatures.map((feat, index) => (
            <div 
              key={feat.id} 
              className={`
                py-12 md:py-16
                /* Every item gets a bottom border */
                border-b border-[#F0F0F0]
                
                /* DESKTOP: Border logic for columns 1 and 2 (the left and middle) */
                /* This makes the border "stick" to the left of column 2 and 3 */
                ${index % 3 !== 2 ? 'md:border-r border-[#F0F0F0] md:pr-10 lg:pr-16' : 'md:pl-10 lg:pl-16'}
                
                /* Middle column (Confidence & Real-Time) specific padding */
                ${index % 3 === 1 ? 'md:px-10 lg:px-16' : ''}
              `}
            >
              {/* Icon Container with brackets */}
              <div className="relative w-10 h-10 mb-8 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-[#4361EE]" viewBox="0 0 40 40" fill="none">
                  <path d="M2 10V2H10" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M30 2H38V10" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M38 30V38H30" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M10 38H2V30" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                
                <div className="text-[#4361EE]">
                   <img src={feat.image} alt="" className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-[18px] font-bold text-[#4361EE] mb-4">
                {feat.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#6B7280]">
                {feat.description}
              </p>
            </div>
          ))}
          
          {/* Empty cell for the 6th slot to complete the grid lines */}
          <div className="hidden md:block border-b border-[#F0F0F0] md:pl-10 lg:pl-16 py-12 md:py-16" />
        </div>
      </div>
    </section>
  );
}