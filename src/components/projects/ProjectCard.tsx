import React from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    onLearnMore?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, onLearnMore }) => (
    <div className="card">
        <img className="card-img-top w-100 d-block fit-cover" style={{ height: 200 }} src={image} alt={title} />
        <div className="card-body p-4">
            {/* <div className="project-tags mb-3">
                {tags.map((tag, i) => (
                    <span className="text-primary bg-primary-subtle badge" key={i}>{tag}</span>
                ))}
            </div> */}
            <h4 className="card-title">{title}</h4>
            <p className="text-start card-text">{description}</p>
            <a className="btn btn-primary btn-sm mx-auto" role="button" href="#" data-bs-toggle="modal" data-bs-target="#modal2" onClick={onLearnMore}>
                Saiba mais
            </a>
        </div>
    </div>
);

export default ProjectCard;
