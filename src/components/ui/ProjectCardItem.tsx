import React from 'react';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
}

interface ProjectCardItemProps {
  project: Project;
  isActive: boolean;
  onActivate: (projectId: string) => void; 
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({project, isActive, onActivate}) => {
    return (
        <li>            <button
                onClick={() => onActivate(project.id)}
                onMouseEnter={() => onActivate(project.id)}
                className={`w-full text-left p-3.5 rounded-lg transition-all duration-200 ease-in-out focus:outline-none group
                    ${isActive
                      ? 'bg-primary-brown shadow-lg transform scale-[1.02] border border-primary-brown'
                      : 'hover:bg-light-surface/60 dark:hover:bg-dark-surface/60 hover:shadow-md border border-transparent hover:border-primary-brown/20'
                    }`}
            >
                <div className="flex justify-between items-center">
                    <span className={`font-semibold text-lg
                                    ${isActive
                                        ? 'text-light-bg'
                                        : 'text-light-text dark:text-dark-text group-hover:text-primary-brown dark:group-hover:text-primary-beige'
                                    }`}>
                        {isActive && <span className="mr-2 transition-opacity duration-300">➔</span>}
                        {project.title}
                    </span>
                    <span className={`text-xs uppercase tracking-wider font-medium
                                        ${isActive
                                        ? 'text-light-bg/80'
                                        : 'text-light-secondary dark:text-dark-secondary group-hover:text-primary-brown dark:group-hover:text-primary-beige'
                                        }`}>
                        {project.category}
                    </span>
                </div>
            </button>
        </li>
    )
}

export default ProjectCardItem;