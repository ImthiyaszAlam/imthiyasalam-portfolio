import React from 'react';
import HeroSection from '../features/hero/HeroSection';


import ProjectsSection from '../features/projects/ProjectsSection';
import SkillsSection from '../features/skills/SkillsSection';

import TimelineSection from '../features/timeline/TimelineSection';
import ContactSection from '../features/contact/ContactSection';

const HomeScreen: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      {/* Other sections coming soon... */}
    </>
  );
};

export default HomeScreen;
