import React from "react";
import type { Project } from "../../../types/Project";
import Modal from "../../commons/Modal";
import ProjectForm from "./ProjectForm";
import ProjectMediaCarousel from "../../projects/ProjectMediaCarousel";

interface ProjectModalProps {
    show: boolean;
    project: Project | null;
    onClose: () => void;
    onSubmit: (data: Partial<Project>) => void;
    error?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    show,
    project,
    onClose,
    onSubmit,
    error
}) => {
    const title = project ? "Edit Project" : "New Project"; return (
        <Modal show={show} onClose={onClose} title={title}>
            {project && (
                (project.demo_screenshots_urls && project.demo_screenshots_urls.length > 0) ||
                project.demo_video_url
            ) && (
                    <div className="text-center mb-3">
                        <ProjectMediaCarousel
                            screenshots={project.demo_screenshots_urls}
                            videoUrl={project.demo_video_url}
                            alt={project.name}
                        />
                    </div>
                )}

            <ProjectForm
                initialData={project || {}}
                onSubmit={onSubmit}
                onCancel={onClose}
                error={error}
            />
        </Modal>
    );
};

export default ProjectModal;
