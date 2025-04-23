
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      icon: '/placeholder.svg',
      title: 'Capture My Tweet',
      description: 'Generate beautiful image from your Twitter tweets!',
      color: 'bg-gray-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'ColPat',
      description: 'Simple, beautiful Color Palette generator',
      color: 'bg-amber-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'Dualite',
      description: 'Beautiful CSS gradients for your next project',
      color: 'bg-green-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'Meta Link Preview',
      description: 'Generate beautiful link previews for your websites',
      color: 'bg-teal-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'OTP Input Pattern',
      description: 'OTP manual INPUT pattern made for Web',
      color: 'bg-blue-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'JIGSAWR',
      description: 'Connect different APIs and make custom workflows',
      color: 'bg-purple-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'RDBMS',
      description: 'A better way to understand RDBMS concepts',
      color: 'bg-pink-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'JobMatchPro',
      description: 'Match your skills with job requirements',
      color: 'bg-amber-100',
    },
    {
      icon: '/placeholder.svg',
      title: 'YouTube Video Creator',
      description: 'Auto create YouTube videos from content',
      color: 'bg-red-100',
    },
  ];

  return (
    <section id="projects" className="py-16 container max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            color={project.color}
          />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <a 
          href="#" 
          className="bg-black hover:bg-black/80 text-white py-2.5 px-5 rounded-full text-sm font-medium transition-colors"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
