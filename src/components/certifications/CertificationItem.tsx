import React from 'react';

interface CertificationItemProps {
    img: string;
    label: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ img, label }) => (
    <div className="col skill-item">
        <img className="certification-badge" src={img} alt={label} />
        <p className="mt-2 mb-0">{label}</p>
    </div>
);

export default CertificationItem;
