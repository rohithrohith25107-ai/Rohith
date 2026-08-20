import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Zap, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl glass-card rounded-2xl p-6 sm:p-8 border-cyan-500/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            {project.category}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          {project.metrics && (
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
              <Zap className="w-3.5 h-3.5" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Project Description */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Overview & Purpose</h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights & Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Engineering Achievements</h4>
          <ul className="space-y-2.5">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack List */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" /> Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-cyan-300 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Links Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
