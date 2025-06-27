import React from 'react';
import { Card as RBCard, Button } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons'

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    onLearnMore?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, onLearnMore }) => (
    <div className="project-card shadow-sm rounded p-3 mb-4 h-100" onClick={onLearnMore} role="button" tabIndex={0}>
        <RBCard className="justify-content-center align-items-center h-100">
            <RBCard.Img variant="top" src={image} />
            <RBCard.Body className="p-4">
                <RBCard.Title as="h4">{title}</RBCard.Title>
                <RBCard.Text className="project-card-description">
                    {description.length > 200 ? `${description.slice(0, 200)}...` : description}
                </RBCard.Text>
                <Button className="more-btn" onClick={onLearnMore}>
                    <ThreeDots size={24} />
                </Button>
            </RBCard.Body>
        </RBCard>
    </div>
);

export default ProjectCard;
