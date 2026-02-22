import React from 'react';

import GlassCardOverlay from '../components/ui/GlassCardOverlay';
import ProjectsSection from '../features/projects/ProjectsSection';
import SkillsSection from '../features/skills/SkillsSection';
import ContactSection from '../features/contact/ContactSection';
import TimelineSection from '../features/timeline/TimelineSection';
import HeroSection from '../features/hero/HeroSection/HeroSection';

const HomeScreen: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh' }}>
      <div style={{ width: '25%', minWidth: 0 }}>
        <GlassCardOverlay />
      </div>
      <div style={{ width: '75%', overflowY: 'auto', minWidth: 0 }}>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
        {/* Other sections coming soon... */}
      </div>
    </div>
  );
};

export default HomeScreen;
