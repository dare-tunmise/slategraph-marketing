import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/Product";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import Comparison from "@/components/Comparison";
import MoreFeatures from "@/components/MoreFeatures";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <main id="main-content">
        <ProductShowcase />
        <Stats />
        <Features />
        <HowItWorks />
        <Showcase />
        <Comparison />
        <MoreFeatures />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
