import React, { useEffect, useState } from 'react';
import AboutModal from '../about/AboutModal';

const HeroSection: React.FC = () => {
    const [showAboutModal, setShowAboutModal] = useState(false);

    // Typing effect state
    const fullText = "Olá, seja bem vindo!";
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

    const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShowAboutModal(true);
    };


    return (
        <section>
            <div className="bg-light col-md-12 col-12 p-5 mb-4 round-3">
                <div className="container-fluid d-flex flex-column align-items-center py-1 px-xl-5">
                    <h1 className="display-5 fw-bold text-center mb-4">{typedText}</h1>
                    <div className="d-flex flex-column-reverse justify-content-between align-items-center flex-lg-row min-vh-50 py-4">
                        <div className="text-center col-md-12 col-lg-6 px-md-5 mb-4 mb-md-0">
                            <p className="fs-4 col-md-12">Me chamo Diego Parreira e sou arquiteto de software, desenvolvedor e apaixonado por tecnologia e o seu poder de transformação!</p>
                        </div>
                        <div className="px-md-5">
                            <img className="img-fluid border rounded-circle border-3 border-light shadow-sm d-block mx-auto mb-4" src="/profile.jpg" alt="Avatar" />
                        </div>
                    </div>
                    <a className="btn btn-primary btn-sm mx-auto" role="button" href="#" onClick={handleOpenModal}>Saiba mais</a>
                </div>
            </div>
            <AboutModal
                show={showAboutModal}
                onClose={() => setShowAboutModal(false)}
            />
        </section>
    );
};

export default HeroSection;
