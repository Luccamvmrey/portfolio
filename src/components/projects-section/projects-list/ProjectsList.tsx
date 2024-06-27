import React from "react";

import {projects} from "./projectsList.ts";
import ProjectItem from "./ProjectItem.tsx";

type ProjectsListProps = {
    selectedSkill: string | null;
}

const ProjectsList: React.FC<ProjectsListProps> = ({selectedSkill}) => {
    const filteredProjects = selectedSkill ? projects.filter((project) => project.technologies.includes(selectedSkill)) : projects;

    return (
        <div className="flex flex-wrap justify-center w-full md:w-3/5 gap-5">
            {filteredProjects.map((project) => {
                return (
                    <ProjectItem key={project.title} project={project}/>
                )
            })}
        </div>
    );
};

export default ProjectsList;