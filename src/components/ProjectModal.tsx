import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  Sparkles,
  Maximize2,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'learnings'>('overview');
  
  // Interactive mini-demo states
  const [textInput, setTextInput] = useState('With great code comes great responsibility. React and MERN stack enable developers to build lightning-fast web applications across multiple dimensions.');
  const [copied, setCopied] = useState(false);
  const [newsCategory, setNewsCategory] = useState<'technology' | 'business' | 'science'>('technology');
  const [selectedDeviceColor, setSelectedDeviceColor] = useState<'titanium' | 'blue' | 'black'>('titanium');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // TextUtils calculation
  const wordCount = textInput.trim() ? textInput.trim().split(/\s+/).length : 0;
  const charCount = textInput.length;
  const readTime = Math.ceil(wordCount / 200);

  const handleCopy = () => {
    navigator.clipboard.writeText(textInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#040408]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Spider-Verse Dimensional Portal Border Container */}
      <div
        className="relative w-full max-w-4xl bg-[#0c0817] border-2 border-[#ff2a55]/60 rounded-3xl shadow-[0_0_60px_rgba(255,42,85,0.35),0_0_100px_rgba(0,229,255,0.2)] overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Halftone Overlay */}
        <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

        {/* Modal Header Bar */}
        <div className="relative z-10 px-6 py-4 border-b border-[#241a3d] bg-[#120c24]/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a55] animate-pulse" />
            <span className="text-xs font-code font-bold uppercase tracking-wider text-[#00e5ff]">
              MISSION DOSSIER // {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#9e9ea7] hover:text-white rounded-lg bg-[#1f1538] hover:bg-[#ff2a55] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2a55] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className={`relative px-6 sm:px-8 py-8 bg-gradient-to-r ${project.bannerColor} border-b border-[#241a3d]`}>
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
                {project.title}
              </h2>
              {/* External CTA Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff2a55] to-[#dc2626] rounded-xl shadow-[0_0_15px_rgba(255,42,85,0.4)] hover:shadow-[0_0_25px_rgba(255,42,85,0.6)] transition-all cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#d1d1e0] bg-[#160f2b] border border-[#3b2b5f] rounded-xl hover:text-white hover:border-[#00e5ff] transition-all cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#d2d3e5] max-w-2xl font-medium">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 sm:px-8 py-3 bg-[#0f0a1d] border-b border-[#241a3d] flex items-center gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`text-xs font-bold uppercase tracking-wider py-1.5 border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'text-[#00e5ff] border-[#00e5ff]'
                : 'text-[#84849a] border-transparent hover:text-white'
            }`}
          >
            Overview & Features
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`text-xs font-bold uppercase tracking-wider py-1.5 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'interactive'
                ? 'text-[#ff2a55] border-[#ff2a55]'
                : 'text-[#84849a] border-transparent hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('learnings')}
            className={`text-xs font-bold uppercase tracking-wider py-1.5 border-b-2 transition-all cursor-pointer ${
              activeTab === 'learnings'
                ? 'text-[#a855f7] border-[#a855f7]'
                : 'text-[#84849a] border-transparent hover:text-white'
            }`}
          >
            Challenges & Solutions
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Detailed Long Description */}
              <div>
                <h4 className="text-xs font-code font-bold uppercase tracking-wider text-[#ff2a55] mb-2">
                  MISSION BRIEF
                </h4>
                <p className="text-sm sm:text-base text-[#b6b8cb] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-code font-bold uppercase tracking-wider text-[#00e5ff] mb-2.5">
                  TECH ARSENAL
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-code px-3 py-1 rounded-md bg-[#18112a] border border-[#2f224f] text-[#c9cbdc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-code font-bold uppercase tracking-wider text-[#22c55e] mb-3">
                  DEPLOYED CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#130d24] border border-[#261a40] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#d1d2e0] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-xl bg-[#160d2e] border border-[#a855f7]/40 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-code text-[#a855f7] uppercase font-bold">
                    PERFORMANCE METRIC
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {project.metrics}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-code text-[#00e5ff]">STATUS: PRODUCTION</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-6">
              <div className="p-3 bg-[#130e26] border border-[#2b1f48] rounded-xl text-xs text-[#00e5ff] font-code">
                🕹️ INTERACTIVE PREVIEW // Test real logic implemented in this project directly in your browser.
              </div>

              {/* Live interactive TextUtils Simulator */}
              {project.previewType === 'textutils' && (
                <div className="p-5 rounded-2xl bg-[#110c22] border border-[#3b2a5c] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-code">
                      TextUtils Live Transformer
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#1e1438] hover:bg-[#ff2a55] text-xs text-white transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                    </button>
                  </div>

                  <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    rows={4}
                    className="w-full p-3 text-xs sm:text-sm bg-[#090613] border border-[#2b1f48] rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#00e5ff] font-code"
                    placeholder="Enter or paste text here to inspect..."
                  />

                  {/* Manipulation Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setTextInput(textInput.toUpperCase())}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-[#00e5ff] hover:text-black text-white transition-colors cursor-pointer"
                    >
                      UPPERCASE
                    </button>
                    <button
                      onClick={() => setTextInput(textInput.toLowerCase())}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-[#00e5ff] hover:text-black text-white transition-colors cursor-pointer"
                    >
                      lowercase
                    </button>
                    <button
                      onClick={() => setTextInput(textInput.replace(/\s+/g, ' ').trim())}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-[#ff2a55] text-white transition-colors cursor-pointer"
                    >
                      Remove Extra Spaces
                    </button>
                    <button
                      onClick={() => setTextInput('')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#22163d] hover:bg-red-700 text-white transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  </div>

                  {/* Summary Stats */}
                  <div className="pt-3 border-t border-[#23183d] grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded bg-[#090613]">
                      <div className="text-lg font-bold text-white font-code">{wordCount}</div>
                      <div className="text-[10px] text-[#7d7d95]">Words</div>
                    </div>
                    <div className="p-2 rounded bg-[#090613]">
                      <div className="text-lg font-bold text-[#00e5ff] font-code">{charCount}</div>
                      <div className="text-[10px] text-[#7d7d95]">Characters</div>
                    </div>
                    <div className="p-2 rounded bg-[#090613]">
                      <div className="text-lg font-bold text-[#ff2a55] font-code">{readTime}m</div>
                      <div className="text-[10px] text-[#7d7d95]">Read Time</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Live interactive NewsMonkey Simulator */}
              {project.previewType === 'news' && (
                <div className="p-5 rounded-2xl bg-[#110c22] border border-[#3b2a5c] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-code">
                      NewsMonkey Category Filter Stream
                    </span>
                    <div className="flex gap-1.5">
                      {(['technology', 'business', 'science'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setNewsCategory(cat)}
                          className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize cursor-pointer transition-colors ${
                            newsCategory === cat
                              ? 'bg-[#ff2a55] text-white'
                              : 'bg-[#1e153b] text-[#9393ad] hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
                      <span className="text-[10px] font-code text-[#ff2a55] uppercase font-bold">
                        {newsCategory.toUpperCase()} // LIVE WIRE
                      </span>
                      <h5 className="text-xs font-bold text-white mt-1">
                        {newsCategory === 'technology' && 'Vite 8 Released with Instant HMR & Module Pre-bundling'}
                        {newsCategory === 'business' && 'Global Cloud Infrastructure Spending Surges 22% in 2026'}
                        {newsCategory === 'science' && 'Deep Space Radio Array Detects Periodic Multiverse Echoes'}
                      </h5>
                      <p className="text-[11px] text-[#808098] mt-1.5">
                        Real-time news payload parsed from NewsAPI with asynchronous pagination handlers.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0a0715] border border-[#2b1f48]">
                      <span className="text-[10px] font-code text-[#00e5ff] uppercase font-bold">
                        {newsCategory.toUpperCase()} // HEADLINE 2
                      </span>
                      <h5 className="text-xs font-bold text-white mt-1">
                        {newsCategory === 'technology' && 'React 19 Server Components Transform Enterprise SPAs'}
                        {newsCategory === 'business' && 'E-Commerce Platforms Adopt Edge Computing for Micro-Checkouts'}
                        {newsCategory === 'science' && 'Quantum Coherence Breakthrough Stabilizes Room-Temp Qubits'}
                      </h5>
                      <p className="text-[11px] text-[#808098] mt-1.5">
                        Filtered via React state hooks with memoized card lists to prevent layout shifts.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Live interactive Apple Store / AirPods Simulator */}
              {(project.previewType === 'apple' || project.previewType === 'airpods' || project.previewType === 'ecommerce') && (
                <div className="p-5 rounded-2xl bg-[#110c22] border border-[#3b2a5c] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-code">
                      Interactive Product Hardware Configurator
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#9d9db5]">Finish:</span>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => setSelectedDeviceColor('titanium')}
                          className={`w-6 h-6 rounded-full bg-slate-300 border-2 cursor-pointer ${
                            selectedDeviceColor === 'titanium' ? 'border-[#00e5ff] scale-110' : 'border-transparent'
                          }`}
                          title="Titanium"
                        />
                        <button
                          onClick={() => setSelectedDeviceColor('blue')}
                          className={`w-6 h-6 rounded-full bg-blue-700 border-2 cursor-pointer ${
                            selectedDeviceColor === 'blue' ? 'border-[#00e5ff] scale-110' : 'border-transparent'
                          }`}
                          title="Deep Blue"
                        />
                        <button
                          onClick={() => setSelectedDeviceColor('black')}
                          className={`w-6 h-6 rounded-full bg-stone-900 border-2 cursor-pointer ${
                            selectedDeviceColor === 'black' ? 'border-[#00e5ff] scale-110' : 'border-transparent'
                          }`}
                          title="Midnight Black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-b from-[#090514] to-[#04020a] border border-[#2b1f48] flex flex-col items-center justify-center text-center">
                    <div className="text-xs font-code text-[#00e5ff] uppercase mb-1">
                      COLOR PROFILE // {selectedDeviceColor.toUpperCase()}
                    </div>
                    <div className="font-display text-2xl text-white tracking-wide">
                      {project.title} Preview Frame
                    </div>
                    <p className="text-xs text-[#8f8fa7] max-w-md mt-2">
                      Built with modern CSS variables and vanilla JavaScript event listeners to switch styles without reloading.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'learnings' && (
            <div className="space-y-6">
              {/* Challenges Card */}
              <div className="p-5 rounded-2xl bg-[#170e28] border border-[#ff2a55]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#ff2a55] font-bold text-xs uppercase tracking-wider font-code">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Crucible (Challenges Encountered)</span>
                </div>
                <p className="text-sm text-[#d4d5e2] leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* What I Learned */}
              <div className="p-5 rounded-2xl bg-[#0f1929] border border-[#00e5ff]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#00e5ff] font-bold text-xs uppercase tracking-wider font-code">
                  <BookOpen className="w-4 h-4" />
                  <span>Dimensional Growth (What I Learned)</span>
                </div>
                <p className="text-sm text-[#d4d5e2] leading-relaxed">
                  {project.learnings}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="relative z-10 px-6 sm:px-8 py-4 bg-[#0a0715] border-t border-[#241a3d] flex items-center justify-between text-xs text-[#7d7d96]">
          <span className="font-code">ESC key to exit dimensional portal</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#18112a] hover:bg-[#251b40] text-white font-medium transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
