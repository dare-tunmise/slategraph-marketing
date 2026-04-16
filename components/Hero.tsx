"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden min-h-[600px] flex items-center"
      /* Updated to the deep navy/blue gradient from Figma */
      style={{ background: "linear-gradient(180deg, #1E59FC 0%, #113594 100%)" }}
    >
      {/* SVG BACKGROUND PATTERN PLACEHOLDER 
        Replace '/hero-pattern.svg' with your actual file path.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/hero-pattern.svg" 
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
            className="inline-block rounded-full px-4 py-1.5 text-xs md:text-sm font-medium text-white"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Built for SEO teams &amp; agencies
          </span>
        </div>

        {/* H1 — Matches the bold serif style in Figma */}
        <h1
          id="hero-heading"
          className="text-white font-black tracking-tight"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            lineHeight: 1.05,
            maxWidth: "850px",
          }}
        >
          Introducing Topics
          <br />
          Discovery Engine
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 text-lg md:text-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px" }}
        >
          Generate keyword opportunities, topic clusters, and a
          ready-to-publish content calendar in minutes. No spreadsheets.
          No manual SEO research.
        </p>

        {/* ── CTA ───────────────────────────────────────────── */}
        {/* Desktop: Combined pill input/button */}
        <div className="hidden sm:block mt-12">
          <form
            className="flex items-center p-1.5 bg-white rounded-full shadow-2xl"
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
                background: "#AAFF47", // Lime green from Figma design
                color: "#010B39",      // Dark navy text
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
            className="w-full h-14 bg-white/10 border border-white/20 rounded-full px-6 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
          />
          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center gap-2 font-bold rounded-full"
            style={{
              background: "#AAFF47",
              color: "#010B39",
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