import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060911] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-0.5">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                ROHITH<span className="text-cyan-400">.R</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Frontend Web Developer & CSE Student building responsive, zero-CLS Single Page Applications using React.js, Next.js, and TypeScript.
            </p>

            <div className="text-xs font-mono text-cyan-400">
              Coimbatore, TN • rohithweb23@gmail.com
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">Education</a>
              <a href="#certifications" className="text-slate-400 hover:text-cyan-400 transition-colors">Certifications</a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-white/10 flex items-center gap-2 text-xs font-mono transition-all hover:scale-105"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ROHITH R. Built strictly from professional resume details.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
