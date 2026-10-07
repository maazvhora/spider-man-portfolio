import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Terminal, 
  Atom, 
  Server, 
  Database, 
  GitBranch, 
  Box, 
  Rocket, 
  Smartphone,
  Zap,
  Sparkles
} from 'lucide-react';
import { SKILL_POWERS } from '../data/portfolioData';
import { SkillPower } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = SKILL_POWERS.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'html': return <Code2 className="w-6 h-6" />;
      case 'css': return <Palette className="w-6 h-6" />;
      case 'javascript': return <Terminal className="w-6 h-6" />;
      case 'react': return <Atom className="w-6 h-6" />;
      case 'nodejs': return <Server className="w-6 h-6" />;
      case 'mongodb': return <Database className="w-6 h-6" />;
      case 'git': return <GitBranch className="w-6 h-6" />;
      case 'webpack': return <Box className="w-6 h-6" />;
      case 'vercel': return <Rocket className="w-6 h-6" />;
      case 'responsive': return <Smartphone className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getAccentStyles = (accent: SkillPower['accent']) => {
    switch (accent) {
      case 'red':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(255,42,85,0.45)] group-hover:border-[#ff2a55]',
          iconBg: 'bg-[#260f1e] text-[#ff2a55] border-[#ff2a55]/40',
          bar: 'bg-gradient-to-r from-[#ff2a55] to-[#f43f5e]',
          badge: 'bg-[#ff2a55]/15 text-[#ff2a55] border-[#ff2a55]/50',
          comicColor: 'text-[#ff2a55]',
        };
      case 'blue':
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] group-hover:border-[#00e5ff]',
          iconBg: 'bg-[#0c1f2e] text-[#00e5ff] border-[#00e5ff]/40',
          bar: 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8]',
          badge: 'bg-[#00e5ff]/15 text-[#00e5ff] border-[#00e5ff]/50',
          comicColor: 'text-[#00e5ff]',
        };
      case 'purple':
      default:
        return {
          glow: 'group-hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] group-hover:border-[#a855f7]',
          iconBg: 'bg-[#201033] text-[#a855f7] border-[#a855f7]/40',
          bar: 'bg-gradient-to-r from-[#a855f7] to-[#c084fc]',
          badge: 'bg-[#a855f7]/15 text-[#a855f7] border-[#a855f7]/50',
          comicColor: 'text-[#a855f7]',
        };
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#07070c] overflow-hidden">
      {/* Spider-Verse Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1a0e36]/30 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#160d29] border border-[#ff2a55]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2a55]" />
            <span className="text-xs font-code font-bold tracking-widest uppercase text-[#ff2a55]">
              SUPERHERO ABILITIES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a55] to-[#00e5ff] chromatic-text">POWERS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9ea0b4] leading-relaxed">
            Every web technology functions as a superpower in my developer arsenal. Click or hover over cards to activate their dimensional feedback.
          </p>

          {/* Functional Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#120c24] border border-[#251d3b] rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#ff2a55] to-[#dc2626] text-white shadow-[0_0_15px_rgba(255,42,85,0.4)]'
                  : 'text-[#8b8b9e] hover:text-white'
              }`}
            >
              All Powers ({SKILL_POWERS.length})
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'frontend'
                  ? 'bg-[#00e5ff] text-[#07070b] font-extrabold shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'text-[#8b8b9e] hover:text-white'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'backend'
                  ? 'bg-[#a855f7] text-white font-extrabold shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'text-[#8b8b9e] hover:text-white'
              }`}
            >
              Backend / MERN
            </button>
            <button
              onClick={() => setFilter('tools')}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'tools'
                  ? 'bg-white text-[#07070b] font-extrabold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                  : 'text-[#8b8b9e] hover:text-white'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const styles = getAccentStyles(skill.accent);
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative bg-[#0e091b] border-2 border-[#201833] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] ${styles.glow} overflow-hidden cursor-default`}
              >
                {/* Spider-Verse Comic Speedlines on Hover */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
                    </svg>
                  </div>
                )}

                {/* Comic Action Sound Effect Bubble */}
                <div
                  className={`absolute top-3 right-3 font-display text-sm tracking-wider font-extrabold ${styles.comicColor} transition-transform duration-300 ${
                    isHovered ? 'scale-125 rotate-6' : 'scale-100'
                  }`}
                >
                  {skill.comicSound}
                </div>

                {/* Top Row: Icon and Power Name */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${styles.iconBg}`}
                  >
                    {getSkillIcon(skill.id)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <div className="text-xs font-code font-bold uppercase tracking-wider text-[#9f9fb5]">
                      {skill.powerName}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8c8fa3] leading-relaxed mb-5 min-h-[52px]">
                  {skill.description}
                </p>

                {/* Power Level Meter */}
                <div className="pt-3 border-t border-[#1b142d]">
                  <div className="flex items-center justify-between text-xs font-code mb-2">
                    <span className="text-[#6d6d84] font-semibold">POWER CAPACITY</span>
                    <span className="font-bold text-white tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#181126] overflow-hidden p-0.5 border border-[#2b2046]">
                    <div
                      className={`h-full rounded-full ${styles.bar} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Neon Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity ${styles.bar}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
