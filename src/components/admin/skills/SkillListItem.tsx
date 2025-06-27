import React from "react";
import type { Skill } from "../../../types/Skill";
import { FavoriteStar, ListItem } from "../commons";

interface SkillListItemProps {
    skill: Skill;
    onEdit: () => void;
    onFavoriteToggle: (value: boolean) => void;
}

const SkillListItem: React.FC<SkillListItemProps> = ({
    skill,
    onEdit,
    onFavoriteToggle
}) => {
    return (
        <ListItem onClick={onEdit}>
            <FavoriteStar
                value={(skill as any).favorite || false}
                onToggle={onFavoriteToggle}
            />
            <span>{skill.name}</span>
        </ListItem>
    );
};

export default SkillListItem;
