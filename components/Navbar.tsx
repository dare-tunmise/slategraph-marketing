"use client";
import { useState } from "react";
import Link from "next/link";

/* ── Shared logo mark ─────────────────────────────────────────── */
function LogoMark() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Slategraph home">
      {/* SVG_SLOT: swap the <svg> diamond below with your final logo icon */}
      <span
        className="flex items-center justify-center rounded-xl shrink-0"
        style={{ width: 36, height: 36, background: "#4361EE" }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <rect
            x="4.5" y="4.5" width="9" height="9" rx="1"
            transform="rotate(45 9 9)"
            stroke="white" strokeWidth="1.6"
          />
        </svg>
      </span>
      <span
        className="font-semibold select-none"
        style={{ color: "#0D0F1C", fontSize: 16, letterSpacing: "-0.015em" }}
      >
        Slategraph
      </span>
    </Link>
  );
}

/* ── Icon helpers ─────────────────────────────────────────────── */
function ChevronDown({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M4.5 7L9 11.5L13.5 7" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ChevronRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M7 4.5L11.5 9L7 13.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ChevronUp({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M4.5 11.5L9 7L13.5 11.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M5 5L15 15M15 5L5 15" stroke="#374151" strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  );
}
function IconHamburger() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M3 8h16M3 14h16" stroke="#374151" strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  );
}

const DASHED_BORDER = "1px dashed #D1D5DB";

/* ════════════════════════════════════════════════════════════════
   Main Navbar
════════════════════════════════════════════════════════════════ */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────── */}
      <header
        role="banner"
        className="w-full bg-white sticky top-0 z-40"
        style={{ borderBottom: "1px solid #F0F1F5" }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8"
          style={{ height: 64 }}
          aria-label="Main navigation"
        >
          <LogoMark />

          {/* Desktop pills */}
          <ul className="hidden md:flex items-center gap-1.5" role="list">
            {[
              { label: "Product",   href: "#features",   chevron: true  },
              { label: "Resources", href: "/resources",  chevron: true  },
              { label: "Pricing",   href: "#pricing",    chevron: false },
              { label: "Login",     href: "/login",      chevron: false },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{ color: "#374151", border: "1px solid #E4E6EF" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#F5F6FA")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  {link.label}
                  {link.chevron && <span style={{ color: "#9CA3AF" }}><ChevronDown size={14} /></span>}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: "#4361EE" }}
            >
              Get started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile: "Get started" pill + hamburger */}
          <div className="flex md:hidden items-center gap-2.5">
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: "#4361EE" }}
            >
              Get started
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <button
              onClick={() => { setMobileOpen(true); setProductOpen(false); }}
              className="flex items-center justify-center"
              aria-label="Open menu"
            >
              <IconHamburger />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ───────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Overlay header: logo + X */}
          <div
            className="flex items-center justify-between px-5 shrink-0"
            style={{ height: 64, borderBottom: DASHED_BORDER }}
          >
            <LogoMark />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full"
              aria-label="Close menu"
              style={{ background: "#F5F6FA" }}
            >
              <IconClose />
            </button>
          </div>

          {/* Nav items + CTA — scrollable body */}
          <div className="flex-1 overflow-y-auto">
            <ul role="list" className="px-5">

              {/* ── Product (accordion) ── */}
              <li>
                <button
                  className="flex w-full items-center justify-between py-4 text-left"
                  style={{ borderBottom: DASHED_BORDER, fontSize: 16, color: "#0D0F1C" }}
                  onClick={() => setProductOpen(!productOpen)}
                  aria-expanded={productOpen}
                >
                  <span>Product</span>
                  {productOpen ? <ChevronUp /> : <ChevronDown />}
                </button>

                {/* Product dropdown */}
                {productOpen && (
                  <div style={{ borderBottom: DASHED_BORDER }}>
                    {/* TDE sub-item */}
                    <Link
                      href="/product/tde"
                      className="flex items-start gap-3 py-4"
                      onClick={() => setMobileOpen(false)}
                    >
                      {/* SVG_SLOT: TDE product icon — replace div with your icon */}
                      <div
                        className="shrink-0 flex items-center justify-center rounded-lg mt-0.5"
                        style={{ width: 32, height: 32, background: "#EEF1FF" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <circle cx="4" cy="8" r="1.5" fill="#4361EE"/>
                          <circle cx="12" cy="4" r="1.5" fill="#4361EE"/>
                          <circle cx="12" cy="12" r="1.5" fill="#4361EE"/>
                          <path d="M5.5 8h3.5M10.5 4.8l-4 2.4M10.5 11.2l-4-2.4" stroke="#4361EE" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium" style={{ color: "#0D0F1C", fontSize: 15, lineHeight: "22px" }}>
                          Topics Discovery Engine (TDE)
                        </p>
                        <p
                          className="mt-0.5 truncate"
                          style={{ color: "#6B7280", fontSize: 13, lineHeight: "18px" }}
                        >
                          Generate keyword opportunities, topic clusters, and a ready-to…
                        </p>
                      </div>
                      <span className="shrink-0 mt-1"><ChevronRight size={16} /></span>
                    </Link>

                    {/* More coming soon row */}
                    <div
                      className="flex items-center justify-between py-4"
                      style={{ borderTop: "1px solid #F3F4F6" }}
                    >
                      <span style={{ color: "#9CA3AF", fontSize: 14 }}>
                        More product coming soon…
                      </span>
                      {/* SVG_SLOT: 3-D illustration — replace div below with your <Image> */}
                      <div
                        className="shrink-0 svg-slot-light rounded-full"
                        style={{ width: 44, height: 44 }}
                        aria-label="Coming soon illustration"
                      >
                        <span style={{ fontSize: 8 }}>SVG</span>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* ── Resources ── */}
              <li>
                <Link
                  href="/resources"
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: DASHED_BORDER, fontSize: 16, color: "#0D0F1C" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Resources
                  <ChevronRight />
                </Link>
              </li>

              {/* ── Pricing ── */}
              <li>
                <Link
                  href="#pricing"
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: DASHED_BORDER, fontSize: 16, color: "#0D0F1C" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                  <ChevronRight />
                </Link>
              </li>

              {/* ── Login ── */}
              <li>
                <Link
                  href="/login"
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: DASHED_BORDER, fontSize: 16, color: "#0D0F1C" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                  <ChevronRight />
                </Link>
              </li>
            </ul>

            {/* ── Bottom CTA ── */}
            <div className="px-5 pt-6 pb-10 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter email"
                aria-label="Your email address"
                className="w-full h-12 px-5 outline-none text-center text-sm"
                style={{
                  background: "#F3F4F6",
                  borderRadius: 999,
                  color: "#374151",
                  fontSize: 16,
                  lineHeight: "24px",
                }}
              />
              <button
                type="button"
                className="w-full h-12 flex items-center justify-center gap-2 font-semibold text-base"
                style={{ background: "#89E400", color: "#0a1a00", borderRadius: 999 }}
              >
                Join the wait list
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
