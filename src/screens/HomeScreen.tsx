import React from 'react';
import HeroSection from '../features/hero/HeroSection';

import ProjectsSection from '../features/projects/ProjectsSection';
import SkillsSection from '../features/skills/SkillsSection';

const HomeScreen: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      {/* Other sections coming soon... */}
    </>
  );
};

export default HomeScreen;
