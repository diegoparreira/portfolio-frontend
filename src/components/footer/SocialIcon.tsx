import React from 'react';

interface SocialIconProps {
    href: string;
    children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
    <a href={href} className="social-icon d-flex align-items-center justify-content-center me-3" target="_blank" rel="noopener noreferrer" aria-label={href}>
        {children}
    </a>
);

export default SocialIcon;
