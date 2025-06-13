import { Button } from "react-bootstrap";
import type { Project } from "../../../types/Project";

interface ListItemProps {
    project: Project;
    editProject?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ project, editProject }) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" onClick={editProject}>
            <span>{project.id}</span>
            <span>{project.name}</span>
        </li>
    )
}

export default ListItem;