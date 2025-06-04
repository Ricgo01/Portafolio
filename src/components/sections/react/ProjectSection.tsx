import React, { useState, useEffect } from 'react';
import ProjectCardItem, { type Project } from '../../ui/ProjectCardItem';
import ProjectDetailCard from '../../ui/ProjectDetailCard';
interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  useEffect(() => {
    if (projects && projects.length > 0) {
      setActiveProjectId(projects[0].id);
    }
  }, [projects]);

  const handleActivateProject = (projectId: string) => {
    setActiveProjectId(projectId);
  };

  const activeProject = projects.find(p => p.id === activeProjectId) || null;

  if (!projects || projects.length === 0) {
    return <p className="text-center text-slate-500 dark:text-slate-400 py-10">Aucun projet à afficher pour le moment.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 min-h-[70vh] md:min-h-[80vh]">
      <div className="w-full lg:w-2/5 xl:w-1/3 space-y-3 lg:pr-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-700 dark:text-slate-200 tracking-wider uppercase">
          Projets
        </h3>
        <ul className="space-y-1">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <ProjectCardItem
                project={project}
                isActive={project.id === activeProjectId}
                onActivate={handleActivateProject}
              />
              {index < projects.length - 1 && (
                <hr className="border-slate-200 dark:border-slate-700 my-2 lg:my-1" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      
      <div className="w-full lg:w-3/5 xl:w-2/3">
        <ProjectDetailCard project={activeProject} />
      </div>
    </div>
  );
};

export default ProjectSection;