import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import ProjectCard from './ProjectCard';
import type { Project } from './types';

interface ProjectsGridProps {
  projects: Project[];
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  rowMargin: {
    marginBottom: 8,
  },
  cardCol: {
    width: '20%',
    minWidth: 160,
  },
  cardColMargin: {
    marginRight: 8,
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
    <View style={styles.container}>
      {rows.map((row, rowIdx) => (
        <View
          key={rowIdx}
          style={[
            styles.row,
            rowIdx < rows.length - 1 && styles.rowMargin,
          ]}
        >
          {row.map((project, idx) => (
            <View
              style={[
                styles.cardCol,
                idx < row.length - 1 && styles.cardColMargin,
              ]}
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

