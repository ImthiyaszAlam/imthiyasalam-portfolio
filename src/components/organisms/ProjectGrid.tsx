
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProjectCard from '../../features/projects/ProjectCard';
import type { Project } from '../../features/projects/types';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <View style={styles.grid}>
    {projects.map((project, idx) => {
      // Remove right margin for every 5th card (last in row)
      const isLastInRow = (idx + 1) % 5 === 0;
      return (
        <View
          key={project.title}
          style={[
            styles.cardWrap,
            isLastInRow && { marginRight: 0 },
          ]}
        >
          <ProjectCard project={project} />
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginVertical: 16,
  },
  cardWrap: {
    // 5 cards per row, 8px gap between cards except last in row
    width: '19.3%', // (100% - 4*8px) / 5 ≈ 19.2% for 5 cards with 8px gap
    minWidth: 0,
    maxWidth: '20%',
    marginBottom: 8,
    marginRight: 8,
    boxSizing: 'border-box',
    ...(typeof window !== 'undefined' ? {
      boxSizing: 'border-box',
    } : {}),
  },
});

export default ProjectGrid;
