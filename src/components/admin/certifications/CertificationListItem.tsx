import React from "react";
import type { Certification } from "../../../types/Certification";
import { ListItem } from "../commons";

interface CertificationListItemProps {
    certification: Certification;
    onEdit: () => void;
}

const CertificationListItem: React.FC<CertificationListItemProps> = ({
    certification,
    onEdit
}) => {
    return (
        <ListItem onClick={onEdit}>
            <span>{certification.name}</span>
        </ListItem>
    );
};

export default CertificationListItem;
