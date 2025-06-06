import React from 'react';
import Modal from '../common/Modal';
import type { Project } from '../../types/Project';

interface ProjectModalProps {
    show: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ show, onClose, project }) => {
    if (!project) return null;
    return (
        <Modal show={show} onClose={onClose} title={project.name} size="lg">
            <div className="row flex-column">
                <div className="col mb-4 pt-0">
                    <img className="img-fluid shadow-sm rounded-3 project-image" src={project.demo_screenshot_url || 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png'} alt={project.name} />
                    <div className="d-flex gap-2 mt-4">
                        <a className="flex-grow-1 btn btn-outline-primary" href="#" target="_blank" rel="noopener noreferrer">Ver Demo&nbsp;</a>
                        <a className="flex-grow-1 btn btn-outline-primary" href="#" target="_blank" rel="noopener noreferrer">Código Fonte&nbsp;</a>
                    </div>
                </div>
                <div className="col">
                    <h3>{project.name}</h3>
                    <div className="mb-4">
                        <h5 className="text-muted mb-2">Sobre o projeto</h5>
                        <p>{project.description}</p>
                        <div>
                            <h5>Detalhes técnicos</h5><small>Text</small>
                            <div className="row">
                                <div className="col"><small>Status:</small><div className="fw-medium">{project.status}</div></div>
                                <div className="col"><small>Data:</small><div className="fw-medium">{project.end_date}</div></div>
                                <div className="col"><small>Cliente:</small><div className="fw-medium">XPTO</div></div>
                                <div className="col"><small>Time:</small><div className="fw-medium">XPTO</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectModal;
