import React from "react";

import {skillsList} from "./skillsList.ts";
import SkillItem from "./SkillItem.tsx";

type SkillsListProps = {
    onSkillSelect: (skill: string) => void;
    selectedSkill: string | null;
}

const SkillsList: React.FC<SkillsListProps> = ({onSkillSelect, selectedSkill}) => {
    return (
        <div className="flex flex-wrap w-full md:w-2/5 gap-5">
            {skillsList.map((skill) => {
                return (
                    <SkillItem
                        key={skill.title}
                        skill={skill}
                        onSkillSelect={onSkillSelect}
                        isSelected={selectedSkill === skill.title}
                    />
                )
            })}
        </div>
    );
};

//grid grid-cols-3 gap-2 p-10 w-6/12

export default SkillsList;