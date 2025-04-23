
import React from 'react';
import { Coffee } from 'lucide-react';

const SupportSection = () => {
  return (
    <section className="py-16 pb-24 container max-w-6xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Enjoying my content?</h2>
        <p className="text-gray mb-8">
          Consider buying me a coffee if you enjoy my content. Your support helps me create more useful products and free resources.
        </p>
        
        <a 
          href="#" 
          className="inline-flex items-center bg-amber-400 hover:bg-amber-500 text-amber-900 font-medium py-3 px-6 rounded-full transition-colors"
        >
          <Coffee className="mr-2 h-5 w-5" />
          Buy me a coffee
        </a>
      </div>
    </section>
  );
};

export default SupportSection;
