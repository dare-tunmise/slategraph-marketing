import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Slategraph and the Topics Discovery Engine.",
};

export default function TermsPage() {
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
            Terms of Service
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
              Slategraph is currently in pre-launch. Our full terms of service
              will be published before the product is generally available.
            </p>
            <p>
              By joining the waitlist, you agree that we may contact you about
              the launch and related product updates. You can unsubscribe at
              any time.
            </p>
            <p>
              Questions before the full terms are published? Reach us at{" "}
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
