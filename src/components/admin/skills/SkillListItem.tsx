import React from "react";
import type { Skill } from "../../../types/Skill";
import { ListItem } from "../commons";

interface SkillListItemProps {
    skill: Skill;
    onEdit: () => void;
}

const SkillListItem: React.FC<SkillListItemProps> = ({
    skill,
    onEdit
}) => {
    return (
        <ListItem onClick={onEdit}>
            <span>{skill.name}</span>
        </ListItem>
    );
};

export default SkillListItem;
