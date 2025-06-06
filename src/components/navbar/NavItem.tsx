import React from 'react';

interface NavItemProps {
    href: string;
    active?: boolean;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, active = false, children }) => (
    <li className="nav-item">
        <a className={`nav-link${active ? ' active' : ''}`} href={href}>
            {children}
        </a>
    </li>
);

export default NavItem;
