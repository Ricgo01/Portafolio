import React from 'react';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    repoUrl?: string;  // URL del repositorio
}

interface ProjectCardItemProps {
  project: Project;
  isActive: boolean;
  onActivate: (projectId: string) => void; 
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({project, isActive, onActivate}) => {
    const handleClick = () => {
        onActivate(project.id);
        if (project.repoUrl) {
            window.open(project.repoUrl, '_blank');
        }
    };

    const handleMouseEnter = () => {
        onActivate(project.id);
    };

    return (
        <li>            <button
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                className={`w-full text-left p-3.5 rounded-lg transition-all duration-200 ease-in-out focus:outline-none group
                    ${isActive
                      ? 'bg-primary-brown shadow-lg transform scale-[1.02] border border-primary-brown'
                      : 'hover:bg-light-surface/60 dark:hover:bg-dark-surface/60 hover:shadow-md border border-transparent hover:border-primary-brown/20'
                    }`}
                title={project.repoUrl ? `Click to view repository: ${project.title}` : `${project.title} - Repository URL not available`}
            >
                <div className="flex justify-between items-center">
                    <span className={`font-semibold text-lg flex items-center gap-2
                                    ${isActive
                                        ? 'text-light-bg'
                                        : 'text-light-text dark:text-dark-text group-hover:text-primary-brown dark:group-hover:text-primary-beige'
                                    }`}>
                        {isActive && <span className="mr-2 transition-opacity duration-300">➔</span>}
                        {project.title}
                        {project.repoUrl && (
                            <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        )}
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