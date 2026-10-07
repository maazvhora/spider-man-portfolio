import React, { useState } from 'react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';
import { ExternalLink, GitBranch, GitCommit, GitFork, Github, Star, Terminal } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const [selectedWeekDay, setSelectedWeekDay] = useState<{ date: string; count: number } | null>(null);

  // Generate 52 weeks (364 days) of contribution cells with realistic density pattern
  const totalDays = 52 * 7;
  const contributionGrid = React.useMemo(() => {
    const days = [];
    const baseDate = new Date(2025, 9, 1); // approximate 1 year prior

    for (let i = 0; i < totalDays; i++) {
      const d = new Date(baseDate);
      d.setDate(d.getDate() + i);
      const dayOfWeek = d.getDay();
      
      // Realistic commit distribution: weekdays more active, some high sprint days
      let count = 0;
      const seed = (Math.sin(i * 12.3) + 1) / 2;
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        if (seed > 0.3) count = Math.floor(seed * 6) + 1;
        if (seed > 0.8) count = Math.floor(seed * 11) + 4;
      } else {
        if (seed > 0.6) count = Math.floor(seed * 5) + 1;
      }

      days.push({
        id: i,
        date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        count,
      });
    }
    return days;
  }, [totalDays]);

  const getColorClass = (count: number) => {
    if (count === 0) return 'bg-[#120b22] border-[#1d1334]';
    if (count <= 2) return 'bg-[#291740] border-[#3f1f63]';
    if (count <= 5) return 'bg-[#ff2a55]/40 border-[#ff2a55]/60';
    if (count <= 8) return 'bg-[#ff2a55]/70 border-[#ff2a55]';
    return 'bg-[#00e5ff] border-[#38bdf8] shadow-[0_0_8px_rgba(0,229,255,0.7)]';
  };

  return (
    <section id="github" className="relative py-24 bg-[#080810] overflow-hidden">
      {/* Spider-Verse Ambient Highlights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131126] border border-[#00e5ff]/40 mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-code font-bold tracking-widest uppercase text-[#00e5ff]">
              DEVELOPMENT RADAR
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
            MY <span className="text-[#00e5ff] chromatic-text">WEB-SHOOTER</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9da0b5] leading-relaxed">
            GitHub is my personal web-shooter — shooting rapid commits, pulling clean requests, and deploying continuously across branches.
          </p>
        </div>

        {/* GitHub Stats Cockpit */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#0d081b] border-2 border-[#1f1633] text-center">
            <div className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-1">
              750+
            </div>
            <div className="text-xs font-code text-[#7c7d95]">ANNUAL COMMITS</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0d081b] border-2 border-[#1f1633] text-center">
            <div className="font-display text-3xl sm:text-4xl text-[#00e5ff] tracking-wide mb-1">
              15+
            </div>
            <div className="text-xs font-code text-[#7c7d95]">PUBLIC REPOSITORIES</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0d081b] border-2 border-[#1f1633] text-center">
            <div className="font-display text-3xl sm:text-4xl text-[#ff2a55] tracking-wide mb-1">
              99.2%
            </div>
            <div className="text-xs font-code text-[#7c7d95]">REACT CODE PURITY</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0d081b] border-2 border-[#1f1633] text-center">
            <div className="font-display text-3xl sm:text-4xl text-[#a855f7] tracking-wide mb-1">
              100%
            </div>
            <div className="text-xs font-code text-[#7c7d95]">VERCEL DEPLOY SUCCESS</div>
          </div>
        </div>

        {/* Contribution Activity Heatmap */}
        <div className="bg-[#0c071a] border-2 border-[#201835] rounded-3xl p-6 sm:p-8 mb-12 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-[#ff2a55]" />
                <span>Web-Shooter Contribution Activity</span>
              </h3>
              <p className="text-xs text-[#82829b] mt-0.5">
                Commit telemetry across the past 52 weeks (364 days). Hover any square to inspect payload.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-code text-[#8e8ea6]">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-[#120b22] border border-[#1d1334]" />
                <div className="w-3 h-3 rounded-sm bg-[#291740] border border-[#3f1f63]" />
                <div className="w-3 h-3 rounded-sm bg-[#ff2a55]/40 border border-[#ff2a55]/60" />
                <div className="w-3 h-3 rounded-sm bg-[#ff2a55]/70 border border-[#ff2a55]" />
                <div className="w-3 h-3 rounded-sm bg-[#00e5ff] border border-[#38bdf8]" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Activity Matrix Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-grid grid-rows-7 grid-flow-col gap-1 min-w-[700px]">
              {contributionGrid.map((day) => (
                <div
                  key={day.id}
                  onMouseEnter={() => setSelectedWeekDay(day)}
                  onMouseLeave={() => setSelectedWeekDay(null)}
                  className={`w-3 h-3 rounded-[2px] border transition-transform hover:scale-150 cursor-pointer ${getColorClass(
                    day.count
                  )}`}
                  title={`${day.date}: ${day.count} commits`}
                />
              ))}
            </div>
          </div>

          {/* Active Tooltip Bar */}
          <div className="mt-4 pt-3 border-t border-[#1d152e] flex items-center justify-between text-xs font-code text-[#a1a1b8]">
            <div>
              {selectedWeekDay ? (
                <span className="text-[#00e5ff]">
                  🎯 {selectedWeekDay.date} — <span className="font-bold text-white">{selectedWeekDay.count} commits</span> logged
                </span>
              ) : (
                <span className="text-[#6d6d84]">Hover over any web coordinate for date & commit logs</span>
              )}
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#ff2a55] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Explore full GitHub profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Repositories Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide">
              FEATURED ARSENAL REPOSITORIES
            </h3>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#140e26] border border-[#2e214c] hover:border-[#ff2a55] rounded-xl transition-all"
            >
              <Github className="w-4 h-4 text-[#ff2a55]" />
              <span>View All Repos</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GITHUB_REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-2xl bg-[#0c0819] border-2 border-[#1d1430] hover:border-[#00e5ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-code text-[#ff2a55] mb-2">
                    <span className="flex items-center gap-1.5 font-bold">
                      <GitBranch className="w-3.5 h-3.5 text-[#00e5ff]" />
                      <span>main</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="font-display text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#00e5ff] transition-colors mb-2">
                    {repo.name}
                  </h4>

                  <p className="text-xs text-[#8c8fa3] leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div>
                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-code px-2 py-0.5 rounded bg-[#160f2b] text-[#9a9cb0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Repo Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#1b132c] text-xs font-code text-[#73738b]">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
