
import React from 'react';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      icon: '/placeholder.svg',
      title: 'Capture my Tweet',
      domain: 'cmt.itsvg.in',
      link: 'https://cmt.itsvg.in'
    },
    {
      icon: '/placeholder.svg',
      title: 'ColPat : Color Palette & Design Tool',
      domain: 'colpat.itsvg.in',
      link: 'https://colpat.itsvg.in'
    },
    {
      icon: '/placeholder.svg',
      title: 'JobMatchPro : Your AI Recruiter',
      domain: 'jobmatch.itsvg.in',
      link: 'https://jobmatch.itsvg.in'
    },
    {
      icon: '/placeholder.svg',
      title: 'Visit Count Pro',
      domain: 'visitcountpro.netlify.app',
      link: 'https://visitcountpro.netlify.app'
    },
    {
      icon: '/placeholder.svg',
      title: 'GPRM : GitHub Profile ReadMe Maker',
      domain: 'gprm.itsvg.in',
      link: 'https://gprm.itsvg.in'
    },
    {
      icon: '/placeholder.svg',
      title: 'YTMP : YouTube Music Player',
      domain: 'ytmp.itsvg.in',
      link: 'https://ytmp.itsvg.in'
    },
    {
      icon: '/placeholder.svg',
      title: 'YTViral: Viral Spark in Every Video',
      domain: 'ytviral.itsvg.in',
      link: 'https://ytviral.itsvg.in'
    },
    {
      icon: '/placeholder.svg',
      title: 'Pixlyze',
      domain: 'pixlyze.itsvg.in',
      link: 'https://pixlyze.itsvg.in'
    },
    {
      icon: '/placeholder.svg',
      title: 'YouTube Word Counter',
      domain: 'ytword.itsvg.in',
      link: 'https://ytword.itsvg.in'
    }
  ];

  return (
    <section id="projects" className="py-16 container max-w-6xl mx-auto px-4">
      <h2 className="text-6xl font-bold mb-12 text-center">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            domain={project.domain}
            link={project.link}
          />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" className="rounded-full">
          Load More
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
