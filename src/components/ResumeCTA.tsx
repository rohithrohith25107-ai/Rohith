import React from 'react';
import { FileText, Download, CheckCircle2, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Ambient Glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Want to know more about my experience?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Download my complete resume for a detailed view of my projects, internship contributions at Initz Institution, cloud certifications, and academic background.
              </p>

              {/* Quick Resume Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>React.js & Next.js SPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>AWS & AI Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Expected CSE 2027</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons Column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                download="Rohith_R_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm border border-white/10 hover:border-cyan-500/40 transition-all hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>View Resume Online</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
