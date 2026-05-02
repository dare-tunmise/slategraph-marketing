import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Slategraph collects, uses, and protects your information.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p
            className="mt-4 text-[#6B7280]"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14 }}
          >
            Last updated: April 2026
          </p>

          <div
            className="mt-12 space-y-6 text-[#374151] leading-relaxed"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 16 }}
          >
            <p>
              We&apos;re finalizing our privacy policy ahead of launch. The full
              document will detail how we collect, use, store, and protect your
              information when you join our waitlist or use Slategraph.
            </p>
            <p>
              In the meantime, the only data we hold from waitlist signups is
              your email address, which we use solely to notify you about
              launch and product updates. We do not sell or share it.
            </p>
            <p>
              Questions before the full policy is published? Reach us at{" "}
              <a href="mailto:business@slategraph.com" className="text-[#4262FF] hover:underline">
                business@slategraph.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
