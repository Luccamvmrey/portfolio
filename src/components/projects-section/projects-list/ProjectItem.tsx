import React from "react";
import {Project} from "../../../types/Project.ts";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "../../ui/card.tsx";

type ProjectItemProps = {
    project: Project
}

const ProjectItem: React.FC<ProjectItemProps> = ({project}) => {
    return (
        <Card className="w-full md:w-1/4 flex flex-col justify-between items-start gap-3 p-4 hover:scale-105">
            <div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                    {project.technologies.join(", ")}
                </CardDescription>
            </div>

            <CardContent className="p-0">
                {project.description}
            </CardContent>
            <CardFooter className="p-0">
                <a href={project.githubLink} target="_blank" className="text-blue-500 hover:underline">
                    Ver no GitHub
                </a>
            </CardFooter>
        </Card>
    );
};

export default ProjectItem;