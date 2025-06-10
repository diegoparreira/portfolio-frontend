import { Modal } from "react-bootstrap";
import type { Project } from "../../../types/Project";
import ProjectForm from "../../projects/ProjectForm";

interface CRUDModalProps {
    show: boolean;
    editing: Project | null;
    handleClose: () => void;
    handleSubmit: (data: Partial<Project>) => void;
}

const CRUDModal: React.FC<CRUDModalProps> = ({ show, editing, handleClose, handleSubmit }) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton >
                <Modal.Title className="text-center">{editing ? "Edit Project" : "New Project"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ProjectForm
                    initialData={editing || {}}
                    onSubmit={handleSubmit}
                    onCancel={handleClose}
                />
            </Modal.Body>
        </Modal>
    );
}

export default CRUDModal;