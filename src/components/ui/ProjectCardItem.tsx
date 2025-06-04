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
        <li>
            <button
                onClick={() => onActivate(project.id)}
                onMouseEnter={() => onActivate(project.id)}
                className={`w-full text-left p-3.5 rounded-lg transition-all duration-200 ease-in-out focus:outline-none group
                    ${isActive
                      ? 'bg-blue-500 dark:bg-blue-600 shadow-lg transform scale-[1.02]'
                      : 'hover:bg-slate-200 dark:hover:bg-slate-700/60 hover:shadow-md'
                    }`}
            >
                <div className="flex justify-between items-center">
                    <span className={`font-semibold text-lg
                                    ${isActive
                                        ? 'text-white dark:text-white'
                                        : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100'
                                    }`}>
                        {isActive && <span className="mr-2 transition-opacity duration-300">➔</span>}
                        {project.title}
                    </span>
                    <span className={`text-xs uppercase tracking-wider font-medium
                                        ${isActive
                                        ? 'text-blue-100 dark:text-blue-200'
                                        : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                                        }`}>
                        {project.category}
                    </span>
                </div>
            </button>
        </li>
    )
}

export default ProjectCardItem;