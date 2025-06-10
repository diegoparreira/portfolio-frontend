import React from 'react';
import type { Certification } from '../../types/Certification';

interface CertificationItemProps {
    certification: Certification;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ certification }) => (
    <div className="certification-item d-flex flex-column align-items-center mb-3">
        <img className="certification-badge me-3" src={certification.badge_link} alt={certification.name} />
        <div className="certification-info">
            <span className="certification-title fw-bold">{certification.name}</span>
        </div>
    </div>
);

export default CertificationItem;
