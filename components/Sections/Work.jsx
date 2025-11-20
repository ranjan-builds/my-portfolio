import React from 'react';
import { Monitor, Database, Zap } from 'lucide-react';
import ServiceCard from '../UI/ServiceCard';

const Work = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, pixel-perfect web applications using modern libraries like React and Tailwind CSS.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Backend Integration",
      description: "Connecting front-end interfaces with robust back-end logic, APIs, and databases using Node.js.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Performance Optimization",
      description: "Enhancing website speed and accessibility to ensure a seamless user experience across all devices.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-futura text-white mb-4">What I Do</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Specialized technical services tailored to your needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;