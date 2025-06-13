import React from 'react';
import { Nav } from 'react-bootstrap';

interface NavItemProps {
    href: string;
    active?: boolean;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, active = false, children }) => (
    <Nav.Item>
        <Nav.Link href={href} active={active}>
            {children}
        </Nav.Link>
    </Nav.Item>
);

export default NavItem;
