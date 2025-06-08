import React, { useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
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
        return <div className="text-center py-5"><Spinner animation="border" /> Carregando projetos...</div>;
    }

    if (isError || !projects) {
        return <Alert variant="danger" className="text-center py-5">Erro ao carregar projetos.</Alert>;
    }

    return (
        <Container className="py-4 py-xl-5">
            <Row className="mb-5">
                <Col md={8} xl={6} className="text-center mx-auto">
                    <h2 className="section-title">Projetos</h2>
                </Col>
            </Row>
            <Row className="gy-4" xs={1} md={2} xl={3}>
                {projects.map((project, idx) => (
                    <Col key={idx}>
                        <ProjectCard
                            image={project.demo_screenshot_url ? project.demo_screenshot_url : 'https://cdn.bootstrapstudio.io/placeholders/1400x800.png'}
                            title={project.name}
                            description={project.description}
                            onLearnMore={() => setSelectedProject(idx)}
                        />
                    </Col>
                ))}
            </Row>
            {selectedProject !== null && (
                <ProjectModal
                    show={selectedProject !== null}
                    onClose={() => setSelectedProject(null)}
                    project={projects[selectedProject]}
                />
            )}
        </Container>
    );
};

export default ProjectsSection;
