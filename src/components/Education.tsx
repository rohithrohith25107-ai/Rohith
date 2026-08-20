import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Academic Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Formal technical education foundation in Computer Science & Engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div 
              key={edu.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                    {edu.institution}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-cyan-300 font-mono text-xs border border-white/10 w-fit">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Achievement Badge Banner if present */}
              {edu.achievement && (
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                      Faculty Award & Leadership Recognition
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                      {edu.achievement}
                    </p>
                  </div>
                </div>
              )}

              {/* Relevant Coursework */}
              {edu.coursework && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Details text */}
              {edu.details && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {edu.details}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
