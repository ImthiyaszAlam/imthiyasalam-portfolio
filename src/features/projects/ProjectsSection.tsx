import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from '../../components/layout/Section';
import { useTheme } from '../../theme/ThemeContext';
import ProjectsGrid from './ProjectsGrid';
import { projects } from './data';

const subtitle = 'A selection of my best work, built with modern technologies.';

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="projects">
      <View style={[styles.headingWrap, { marginBottom: theme.spacing.xl }]}> 
        <Text
          style={[styles.title, { color: theme.colors.text, fontSize: theme.typography.h1.fontSize }]}
          accessibilityRole="header"
          accessibilityLabel="Featured Projects"
        >
          Featured Projects
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary, fontSize: theme.typography.body.fontSize }]}
          accessibilityRole="text"
        >
          {subtitle}
        </Text>
      </View>
      <ProjectsGrid projects={projects.filter(p => p.featured)} />
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
