import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import AboutModal from '../about/AboutModal';
import { ThreeDots } from 'react-bootstrap-icons';

const HeroSection: React.FC = () => {
    const [showAboutModal, setShowAboutModal] = useState(false);

    // Typing effect state
    const fullText = "Olá, seja bem vindx!";
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, current + 1));
            current++;
            if (current === fullText.length) clearInterval(interval);
        }, 80); // Adjust speed here
        return () => clearInterval(interval);
    }, []);

    const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowAboutModal(true);
    };


    return (
        <Container className="hero-section">
            <Row className="hero-content">
                <Col xs={12} md={9} className="hero-text-col">
                    <h1 className="display-5 fw-bold">{typedText}</h1>
                    <p className="hero-description">Me chamo Diego Parreira e sou arquiteto de software, desenvolvedor e apaixonado por tecnologia e o seu poder de transformação!</p>
                </Col>
                <Col xs={12} md={3} className="hero-avatar-col">
                    <Image src="/profile.jpg" alt="Avatar" roundedCircle fluid className="border border-3 border-light shadow-sm mb-4" />
                </Col>
                <Button className="more-btn hero-btn" variant="primary" size="sm" onClick={handleOpenModal}>
                    <ThreeDots size={24} />
                </Button>
            </Row>
            <AboutModal
                show={showAboutModal}
                onClose={() => setShowAboutModal(false)}
            />
        </Container>
    );
};

export default HeroSection;
