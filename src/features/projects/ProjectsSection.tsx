import React from 'react';
import { StyleSheet } from 'react-native';
import Section from '../../components/layout/Section';
import { useTheme } from '../../theme/ThemeContext';
import ProjectsGrid from './ProjectsGrid';
import { projects } from './data';

import SectionHeader from '../../components/layout/SectionHeader';

const subtitle = 'A selection of my best work, built with modern technologies.';

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="projects" background="transparent">
      <SectionHeader
        title="Featured Projects"
        subtitle={subtitle}
        accessibilityLabel="Featured Projects"
      />
      <ProjectsGrid projects={projects} />
    </Section>
  );
};

const styles = StyleSheet.create({
  headingWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 0,
    maxWidth: 480,
  },
});

export default ProjectsSection;
