import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Terminal, 
  MapPin,
  CheckCircle2,
  Code2,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Glow Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                <span>Hello world, I'm</span>
                <span className="h-px w-8 bg-slate-700"></span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                {PORTFOLIO_DATA.personal.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-semibold">{PORTFOLIO_DATA.personal.subTitle}</span>
              </p>
            </div>

            {/* Concise Recruiter-Friendly Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Final-year Computer Science & Engineering student building responsive, high-performance web applications using <strong className="text-white">React.js, Next.js, and TypeScript</strong>. Experienced in frontend optimization, Core Web Vitals, and cloud-backed AI integrations.
            </p>

            {/* Tech Pill Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['React.js', 'Next.js', 'TypeScript', 'AWS Cloud', 'Generative AI', 'Vercel'].map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                download="Rohith_R_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02] shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Link Icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 border border-white/10 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 border border-white/10 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Key Quick Metric Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">+20%</div>
                <div className="text-xs text-slate-400">Workflow Efficiency</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">0 CLS</div>
                <div className="text-xs text-slate-400">Cumulative Layout Shift</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">Top 1%</div>
                <div className="text-xs text-slate-400">College Team Leader Award</div>
              </div>
            </div>

          </div>

          {/* Right Column - Developer Visual / Interactive Terminal Feature */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Accent Background Box */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-20 blur-xl"></div>

              {/* Developer Terminal Card */}
              <div className="relative rounded-2xl bg-[#0d1322] border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>rohith-developer.ts</span>
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Terminal Code Body */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-3 text-slate-300">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">developer</span>{' '}
                    <span className="text-slate-400">=</span> &#123;
                  </div>
                  
                  <div className="pl-4 space-y-1.5">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"{PORTFOLIO_DATA.personal.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-300">"Frontend Developer"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">education:</span>{' '}
                      <span className="text-emerald-300">"Diploma in CSE (2024-2027)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">coreStack:</span> [
                      <span className="text-amber-300">"React"</span>,{' '}
                      <span className="text-amber-300">"Next.js"</span>,{' '}
                      <span className="text-amber-300">"TypeScript"</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">cloudCertifications:</span> [
                      <span className="text-cyan-300">"AWS"</span>,{' '}
                      <span className="text-cyan-300">"Microsoft"</span>,{' '}
                      <span className="text-cyan-300">"Google Cloud"</span>],
                    </div>
                    <div>
                      <span className="text-slate-400">recentInternship:</span>{' '}
                      <span className="text-emerald-300">"Initz Institution (2026)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">seeking:</span>{' '}
                      <span className="text-cyan-400 font-bold">"Junior Frontend / Web Developer"</span>
                    </div>
                  </div>

                  <div>&#125;;</div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready for hire
                    </span>
                    <span className="text-slate-400 font-mono">UTF-8 • TypeScript</span>
                  </div>
                </div>

                {/* Floating Highlight Cards */}
                <div className="p-4 bg-slate-900/90 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">Component Architecture</div>
                      <div className="text-[10px] text-slate-400">Modular & Zero CLS</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">Gen AI Integrations</div>
                      <div className="text-[10px] text-slate-400">Amazon Q & Copilot</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
