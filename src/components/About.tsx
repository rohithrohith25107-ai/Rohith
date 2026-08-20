import React from 'react';
import { User, GraduationCap, Target, Lightbulb, CheckCircle, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & <span className="gradient-text">Career Direction</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A comprehensive look into my technical foundation, education, and development approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Professional Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400"></span>
              Professional Summary
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {PORTFOLIO_DATA.personal.summary}
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                  <Target className="w-4 h-4" />
                  <span>Target Role</span>
                </div>
                <p className="text-sm font-semibold text-white">Junior Frontend Developer / Web Developer</p>
                <p className="text-xs text-slate-400">Building scalable SPAs & interactive web portals</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                  <Lightbulb className="w-4 h-4" />
                  <span>Core Expertise</span>
                </div>
                <p className="text-sm font-semibold text-white">React.js, Next.js & TypeScript</p>
                <p className="text-xs text-slate-400">Core Web Vitals & CI/CD deployment via Vercel</p>
              </div>
            </div>

            {/* Quick Strengths Checklist */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Professional Highlights</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Component-Based Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>RESTful API Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Cross-Browser Compatibility Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>AWS & Generative AI Certified</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Cards - Education Quick Glance & Leadership Recognition */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Leadership Recognition Card */}
            <div className="glass-card rounded-2xl p-6 border-cyan-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-24 h-24 text-cyan-400" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Recognized Top Performer</h4>
                  <p className="text-xs text-cyan-300 font-mono">Excel Hi-Tech Engineering College</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Selected out of 50+ peers by college faculty for leading a 15-member team to deliver an AI-integrated web platform project.
              </p>
            </div>

            {/* Quick Education Summary Card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Education Snapshot</h4>
                  <p className="text-xs text-slate-400">Computer Science & Engineering</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs border-t border-white/5">
                <div>
                  <div className="flex justify-between font-semibold text-slate-200">
                    <span>Diploma in CSE</span>
                    <span className="text-cyan-400 font-mono">2024 – 2027</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Excel Hi-Tech Engineering College</div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-200">
                    <span>SSLC (Secondary School)</span>
                    <span className="text-slate-400 font-mono">2021</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Govt High School, Kurumbapalayam (60%)</div>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="#education" 
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-medium"
                >
                  View complete educational details &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
