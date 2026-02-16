import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import ProjectCard from './ProjectCard';
import type { Project } from './types';

interface ProjectsGridProps {
  projects: Project[];
}

const styles = StyleSheet.create({
  gridWrap: {
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  cardCol: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  arrowButton: {
    padding: 8,
    zIndex: 2,
  },
});

const ProjectsGrid: React.FC<ProjectsGridProps> = React.memo(({ projects }) => {
  const { theme } = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: offset, animated: true });
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
      <TouchableOpacity
        onPress={() => scrollBy(-320)}
        style={styles.arrowButton}
        accessibilityLabel="Scroll left"
      >
        <Ionicons name="chevron-back" size={28} color={theme.colors.text} />
      </TouchableOpacity>
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.gridWrap, { gap: theme.spacing.lg }]}
        style={{ flex: 1 }}
      >
        {projects.map((project) => (
          <View
            key={project.id}
            style={[
              styles.cardCol,
              { minWidth: 260, maxWidth: 300, marginRight: theme.spacing.lg },
            ]}
          >
            <ProjectCard project={project} />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => scrollBy(320)}
        style={styles.arrowButton}
        accessibilityLabel="Scroll right"
      >
        <Ionicons name="chevron-forward" size={28} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
});

export default ProjectsGrid;

