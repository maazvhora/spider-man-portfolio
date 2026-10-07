import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, Newspaper, FileText, Apple, ShoppingBag, Headphones } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const getProjectIcon = (type: Project['previewType']) => {
    switch (type) {
      case 'news': return <Newspaper className="w-8 h-8 text-[#ff2a55]" />;
      case 'textutils': return <FileText className="w-8 h-8 text-[#00e5ff]" />;
      case 'apple': return <Apple className="w-8 h-8 text-white" />;
      case 'ecommerce': return <ShoppingBag className="w-8 h-8 text-[#ff2a55]" />;
      case 'airpods': return <Headphones className="w-8 h-8 text-[#00e5ff]" />;
      default: return <Sparkles className="w-8 h-8 text-[#a855f7]" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#080811] overflow-hidden">
      {/* Spider-Verse Ambient Glow */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-[#ff2a55]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#170e2b] border border-[#00e5ff]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-code font-bold tracking-widest uppercase text-[#00e5ff]">
              ACTIVE ASSIGNMENTS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            MY <span className="text-[#00e5ff] chromatic-text">MISSIONS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9ca0b4] leading-relaxed">
            Real production-grade web applications crafted with modern tools. Click any card to launch its cinematic dossier and live browser simulator.
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#120c24] border border-[#251d3b] rounded-xl max-w-lg mx-auto">
            {['all', 'React & Frontend', 'Full-Stack', 'UI/UX & Clone'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#ff2a55] to-[#dc2626] text-white shadow-[0_0_15px_rgba(255,42,85,0.4)]'
                    : 'text-[#8b8b9e] hover:text-white'
                }`}
              >
                {cat === 'all' ? `All Missions (${PROJECTS_DATA.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isRed = project.accentColor === 'red';
            const isBlue = project.accentColor === 'blue';

            return (
              <div
                key={project.id}
                className="group relative bg-[#0e091b] border-2 border-[#201833] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex flex-col justify-between"
                style={{
                  boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                }}
              >
                {/* Neon Border Glow on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    isRed
                      ? 'shadow-[inset_0_0_20px_rgba(255,42,85,0.4)] border-2 border-[#ff2a55]'
                      : isBlue
                      ? 'shadow-[inset_0_0_20px_rgba(0,229,255,0.4)] border-2 border-[#00e5ff]'
                      : 'shadow-[inset_0_0_20px_rgba(168,85,247,0.4)] border-2 border-[#a855f7]'
                  }`}
                />

                {/* Comic Mission Badge */}
                <div className="absolute top-4 left-4 z-20 bg-[#07050e]/90 backdrop-blur-md border border-[#ff2a55]/50 px-3 py-1 rounded-md text-[10px] font-code font-bold uppercase tracking-wider text-[#ff2a55]">
                  MISSION #{String(index + 1).padStart(2, '0')}
                </div>

                {/* Project Visual Artwork Frame */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative h-48 w-full bg-[#120b24] overflow-hidden cursor-pointer flex items-center justify-center p-6 border-b border-[#211736]"
                >
                  {/* Subtle Spider-Verse Graphic Backdrop */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.bannerColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 bg-halftone opacity-35" />

                  {/* Spider Web vector watermark inside card */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute -right-8 -bottom-8 w-36 h-36 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none"
                  >
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
                  </svg>

                  {/* Center Project Icon Lockup */}
                  <div className="relative z-10 flex flex-col items-center text-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-[#090514]/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg mb-2">
                      {getProjectIcon(project.previewType)}
                    </div>
                    <span className="text-xs font-code font-bold text-white/90 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Inspect Indicator */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-20">
                    <Eye className="w-4 h-4 text-[#00e5ff]" />
                    <span className="text-xs font-code font-bold text-white uppercase tracking-wider">
                      Launch Dossier
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Category Label (clean text, no pills) */}
                    <div className="text-[11px] font-code uppercase text-[#7e7e96] mb-1">
                      {project.category}
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-display text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#00e5ff] transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8f92a9] leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technology Tags (clean micro-tags) */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-code px-2 py-0.5 rounded bg-[#160f29] border border-[#261b40] text-[#a4a6bc]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] font-code px-1.5 py-0.5 text-[#6c6c82]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-4 border-t border-[#1b142d] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff2a55] to-[#dc2626] rounded-lg hover:shadow-[0_0_15px_rgba(255,42,85,0.4)] transition-all cursor-pointer"
                        title="Open Live Deployment"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[#9e9eb2] hover:text-white bg-[#150f28] border border-[#261c40] rounded-lg hover:border-[#00e5ff] transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-code font-semibold text-[#00e5ff] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
