import React from 'react';
import { StyleSheet, View } from 'react-native';
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
  // Split projects into rows of 4 cards each (same logic as BlogSection)
  const rows = [];
  for (let i = 0; i < projects.length; i += 4) {
    rows.push(projects.slice(i, i + 4));
  }

  return (
    <View style={{ width: '100%', padding: 8 }}>
      {rows.map((row, rowIdx) => (
        <View
          key={rowIdx}
          style={{
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'flex-start',
            marginBottom: rowIdx < rows.length - 1 ? 24 : 0,
            width: '100%',
          }}
        >
          {row.map((project, idx) => (
            <View style={{ flex: 1, marginHorizontal: 8 }} key={project.id}>
              <ProjectCard project={project} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
});

export default ProjectsGrid;

