import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-neutral-900/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-futura font-bold text-white">Ranjan.</span>
          <span className="text-neutral-500 text-xs">© {new Date().getFullYear()}</span>
        </div>
        <p className="text-neutral-500 text-xs">Designed & Built with React</p>
      </div>
    </footer>
  );
};

export default Footer;