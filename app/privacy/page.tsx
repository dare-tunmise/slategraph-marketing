import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Slategraph collects, uses, and protects your information.",
};

const LAST_UPDATED = "May 4, 2026";

const sections: { n: string; title: string; body: React.ReactNode }[] = [
  {
    n: "1",
    title: "Introduction",
    body: (
      <>
        <p>
          Welcome to Slategraph. We value your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, and safeguard your information when you use our
          platform, including the Topics Discovery Engine (TDE).
        </p>
        <p>By using Slategraph, you agree to the terms outlined in this policy.</p>
      </>
    ),
  },
  {
    n: "2",
    title: "Information We Collect",
    body: (
      <>
        <p>We collect the following types of information:</p>
        <p className="font-semibold text-[#0A0A14] mt-6">a. Information You Provide</p>
        <ul>
          <li>Name and email address (e.g., waitlist, account creation)</li>
          <li>Company or website URL submitted for analysis</li>
          <li>Any content or inputs you provide (e.g., domains, prompts, feedback)</li>
        </ul>
        <p className="font-semibold text-[#0A0A14] mt-6">b. Automatically Collected Information</p>
        <ul>
          <li>Device and browser type</li>
          <li>IP address</li>
          <li>Usage data (pages visited, interactions, session duration)</li>
          <li>Cookies and tracking technologies</li>
        </ul>
        <p className="font-semibold text-[#0A0A14] mt-6">c. Generated Data</p>
        <ul>
          <li>Business Information Profiles (BIP)</li>
          <li>Entity graphs, topic clusters, briefs, and articles</li>
          <li>AI-generated outputs based on your submitted domain or inputs</li>
        </ul>
      </>
    ),
  },
  {
    n: "3",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use your information to:</p>
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
    title: "Data Retention",
    body: (
      <>
        <p>We retain your data:</p>
        <ul>
          <li>As long as necessary to provide our services</li>
          <li>To improve our models and outputs</li>
          <li>Until you request deletion (where applicable)</li>
        </ul>
      </>
    ),
  },
  {
    n: "5",
    title: "Cookies and Tracking",
    body: (
      <>
        <p>We use cookies to:</p>
        <ul>
          <li>Improve user experience</li>
          <li>Analyze traffic and usage patterns</li>
          <li>Remember preferences</li>
        </ul>
      </>
    ),
  },
  {
    n: "6",
    title: "Data Security",
    body: (
      <>
        <p>We use cookies to:</p>
        <ul>
          <li>Secure servers and encryption</li>
          <li>Access controls and monitoring</li>
          <li>Regular security updates</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
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
