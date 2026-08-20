import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Database, 
  Wrench, 
  Cloud, 
  Layers,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & Database', 'Tools & Workflow', 'Cloud & AI'];

  // Icon mapping helper
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Backend & Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Tools & Workflow':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      case 'Cloud & AI':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(cat => cat.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Technologies & <span className="gradient-text">Skillset</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Strictly curated list of verified technical skills from hands-on development, coursework, and cloud certifications.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((category) => (
            <div 
              key={category.title}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 shadow-sm">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {category.skills.length} verified technologies
                  </p>
                </div>
              </div>

              {/* Skills Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 border border-white/5 hover:border-cyan-500/30 transition-all duration-200 group flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></div>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Generative AI & Cloud Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-emerald-950/40 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Generative AI & Cloud Competency</h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Certified in Amazon Q Developer, Microsoft 365 Copilot, Agentic AI, NLP, Computer Vision, and Responsible AI Principles.
              </p>
            </div>
          </div>
          <a
            href="#certifications"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-semibold text-cyan-300 border border-cyan-500/30 whitespace-nowrap transition-colors"
          >
            View Certifications &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
