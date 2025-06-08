import React from 'react';
import { Navbar as RBNavbar, Container } from 'react-bootstrap';
import Logo from './Logo';

const Navbar: React.FC = () => {
    return (
        <RBNavbar bg="white" expand="md" className="py-3 px-5 shadow-sm align-items-center">
            <Container fluid className="d-flex justify-content-center">
                <RBNavbar.Brand href="/">
                    <Logo />
                </RBNavbar.Brand>
            </Container>
        </RBNavbar>
    );
};

export default Navbar;