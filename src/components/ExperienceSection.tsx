
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "ABC Tech",
      period: "2021 - Present",
      description: "Leading front-end development for various web applications with focus on performance and user experience."
    },
    {
      id: 2,
      title: "Web Developer",
      company: "XYZ Digital",
      period: "2019 - 2021",
      description: "Designed and developed responsive websites and web applications for clients across different industries."
    }
  ];

  return (
    <section className="py-16 container max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-purple to-purple-light text-white py-4 px-6">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="opacity-90">{exp.company} • {exp.period}</p>
            </div>
            <div className="p-6">
              <p className="text-gray-dark">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
