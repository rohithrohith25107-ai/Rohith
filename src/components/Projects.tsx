import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Star, 
  Zap, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Featured' | 'Next.js / React' | 'Fullstack'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterProjects = () => {
    if (filter === 'Featured') return PORTFOLIO_DATA.projects.filter(p => p.featured);
    if (filter === 'Next.js / React') return PORTFOLIO_DATA.projects.filter(p => p.technologies.includes('React.js') || p.technologies.includes('Next.js'));
    if (filter === 'Fullstack') return PORTFOLIO_DATA.projects.filter(p => p.category.includes('Fullstack'));
    return PORTFOLIO_DATA.projects;
  };

  const displayedProjects = filterProjects();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Web Engineering <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Clean, modular web applications built with React, Next.js, TypeScript, and fullstack MERN workflows.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {(['All', 'Featured', 'Next.js / React', 'Fullstack'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                  filter === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between relative overflow-hidden group border-white/10 ${
                project.featured ? 'md:col-span-2 lg:col-span-1 border-cyan-500/30' : ''
              }`}
            >
              
              {/* Card Header & Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30">
                    {project.category}
                  </span>
                  
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-950/50 px-2.5 py-1 rounded-full border border-amber-500/30">
                      <Star className="w-3 h-3 fill-amber-400" /> Featured
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 pt-2">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Metrics, Tech stack, and Actions */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                
                {project.metrics && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-[11px] font-mono text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions Bar */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                  >
                    View Breakdown &rarr;
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
