import React from 'react';
import { ExternalLink, Github, Layout, Globe, Smartphone } from 'lucide-react';
import ProjectCard from '../UI/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Dev Showcase",
      description: "A high-performance front-end portfolio designed to showcase projects dynamically. Features a clean architecture and accessibility-first approach.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/ranjan-builds",
      category: "Web Design",
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "Bank Search App",
      description: "A utility application allowing users to search for bank details via pincode or name. Integrates external APIs for real-time data fetching.",
      tags: ["API Integration", "Frontend", "Async"],
      link: "#",
      github: "https://github.com/ranjan-builds",
      category: "Utility Tool",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Simple Interest Calculator",
      description: "A minimalist financial tool for calculating interest rates. Focuses on user input validation and instant feedback mechanisms.",
      tags: ["Logic", "Algorithm", "UI/UX"],
      link: "#",
      github: "https://github.com/ranjan-builds/SimpleIntrest",
      category: "Finance",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-futura text-white mb-2">Selected Works</h2>
            <p className="text-neutral-400 text-base leading-relaxed">A collection of my recent experiments and builds.</p>
          </div>
          <a 
            href="https://github.com/ranjan-builds?tab=repositories" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-neutral-500 hover:text-violet-400 transition-colors pb-1 border-b border-transparent hover:border-violet-400 text-sm"
          >
            View Archives <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;