import React from 'react';

interface SkillItemProps {
    icon: string;
    label: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, label }) => (
    <div className="skill-item d-flex align-items-center mb-3">
        <i className={icon + " me-3"} style={{ fontSize: '4rem' }}></i>
        <div className="skill-info">
            <span className="skill-name fw-bold">{label}</span>
        </div>
    </div>
);

export default SkillItem;
