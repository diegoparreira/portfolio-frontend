import React from 'react';

interface SocialIconProps {
    href: string;
    children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
    <li className="list-inline-item">
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="bs-icon-circle bs-icon-primary bs-icon" style={{ background: 'var(--bs-secondary)' }}>
                {children}
            </div>
        </a>
    </li>
);

export default SocialIcon;
