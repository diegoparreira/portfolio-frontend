import React from "react";
import type { Certification } from "../../../types/Certification";
import { FavoriteStar, ListItem } from "../commons";

interface CertificationListItemProps {
    certification: Certification;
    onEdit: () => void;
    onFavoriteToggle: (value: boolean) => void;
}

const CertificationListItem: React.FC<CertificationListItemProps> = ({
    certification,
    onEdit,
    onFavoriteToggle
}) => {
    return (
        <ListItem onClick={onEdit}>
            <FavoriteStar
                value={(certification as any).favorite || false}
                onToggle={onFavoriteToggle}
            />
            <span>{certification.name}</span>
        </ListItem>
    );
};

export default CertificationListItem;
