
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Navigation />
      <ProjectsSection />
      <GlobalMap />
      <PrinciplesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
