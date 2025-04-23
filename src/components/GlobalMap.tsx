
import React from 'react';

const GlobalMap = () => {
  return (
    <section className="py-16 container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple">
        Our Products are used and loved by people from all
        <br className="hidden md:block" /> around the world
      </h2>
      
      <div className="mt-12 relative">
        <div className="w-full h-[300px] md:h-[400px] bg-gray-50 rounded-xl relative overflow-hidden">
          {/* World map image/svg would go here */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDgwMHY0MDBIMHoiIGZpbGw9IiNmOWZhZmIiLz48cGF0aCBkPSJNMjUwIDUwTDUwIDIwMGwyMDAgMjAwaDMwMGwyMDAtMjAwLTIwMC0xNTBoLTMwMHoiIGZpbGw9IiNlNWU3ZWIiIGZpbGwtb3BhY2l0eT0iLjIiLz48L3N2Zz4=')] bg-center bg-contain bg-no-repeat"></div>
          
          {/* Usage dots */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-purple rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-purple rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-purple rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-purple rounded-full animate-pulse"></div>
        </div>
        
        {/* Usage stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-dark uppercase font-medium mb-2">Users</p>
            <p className="text-3xl font-bold">20,000+</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-dark uppercase font-medium mb-2">Countries</p>
            <p className="text-3xl font-bold">150+</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-dark uppercase font-medium mb-2">Impressions</p>
            <p className="text-3xl font-bold">1M+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
