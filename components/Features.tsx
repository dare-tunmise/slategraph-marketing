const BORDER = "1px solid rgba(255,255,255,0.1)";

const features = [
  {
    id: "seo-strategy",
    title: "SEO Strategy Generator",
    description:
      "Understand the business before creating content. Slategraph analyzes a website to build a detailed business profile covering audience, products, positioning, competitors, brand voice, and SEO opportunities.",
    imgSlot: "feature-seo-strategy.png",
    textFirst: true,
  },
  {
    id: "topic-graph",
    title: "Topic Graph Builder",
    description:
      "Topic Graph Builder maps your niche into a structured knowledge graph — not a list of keywords. It connects topics, entities, and intent into a system you can actually build content from.",
    imgSlot: "feature-topic-graph.png",
    textFirst: false,
  },
  {
    id: "content-gap",
    title: "Content Gap Detection",
    description:
      "Content Gap Detection scans your domain against competitors and reveals high-impact opportunities you're currently missing. Not just keywords — topics, intent, and strategic blind spots.",
    imgSlot: "feature-content-gap.png",
    textFirst: true,
  },
  {
    id: "generate-briefs",
    title: "Generate briefs",
    description:
      "Generate structured, strategy-backed briefs directly from your topic graph. No guesswork, no manual research — just clear direction your team (or AI) can execute immediately.",
    imgSlot: "feature-generate-briefs.png",
    textFirst: false,
  },
];

/** Purple-gradient image cell with blob decorations and a centered SVG_SLOT */
function FeatureImageCell({ imgSlot, label }: { imgSlot: string; label: string }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #5A5FE8 0%, #4752D6 55%, #3B46C8 100%)",
        minHeight: "clamp(260px, 35vw, 420px)",
      }}
    >
      {/* Dark blob — top-right */}
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "clamp(140px, 22vw, 260px)",
          height: "clamp(140px, 22vw, 260px)",
          background: "rgba(18,20,72,0.65)",
          top: "-15%",
          right: "-8%",
        }}
      />
      {/* Dark blob — bottom-left */}
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "clamp(120px, 18vw, 220px)",
          height: "clamp(120px, 18vw, 220px)",
          background: "rgba(18,20,72,0.55)",
          bottom: "-12%",
          left: "-5%",
        }}
      />

      {/*
        SVG_SLOT: Replace the div below with:
          <Image
            src={`/images/${imgSlot}`}
            alt={label}
            fill
            className="object-contain p-8 md:p-10"
          />
        Make sure to add `position: relative` to the parent if using fill.
      */}
      <div
        className="svg-slot absolute"
        style={{
          inset: "10%",
          borderRadius: 12,
          zIndex: 10,
        }}
        role="img"
        aria-label={`${label} interface preview`}
      >
        <span style={{ fontSize: 10 }}>{imgSlot}</span>
      </div>
    </div>
  );
}

/** Text cell — title + description */
function FeatureTextCell({ title, id, description }: { title: string; id: string; description: string }) {
  return (
    <div
      className="flex flex-col justify-center"
      style={{
        padding: "clamp(32px, 5vw, 64px) clamp(24px, 4vw, 56px)",
      }}
    >
      <h3
        id={id}
        className="text-white font-semibold leading-snug"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h3>
      <p
        className="mt-3 leading-relaxed"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontSize: "clamp(13px, 1.05vw, 15px)",
          color: "rgba(255,255,255,0.58)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      style={{ background: "#0a0a0a" }}
    >
      {/* ── Section header ───────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-20 md:pt-28 pb-14 md:pb-20 text-center">
        {/* Badge */}
        <span
          className="inline-block mb-5 text-xs font-medium text-white"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: 999,
            padding: "6px 16px",
            letterSpacing: "0.01em",
          }}
        >
          Features
        </span>

        {/* H2 */}
        <h2
          id="features-heading"
          className="text-white font-black leading-tight"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 660,
            margin: "0 auto",
          }}
        >
          Everything you need to turn one URL into a full content strategy
        </h2>

        {/* Subtext */}
        <p
          className="mt-4 mx-auto"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(13px, 1.1vw, 15px)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: 480,
            lineHeight: 1.65,
          }}
        >
          From business analysis to publish-ready articles — Slategraph handles the entire workflow in minutes, not weeks.
        </p>
      </div>

      {/* ── Feature rows grid ────────────────────────────────── */}
      <div
        className="mx-auto max-w-7xl"
        style={{ border: BORDER }}
      >
        {features.map((feature, idx) => {
          const isTextFirst = feature.textFirst;

          return (
            <article
              key={feature.id}
              aria-labelledby={`feat-${feature.id}`}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ borderTop: idx === 0 ? "none" : BORDER }}
            >
              {/*
                Mobile: text always comes first (order-1), image always second (order-2).
                Desktop (md+): if textFirst, text is col-1 and image is col-2;
                               if !textFirst, image is col-1 (order-first on md) and text is col-2.
              */}

              {/* — Text cell — */}
              <div
                className={`order-1 ${isTextFirst ? "md:order-1" : "md:order-2"}`}
                style={isTextFirst ? { borderRight: BORDER } : { borderLeft: BORDER }}
              >
                <FeatureTextCell
                  title={feature.title}
                  id={`feat-${feature.id}`}
                  description={feature.description}
                />
              </div>

              {/* — Image cell — */}
              <div className={`order-2 ${isTextFirst ? "md:order-2" : "md:order-1"}`}>
                <FeatureImageCell imgSlot={feature.imgSlot} label={feature.title} />
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom spacer */}
      <div style={{ height: "clamp(48px, 6vw, 80px)" }} />
    </section>
  );
}
