import Link from "next/link";

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
      /* Exact gradient from Figma design */
      style={{ background: "linear-gradient(to bottom, #010B39, #1A2F96)" }}
    >
      {/* SPIRAL ASSET: Positioned exactly per your Figma specs */}
      <div 
        className="absolute pointer-events-none opacity-100"
        style={{
          width: "959px",
          height: "764px",
          top: "50px",
          left: "700px",
        }}
      >
        <img 
          src="/spiral-graphic.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h2
            id="cta-heading"
            className="font-bold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
          >
            Ready to Build <br /> Authority?
          </h2>
          
          <p className="mt-6 text-[16px] md:text-[18px] text-white/60">
            From URL to complete content strategy in 7 minutes.
          </p>

          {/* Waitlist Input - Fixed Sizing and Button Warping */}
          <div className="mt-10">
            <form className="flex flex-col md:flex-row gap-3 md:gap-0 p-1.5 rounded-[40px] md:bg-white/10 md:border md:border-white/10 max-w-[480px]">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-grow bg-white/10 border border-white/10 md:bg-transparent md:border-none px-6 py-4 rounded-[30px] md:rounded-none text-white placeholder:text-white/40 focus:outline-none text-[15px]"
                required
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-[#AAFF47] hover:bg-[#96E63F] text-[#010B39] font-bold px-8 py-4 rounded-[30px] transition-all flex items-center justify-center gap-2 shrink-0"
              >
                Join the wait list
                <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
