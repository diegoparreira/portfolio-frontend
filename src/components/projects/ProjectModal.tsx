import React from 'react';
import { Modal as RBModal, Button, Row, Col } from 'react-bootstrap';
import type { Project } from '../../types/Project';

interface ProjectModalProps {
    show: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ show, onClose, project }) => {
    if (!project) return null;
    return (
        <RBModal show={show} onHide={onClose} centered dialogClassName="project-modal">
            <RBModal.Header closeButton className="project-modal-header">
                <RBModal.Title as="h4"><strong>{project.name}</strong></RBModal.Title>
            </RBModal.Header>
            <RBModal.Body className="project-modal-body">
                <Row className="flex-column">
                    <Col className="mb-4 pt-0">
                        <img className="img-fluid shadow-sm rounded-3 project-image" src={project.demo_screenshots_url && project.demo_screenshots_url.length > 0 ? project.demo_screenshots_url[0] : 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png'} alt={project.name} />
                        <div className="d-flex gap-2 mt-4">
                            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" variant="outline-primary" className="flex-grow-1">Ver Demo&nbsp;</Button>
                            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" variant="outline-primary" className="flex-grow-1">Código Fonte&nbsp;</Button>
                        </div>
                    </Col>
                    <Col>
                        <h3>{project.name}</h3>
                        <div className="mb-4">
                            <h5 className="text-muted mb-2">Sobre o projeto</h5>
                            <p>{project.description}</p>
                            <div>
                                <h5>Detalhes técnicos</h5><small>Text</small>
                                <Row>
                                    <Col><small>Status:</small><div className="fw-medium">{project.status}</div></Col>
                                    <Col><small>Data:</small><div className="fw-medium">{project.end_date}</div></Col>
                                    <Col><small>Cliente:</small><div className="fw-medium">XPTO</div></Col>
                                    <Col><small>Time:</small><div className="fw-medium">XPTO</div></Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </RBModal.Body>
        </RBModal>
    );
};

export default ProjectModal;
