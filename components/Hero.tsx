"use client";

import Image from "next/image";
import { useState } from "react";
import { useWaitlist } from "@/lib/useWaitlist";

export default function Hero() {
  const [email, setEmail] = useState("");
  const { submit, status, error } = useWaitlist();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(email);
  };
  const submitting = status === "submitting";
  const success = status === "success";
  const buttonLabel = success ? "You're in!" : submitting ? "Joining…" : "Join the waitlist";

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
        <div className="mb-8 fade-up" style={{ animationDelay: "0ms" }}>
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs md:text-sm font-medium"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              background: "#8484841A",
              color: "#686868",
            }}
          >
            Built for growth and marketing teams
          </span>
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="fade-up"
          style={{
            fontFamily: "var(--font-lora), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(2.5rem, 7vw, 68px)",
            lineHeight: "1.0912",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
            maxWidth: "850px",
            color: "#010B39",
            animationDelay: "100ms",
          }}
        >
          Introducing Topics
          <br />
          Discovery Engine
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 text-lg md:text-xl leading-relaxed fade-up"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            color: "#5A6172",
            maxWidth: "600px",
            animationDelay: "220ms",
          }}
        >
          Generate keyword opportunities, topic clusters, and a
          ready-to-publish content calendar in minutes. No spreadsheets.
          No manual SEO research.
        </p>

        {/* ── CTA ───────────────────────────────────────────── */}
        {/* Desktop: Blue pill with white inset button */}
        <div className="hidden sm:block mt-12 fade-up" style={{ animationDelay: "340ms" }}>
          <form
            onSubmit={onSubmit}
            className="flex items-center p-1.5 rounded-full shadow-[0_12px_40px_rgba(66,98,255,0.25)]"
            style={{ background: "#4262FF", maxWidth: "560px" }}
          >
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting || success}
              className="flex-1 bg-transparent outline-none px-6 text-white placeholder:text-white/85 text-[16px] disabled:opacity-60"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            />
            <button
              type="submit"
              disabled={submitting || success}
              className="flex items-center gap-2 px-7 py-3.5 font-semibold rounded-full transition-transform hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-80"
              style={{
                background: "#ffffff",
                color: "#0A0A14",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {buttonLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </div>

        {/* Mobile: Stacked, same palette */}
        <form onSubmit={onSubmit} className="sm:hidden mt-10 flex flex-col gap-3 fade-up" style={{ animationDelay: "340ms" }}>
          <input
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting || success}
            className="w-full h-14 rounded-full px-6 text-white placeholder:text-white/85 focus:outline-none disabled:opacity-60"
            style={{
              background: "#4262FF",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          />
          <button
            type="submit"
            disabled={submitting || success}
            className="w-full h-14 flex items-center justify-center gap-2 font-semibold rounded-full disabled:opacity-80"
            style={{
              background: "#ffffff",
              color: "#0A0A14",
              border: "1px solid #E4E9FA",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {buttonLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>

      </div>
    </section>
  );
}
