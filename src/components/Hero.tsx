import React from 'react';
import { ArrowDown, Code2, ExternalLink, Github, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onViewWorkClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Spider-Verse Atmospheric Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#ff2a55]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-[500px] h-[500px] bg-[#00e5ff]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a0b36]/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Halftone Overlay Backdrop */}
      <div className="absolute inset-0 bg-halftone pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Dimension Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#130d24] border border-[#ff2a55]/40 mb-6 shadow-[0_0_15px_rgba(255,42,85,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#ff2a55] animate-ping" />
              <span className="text-xs font-code font-semibold tracking-wider uppercase text-[#00e5ff]">
                Dimension Earth-616 // Active Portfolio
              </span>
            </div>

            {/* Main Greeting and Title */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white mb-4">
              HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a55] via-[#f43f5e] to-[#00e5ff] chromatic-text">MAAZ</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#c4c4d4] mb-6 flex items-center gap-3">
              <span>Web Developer</span>
              <span className="text-[#ff2a55]" aria-hidden="true">&</span>
              <span className="text-[#00e5ff]">MERN Stack Developer</span>
            </h2>

            {/* Short Professional Description */}
            <p className="text-base sm:text-lg text-[#9da0b5] max-w-xl leading-relaxed mb-8">
              {PERSONAL_INFO.bioShort} Specialized in engineering fast, responsive, and tactile web applications with production-grade React architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onViewWorkClick}
                className="relative group px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#ff2a55] to-[#dc2626] rounded-xl shadow-[0_0_25px_rgba(255,42,85,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,42,85,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">View My Work</span>
                <ArrowDown className="relative z-10 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-[#120c22] border border-[#00e5ff]/50 rounded-xl transition-all duration-300 hover:border-[#00e5ff] hover:bg-[#1a1233] hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#00e5ff]" />
                <span>Contact Me</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 text-sm font-bold tracking-wider uppercase text-[#a1a1b5] hover:text-white bg-[#0e091a] border border-[#261f3d] rounded-xl transition-all duration-300 hover:border-[#a855f7] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center gap-2"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-[#a855f7]" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-6 border-t border-[#1e1732] grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-xl">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl text-white tracking-wide">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#828299] font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Futuristic Spider-Verse Developer Avatar Visual */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              {/* Concentric Spider Web Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#ff2a55]/25 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-[#00e5ff]/20 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-[#a855f7]/25" />

              {/* Spider Web Radial Vectors */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full text-[#ff2a55]/15 pointer-events-none"
              >
                <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="60" y1="60" x2="340" y2="340" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="60" y1="340" x2="340" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Glowing Rim Light Backdrops */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#ff2a55]/30 rounded-full blur-2xl" />
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#00e5ff]/30 rounded-full blur-2xl" />

              {/* Central Abstract Developer Avatar Card */}
              <div className="relative w-[300px] sm:w-[340px] h-[360px] sm:h-[400px] rounded-3xl bg-gradient-to-b from-[#140e26] via-[#0d091a] to-[#07050e] border-2 border-[#2b2149] shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(255,42,85,0.1)] overflow-hidden flex flex-col items-center justify-between p-6 group">
                {/* Comic Halftone Background Texture inside card */}
                <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

                {/* Top Terminal Status Header */}
                <div className="relative z-10 w-full flex items-center justify-between pb-3 border-b border-[#251b40]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff2a55]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" />
                  </div>
                  <div className="text-[10px] font-code text-[#00e5ff] tracking-widest uppercase">
                    DIMENSION // 616
                  </div>
                </div>

                {/* Center: Abstract Developer Silhouette + Spider-Verse Rim Lighting */}
                <div className="relative z-10 my-auto flex flex-col items-center">
                  <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-[#160d2b] to-[#251547] border border-[#3e2b6e] flex items-center justify-center shadow-[0_0_30px_rgba(255,42,85,0.3)] transition-transform duration-500 group-hover:scale-105">
                    {/* Stylized Developer Silhouette with Neon Rim */}
                    <svg
                      viewBox="0 0 100 100"
                      className="w-28 h-28"
                      fill="none"
                    >
                      {/* Spider web aura behind head */}
                      <path
                        d="M50 15 L70 30 L80 50 L70 70 L50 85 L30 70 L20 50 L30 30 Z"
                        stroke="#00e5ff"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        opacity="0.4"
                      />
                      {/* Developer Silhouette Head */}
                      <circle cx="50" cy="40" r="16" fill="#090514" stroke="#ff2a55" strokeWidth="2.5" />
                      {/* Stylized Eye Visor (Spider-Verse glowing lenses) */}
                      <path
                        d="M40 37 Q46 33 50 40 Q46 43 40 37 Z"
                        fill="#00e5ff"
                        className="animate-pulse"
                      />
                      <path
                        d="M60 37 Q54 33 50 40 Q54 43 60 37 Z"
                        fill="#00e5ff"
                        className="animate-pulse"
                      />
                      {/* Torso */}
                      <path
                        d="M26 80 C26 62 36 58 50 58 C64 58 74 62 74 80 Z"
                        fill="#090514"
                        stroke="#00e5ff"
                        strokeWidth="2.5"
                      />
                      {/* Spider Web Emblem Chest Pattern */}
                      <path
                        d="M50 62 L50 76 M42 66 L58 66 M44 72 L56 72"
                        stroke="#ff2a55"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Edge Rim Lighting */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#ff2a55] rounded-tl-lg" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#00e5ff] rounded-br-lg" />
                  </div>

                  {/* Coder Title */}
                  <div className="mt-4 text-center">
                    <span className="font-display text-xl text-white tracking-widest">
                      MAAZ.DEV
                    </span>
                    <p className="text-[11px] font-code text-[#ff2a55]">
                      MERN_STACK_SPECIALIST
                    </p>
                  </div>
                </div>

                {/* Bottom Tech Indicator */}
                <div className="relative z-10 w-full pt-3 border-t border-[#251b40] flex items-center justify-between text-[11px] font-code text-[#8888a3]">
                  <span className="flex items-center gap-1 text-[#00e5ff]">
                    <Terminal className="w-3 h-3" />
                    <span>REACT 19</span>
                  </span>
                  <span className="text-[#ff2a55] font-semibold">
                    STATUS: READY
                  </span>
                </div>
              </div>

              {/* Floating Code Snippet 1 (Top Left) */}
              <div className="absolute -top-4 -left-6 z-20 bg-[#0c0817]/90 backdrop-blur-md border border-[#ff2a55]/60 rounded-xl p-3 shadow-[0_8px_25px_rgba(255,42,85,0.3)] hidden sm:block animate-bounce [animation-duration:4s]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#ff2a55]" />
                  <span className="text-[10px] font-code font-bold text-[#ff2a55]">UseSpiderSense.ts</span>
                </div>
                <div className="text-[11px] font-code text-[#c0c0d8]">
                  <span className="text-[#00e5ff]">const</span> alert = <span className="text-[#ff2a55]">detectBug</span>();
                </div>
              </div>

              {/* Floating Code Snippet 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-6 z-20 bg-[#0c0817]/90 backdrop-blur-md border border-[#00e5ff]/60 rounded-xl p-3 shadow-[0_8px_25px_rgba(0,229,255,0.3)] hidden sm:block animate-bounce [animation-duration:5s]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span className="text-[10px] font-code font-bold text-[#00e5ff]">Dimension.mern</span>
                </div>
                <div className="text-[11px] font-code text-[#c0c0d8]">
                  deploy(<span className="text-[#a855f7]">'Vercel'</span>, <span className="text-[#00e5ff]">60fps</span>);
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
