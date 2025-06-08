import React from 'react';

interface IconCircleProps {
    icon: React.ReactNode;
    className?: string;
}

const IconCircle: React.FC<IconCircleProps> = ({ icon, className = "" }) => {
    return (
        <span className={`icon-circle d-flex align-items-center justify-content-center ${className}`}>
            {icon}
        </span>
    );
};

export default IconCircle;
