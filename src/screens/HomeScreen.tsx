import React from 'react';

import GlassCardOverlay from '../components/ui/GlassCardOverlay';
import AboutSection from '../features/about/AboutSection';
import BlogSection from '../features/blog/BlogSection';
import ContactSection from '../features/contact/ContactSection';
import HeroSection from '../features/hero/HeroSection/HeroSection';
import ProjectsSection from '../features/projects/ProjectsSection';
import SkillsSection from '../features/skills/SkillsSection';
import TimelineSection from '../features/timeline/TimelineSection';

const HomeScreen: React.FC = () => {
  return (
    <>
      <GlassCardOverlay />
      <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '25%', minWidth: 0 }}></div>
        <div style={{ width: '75%', minWidth: 0, overflowY: 'auto', height: '100vh' }}>
          {/* <HeroSection /> */}
          <AboutSection />
          <BlogSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
          {/* Other sections coming soon... */}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
