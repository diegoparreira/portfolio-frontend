import React from 'react';

interface SkillItemProps {
    icon: string;
    label: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, label }) => (
    <div className="skill-item d-flex align-items-center mb-3 flex-column">
        <img
            src={icon}
            alt={label}
            style={{ width: '4rem', height: '4rem', objectFit: 'contain', marginBottom: '0.5rem' }}
        />
        <div className="skill-info">
            <span className="skill-name fw-bold">{label}</span>
        </div>
    </div>
);

export default SkillItem;
