import React from 'react';
import type { Project } from './ProjectCardItem';

interface ProjectDetailCardProps {
  project: Project | null;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project }) => {  if (!project) {
    return (
      <div className="flex items-center justify-center h-full bg-light-surface/50 dark:bg-dark-surface/50 rounded-xl shadow-2xl p-8 border border-light-secondary/20 dark:border-dark-secondary/20">
        <p className="text-light-secondary dark:text-dark-secondary text-lg text-center">
          Pasa el cursor sobre un proyecto de la lista para ver sus detalles aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-light-surface dark:bg-dark-surface p-6 sm:p-8 rounded-xl shadow-2xl h-full flex flex-col transition-all duration-300 ease-in-out border border-light-secondary/20 dark:border-dark-secondary/20">
      <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 mb-6 rounded-lg overflow-hidden group shadow-inner ring-2 ring-primary-brown/10">
        <img
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/50 via-transparent to-transparent"></div>
      </div>
      <h4 className="text-2xl sm:text-3xl font-bold mb-3 text-light-text dark:text-dark-text">{project.title}</h4>
      <p className="text-light-secondary dark:text-dark-secondary mb-6 text-base sm:text-lg leading-relaxed flex-grow">
        {project.description}
      </p>
      <div className="mt-auto pt-4 border-t border-light-secondary/30 dark:border-dark-secondary/30">
        <h5 className="text-md sm:text-lg font-semibold mb-3 text-light-text dark:text-dark-text">Technology Stack:</h5>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary-beige/50 dark:bg-primary-navy/50 text-light-text dark:text-dark-text px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-primary-brown/20 hover:bg-primary-brown hover:text-light-bg transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;