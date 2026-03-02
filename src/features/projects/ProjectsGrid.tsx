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
  // Split projects into rows of 5 cards each
  const rows = [];
  for (let i = 0; i < projects.length; i += 5) {
    rows.push(projects.slice(i, i + 5));
  }

  return (
    <View style={{ width: '100%', padding: 8 }}>
      {rows.map((row, rowIdx) => (
        <View
          key={rowIdx}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: rowIdx < rows.length - 1 ? 8 : 0,
            width: '100%',
          }}
        >
          {row.map((project, idx) => (
            <View
              style={{
                width: '20%',
                minWidth: 160,
                marginRight: idx < row.length - 1 ? 8 : 0,
              }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
});

export default ProjectsGrid;

