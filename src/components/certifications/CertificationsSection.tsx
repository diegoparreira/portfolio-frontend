import React from 'react';
import CertificationItem from './CertificationItem';

const certifications = [
    {
        img: 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
        label: 'AZ-900',
    },
    {
        img: 'https://images.credly.com/size/340x340/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
        label: 'GitHub Foundations',
    },
];

const CertificationsSection: React.FC = () => {
    return (
        <section className="skills-section py-4 py-xl-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2 className="section-title">Certificações</h2>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 text-center g-4 row-cols-xl-6">
                    {certifications.map((cert, idx) => (
                        <CertificationItem key={idx} img={cert.img} label={cert.label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
