
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={18} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  ];

  const footerLinks = [
    "View my portfolio",
    "Thanks for visiting my portfolio",
    "Thanks for visiting my portfolio",
    "Thanks for visiting my portfolio",
    "Thanks for visiting my portfolio"
  ];

  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container max-w-6xl mx-auto px-4">
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
          <div className="flex flex-wrap justify-center gap-x-4">
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a href="#" className="hover:text-purple transition-colors">{link}</a>
                {index < footerLinks.length - 1 && (
                  <span className="hidden md:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
