import React from 'react';
import type { Project } from './ProjectCardItem';

interface ProjectDetailCardProps {
  project: Project | null;
}

const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project }) => {
  if (!project) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-100 dark:bg-slate-800/50 rounded-xl shadow-2xl p-8">
        <p className="text-slate-500 dark:text-slate-400 text-lg text-center">
          Pasa el cursor sobre un proyecto de la lista para ver sus detalles aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl h-full flex flex-col transition-all duration-300 ease-in-out">
      <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 mb-6 rounded-lg overflow-hidden group shadow-inner">
        <img
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      <h4 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-800 dark:text-slate-100">{project.title}</h4>
      <p className="text-slate-600 dark:text-slate-300 mb-6 text-base sm:text-lg leading-relaxed flex-grow">
        {project.description}
      </p>
      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
        <h5 className="text-md sm:text-lg font-semibold mb-3 text-slate-700 dark:text-slate-200">Technology stack:</h5>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm"
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