import React from 'react';
import { Code, Compass, Cpu, Layers, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#08080f]/90 overflow-hidden">
      {/* Spider-Verse Ambient Highlights */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#ff2a55]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#150d28] border border-[#a855f7]/40 mb-3">
            <Zap className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-code font-bold tracking-widest uppercase text-[#00e5ff]">
              ORIGIN DOSSIER
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            ENTER MY <span className="text-[#ff2a55] chromatic-text">SPIDER-VERSE</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9fa0b5] leading-relaxed">
            Get behind the mask. How I engineer web applications, bridge design with code, and build across dimensions.
          </p>
        </div>

        {/* Comic-Panel Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Panel 1: THE DEVELOPER (Large Featured Panel) */}
          <div className="md:col-span-7 bg-gradient-to-br from-[#120c24] via-[#0d091a] to-[#07050f] border-2 border-[#261d3d] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#ff2a55]/80 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Comic Halftone Pattern */}
            <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
            
            {/* Corner Spider Badge */}
            <div className="absolute top-0 right-0 bg-[#ff2a55] text-white px-4 py-1 text-xs font-display tracking-widest uppercase rounded-bl-xl shadow-md">
              PANEL #01
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#211438] border border-[#ff2a55]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-[#ff2a55]" />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-3 flex items-center gap-3">
                THE DEVELOPER
              </h3>

              <p className="text-base text-[#cfd0df] leading-relaxed mb-6 font-medium">
                Frontend and full-stack development enthusiast focused on creating responsive and interactive web experiences.
              </p>

              <p className="text-sm text-[#8f92a9] leading-relaxed mb-6">
                I don’t just write code; I architect fluid digital interfaces. From crafting clean, reusable React components to writing resilient REST APIs with Express and Node.js, my mission is to make web software feel fast, accessible, and intuitive.
              </p>

              {/* Speech Bubble Insight */}
              <div className="relative mt-4 bg-[#1b1233] border border-[#00e5ff]/50 rounded-2xl p-4 text-xs sm:text-sm text-[#e0f2fe] flex items-start gap-3 shadow-[0_4px_15px_rgba(0,229,255,0.15)]">
                <MessageSquare className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#00e5ff] mr-1.5 font-code">Spider-Sense Note:</span>
                  "Great code doesn't just pass tests — it delivers a seamless 60 frames-per-second experience on any screen dimension."
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: THE BUILDER */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#120c24] via-[#0d091a] to-[#07050f] border-2 border-[#261d3d] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#00e5ff]/80 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="absolute inset-0 bg-halftone-blue opacity-25 pointer-events-none" />

            <div className="absolute top-0 right-0 bg-[#00e5ff] text-[#07070b] px-4 py-1 text-xs font-display tracking-widest uppercase font-bold rounded-bl-xl shadow-md">
              PANEL #02
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#0e1d2e] border border-[#00e5ff]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-[#00e5ff]" />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-3">
                THE BUILDER
              </h3>

              <p className="text-base text-[#cfd0df] leading-relaxed mb-4 font-medium">
                I enjoy turning ideas into real websites and applications.
              </p>

              <p className="text-sm text-[#8f92a9] leading-relaxed mb-6">
                Whether cloning precision interfaces like Apple or building end-to-end full-stack e-commerce stores, I take ownership from the first Figma frame to the live production deployment on Vercel.
              </p>
            </div>

            {/* Core Values tags without pills */}
            <div className="relative z-10 pt-4 border-t border-[#231b38] flex flex-wrap items-center gap-y-2 text-xs text-[#9d9eb5]">
              <span className="text-white font-medium">Pixel Precision</span>
              <span className="mx-2 text-[#ff2a55]">/</span>
              <span className="text-white font-medium">Clean Architecture</span>
              <span className="mx-2 text-[#00e5ff]">/</span>
              <span className="text-white font-medium">Zero Bloat</span>
            </div>
          </div>

          {/* Panel 3: THE JOURNEY */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#120c24] via-[#0d091a] to-[#07050f] border-2 border-[#261d3d] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#a855f7]/80 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

            <div className="absolute top-0 right-0 bg-[#a855f7] text-white px-4 py-1 text-xs font-display tracking-widest uppercase rounded-bl-xl shadow-md">
              PANEL #03
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#231238] border border-[#a855f7]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-[#a855f7]" />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-3">
                THE JOURNEY
              </h3>

              <p className="text-base text-[#cfd0df] leading-relaxed mb-4 font-medium">
                Currently expanding my skills across React, JavaScript and the MERN stack.
              </p>

              <p className="text-sm text-[#8f92a9] leading-relaxed mb-4">
                Constantly exploring cutting-edge web patterns: server-side state, modern bundlers, TypeScript, and micro-interactions. Every project is a new multiverse mission to level up.
              </p>

              {/* Comic Action Bubble */}
              <div className="mt-4 inline-block bg-[#ff2a55]/15 border border-[#ff2a55]/60 text-[#ff8099] rounded-xl px-3.5 py-2 text-xs font-code font-bold">
                ⚡ CONSTANTLY ITERATING & DEPLOYING
              </div>
            </div>
          </div>

          {/* Panel 4: DIMENSIONAL PILLARS (Guarantees & Standards) */}
          <div className="md:col-span-7 bg-gradient-to-br from-[#120c24] via-[#0d091a] to-[#07050f] border-2 border-[#261d3d] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#00e5ff]/80 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-halftone-blue opacity-25 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#142338] border border-[#00e5ff]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#00e5ff]" />
                </div>
                <span className="font-code text-xs text-[#00e5ff] tracking-wider uppercase">
                  ENGINEERING CODEC
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-4">
                HOW I DELIVER FOR CLIENTS & TEAMS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-[#150f28]/80 border border-[#2d224b]">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <span className="text-[#ff2a55]">✦</span> Responsive Mastery
                  </div>
                  <p className="text-xs text-[#8f92a9] leading-relaxed">
                    Flawless UI scaling across mobile phones, tablets, laptops, and ultra-wide screens.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#150f28]/80 border border-[#2d224b]">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <span className="text-[#00e5ff]">✦</span> Modern React Ecosystem
                  </div>
                  <p className="text-xs text-[#8f92a9] leading-relaxed">
                    Custom hooks, strict prop types, clean directory structures, and optimized re-renders.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#150f28]/80 border border-[#2d224b]">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <span className="text-[#a855f7]">✦</span> Git & Collaboration
                  </div>
                  <p className="text-xs text-[#8f92a9] leading-relaxed">
                    Descriptive commit logs, branch workflows, and clean code documentation.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#150f28]/80 border border-[#2d224b]">
                  <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <span className="text-[#22c55e]">✦</span> Production Delivery
                  </div>
                  <p className="text-xs text-[#8f92a9] leading-relaxed">
                    Vercel deployments, custom domains, lightning-fast edge CDN caching, and SSL security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
