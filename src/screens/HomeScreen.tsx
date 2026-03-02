import React from 'react';

// ...existing code...
import AboutSection from '../features/about/AboutSection';
import BlogSection from '../features/blog/BlogSection';
import ContactSection from '../features/contact/ContactSection';
import ProjectsSection from '../features/projects/ProjectsSection';
import SkillsSection from '../features/skills/SkillsSection';
import TimelineSection from '../features/timeline/TimelineSection';

const HomeScreen: React.FC = () => {
  return (
    <div style={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* <HeroSection /> */}
      <AboutSection />
      <BlogSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      {/* Other sections coming soon... */}
    </div>
  );
};

export default HomeScreen;
