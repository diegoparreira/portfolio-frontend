import React from "react";
import { Carousel } from "react-bootstrap";

interface ProjectMediaCarouselProps {
    screenshots?: string[] | null;
    videoUrl?: string | null;
    alt?: string;
}

const PLACEHOLDER = "https://cdn.bootstrapstudio.io/placeholders/1400x800.png";

const ProjectMediaCarousel: React.FC<ProjectMediaCarouselProps> = ({ screenshots, videoUrl, alt }) => {
    const mediaItems = [
        ...(screenshots && screenshots.length > 0 ? screenshots.map(url => ({ type: "image" as const, url })) : [{ type: "image" as const, url: PLACEHOLDER }]),
        ...(videoUrl ? [{ type: "video" as const, url: videoUrl }] : []),
    ];

    return (
        <Carousel interval={null} indicators={mediaItems.length > 1} className="mb-4 shadow rounded-3">
            {mediaItems.map((item, idx) => (
                <Carousel.Item key={idx}>
                    {item.type === "image" ? (
                        <img
                            src={item.url}
                            className="d-block w-100 rounded-3 project-image"
                            style={{ maxHeight: 400, objectFit: "cover", margin: "0 auto" }}
                            alt={alt || `Screenshot ${idx + 1}`}
                        />
                    ) : (
                        <video
                            src={item.url}
                            controls
                            className="d-block w-100 rounded-3 project-image"
                            style={{ maxHeight: 400, margin: "0 auto" }}
                        />
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProjectMediaCarousel;
