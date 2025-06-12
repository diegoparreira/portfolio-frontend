import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
    return (
        <div className={`custom-card shadow-sm rounded p-3 mb-4 ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;
