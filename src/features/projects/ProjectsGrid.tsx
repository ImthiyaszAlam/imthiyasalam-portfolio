import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useTheme } from '../../theme/ThemeContext';
import ProjectCard from './ProjectCard';
import type { Project } from './types';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = React.memo(({ projects }) => {
  const breakpoint = useBreakpoint();
  const { theme } = useTheme();

  let columns = 1;
  if (breakpoint === 'tablet') columns = 2;
  if (breakpoint === 'desktop') columns = 3;

  // Split projects into rows for grid rendering
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += columns) {
    rows.push(projects.slice(i, i + columns));
  }

  return (
    <View style={[styles.gridWrap, { gap: theme.spacing.lg }]}> 
      {rows.map((row, rowIdx) => (
        <View
          key={rowIdx}
          style={[
            styles.row,
            { gap: theme.spacing.lg },
            { justifyContent: 'center' },
          ]}
        >
          {row.map((project) => (
            <View
              key={project.id}
              style={[
                styles.cardCol,
                { flex: 1, minWidth: 0, maxWidth: 400 },
              ]}
            >
              <ProjectCard project={project} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  gridWrap: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 0,
  },
  cardCol: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default ProjectsGrid;
