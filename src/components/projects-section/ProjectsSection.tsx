import React from "react";
import {Separator} from "../ui/separator.tsx";
import ProjectsList from "./projects-list/ProjectsList.tsx";
import SelectedSkill from "./projects-list/selected-skill/SelectedSkill.tsx";

type ProjectsSectionProps = {
    onSkillSelect: (skill: string) => void;
    selectedSkill: string | null;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({selectedSkill}) => {
    const classNames = selectedSkill ? "flex flex-col justify-between items-center gap-6" : "flex justify-center items-center";

    return (
        <section className="container flex flex-col justify-center items-center gap-8" id="projects">
            <div className={classNames}>
                <span className="text-4xl">Projetos</span>
                <SelectedSkill selectedSkill={selectedSkill}/>
            </div>


            <ProjectsList selectedSkill={selectedSkill}/>

            <Separator className="my-8 mx-auto"/>
        </section>
    );
};

export default ProjectsSection;