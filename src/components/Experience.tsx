import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Zap, GitBranch } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="gradient-text">Internship & Experience</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Hands-on professional engineering experience delivering high-impact web applications in an Agile team.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-12">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div 
              key={exp.id} 
              className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-6 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#090d16] group-hover:scale-125 transition-transform duration-300"></div>

              {/* Experience Header Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden border-cyan-500/20">
                
                {/* Role & Company info header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                      {exp.type}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-cyan-300">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white font-mono">Core Web Vitals</div>
                      <div className="text-xs text-slate-400">Frontend Code & Asset Optimization</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/20 flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white font-mono">+20% Efficiency</div>
                      <div className="text-xs text-slate-400">Internal Billing Workflow Streamlining</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Responsibilities List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-cyan-400" /> Stack:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
