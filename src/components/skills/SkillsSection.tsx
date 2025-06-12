import React from 'react';
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import SkillItem from './SkillItem';
import { useQuery } from '@tanstack/react-query';
import { fetchSkills } from '../../api/skills';
import type { Skill } from '../../types/Skill';

const SkillsSection: React.FC = () => {
    const { data: skills, isLoading, isError, error } = useQuery<Skill[], Error>({
        queryKey: ['skills'],
        queryFn: fetchSkills,
    });

    if (isLoading) {
        return <div className="text-center py-5"><Spinner animation="border" /> Carregando skills...</div>;
    }

    if (isError || !skills) {
        return <Alert variant="danger" className="text-center py-5">Erro ao carregar skills. ${error?.message}</Alert>;
    }

    return (
        <section className="skills-section py-4 py-xl-5">
            <Container>
                <Row className="mb-5">
                    <Col md={8} xl={6} className="text-center mx-auto">
                        <h2 className="section-title">Skills</h2>
                    </Col>
                </Row>
                <Row xs={2} sm={3} md={4} xl={6} className="text-center g-4">
                    {skills.map((skill, idx) => (
                        <Col key={idx}>
                            <SkillItem icon={skill.icon_link ?? ''} label={skill.name} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SkillsSection;
