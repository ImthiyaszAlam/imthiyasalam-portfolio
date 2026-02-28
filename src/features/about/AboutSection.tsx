
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '../../app/navigation/NavigationProvider';
import styles from './AboutSection.styles';


const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useNavigation();

  useEffect(() => {
    registerSection('about', ref);
  }, [registerSection]);

  return (
    <section id="about" ref={ref} style={styles.container as React.CSSProperties}>
      <h2 style={styles.title as React.CSSProperties}>About</h2>
      <p style={styles.description as React.CSSProperties}>This is the About section. Add your content here.</p>
    </section>
  );
};

export default AboutSection;
