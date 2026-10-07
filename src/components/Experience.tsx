import React from 'react';
import { ORIGIN_STORY } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#07070d] overflow-hidden">
      {/* Spider-Verse Ambient Highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#a855f7]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#ff2a55]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#160e2b] border border-[#a855f7]/40 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#a855f7]" />
            <span className="text-xs font-code font-bold tracking-widest uppercase text-[#a855f7]">
              CHRONOLOGY
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a55] via-[#a855f7] to-[#00e5ff] chromatic-text">ORIGIN STORY</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9da0b5] leading-relaxed">
            Every superhero has a defining arc. Here is how I evolved from writing my first HTML tag to architecting full-stack MERN applications.
          </p>
        </div>

        {/* Comic Storyline Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Connecting Spider-Web Strand */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a55] via-[#a855f7] to-[#00e5ff] opacity-60" />

          <div className="space-y-12">
            {ORIGIN_STORY.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Central Node Glyph */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d081c] border-2 border-[#ff2a55] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,42,85,0.6)]">
                    <span className="text-xs font-code font-bold text-white">
                      {item.step}
                    </span>
                  </div>

                  {/* Story Card */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-[calc(50%-2.5rem)] bg-[#0d091b] border-2 border-[#1f1733] rounded-2xl p-6 relative group hover:border-[#00e5ff] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.25)]`}
                  >
                    {/* Comic Header Strip */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-code font-bold uppercase tracking-widest text-[#ff2a55] bg-[#220f1e] px-2.5 py-0.5 rounded border border-[#ff2a55]/30">
                        {item.comicTag}
                      </span>
                      <span className="text-[11px] font-code text-[#73738c]">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-2 group-hover:text-[#00e5ff] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9da0b3] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Unlocked Powers / Capabilities */}
                    <div className="space-y-1.5 pt-3 border-t border-[#1b142d] mb-4">
                      {item.keyUnlocks.map((unlock, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#cfd0de]">
                          <ChevronRight className="w-3.5 h-3.5 text-[#00e5ff] shrink-0" />
                          <span>{unlock}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-code px-2 py-0.5 rounded bg-[#160f2a] border border-[#2b1f48] text-[#a4a5ba]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
