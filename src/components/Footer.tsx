import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050509] border-t border-[#1a1329] py-14 overflow-hidden">
      {/* Spider-Verse Ambient Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#ff2a55] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Famous Quote */}
          <div className="relative">
            <span className="font-display text-2xl sm:text-3xl tracking-wide text-white">
              "WITH GREAT CODE COMES GREAT RESPONSIBILITY."
            </span>
          </div>

          {/* Social Navigation Links */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0f0a1c] border border-[#231838] text-[#8e8ea6] hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0f0a1c] border border-[#231838] text-[#8e8ea6] hover:text-[#ff2a55] hover:border-[#ff2a55] transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-[#0f0a1c] border border-[#231838] text-[#8e8ea6] hover:text-white hover:border-[#a855f7] transition-all cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Signoff */}
          <div className="pt-4 border-t border-[#160f24] w-full max-w-md text-xs text-[#717188] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© 2026 Maaz — Built with code, creativity & caffeine.</span>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-code text-[#ff2a55] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
