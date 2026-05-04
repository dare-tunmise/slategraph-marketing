import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of Slategraph and the Topics Discovery Engine.",
};

const LAST_UPDATED = "May 4, 2026";

const sections: { n: string; title: string; body: React.ReactNode }[] = [
  {
    n: "1",
    title: "Acceptance of Terms",
    body: (
      <p>
        By accessing or using Slategraph, including the Topics Discovery Engine
        (TDE), you agree to be bound by these Terms of Use. If you do not
        agree, you may not use the platform.
      </p>
    ),
  },
  {
    n: "2",
    title: "Description of Service",
    body: (
      <>
        <p>
          Slategraph provides AI-powered tools that transform website inputs
          into structured content strategies, including:
        </p>
        <ul>
          <li>Business Information Profiles (BIP)</li>
          <li>Entity graphs and topic clusters</li>
          <li>AI-generated insights and recommendations</li>
          <li>Content briefs and articles</li>
        </ul>
      </>
    ),
  },
  {
    n: "3",
    title: "Eligibility",
    body: (
      <>
        <p>
          You must be at least 18 years old (or the legal age in your
          jurisdiction) to use Slategraph.
        </p>
        <p>By using the platform, you confirm that:</p>
        <ul>
          <li>Provide and improve Slategraph services</li>
          <li>Analyze usage trends and improve performance</li>
          <li>Generate content strategies, topic maps, and articles</li>
          <li>Communicate with you (updates, product announcements)</li>
          <li>Prevent fraud, abuse, or misuse of the platform</li>
        </ul>
      </>
    ),
  },
  {
    n: "4",
    title: "User Responsibilities",
    body: (
      <>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and lawful information</li>
          <li>Only submit websites or data you have the right to use</li>
          <li>Use Slategraph in compliance with applicable laws</li>
          <li>Not misuse, disrupt, or attempt to exploit the platform</li>
        </ul>
      </>
    ),
  },
  {
    n: "5",
    title: "Use of AI-Generated Content",
    body: (
      <>
        <p>Slategraph generates content using AI.</p>
        <p>You acknowledge that:</p>
        <ul>
          <li>Outputs may not always be accurate or complete</li>
          <li>You are responsible for reviewing and validating all outputs</li>
          <li>You assume all risks associated with using generated content</li>
        </ul>
      </>
    ),
  },
  {
    n: "6",
    title: "Intellectual Property",
    body: (
      <>
        <p className="font-semibold text-[#0A0A14] mt-2">a. Platform Ownership</p>
        <p>
          All rights, title, and interest in Slategraph (including software,
          design, and systems) remain the property of Slategraph.
        </p>
        <p className="font-semibold text-[#0A0A14] mt-6">b. Your Inputs</p>
        <p>You retain ownership of the data and content you submit.</p>
        <p className="font-semibold text-[#0A0A14] mt-6">c. Generated Outputs</p>
        <ul>
          <li>You may use the outputs generated for your business or personal use</li>
          <li>Slategraph may use anonymized data to improve the platform</li>
        </ul>
      </>
    ),
  },
  {
    n: "7",
    title: "Privacy",
    body: (
      <p>
        Your use of Slategraph is also governed by our{" "}
        <a href="/privacy" className="text-[#4262FF] hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    ),
  },
  {
    n: "8",
    title: "Third-Party Services",
    body: (
      <p>
        Slategraph may rely on third-party infrastructure or services. We are
        not responsible for the performance or policies of those services.
      </p>
    ),
  },
  {
    n: "9",
    title: "Availability and Changes",
    body: (
      <>
        <p>We do not guarantee:</p>
        <ul>
          <li>Continuous or uninterrupted access</li>
          <li>That the platform will always be error-free</li>
        </ul>
        <p className="mt-4">We may:</p>
        <ul>
          <li>Modify or discontinue features</li>
          <li>Restrict access without notice</li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Banner */}
        <section
          className="relative overflow-hidden"
          style={{ background: "#ffffff" }}
        >
          <img
            src="/terms-pattern.svg"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 py-20 md:py-28">
            <span
              className="inline-block bg-white"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 13,
                color: "#6B7280",
                padding: "8px 16px",
                borderRadius: 25,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)",
                letterSpacing: "0.01em",
              }}
            >
              Last updated on {LAST_UPDATED}
            </span>
            <h1
              className="mt-6"
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontWeight: 600,
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#0A0A14",
              }}
            >
              Terms of Use
            </h1>
          </div>
        </section>

        {/* Content */}
        <div
          className="mx-auto max-w-3xl px-6 lg:px-8 py-16 md:py-24"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.n} aria-labelledby={`section-${section.n}`}>
                <h2
                  id={`section-${section.n}`}
                  className="text-[#0A0A14]"
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontWeight: 600,
                    fontSize: 24,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {section.n}. {section.title}
                </h2>
                <div className="mt-4 text-[#4B5563] leading-relaxed terms-prose">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .terms-prose p { margin: 0 0 0.75rem; }
        .terms-prose p:last-child { margin-bottom: 0; }
        .terms-prose ul {
          list-style: disc;
          padding-left: 1.25rem;
          margin: 0.5rem 0 0;
        }
        .terms-prose li { margin: 0.4rem 0; padding-left: 0.25rem; }
      `}</style>
    </>
  );
}
