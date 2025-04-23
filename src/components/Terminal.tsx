
import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [lastLogin, setLastLogin] = useState('');

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

  return (
    <section className="container max-w-4xl mx-auto py-16 px-4">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {/* Terminal Header */}
        <div className="bg-gray-200 px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-center text-sm text-gray-600">Terminal</div>
          <div className="w-4 h-4 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="bg-white p-4 font-mono text-sm">
          <p className="text-gray-600">Last login: {lastLogin} on console</p>
          <div className="mt-2">
            <span className="text-green-600">➜</span>
            <span className="text-blue-600"> ~</span>
            <span className="animate-pulse">▋</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
