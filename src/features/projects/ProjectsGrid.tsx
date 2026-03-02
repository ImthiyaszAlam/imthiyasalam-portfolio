import React from 'react';
import { StyleSheet } from 'react-native';
import ProjectGrid from '../../components/organisms/ProjectGrid';
import ProjectCard from './ProjectCard';
import type { Project } from './types';

interface ProjectsGridProps {
  projects: Project[];
}

// No custom styles needed; ProjectGrid handles layout

const ProjectsGrid: React.FC<ProjectsGridProps> = React.memo(({ projects }) => (
  <ProjectGrid>
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </ProjectGrid>
));

export default ProjectsGrid;

