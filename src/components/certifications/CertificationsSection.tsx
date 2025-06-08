import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CertificationItem from './CertificationItem';

const certifications = [
    {
        icon: 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
        title: 'AZ-900',
    },
    {
        icon: 'https://images.credly.com/size/340x340/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
        title: 'GitHub Foundations',
    },
];

const CertificationsSection: React.FC = () => {
    return (
        <section className="skills-section py-4 py-xl-5">
            <Container>
                <Row className="mb-5">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <h2 className="section-title">Certificações</h2>
                    </Col>
                </Row>
                <Row xs={2} sm={3} md={4} xl={6} className="text-center g-4">
                    {certifications.map((cert, idx) => (
                        <Col key={idx}>
                            <CertificationItem certification={cert} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CertificationsSection;
