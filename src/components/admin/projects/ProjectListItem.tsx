import React from "react";
import type { Project } from "../../../types/Project";
import { ListItem } from "../commons";
import FavoriteStar from "../commons/FavoriteStar";

interface ProjectListItemProps {
    project: Project;
    onEdit: () => void;
    onFavoriteToggle: (value: boolean) => void;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
    project,
    onEdit,
    onFavoriteToggle
}) => {
    return (
        <ListItem onClick={onEdit}>
            <FavoriteStar
                value={(project as any).favorite || false}
                onToggle={onFavoriteToggle}
            />
            <span>{project.name}</span>
        </ListItem>
    );
};

export default ProjectListItem;
