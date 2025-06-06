import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from '../../components/projects/ProjectModal';
import { fetchProjects } from '../../api/projects';
import type { Project } from '../../types/Project';
import { useQuery } from '@tanstack/react-query';

const ProjectsSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const { data: projects, isLoading, isError } = useQuery<Project[], Error>({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    });

    if (isLoading) {
        return <div className="text-center py-5">Carregando projetos...</div>
    }

    if (isError || !projects) {
        return <div className="text-center py-5 text-danger">Erro ao carregar projetos.</div>
    }

    return (
        <div className="container py-4 py-xl-5">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2 className="section-title">Projetos</h2>
                </div>
            </div>
            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                {projects.map((project, idx) => (
                    <div className="col" key={idx}>
                        <ProjectCard
                            image={project.demo_screenshot_url ? project.demo_screenshot_url : 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png'}
                            title={project.name}
                            description={project.description}
                            onLearnMore={() => setSelectedProject(idx)}
                        />
                    </div>
                ))}
            </div>
            {selectedProject !== null && (
                <ProjectModal
                    show={selectedProject !== null}
                    onClose={() => setSelectedProject(null)}
                    project={projects[selectedProject]}
                />
            )}
        </div>
    );
};

export default ProjectsSection;
