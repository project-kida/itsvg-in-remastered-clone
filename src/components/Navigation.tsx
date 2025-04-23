
import React, { useState } from 'react';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'testimony', label: 'TESTIMONY' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const scrollToSection = (id: string) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-gray-900/80 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center shadow-lg">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`px-4 py-1.5 text-xs md:text-sm whitespace-nowrap transition-colors rounded-full ${
              activeItem === item.id
                ? 'bg-white text-black'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
