import React from 'react';
import { NavbarBrand } from 'react-bootstrap';

const Logo: React.FC = () => (
    <NavbarBrand href="/" style={{ fontFamily: 'Source Code Pro, monospace' }}>
        <strong>Diego Parreira</strong>&nbsp;💻
    </NavbarBrand>
);

export default Logo;
