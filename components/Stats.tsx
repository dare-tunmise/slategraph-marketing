"use client";
import { useEffect, useRef, useState } from "react";

/** Parse "250+", "99.9%", "7", "0" → { num, suffix, decimals } */
function parseStat(str: string) {
  const m = str.match(/^([\d.]+)([^0-9.]*)$/);
  if (!m) return { num: 0, suffix: str, decimals: 0 };
  const decimals = m[1].includes(".") ? m[1].split(".")[1].length : 0;
  return { num: parseFloat(m[1]), suffix: m[2], decimals };
}

/** Animated count-up number */
function AnimatedNumber({ raw, active }: { raw: string; active: boolean }) {
  const { num, suffix, decimals } = parseStat(raw);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(parseFloat((num * ease).toFixed(decimals)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setVal(num);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, num, decimals]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val);
  return <>{display}{suffix}</>;
}

const stats = [
  { value: "7",     label: "Minutes to strategy" },
  { value: "250+",  label: "Topics per run"      },
  { value: "99.9%", label: "Uptime Target"       },
  { value: "0",     label: "Manual Input"        },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="stats-heading"
      className="relative overflow-hidden"
      style={{
        background: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Spiral graphic — bottom-left decoration */}
      <img
        src="/icons/spiral.svg"
        alt=""
        aria-hidden
        className="absolute bottom-0 left-0 pointer-events-none select-none"
        style={{
          width: "clamp(320px, 42vw, 580px)",
          height: "auto",
          opacity: 0.9,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 py-20 md:py-28">

        {/* ── Description text ────────────────────────────── */}
        <p
          id="stats-heading"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.5rem, 3.5vw, 48px)",
            lineHeight: 1.1917,
            letterSpacing: "-0.02em",
            maxWidth: "clamp(320px, 65vw, 880px)",
          }}
        >
          <span style={{ color: "#ffffff" }}>
            TDE maps your industry as a network of interconnected concepts,
            then uses that structure to generate what to write,&nbsp;
          </span>
          <span style={{ color: "rgba(255,255,255,0.38)" }}>
            how it connects, and what to publish first.
          </span>
        </p>

        {/* ── Stats grid ──────────────────────────────────── */}
        <div className="mt-16 md:mt-24">
          <dl
            className="grid grid-cols-2"
            style={{
              paddingLeft: "clamp(0px, 32vw, 420px)",
              columnGap: "clamp(40px, 6vw, 100px)",
              rowGap: "clamp(40px, 6vw, 72px)",
            }}
            aria-label="SlateGraph key metrics"
          >
            {stats.map(({ value, label }, i) => (
              <div
                key={value}
                className="flex flex-col"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.18)",
                  paddingTop: "clamp(14px, 2vw, 22px)",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(16px)",
                  transition: active ? `opacity 0.5s ease ${0.1 + i * 0.1}s, transform 0.5s ease ${0.1 + i * 0.1}s` : "none",
                }}
              >
                <dd
                  className="leading-none text-white"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontWeight: 500,
                    fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  <AnimatedNumber raw={value} active={active} />
                </dd>
                <dt
                  className="mt-3 md:mt-4"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "clamp(11px, 1.1vw, 13px)",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Bottom spacer so spiral has room on mobile */}
        <div className="md:hidden" style={{ height: 240 }} />
      </div>
    </section>
  );
}
