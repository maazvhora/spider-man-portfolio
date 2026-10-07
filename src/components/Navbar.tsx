import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'github', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07070b]/85 backdrop-blur-md border-b border-[#241e3a]/60 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Mark with Spider-Web Glyph */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a55] rounded-lg"
          >
            {/* Custom stylized spider emblem */}
            <div className="relative w-8 h-8 rounded-lg bg-[#140e24] border border-[#ff2a55]/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#00e5ff] group-hover:shadow-[0_0_12px_rgba(0,229,255,0.4)]">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#ff2a55] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#00e5ff]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stylized Spider & Web Motif */}
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                <path d="m4.93 4.93 2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <path d="M6 9a8 8 0 0 1 12 0M6 15a8 8 0 0 0 12 0" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff2a55]/10 to-transparent pointer-events-none" />
            </div>

            <span className="font-display text-2xl sm:text-3xl tracking-wider text-white glitch-hover">
              MAAZ
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean unboxed text links) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#00e5ff] font-semibold'
                      : 'text-[#9f9fb5] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff2a55] to-[#00e5ff] rounded-full animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#ff2a55] to-[#b91c1c] rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,85,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#a1a1aa] hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a55]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff2a55]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a14]/95 backdrop-blur-xl border-b border-[#251e3c] px-4 pt-4 pb-6 mt-2 shadow-[0_12px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#d1d1db] hover:text-[#00e5ff] hover:bg-[#151124] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#231d38]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#ff2a55] to-[#b91c1c] rounded-lg shadow-[0_0_15px_rgba(255,42,85,0.4)]"
              >
                <span>Connect with Maaz</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
