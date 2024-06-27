import React from "react";
import {Skill} from "../../../types/Skill.ts";
import {Card, CardContent, CardFooter} from "../../ui/card.tsx";

type SkillItemProps = {
    skill: Skill,
    onSkillSelect: (skill: string) => void;
    isSelected: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({skill, onSkillSelect, isSelected}) => {
    const defaultClassNames = "flex-1 flex flex-col justify-center items-center px-4 py-1"
    const cardClassNames = isSelected ? `${defaultClassNames} border-2 border-blue-500` : `${defaultClassNames} hover:scale-105`;

    return (
        <Card
            className={cardClassNames}
            onClick={() => onSkillSelect(skill.title)}
        >
            <CardContent className="w-24 h-24 p-2">
                <img
                    className="object-scale-down"
                    src={skill.image}
                    alt={skill.title}
                />
            </CardContent>
            <CardFooter className="p-3">
                <span className="text-center">{skill.title}</span>
            </CardFooter>
        </Card>
    );
};

export default SkillItem;