/** Constellation / network graph decoration — white dots + connecting lines */
function NetworkGraph() {
  // Nodes [x, y] as % of the 400×420 viewBox
  const nodes = [
    [72,  20], [198, 55], [120, 118], [45,  160],
    [210, 170],[310, 110],[355, 220], [250, 280],
    [140, 300],[60,  260],[170, 380], [300, 360],
    [390, 310],[80,  380], [240, 130],
  ];
  // Edges [nodeA, nodeB]
  const edges = [
    [0,1],[0,2],[1,2],[1,5],[2,3],[2,4],[2,14],
    [3,4],[3,9],[4,5],[4,7],[5,6],[5,14],
    [6,7],[6,12],[7,8],[7,11],[8,9],[8,10],
    [9,13],[10,11],[10,13],[11,12],[12,6],
  ];

  return (
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
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="white" strokeOpacity={0.18} strokeWidth={0.8}
        />
      ))}
      {/* Dots */}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill="white" fillOpacity={0.45} />
      ))}
    </svg>
  );
}

const stats = [
  { value: "7",     label: "Minutes to strategy" },
  { value: "250+",  label: "Minutes to strategy"  },
  { value: "99.9%", label: "Uptime Target"         },
  { value: "0",     label: "Manual Input"          },
];

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Network graph — bottom-left decoration */}
      <NetworkGraph />

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
        {/*
          Desktop: offset the grid ~28% from left so the network graph
          has visual breathing room on the left side.
          Mobile: full width, 2 equal columns.
        */}
        <div
          className="mt-16 md:mt-24"
          style={{ marginLeft: 0 }}
        >
          <dl
            className="grid grid-cols-2"
            style={{
              /* On md+ screens push the grid right; let the graph breathe on left */
              paddingLeft: "clamp(0px, 28vw, 340px)",
              columnGap: "clamp(40px, 6vw, 100px)",
              rowGap: "clamp(40px, 6vw, 72px)",
            }}
            aria-label="SlateGraph key metrics"
          >
            {stats.map(({ value, label }) => (
              <div
                key={value}
                className="flex flex-col"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.18)",
                  paddingTop: "clamp(14px, 2vw, 22px)",
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
                  {value}
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
