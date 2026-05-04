"use client";

import Link from "next/link";
import { useState } from "react";
import { useWaitlist } from "@/lib/useWaitlist";

const navColumns: { label: string; href: string }[][] = [
  [
    { label: "FEATURES", href: "#features" },
    { label: "FAQ", href: "/faq" },
  ],
  [
    { label: "TWITTER", href: "https://twitter.com/slategraph" },
    { label: "LINKEDIN", href: "https://linkedin.com/company/slategraph" },
  ],
  [
    { label: "PRIVACY POLICY", href: "/privacy" },
    { label: "TERMS OF USE", href: "/terms" },
  ],
];

export default function Footer() {
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
    <footer
      id="cta"
      aria-labelledby="footer-cta-heading"
      className="relative overflow-hidden scroll-mt-20"
      style={{ background: "linear-gradient(180deg, #010B39 0%, #1A2F96 100%)" }}
    >
      {/* Spiral graphic — bleeds off right side, fades into bg at bottom */}
      <img
        src="/spiral-graphic.svg"
        alt=""
        aria-hidden
        className="absolute pointer-events-none select-none"
        style={{
          top: "50px",
          right: "-180px",
          width: "959px",
          height: "764px",
          maxWidth: "70vw",
          opacity: 0.95,
          maskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
        }}
      />

      {/* ── CTA block ───────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <h2
            id="footer-cta-heading"
            className="text-white"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 6vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build <br /> Authority?
          </h2>

          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            From URL to complete content strategy in 10–12 minutes.
          </p>

          {/* Desktop: nested gray pill + lime inset button */}
          <form
            onSubmit={onSubmit}
            className="mt-10 hidden sm:flex items-center p-1.5 rounded-full bg-[#F1F2F5]"
            style={{ maxWidth: "520px" }}
          >
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting || success}
              className="flex-1 min-w-0 bg-transparent border-none outline-none px-5 py-2 text-[15px] text-[#0A0A14] placeholder:text-[#9CA3AF] disabled:opacity-60"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            />
            <button
              type="submit"
              disabled={submitting || success}
              className="shrink-0 px-6 py-3 rounded-full font-semibold text-[15px] transition-all disabled:opacity-80 flex items-center gap-2"
              style={{
                background: "#B3FF42",
                color: "#010B39",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {buttonLabel}
              <span className="text-base leading-none">→</span>
            </button>
          </form>

          {/* Mobile: stacked pills */}
          <form
            onSubmit={onSubmit}
            className="mt-10 sm:hidden flex flex-col gap-3 w-full"
            style={{ maxWidth: "420px" }}
          >
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting || success}
              className="w-full h-12 px-5 rounded-full bg-[#F1F2F5] border-none outline-none focus:ring-2 focus:ring-[#B3FF42] text-[15px] text-[#0A0A14] placeholder:text-[#9CA3AF] disabled:opacity-60"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            />
            <button
              type="submit"
              disabled={submitting || success}
              className="w-full h-12 rounded-full font-semibold text-[15px] transition-all disabled:opacity-80 flex items-center justify-center gap-2"
              style={{
                background: "#B3FF42",
                color: "#010B39",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {buttonLabel}
              <span className="text-base leading-none">→</span>
            </button>
          </form>
          {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
        </div>
      </div>

      {/* ── Nav block ───────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <span
                className="flex items-center justify-center rounded-xl"
                style={{ width: 44, height: 44, background: "#ffffff" }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                  <rect
                    x="6" y="6" width="10" height="10" rx="1"
                    transform="rotate(45 11 11)"
                    stroke="#4262FF" strokeWidth="1.7"
                  />
                </svg>
              </span>
              <span
                className="text-white"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                Slategraph
              </span>
            </Link>

            <h3
              className="text-white max-w-xl"
              style={{
                fontFamily: "var(--font-roboto-serif), Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(22px, 2.4vw, 28px)",
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              AI-Powered Content Strategy Engine Product
            </h3>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {navColumns.map((col, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {col.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/85 hover:text-white transition-colors"
                          style={{
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontSize: 14,
                            fontWeight: 500,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-white/85 hover:text-white transition-colors"
                          style={{
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontSize: 14,
                            fontWeight: 500,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex justify-end">
          <p
            className="text-white/85"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            © Slategraph.
          </p>
        </div>
      </div>

      {/* ── Edge-to-edge watermark ──────────────────────────── */}
      <div
        aria-hidden
        className="relative z-0 select-none pointer-events-none w-full"
      >
        <img
          src="/footer-watermark.svg"
          alt=""
          className="block w-full h-auto"
        />
      </div>
    </footer>
  );
}
