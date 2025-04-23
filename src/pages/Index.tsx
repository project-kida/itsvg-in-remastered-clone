
import React from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import GlobalMap from '@/components/GlobalMap';
import PrinciplesSection from '@/components/PrinciplesSection';
import ExperienceSection from '@/components/ExperienceSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import TopNavbar from '@/components/TopNavbar';
import Terminal from '@/components/Terminal';

const Index = () => {
  return (
    <div className="min-h-screen pt-24">
      <TopNavbar />
      <div id="home" className="pt-16">
        <Hero />
        <Terminal />
      </div>
      <Navigation />
      <div id="about" className="pt-16">
        <PrinciplesSection />
        <ExperienceSection />
      </div>
      <div id="projects" className="pt-16">
        <ProjectsSection />
        <GlobalMap />
      </div>
      <div id="contact" className="pt-16">
        <SupportSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
