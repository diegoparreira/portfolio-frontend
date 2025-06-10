import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../api/projects";
import type { Project } from "../../types/Project";
import Header from "../admin/commons/Header";
import ListItem from "../admin/commons/ListItem";
import CRUDModal from "../admin/commons/CRUDModal";

const ProjectsCRUD: React.FC = () => {
    const { data: projects, isLoading, isError, refetch } = useQuery<Project[], Error>({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    });
    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    const handleCreate = () => {
        setEditingProject(null);
        setShowModal(true);
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
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
        <div className="d-flex flex-column">
            {isLoading && <Spinner animation="grow" />}
            {isError && <div className="text-danger">Error loading projects.</div>}
            <ul className="scroll-area table-list">
                {projects && projects.map(project => (
                    <ListItem key={project.id} project={project} editProject={() => handleEdit(project)} />
                ))}
            </ul>
            <div className="table-btn">
                <Button variant="primary" size="sm" className="main-button mt-3" onClick={handleCreate}>New Project</Button>
            </div>
            <CRUDModal
                show={showModal}
                handleClose={() => handleClose()}
                editing={editingProject}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default ProjectsCRUD;
