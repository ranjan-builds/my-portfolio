import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative pt-40 pb-24 lg:pt-52 lg:pb-32">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-sm text-neutral-300 text-xs uppercase tracking-wider mb-8 font-medium animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new projects
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-futura font-medium text-white tracking-tight mb-8 leading-[1.15] drop-shadow-2xl">
          Crafting digital <br className="hidden sm:block" />
          <span className="italic bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent pr-2">experiences</span>
          that matter.
        </h1>
        
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
          I'm <span className="font-medium text-white">Ranjan Kashyap</span>, a developer focused on building fast, accessible, and human-centered web applications.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-sm font-medium transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 flex items-center justify-center gap-2 group"
          >
            See my work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="https://github.com/ranjan-builds" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 text-white text-sm font-medium transition-all duration-300 hover:bg-neutral-800/50 hover:border-white/20 flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" /> GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;