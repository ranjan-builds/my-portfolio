import React from 'react';

const ServiceCard = ({ service, index }) => {
  return (
    <div 
      className="group p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-violet-500/20">
        {service.icon}
      </div>
      <h3 className="text-xl font-futura font-medium text-white mb-3">{service.title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;