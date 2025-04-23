
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={18} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="relative overflow-hidden whitespace-nowrap">
        <div className="animate-[scroll_20s_linear_infinite] flex">
          <span className="mx-4">Thanks for visiting my portfolio!</span>
          <span className="mx-4">Code & Crafted with 💛 by Vishwa Gaurav</span>
          <span className="mx-4">Thanks for visiting my portfolio!</span>
          <span className="mx-4">Code & Crafted with 💛 by Vishwa Gaurav</span>
        </div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 mt-8">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-gray hover:text-gray-dark transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="text-center text-xs text-gray">
          <p className="mb-2">Copyright © {new Date().getFullYear()}</p>
          <a href="#" className="hover:text-purple transition-colors">View my portfolio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
