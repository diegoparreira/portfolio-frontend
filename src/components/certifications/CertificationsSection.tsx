import React from 'react';
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import CertificationItem from './CertificationItem';
import { fetchCertifications } from '../../api/certifications';
import { useQuery } from '@tanstack/react-query';

const CertificationsSection: React.FC = () => {
    const { data: certifications, isLoading, isError, error } = useQuery({
        queryKey: ['certifications'],
        queryFn: fetchCertifications,
    });

    if (isLoading) {
        return <div className="text-center py-5"><Spinner animation="border" /> Carregando certificações...</div>;
    }

    if (isError || !certifications) {
        return <Alert variant="danger" className="text-center py-5">Erro ao carregar certificações. ${error?.message}</Alert>;
    }


    return (
        <section className="skills-section py-4 py-xl-5">
            <Container>
                <Row className="mb-5">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <h2 className="section-title">Certificações</h2>
                    </Col>
                </Row>
                <Row xs={2} sm={3} md={4} xl={6} className="justify-content-center align-itens-center text-center g-4">
                    {certifications?.map((cert, idx) => (
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
