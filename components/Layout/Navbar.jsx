import React from 'react';

const Navbar = ({ activeSection, scrolled, scrollToSection }) => {
  const navItems = ['Home', 'Services', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
      <div className={`max-w-5xl mx-auto px-6 transition-all duration-500 ${scrolled ? 'bg-neutral-900/60 backdrop-blur-xl shadow-lg shadow-black/20 rounded-full border border-white/10 mx-4 sm:mx-auto' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-xl font-futura font-bold text-white tracking-tight">
              Ranjan<span className="text-violet-500">.</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-violet-400 ${
                    activeSection === item.toLowerCase() ? 'text-violet-400' : 'text-neutral-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;