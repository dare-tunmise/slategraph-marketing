import Link from "next/link";

const footerLinks = {
  PRODUCT: [
    { label: "FEATURES", href: "#features" },
    { label: "PRICING", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
  COMPANY: [
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ],
  LEGAL: [
    { label: "LEGAL", href: "/legal" },
    { label: "PRIVACY", href: "/privacy" },
    { label: "TERMS", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#F0F0F0] pt-16 md:pt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4">
          
          {/* Brand Quadrant */}
          <div className="pb-12 md:pb-24 md:pr-12">
            <div className="flex items-center gap-3 mb-6">
              {/* BRAND LOGO ICON: Matches the blue rounded diamond from your design */}
              <div className="w-10 h-10 bg-[#4361EE] rounded-lg flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)"/>
                 </svg>
              </div>
              <span className="text-[18px] font-bold text-[#0A0A14]">Slategraph</span>
            </div>
            <p className="text-[18px] text-[#6B7280] leading-snug max-w-[240px] serif italic">
              ai-powered content strategy engine product
            </p>
          </div>

          {/* Navigation Columns - Built as an integrated grid */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div 
              key={group} 
              className="border-t md:border-t-0 md:border-l border-[#F0F0F0] py-12 md:py-0 md:pl-12 md:pb-24"
            >
              <h3 className="text-[14px] font-bold tracking-widest text-[#0A0A14] mb-8">
                {group}
              </h3>
              <ul className="flex flex-col gap-6">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium text-[#6B7280] hover:text-[#4361EE] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER WATERMARK AREA */}
      <div className="relative mt-12 md:mt-20 border-t border-[#F0F0F0] pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           {/* SVG PLACEHOLDER: 
             The massive 'SLATEGRAPH' text at the bottom.
             I have provided a div container where you can drop your custom SVG.
           */}
           <div className="w-full h-auto flex justify-center opacity-[0.08] select-none pointer-events-none">
              {/* Replace the text below with your <svg> from Figma */}
                      <img 
          src="/footer-slategraph.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
              {/* <span style={{ fontSize: 'clamp(5rem, 15vw, 15rem)', fontWeight: 900, letterSpacing: '-0.05em' }}>
                SLATEGRAPH
              </span> */}
           </div>
        </div>
      </div>
    </footer>
  );
}