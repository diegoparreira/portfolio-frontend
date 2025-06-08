import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SkillItem from './SkillItem';

const skills = [
    { icon: 'devicon-javascript-plain', label: 'JavaScript' },
    { icon: 'devicon-typescript-plain', label: 'TypeScript' },
    { icon: 'devicon-java-plain', label: 'Java' },
    { icon: 'devicon-jenkins-line', label: 'Jenkins' },
    { icon: 'devicon-amazonwebservices-plain-wordmark', label: 'AWS' },
    { icon: 'devicon-azure-plain', label: 'Azure' },
    { icon: 'devicon-html5-plain', label: 'HTML5' },
    { icon: 'devicon-css3-plain', label: 'CSS3' },
    { icon: 'devicon-bootstrap-plain', label: 'Bootstrap' },
    { icon: 'devicon-react-original', label: 'React' },
    { icon: 'devicon-git-plain', label: 'Git' },
    { icon: 'devicon-bitbucket-original', label: 'Bitbucket' },
    { icon: 'devicon-github-original', label: 'Github' },
];

const SkillsSection: React.FC = () => {
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
                            <SkillItem icon={skill.icon} label={skill.label} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SkillsSection;
