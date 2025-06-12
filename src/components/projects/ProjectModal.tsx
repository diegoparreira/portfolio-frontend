import React from 'react';
import { Modal as RBModal, Button, Row, Col } from 'react-bootstrap';
import type { Project } from '../../types/Project';
import ProjectMediaCarousel from './ProjectMediaCarousel';

interface ProjectModalProps {
    show: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ show, onClose, project }) => {
    if (!project) return null;
    return (
        <RBModal size="xl" show={show} onHide={onClose} centered dialogClassName="project-modal">
            <RBModal.Header closeButton className="project-modal-header">
                <RBModal.Title as="h4"><strong>{project.name}</strong></RBModal.Title>
            </RBModal.Header>
            <RBModal.Body className="project-modal-body">
                <Row className="flex-column">
                    <Col className="mb-4 pt-0">
                        <ProjectMediaCarousel
                            screenshots={project.demo_screenshots_urls}
                            videoUrl={project.demo_video_url}
                            alt={project.name}
                        />
                        <div className="d-flex justify-content-center gap-2 mt-4">
                            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" variant="outline-primary" className="main-button">Ver Demo&nbsp;</Button>
                            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" variant="outline-primary" className="main-button">Código Fonte&nbsp;</Button>
                        </div>
                    </Col>
                    <Col>
                        <h3 className='text-center'>{project.name}</h3>
                        <div className="mb-4">
                            <h5 className="text-center text-muted mb-2">Sobre o projeto</h5>
                            <p>{project.description}</p>
                            <div>
                                <h5 className='text-center'>Detalhes técnicos</h5>
                                <p>{project.tecnical_description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </RBModal.Body>
        </RBModal>
    );
};

export default ProjectModal;
