import React from "react";
import {skillComponents} from "./skillComponents.ts";

type SelectedSkillProps = {
    selectedSkill: string | null;
}

const SelectedSkill: React.FC<SelectedSkillProps> = ({selectedSkill}) => {
    const SkillComponent = selectedSkill ? skillComponents[selectedSkill] : null;

    return (
        <div className="w-full max-w-12">
            {SkillComponent && <SkillComponent />}
        </div>
    );
};

export default SelectedSkill;