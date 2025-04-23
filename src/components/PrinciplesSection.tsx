
import React from 'react';
import { CheckSquare } from 'lucide-react';

const PrinciplesSection = () => {
  const principles = [
    "Intuitive User Experience",
    "Performance Optimized",
    "Responsive Design",
    "Accessibility First",
    "Clean & Maintainable Code",
    "Continuous Improvement"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <div key={index} className="flex items-start">
              <CheckSquare className="text-purple mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
