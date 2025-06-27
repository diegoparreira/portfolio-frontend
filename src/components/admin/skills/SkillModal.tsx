import React from "react";
import type { Skill } from "../../../types/Skill";
import Modal from "../../commons/Modal";
import SkillForm from "./SkillForm";
import { ImagePreview } from "../commons";

interface SkillModalProps {
    show: boolean;
    skill: Skill | null;
    onClose: () => void;
    onSubmit: (data: Partial<Skill>) => void;
    error?: string;
}

const SkillModal: React.FC<SkillModalProps> = ({
    show,
    skill,
    onClose,
    onSubmit,
    error
}) => {
    const title = skill ? "Edit Skill" : "New Skill";

    return (
        <Modal show={show} onClose={onClose} title={title}>
            {skill && skill.icon_link && (
                <ImagePreview
                    src={skill.icon_link}
                    alt={`${skill.name} icon`}
                />
            )}

            <SkillForm
                initialData={skill || {}}
                onSubmit={onSubmit}
                onCancel={onClose}
                error={error}
            />
        </Modal>
    );
};

export default SkillModal;
