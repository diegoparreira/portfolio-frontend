import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { EnvelopeFill, Github, Linkedin } from 'react-bootstrap-icons';

const links = {
    github: "https://github.com/diegoparreira",
    linkedin: "https://linkedin.com/in/diegoparreira-",
    email: "mailto:diegoparreira_@outlook.com"
}

const Footer: React.FC = () => {
    return (
        <footer className="custom-footer">
            <Row className="footer-row">
                <Col>
                    <ul className="footer-social-list">
                        <li className="footer-social-item">
                            <a href={links.github} className="social-icon d-flex align-items-center justify-content-center me-3" target="_blank" rel="noopener noreferrer" aria-label={links.github}>
                                <Github className="footer-social-item" />
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a href={links.linkedin} className="social-icon d-flex align-items-center justify-content-center me-3" target="_blank" rel="noopener noreferrer" aria-label={links.linkedin}>
                                <Linkedin className="footer-social-item" />
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a href={links.email} className="social-icon d-flex align-items-center justify-content-center me-3" target="_blank" rel="noopener noreferrer" aria-label={links.email}>
                                <EnvelopeFill className="footer-social-item" />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col className="footer-copy-col">
                    <p className="footer-copy">Copyright © 2025 Diego Parreira</p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
