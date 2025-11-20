import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      year: "2023 - Present",
      role: "Freelance Web Developer",
      company: "Self-Employed",
      description: "Delivering custom web solutions for diverse clients. Specializing in React-based applications and interactive UI components."
    },
    {
      year: "2021 - 2023",
      role: "Junior Frontend Developer",
      company: "Tech Studio",
      description: "Collaborated with senior developers to maintain and improve client websites. Implemented responsive designs and optimized load times."
    },
    {
      year: "2020 - 2021",
      role: "Web Development Intern",
      company: "Digital Solutions Inc.",
      description: "Assisted in the development of internal tools and gained hands-on experience with HTML, CSS, and JavaScript workflows."
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl font-futura text-white mb-2">Professional Journey</h2>
          <p className="text-neutral-400">My career timeline and milestones.</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experience.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon/Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-neutral-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-violet-400" />
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-violet-500/20 transition-colors duration-300">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-futura font-medium text-white text-lg">{job.role}</h3>
                  <time className="text-xs font-medium text-violet-400">{job.year}</time>
                </div>
                <div className="text-sm font-medium text-neutral-500 mb-3">{job.company}</div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;