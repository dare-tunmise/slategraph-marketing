"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useWaitlist } from '@/lib/useWaitlist';
import Reveal from './Reveal';

const steps = [
  {
    number: "1",
    title: "Enter your domain",
    description:
      "Paste a URL. TDE analyzes your site, market, and competitors in about 80 seconds.",
    imagePath: "/images/step-1.png",
  },
  {
    number: "2",
    title: "TDE maps your topic landscape",
    description:
      "TDE extracts hundreds of concepts and organizes them into topic clusters with content briefs.",
    imagePath: "/images/step-2.png",
  },
  {
    number: "3",
    title: "Refine with AI Strategist",
    description:
      "Chat with an AI that understands your strategy. Add topics, shift focus, remove what doesn't fit.",
    imagePath: "/images/step-3.png",
  },
  {
    number: "4",
    title: "Compile & publish",
    description:
      "Turn any brief into a full article. Structure, images, internal links, all generated, all editable.",
    imagePath: "/images/step-4.png",
  },
];

export default function HowItWorks() {
  const [email, setEmail] = useState("");
  const { submit, status, error } = useWaitlist();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(email);
  };
  const submitting = status === "submitting";
  const success = status === "success";
  const buttonLabel = success ? "You're in!" : submitting ? "Joining…" : "Join the wait list →";

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="text-[#0A0A14]"
            style={{
              fontFamily: "var(--font-roboto-serif), Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(2rem, 5vw, 54px)",
              lineHeight: 1.063,
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            Content Strategy in <span style={{ color: "#4262FF" }}>4 steps</span>
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Turn any website into a complete SEO and content strategy in minutes. 
            No complex tools, no manual research. Just paste your URL and let AI do the work.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
            <div className="flex flex-col">
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
            </Reveal>
          ))}
        </div>

        {/* Footer Text & CTA */}
        <div className="mt-24 text-center">
          <p className="text-[13px] text-[#9CA3AF] mb-8 max-w-lg mx-auto leading-relaxed">
            Every profile, brief, and cluster ships with confidence scores and source trails.
            High confidence? Approve. Low? Review. Full transparency, no black boxes.
          </p>
          
          <form
            onSubmit={onSubmit}
            className="mx-auto flex items-center p-1.5 rounded-full bg-[#F1F2F5]"
            style={{ maxWidth: "480px" }}
          >
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting || success}
              className="flex-1 bg-transparent border-none outline-none px-5 text-[15px] text-[#0A0A14] placeholder:text-[#9CA3AF] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={submitting || success}
              className="shrink-0 bg-[#4262FF] hover:bg-[#3651D1] text-white px-6 py-3 rounded-full font-semibold text-[15px] transition-all disabled:opacity-80 disabled:hover:bg-[#4262FF]"
            >
              {buttonLabel}
            </button>
          </form>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
}