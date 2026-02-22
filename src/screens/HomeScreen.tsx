import React from 'react';
import HeroSection from '../features/hero/HeroSection/HeroSection';


import ProjectsSection from '../features/projects/ProjectsSection';
import SkillsSection from '../features/skills/SkillsSection';

import ContactSection from '../features/contact/ContactSection';
import TimelineSection from '../features/timeline/TimelineSection';

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
