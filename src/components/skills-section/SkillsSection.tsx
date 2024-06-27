import React from "react";
import SkillsList from "./skills-list/SkillsList.tsx";
import {Separator} from "../ui/separator.tsx";

type SkillsSectionProps = {
    onSkillSelect: (skill: string) => void;
    selectedSkill: string | null;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({onSkillSelect, selectedSkill}) => {
    return (
        <section className="container flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">Tecnologias</span>
                <span>Clique para saber mais</span>
            </div>

            <SkillsList
                onSkillSelect={onSkillSelect}
                selectedSkill={selectedSkill}
            />

            <Separator className="my-8 mx-auto"/>
        </section>
    );
};

export default SkillsSection;