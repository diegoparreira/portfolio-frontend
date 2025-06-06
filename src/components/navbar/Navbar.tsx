import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body shadow-sm px-lg-5 px-3">
            <div className="container-fluid">
                <Logo />
                <button
                    data-bs-toggle="collapse"
                    className="navbar-toggler"
                    data-bs-target="#navcol-1"
                >
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                        <NavItem href="#" active>Sobre</NavItem>
                        <NavItem href="#">Skills</NavItem>
                        <NavItem href="#">Projetos</NavItem>
                        <NavItem href="#">Contato</NavItem>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
