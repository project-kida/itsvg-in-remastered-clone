
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { useTheme } from '@/context/ThemeContext';

const Terminal = () => {
  const [lastLogin, setLastLogin] = useState('');
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [terminalDark, setTerminalDark] = useState(true);

  const { theme } = useTheme();
  const appIsDark = theme === 'dark';

  useEffect(() => {
    // Sync terminal theme with app theme on initial load
    setTerminalDark(appIsDark);
  }, []);

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    setLastLogin(formattedDate);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      setCommandHistory([...commandHistory, input]);
      setInput('');
    }
  };

  const toggleTerminalTheme = () => {
    setTerminalDark(!terminalDark);
  };

  return (
    <section className="container max-w-4xl mx-auto py-16 px-4">
      <div className={`${terminalDark ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg overflow-hidden shadow-lg transition-colors duration-200`}>
        {/* Terminal Header */}
        <div className={`${terminalDark ? 'bg-gray-800' : 'bg-gray-200'} px-4 py-2 flex items-center justify-between transition-colors duration-200`}>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className={`text-center text-sm ${terminalDark ? 'text-gray-300' : 'text-gray-600'}`}>Terminal</div>
          <Toggle 
            onClick={toggleTerminalTheme}
            className="w-8 h-8 p-1 hover:bg-transparent"
            aria-label="Toggle terminal theme"
          >
            {terminalDark ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-gray-600" />
            )}
          </Toggle>
        </div>
        
        {/* Terminal Content */}
        <div className={`${terminalDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} p-4 font-mono text-sm min-h-[200px] transition-colors duration-200`}>
          <p className={`${terminalDark ? 'text-gray-400' : 'text-gray-600'}`}>Last login: {lastLogin} on console</p>
          
          {/* Command History */}
          {commandHistory.map((cmd, index) => (
            <div key={index} className="mt-2">
              <span className={`${terminalDark ? 'text-green-400' : 'text-green-600'}`}>➜</span>
              <span className={`${terminalDark ? 'text-blue-400' : 'text-blue-600'}`}> ~</span>
              <span className="ml-2">{cmd}</span>
            </div>
          ))}
          
          {/* Current Input Line */}
          <div className="mt-2 flex items-center">
            <span className={`${terminalDark ? 'text-green-400' : 'text-green-600'}`}>➜</span>
            <span className={`${terminalDark ? 'text-blue-400' : 'text-blue-600'}`}> ~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className={`ml-2 bg-transparent border-none outline-none flex-1 ${terminalDark ? 'text-gray-100' : 'text-gray-800'}`}
              autoFocus
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
