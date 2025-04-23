import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';

const TopNavbar = () => {
  const [time, setTime] = React.useState(new Date());
  const [isDark, setIsDark] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 py-4 px-6 transition-colors duration-200`}>
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">👋</span>
          <span className="text-xl font-display text-amber-400">Hello!</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a href="#" className="hover:text-purple-light transition-colors">
              <span className="sr-only">Music</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.8 6.267l-7.41-4.445c-.732-.44-1.64-.444-2.38 0L2.6 6.267c-.48.288-.77.806-.77 1.37v8.725c0 .563.289 1.082.77 1.37l7.41 4.445c.733.44 1.64.444 2.38 0l7.41-4.445c.48-.288.77-.806.77-1.37V7.637c0-.563-.289-1.082-.77-1.37zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
              </svg>
            </a>
            <a href="https://twitter.com/VishwaGauravIn" target="_blank" rel="noopener noreferrer" className="hover:text-purple-light transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://github.com/VishwaGauravIn" target="_blank" rel="noopener noreferrer" className="hover:text-purple-light transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/VishwaGauravIn" target="_blank" rel="noopener noreferrer" className="hover:text-purple-light transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
            <a href="https://wa.me/message/RVHR4MCQP7T2F1" target="_blank" rel="noopener noreferrer" className="hover:text-purple-light transition-colors">
              <span className="sr-only">WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
          <Toggle 
            onClick={toggleTheme}
            className="w-8 h-8 p-1 hover:bg-transparent mr-4"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-gray-600" />
            )}
          </Toggle>
          <div className="text-right">
            <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{formatTime(time)}</div>
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{formatDate(time)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
