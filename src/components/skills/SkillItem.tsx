import React from 'react';

interface SkillItemProps {
    icon: string;
    label: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, label }) => (
    <div className="col skill-item">
        <i className={icon} style={{ fontSize: '4rem' }}></i>
        <p className="mt-2 mb-0">{label}</p>
    </div>
);

export default SkillItem;
