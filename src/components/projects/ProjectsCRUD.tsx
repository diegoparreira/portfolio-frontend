import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../api/projects";
import type { Project } from "../../types/Project";
import ProjectForm from "./ProjectForm";

const ProjectsCRUD: React.FC = () => {
    const { data: projects, isLoading, isError, refetch } = useQuery<Project[], Error>({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    });
    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setShowModal(true);
    };

    const handleCreate = () => {
        setEditingProject(null);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setEditingProject(null);
    };

    // Placeholder for submit logic
    const handleSubmit = (data: Partial<Project>) => {
        // TODO: call create or update API, then refetch
        handleClose();
        refetch();
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Projects</h3>
                <Button variant="success" onClick={handleCreate}>New Project</Button>
            </div>
            {isLoading && <div>Loading...</div>}
            {isError && <div className="text-danger">Error loading projects.</div>}
            <ul className="list-group">
                {projects && projects.map(project => (
                    <li key={project.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{project.name}</span>
                        <Button variant="outline-primary" size="sm" onClick={() => handleEdit(project)}>
                            Edit
                        </Button>
                    </li>
                ))}
            </ul>
            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{editingProject ? "Edit Project" : "New Project"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProjectForm
                        initialData={editingProject || {}}
                        onSubmit={handleSubmit}
                        onCancel={handleClose}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProjectsCRUD;
