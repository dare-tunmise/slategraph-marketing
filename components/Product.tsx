"use client";

import { useState } from 'react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', image: '/dashboard-preview.png' },
  { id: 'bip', label: 'BIP', image: '/bip-preview.png' },
  { id: 'articles', label: 'Articles', image: '/articles-preview.png' },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Tab Navigation: Floating Pill Style */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex items-center p-1 bg-[#F5F5F7] rounded-[32px] border border-[#EEEEEE]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-8 py-2.5 text-[15px] font-medium rounded-[28px] transition-all duration-200
                  ${activeTab === tab.id 
                    ? 'bg-white text-[#0A0A14] shadow-sm' 
                    : 'text-[#6B7280] hover:text-[#0A0A14]'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interface Container: Matches Marketing site (3).jpg */}
        <div className="relative mx-auto max-w-[1100px] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.08)] border border-[#F0F0F0] overflow-hidden bg-white">
          {/* Dynamic Image Display */}
          <div className="aspect-[16/10] w-full">
            {tabs.map((tab) => (
              <img
                key={tab.id}
                src={tab.image}
                alt={`${tab.label} Interface`}
                className={`
                  absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500
                  ${activeTab === tab.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}