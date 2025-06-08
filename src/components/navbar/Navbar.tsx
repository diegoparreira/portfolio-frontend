import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
    return (
        <ul className="navbar navbar-expand-md bg-body shadow-sm px-lg-5 px-3 justify-content-center w-100">
            <Logo />
        </ul>
    );
};

export default Navbar;
