import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Slategraph and the Topics Discovery Engine.",
};

const faqs = [
  {
    q: "What is Slategraph?",
    a: "Slategraph is a Topics Discovery Engine. You give it a domain, and it returns a complete content strategy: a knowledge graph of your industry, topic clusters, content briefs, internal linking, and publish-ready articles.",
  },
  {
    q: "How long does it take to generate a strategy?",
    a: "Roughly 10 to 12 minutes from URL to a full strategy with briefs and a recommended publishing order.",
  },
  {
    q: "How is this different from typical SEO tools?",
    a: "Most SEO tools group keywords. Slategraph builds a knowledge graph and turns it into structured strategy. Internal links are computed from real relationships, not guessed.",
  },
  {
    q: "Do I need to know SEO to use it?",
    a: "No. The whole point is to remove the manual research and strategy assembly that usually requires an SEO specialist. You paste a URL and review the output.",
  },
  {
    q: "When can I use it?",
    a: "We're rolling out access in waves to people on the waitlist. Join the waitlist on the homepage and we'll let you know as soon as your spot opens.",
  },
  {
    q: "How can I contact you?",
    a: "Email us at business@slategraph.com. We read every message.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-28">
          <h1
            className="text-[#0A0A14]"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="mt-4 text-[#6B7280]"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 16 }}
          >
            If your question isn&apos;t answered here, drop us a note at{" "}
            <a href="mailto:business@slategraph.com" className="text-[#4262FF] hover:underline">
              business@slategraph.com
            </a>
            .
          </p>

          <dl className="mt-14 divide-y divide-[#F0F0F0]">
            {faqs.map((item) => (
              <div key={item.q} className="py-7">
                <dt
                  className="text-[#0A0A14]"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.q}
                </dt>
                <dd
                  className="mt-3 text-[#4B5563] leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 16 }}
                >
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <Footer />
    </>
  );
}
