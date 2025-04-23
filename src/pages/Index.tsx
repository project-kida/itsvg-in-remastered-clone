
import React from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import GlobalMap from '@/components/GlobalMap';
import PrinciplesSection from '@/components/PrinciplesSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import TopNavbar from '@/components/TopNavbar';
import Terminal from '@/components/Terminal';

const Index = () => {
  return (
    <div className="min-h-screen pt-24">
      <TopNavbar />
      <div id="home">
        <Hero />
        <Terminal />
      </div>
      <Navigation />
      <div id="about">
        <PrinciplesSection />
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
        <GlobalMap />
      </div>
      <div id="testimony">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <SupportSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
