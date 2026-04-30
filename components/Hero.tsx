"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden min-h-[600px] flex items-center"
      style={{ background: "#F6F9FF" }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero-pattern-light.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 py-20 md:py-32">

        {/* Badge */}
        <div className="mb-8">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs md:text-sm font-medium"
            style={{
              background: "rgba(66,98,255,0.08)",
              border: "1px solid rgba(66,98,255,0.2)",
              color: "#4262FF",
            }}
          >
            Built for SEO teams &amp; agencies
          </span>
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="font-black tracking-tight"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            lineHeight: 1.05,
            maxWidth: "850px",
            color: "#010B39",
          }}
        >
          Introducing Topics
          <br />
          Discovery Engine
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 text-lg md:text-xl leading-relaxed"
          style={{ color: "#5A6172", maxWidth: "600px" }}
        >
          Generate keyword opportunities, topic clusters, and a
          ready-to-publish content calendar in minutes. No spreadsheets.
          No manual SEO research.
        </p>

        {/* ── CTA ───────────────────────────────────────────── */}
        {/* Desktop: Combined pill input/button */}
        <div className="hidden sm:block mt-12">
          <form
            className="flex items-center p-1.5 bg-white rounded-full shadow-[0_8px_32px_rgba(66,98,255,0.12)] border border-[#E4E9FA]"
            style={{ maxWidth: "500px" }}
          >
            <input
              type="email"
              placeholder="Enter email"
              required
              className="flex-1 bg-transparent outline-none px-6 text-gray-900 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-4 font-bold rounded-full transition-transform hover:scale-[1.02]"
              style={{
                background: "#4262FF",
                color: "#ffffff",
              }}
            >
              Join the wait list
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>

        {/* Mobile: Stacked for better touch targets */}
        <div className="sm:hidden mt-10 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full h-14 bg-white border border-[#E4E9FA] rounded-full px-6 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#4262FF]"
          />
          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center gap-2 font-bold rounded-full"
            style={{
              background: "#4262FF",
              color: "#ffffff",
            }}
          >
            Join the wait list
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
