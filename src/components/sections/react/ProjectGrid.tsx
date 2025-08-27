import React from 'react';
import ProjectCard from '../../ui/ProjectCard';
import type { Project } from '../../ui/ProjectCardItem';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <p className="text-center text-light-secondary dark:text-dark-secondary py-10">
        No hay proyectos para mostrar en este momento.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
