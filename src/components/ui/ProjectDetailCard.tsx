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
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary-beige/50 dark:bg-primary-navy/50 text-light-text dark:text-dark-text px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-primary-brown/20 hover:bg-primary-brown hover:text-light-bg transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Indicador de repositorio */}
        <div className="mt-4 pt-3 border-t border-light-secondary/20 dark:border-dark-secondary/20">
          {project.repoUrl ? (
            <div className="flex items-center gap-2 text-primary-brown dark:text-primary-beige">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm font-medium">Click on the project title to view repository</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-light-secondary dark:text-dark-secondary opacity-60">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">Repository not available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;