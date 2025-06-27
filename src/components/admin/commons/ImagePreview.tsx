import React from "react";

interface ImagePreviewProps {
    src: string;
    alt: string;
    maxWidth?: string;
    maxHeight?: string;
    className?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
    src,
    alt,
    maxWidth = "180px",
    maxHeight = "180px",
    className = ""
}) => {
    return (
        <div className={`text-center mb-3 ${className}`}>
            <img
                src={src}
                alt={alt}
                style={{
                    maxWidth,
                    maxHeight,
                    borderRadius: '0.5rem',
                    objectFit: 'cover',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                }}
            />
        </div>
    );
};

export default ImagePreview;
