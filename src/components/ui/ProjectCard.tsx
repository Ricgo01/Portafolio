import React from 'react';
import type { Project } from './ProjectCardItem';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleRepoClick = () => {
    if (project.repoUrl) {
      window.open(project.repoUrl, '_blank');
    } else {
      // Aquí puedes agregar tu link cuando esté listo
      console.log('Repo URL not set for project:', project.title);
    }
  };

  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-light-secondary/20 dark:border-dark-secondary/20 group hover:scale-[1.02] hover:border-primary-brown/40 dark:hover:border-primary-brown/40">
      {/* Imagen del proyecto */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-primary-brown/90 text-light-bg px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3 group-hover:text-primary-brown dark:group-hover:text-primary-beige transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-light-secondary dark:text-dark-secondary text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className="bg-primary-beige/30 dark:bg-primary-navy/30 text-light-text dark:text-dark-text px-2 py-1 rounded-md text-xs font-medium border border-primary-brown/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-primary-brown/20 text-primary-brown dark:text-primary-beige px-2 py-1 rounded-md text-xs font-medium">
                +{project.technologies.length - 4} más
              </span>
            )}
          </div>
        </div>

        {/* Botón de acción */}
        <div className="flex justify-center mt-auto pt-4 border-t border-light-secondary/20 dark:border-dark-secondary/20">
          <button
            onClick={handleRepoClick}
            className={`w-full px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 transform hover:scale-105 ${
              project.repoUrl 
                ? 'bg-primary-brown hover:bg-primary-brown/80 text-light-bg shadow-md hover:shadow-lg' 
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
            disabled={!project.repoUrl}
            title={project.repoUrl ? 'Ver código fuente' : 'URL no disponible - Agregar link aquí'}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {project.repoUrl ? 'View Repository' : 'Add Repository URL'}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
