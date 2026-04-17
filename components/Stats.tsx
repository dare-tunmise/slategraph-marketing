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
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
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

/** Constellation / network graph with infinite draw-in spiral animation */
function NetworkGraph({ active }: { active: boolean }) {
  const nodes: [number, number][] = [
    [72,  20], [198, 55], [120, 118], [45,  160],
    [210, 170],[310, 110],[355, 220], [250, 280],
    [140, 300],[60,  260],[170, 380], [300, 360],
    [390, 310],[80,  380], [240, 130],
  ];
  const edges: [number, number][] = [
    [0,1],[0,2],[1,2],[1,5],[2,3],[2,4],[2,14],
    [3,4],[3,9],[4,5],[4,7],[5,6],[5,14],
    [6,7],[6,12],[7,8],[7,11],[8,9],[8,10],
    [9,13],[10,11],[10,13],[11,12],[12,6],
  ];

  // Each edge draws in over 25% of the cycle, holds until 60%, fades by 80%
  // Stagger: 0.08s between edges; cycle long enough for last edge to fully draw
  const CYCLE = 7;         // seconds per full loop
  const EDGE_STAGGER = 0.08;
  const NODE_STAGGER = 0.07;
  const NODE_OFFSET = 0.9; // nodes start appearing ~0.9s into the sequence

  return (
    <>
      <style>{`
        @keyframes sgDrawEdge {
          0%   { stroke-dashoffset: var(--el); stroke-opacity: 0; }
          6%   { stroke-opacity: 0.18; }
          28%  { stroke-dashoffset: 0; stroke-opacity: 0.18; }
          62%  { stroke-dashoffset: 0; stroke-opacity: 0.18; }
          78%  { stroke-opacity: 0; }
          100% { stroke-dashoffset: var(--el); stroke-opacity: 0; }
        }
        @keyframes sgNodePop {
          0%, 100% { transform: scale(0); fill-opacity: 0; }
          22%      { transform: scale(1.35); fill-opacity: 0.65; }
          32%, 62% { transform: scale(1);   fill-opacity: 0.45; }
          80%      { transform: scale(0);   fill-opacity: 0; }
        }
      `}</style>

      <svg
        aria-hidden
        focusable="false"
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 pointer-events-none select-none"
        style={{ width: "clamp(260px, 35vw, 420px)", height: "auto" }}
      >
        {/* Lines */}
        {edges.map(([a, b], i) => {
          const [x1, y1] = nodes[a];
          const [x2, y2] = nodes[b];
          const len = Math.round(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
          return (
            <line
              key={i}
              x1={x1} y1={y1}
              x2={x2} y2={y2}
              stroke="white"
              strokeWidth={0.8}
              style={{
                ["--el" as string]: len,
                strokeDasharray: len,
                strokeDashoffset: len,
                strokeOpacity: 0,
                animation: active
                  ? `sgDrawEdge ${CYCLE}s ease-in-out ${i * EDGE_STAGGER}s infinite`
                  : "none",
              }}
            />
          );
        })}

        {/* Dots */}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x} cy={y} r={2.5}
            fill="white"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              fillOpacity: 0,
              transform: "scale(0)",
              animation: active
                ? `sgNodePop ${CYCLE}s ease-in-out ${NODE_OFFSET + i * NODE_STAGGER}s infinite`
                : "none",
            }}
          />
        ))}
      </svg>
    </>
  );
}

const stats = [
  { value: "7",     label: "Minutes to strategy" },
  { value: "250+",  label: "Topics per run"       },
  { value: "99.9%", label: "Uptime Target"        },
  { value: "0",     label: "Manual Input"         },
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
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Network graph — bottom-left decoration */}
      <NetworkGraph active={active} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 py-20 md:py-28">

        {/* ── Description text ────────────────────────────── */}
        <p
          id="stats-heading"
          className="font-bold leading-tight"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(1.625rem, 3.4vw, 2.875rem)",
            lineHeight: 1.18,
            maxWidth: "clamp(320px, 60vw, 740px)",
            letterSpacing: "-0.01em",
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
        <div
          className="mt-16 md:mt-24"
          style={{ marginLeft: 0 }}
        >
          <dl
            className="grid grid-cols-2"
            style={{
              paddingLeft: "clamp(0px, 28vw, 340px)",
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
                  className="font-extrabold leading-none text-white"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  <AnimatedNumber raw={value} active={active} />
                </dd>
                <dt
                  className="mt-2 md:mt-3"
                  style={{
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

        {/* Bottom spacer so graph has room on mobile */}
        <div className="md:hidden" style={{ height: 200 }} />
      </div>
    </section>
  );
}
