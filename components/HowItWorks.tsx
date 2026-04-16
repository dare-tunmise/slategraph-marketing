import Image from 'next/image';

const steps = [
  {
    number: "1",
    title: "Enter Your Domain",
    description:
      "Paste your URL. TDE analyzes your site, market, and competitors to build a full business profile. Review, tweak, and approve — all in ~80 seconds.",
    imagePath: "/images/step-1.png", // Replace with your actual path
  },
  {
    number: "2",
    title: "Discover Your Topic Map",
    description:
      "TDE maps your business into a knowledge graph, then turns it into topic clusters with pillar pages, supporting articles, and full SEO briefs.",
    imagePath: "/images/step-2.png",
  },
  {
    number: "3",
    title: "Refine with the AI Strategist",
    description:
      "Chat with an AI that understands your business and topic map. Refine topics, remove low-value briefs, or shift focus — then approve or skip.",
    imagePath: "/images/step-3.png",
  },
  {
    number: "4",
    title: "Compile & Publish",
    description:
      "Turn any brief into a full article in one click — complete with structure, images, and internal links. Review, edit, and publish.",
    imagePath: "/images/step-4.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-[#0A0A14] leading-tight">
            Content Strategy in <span className="text-[#4361EE]">4 steps</span>
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Turn any website into a complete SEO and content strategy in minutes. 
            No complex tools, no manual research—just paste your URL and let AI do the work.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              {/* Image Container - Placeholder for your UI assets */}
              <div className="relative aspect-[16/10] w-full mb-8 rounded-2xl bg-[#F7F8FC] border border-[#E8EAF0] overflow-hidden flex items-center justify-center">
                {/* Replace the div below with:
                   <img src={step.imagePath} alt={step.title} className="w-full h-full object-cover" />
                */}
                <Image 
                  src={step.imagePath} 
                  alt={step.title} 
                  fill 
                  className="object-contain" 
                />
              </div>

              {/* Text Content */}
              <div className="flex gap-4">
                <span className="text-[40px] font-bold text-[#E5E7EB] leading-none tabular-nums">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0A0A14] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#6B7280]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text & CTA */}
        <div className="mt-24 text-center">
          <p className="text-[13px] text-[#9CA3AF] mb-8 max-w-lg mx-auto leading-relaxed">
            Every output—profile, brief, or cluster—shows confidence scores and source trails. 
            High confidence? Approve. Low? Review. Full transparency, no black boxes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="w-full sm:w-[300px] px-5 py-3.5 rounded-xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#4361EE] transition-all text-[15px]"
            />
            <button className="w-full sm:w-auto bg-[#4361EE] hover:bg-[#3651D1] text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all">
              Join the wait list →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}