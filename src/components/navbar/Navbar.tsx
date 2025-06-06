import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body shadow-sm px-lg-5 px-3 justify-content-center">
            <Logo />
        </nav>
    );
};

export default Navbar;
