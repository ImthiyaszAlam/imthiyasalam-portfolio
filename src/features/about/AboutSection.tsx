import React, { useEffect, useRef } from 'react';
import { useNavigation } from '../../app/navigation/NavigationProvider';

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useNavigation();

  useEffect(() => {
    registerSection('about', ref);
  }, [registerSection]);

  return (
    <section id="about" ref={ref}>
      <h2>About</h2>
      <p>This is the About section. Add your content here.</p>
    </section>
  );
};

export default AboutSection;
