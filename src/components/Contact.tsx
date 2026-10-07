import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Check, Copy, ExternalLink, Github, Linkedin, Mail, MessageSquare, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialService ? `Inquiry regarding ${initialService}` : '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${initialService}`,
      }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate submission and construct mailto link
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Mission Request from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07070e] overflow-hidden">
      {/* Spider-Verse Ambient Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#ff2a55]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#170e2b] border border-[#ff2a55]/40 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#ff2a55]" />
            <span className="text-xs font-code font-bold tracking-widest uppercase text-[#ff2a55]">
              COMMUNICATION CHANNEL
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-3">
            NEED A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a55] to-[#00e5ff] chromatic-text">DEVELOPER?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#00e5ff] font-medium tracking-wide">
            "Let's build something from another dimension."
          </p>
        </div>

        {/* Contact Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0d081c] border-2 border-[#1f1635] shadow-[0_10px_35px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-4">
                MISSION DISPATCH
              </h3>
              <p className="text-xs sm:text-sm text-[#9193a8] leading-relaxed mb-6">
                Have a project inquiry, frontend contract, full-stack opening, or just want to discuss Spider-Verse theories? Connect through any channel below.
              </p>

              {/* Email Card with One-Tap Copy */}
              <div className="p-4 rounded-xl bg-[#140e26] border border-[#2d1f48] mb-6">
                <div className="text-[11px] font-code text-[#ff2a55] uppercase font-bold mb-1">
                  DIRECT FREQUENCY
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-code text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded-lg bg-[#21163d] hover:bg-[#ff2a55] text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Social Connect Buttons */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#120b22] border border-[#241a3d] hover:border-[#00e5ff] text-[#cfd0df] hover:text-white transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-[#00e5ff]" />
                    <span className="text-sm font-semibold">GitHub Profile</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#757591] group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#120b22] border border-[#241a3d] hover:border-[#ff2a55] text-[#cfd0df] hover:text-white transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#ff2a55]" />
                    <span className="text-sm font-semibold">LinkedIn Network</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#757591] group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Guarantees Speech Bubble */}
            <div className="p-5 rounded-2xl bg-[#100b21] border border-[#ff2a55]/30 text-xs text-[#d1d2e0] flex items-start gap-3 shadow-[0_4px_20px_rgba(255,42,85,0.15)]">
              <Sparkles className="w-4 h-4 text-[#ff2a55] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#ff2a55] block mb-0.5">Quick Turnaround:</span>
                I typically respond within 24 hours. Available for frontend contracts, MERN stack roles, and freelance missions.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mission Contact Form */}
          <div className="lg:col-span-7 relative">
            {/* Connecting Spider-Web Vector Graphic */}
            <svg
              viewBox="0 0 100 100"
              className="absolute -top-8 -right-8 w-28 h-28 text-[#ff2a55]/20 pointer-events-none hidden sm:block"
            >
              <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </svg>

            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#0c071a] border-2 border-[#221838] shadow-[0_12px_45px_rgba(0,0,0,0.7)] relative space-y-6"
            >
              {submitted && (
                <div className="p-4 rounded-xl bg-[#122e1b] border border-[#22c55e] text-white text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                  <Check className="w-5 h-5 text-[#22c55e] shrink-0" />
                  <div>
                    <span className="font-bold">Transmission Initialized!</span> Your email client was opened with the message payload. Thank you for reaching out!
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-xs font-code font-bold uppercase tracking-wider text-[#d5d6e6] mb-2">
                  YOUR NAME <span className="text-[#ff2a55]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Peter Parker, Miles Morales, or Hiring Manager..."
                  className="w-full px-4 py-3 bg-[#130d24] border border-[#2d2047] rounded-xl text-white placeholder-[#5a5a73] text-sm focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all font-sans"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-code font-bold uppercase tracking-wider text-[#d5d6e6] mb-2">
                  YOUR EMAIL <span className="text-[#ff2a55]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@dimension.com"
                  className="w-full px-4 py-3 bg-[#130d24] border border-[#2d2047] rounded-xl text-white placeholder-[#5a5a73] text-sm focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all font-sans"
                />
              </div>

              {/* Subject / Project Type Field */}
              <div>
                <label className="block text-xs font-code font-bold uppercase tracking-wider text-[#d5d6e6] mb-2">
                  SUBJECT / MISSION TYPE
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="React Application, Freelance Project, Full-Time Role..."
                  className="w-full px-4 py-3 bg-[#130d24] border border-[#2d2047] rounded-xl text-white placeholder-[#5a5a73] text-sm focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all font-sans"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-code font-bold uppercase tracking-wider text-[#d5d6e6] mb-2">
                  MESSAGE INTEL <span className="text-[#ff2a55]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your vision, timeline, or requirements..."
                  className="w-full px-4 py-3 bg-[#130d24] border border-[#2d2047] rounded-xl text-white placeholder-[#5a5a73] text-sm focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all font-sans"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#ff2a55] to-[#dc2626] text-white font-display text-xl tracking-wider uppercase shadow-[0_0_25px_rgba(255,42,85,0.45)] hover:shadow-[0_0_35px_rgba(255,42,85,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>START THE MISSION</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
