import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="group relative flex flex-col h-full bg-neutral-900/40 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:bg-neutral-900/60 hover:shadow-xl hover:shadow-violet-500/10 border border-white/5 hover:border-white/10"
    >
      <div className="h-40 bg-neutral-800/30 relative overflow-hidden flex items-center justify-center group-hover:bg-violet-500/10 transition-colors duration-500">
        <div className="w-12 h-12 rounded-xl bg-neutral-900 shadow-lg border border-white/5 flex items-center justify-center text-neutral-400 group-hover:scale-110 group-hover:text-violet-400 transition-all duration-500">
          {project.icon}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-[10px] font-bold tracking-widest text-violet-400 uppercase mb-2">{project.category}</div>
        <h3 className="text-lg font-futura font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, tIndex) => (
            <span key={tIndex} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-neutral-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-medium text-white flex items-center gap-1.5 hover:text-violet-400 transition-colors">
            <Github className="w-3.5 h-3.5" /> Source
          </a>
          <a href={project.link} className="text-xs font-medium text-white flex items-center gap-1.5 hover:text-violet-400 transition-colors">
            Live Demo <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;