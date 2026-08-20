import React from 'react';
import { Award, Cloud, Cpu, Shield, CheckCircle2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const getProviderIcon = (provider: string) => {
    if (provider.includes('AWS')) return <Cloud className="w-6 h-6 text-amber-400" />;
    if (provider.includes('Microsoft')) return <Shield className="w-6 h-6 text-cyan-400" />;
    return <Cpu className="w-6 h-6 text-emerald-400" />;
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CLOUD & AI CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications & <span className="gradient-text">Specializations</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Industry-recognized credentials in AWS Cloud infrastructure, Generative AI, and Microsoft AI solutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between relative overflow-hidden border-white/10"
            >
              <div className="space-y-4">
                
                {/* Header Icon & Provider */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10">
                    {getProviderIcon(cert.provider)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    Verified Credential
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    {cert.provider}
                  </h4>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {cert.title}
                  </h3>
                </div>

                {/* Topics List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Curriculum & Skills Covered
                  </span>
                  <ul className="space-y-2">
                    {cert.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Verified Badge Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Certified
                </span>
                <span>AWS / MS / GCP</span>
              </div>

            </div>
          ))}
        </div>

        {/* Achievements Sub-Section */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">Recognized Achievements & Milestones</h3>
            <p className="text-xs text-slate-400">Key achievements highlighted in my technical journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-all space-y-3"
              >
                {ach.badge && (
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {ach.badge}
                  </span>
                )}
                <h4 className="text-base font-bold text-white">{ach.title}</h4>
                <div className="text-xs font-mono text-slate-400">{ach.organization}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
