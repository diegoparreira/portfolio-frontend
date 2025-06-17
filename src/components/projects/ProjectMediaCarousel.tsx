import React from "react";
import { Carousel } from "react-bootstrap";

interface ProjectMediaCarouselProps {
    screenshots?: string[] | null;
    videoUrl?: string | null;
    alt?: string;
}

const PLACEHOLDER = "https://cdn.bootstrapstudio.io/placeholders/1400x800.png";

const isYouTubeUrl = (url: string) => {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
};

const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const ProjectMediaCarousel: React.FC<ProjectMediaCarouselProps> = ({ screenshots, videoUrl, alt }) => {
    const mediaItems = [
        ...(screenshots && screenshots.length > 0 ? screenshots.map(url => ({ type: "image" as const, url })) : [{ type: "image" as const, url: PLACEHOLDER }]),
        ...(videoUrl ? [{ type: isYouTubeUrl(videoUrl) ? "youtube" as const : "video" as const, url: videoUrl }] : []),
    ];

    return (
        <Carousel interval={null} indicators={mediaItems.length > 1} className="mb-4 shadow rounded-3">
            {mediaItems.map((item, idx) => (
                <Carousel.Item key={idx}>
                    {item.type === "image" ? (
                        <img
                            src={item.url}
                            className="d-block w-100 rounded-3 project-image"
                            style={{ objectFit: "cover", margin: "0 auto" }}
                            alt={alt || `Screenshot ${idx + 1}`}
                        />
                    ) : item.type === "youtube" ? (
                        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "1rem" }}>
                            <iframe
                                src={getYouTubeEmbedUrl(item.url)}
                                title={alt || `YouTube video ${idx + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, borderRadius: "1rem" }}
                            />
                        </div>
                    ) : (
                        <video
                            src={item.url}
                            controls
                            className="d-block w-100 rounded-3 project-image"
                            style={{ margin: "0 auto" }}
                        />
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProjectMediaCarousel;
