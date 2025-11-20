import React from 'react';
import { Linkedin, Mail, Github, Code2, Terminal, Database, Layout } from 'lucide-react';
import SkillCard from '../UI/SkillCard';

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <Code2 className="w-4 h-4" />, color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20" },
    { name: "HTML5 & CSS3", icon: <Layout className="w-4 h-4" />, color: "bg-orange-500/10 text-orange-300 border-orange-500/20" },
    { name: "Tailwind CSS", icon: <Code2 className="w-4 h-4" />, color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
    { name: "React.js", icon: <Code2 className="w-4 h-4" />, color: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
    { name: "Node.js", icon: <Terminal className="w-4 h-4" />, color: "bg-green-500/10 text-green-300 border-green-500/20" },
    { name: "MongoDB", icon: <Database className="w-4 h-4" />, color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
    { name: "Git & GitHub", icon: <Github className="w-4 h-4" />, color: "bg-neutral-500/10 text-neutral-300 border-neutral-500/20" },
    { name: "Google Apps Script", icon: <Terminal className="w-4 h-4" />, color: "bg-blue-600/10 text-blue-400 border-blue-600/20" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-neutral-900/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/50 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-futura text-white">
                Passionate about web technologies.
              </h2>
              <div className="space-y-4 text-neutral-400 text-base leading-relaxed">
                <p>
                  Based in <span className="text-white font-medium">Chhattisgarh, India</span>, I am a developer who loves transforming complex problems into simple, beautiful interface designs.
                </p>
                <p>
                  My work is a blend of creative design and technical engineering. I don't just write code; I build digital solutions that are efficient, scalable, and delightful to use. Currently exploring the depths of the React ecosystem.
                </p>
              </div>
              <div className="flex items-center gap-5 pt-2">
                <a href="https://linkedin.com/in/ranjan-kashyap" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-blue-400 transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ranjankashyap6475@gmail.com" className="text-neutral-400 hover:text-rose-400 transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/ranjan-builds" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Technical Arsenal</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;