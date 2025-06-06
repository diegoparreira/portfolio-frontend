import React from 'react';
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
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2 className="section-title">Skills</h2>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 text-center g-4 row-cols-xl-6">
                    {skills.map((skill, idx) => (
                        <SkillItem key={idx} icon={skill.icon} label={skill.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
