import React from 'react';

const SkillCard = ({ skill, index }) => {
  return (
    <div 
      className={`flex items-center gap-3 p-3 rounded-xl border transition-colors duration-300 shadow-sm hover:bg-neutral-800/50 ${skill.color.includes('border') ? 'bg-neutral-900/30 border-white/5' : 'bg-neutral-900/30 border-white/5'}`}
    >
      <div className={`p-1.5 rounded-md border ${skill.color}`}>
        {skill.icon}
      </div>
      <span className="font-medium text-neutral-200 text-sm">{skill.name}</span>
    </div>
  );
};

export default SkillCard;