import React from 'react';

interface CertificationItemProps {
    certification: {
        icon: string;
        title: string;
        issuer?: string;
    };
}

const CertificationItem: React.FC<CertificationItemProps> = ({ certification }) => (
    <div className="certification-item d-flex align-items-center mb-3">
        <img className="certification-badge me-3" src={certification.icon} alt={certification.title} />
        <div className="certification-info">
            <span className="certification-title fw-bold">{certification.title}</span>
            {certification.issuer && <span className="certification-issuer ms-2">{certification.issuer}</span>}
        </div>
    </div>
);

export default CertificationItem;
