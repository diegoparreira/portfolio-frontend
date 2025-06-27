import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Alert, Spinner } from "react-bootstrap";
import type { Project } from "../../../types/Project";
import { fetchProjects, createProject, updateProject } from "../../../api/projects";
import ProjectListItem from "./ProjectListItem";
import ProjectModal from "./ProjectModal";
import ModernButton from "../commons/ModernButton";

const ProjectsCRUD: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    const { data: projects, isLoading, isError, refetch, error } = useQuery<Project[], Error>({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    });

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

    const handleSubmit = async (data: Partial<Project>) => {
        try {
            if (editingProject) {
                await updateProject(editingProject.id, data);
            } else {
                await createProject(data);
            }
            refetch();
            handleClose();
        } catch (err) {
            console.error("Error saving project:", err);
        }
    };

    const handleFavoriteToggle = async (project: Project, newValue: boolean) => {
        try {
            // @ts-ignore: favorite is a dynamic field for Project
            await updateProject(project.id, { favorite: newValue });
            refetch();
        } catch (err) {
            console.error("Error updating favorite:", err);
        }
    };

    if (isLoading) {
        return (
            <div className="text-center">
                <Spinner animation="border" />
            </div>
        );
    }

    if (isError) {
        return <Alert variant="danger">Error: {error?.message}</Alert>;
    }

    return (
        <div className="admin-content">

            <div className="scroll-area">
                <div className="table-list">
                    <ul className="list-group">
                        {projects?.map((project) => (
                            <ProjectListItem
                                key={project.id}
                                project={project}
                                onEdit={() => handleEdit(project)}
                                onFavoriteToggle={(value) => handleFavoriteToggle(project, value)}
                            />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <ModernButton
                    onClick={handleCreate}
                    size="lg"
                    icon="plus"
                />
            </div>

            <ProjectModal
                show={showModal}
                project={editingProject}
                onClose={handleClose}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default ProjectsCRUD;
