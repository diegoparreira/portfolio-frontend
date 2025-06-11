import React from 'react';
import { Card as RBCard, Button } from 'react-bootstrap';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    onLearnMore?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, onLearnMore }) => (
    <div className="project-card shadow-sm rounded p-3 mb-4 h-100" onClick={onLearnMore} role="button" tabIndex={0}>
        <RBCard>
            <RBCard.Img variant="top" src={image} className="h-50" />
            <RBCard.Body className="p-4">
                <RBCard.Title as="h4">{title}</RBCard.Title>
                <RBCard.Text className="text-start">{description}</RBCard.Text>
                <Button className="more-btn" onClick={onLearnMore}>
                    ...
                </Button>
            </RBCard.Body>
        </RBCard>
    </div>
);

export default ProjectCard;
