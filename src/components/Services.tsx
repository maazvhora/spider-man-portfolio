import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, Shield, Wrench } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-24 bg-[#090913] overflow-hidden">
      {/* Spider-Verse Ambient Highlights */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#ff2a55]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#170e2b] border border-[#ff2a55]/40 mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#ff2a55]" />
            <span className="text-xs font-code font-bold tracking-widest uppercase text-[#ff2a55]">
              SOLUTIONS & CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            WHAT I CAN <span className="text-[#ff2a55] chromatic-text">BUILD</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9ca0b4] leading-relaxed">
            Need a reliable web developer for your next project, company, or startup? Here are the mission-ready services I deliver.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0d081b] border-2 border-[#1f1633] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e5ff] hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] flex flex-col justify-between"
            >
              <div>
                {/* Mission Code Header */}
                <div className="flex items-center justify-between text-[10px] font-code mb-4">
                  <span className="text-[#ff2a55] font-bold">{service.missionCode}</span>
                  <span className="text-[#00e5ff] bg-[#0c1e2b] px-2 py-0.5 rounded border border-[#00e5ff]/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-white tracking-wide mb-3 group-hover:text-[#00e5ff] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8d90a5] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-3 border-t border-[#1a132c]">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#cfd0de]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5ff] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#150f28] hover:bg-[#ff2a55] border border-[#2b1f48] hover:border-transparent rounded-xl transition-all duration-200 cursor-pointer group-hover:shadow-[0_0_15px_rgba(255,42,85,0.4)]"
              >
                <span>Request Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
