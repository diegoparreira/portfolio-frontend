import React from "react";
import type { Certification } from "../../../types/Certification";
import Modal from "../../commons/Modal";
import CertificationForm from "./CertificationForm";
import { ImagePreview } from "../commons";

interface CertificationModalProps {
    show: boolean;
    certification: Certification | null;
    onClose: () => void;
    onSubmit: (data: Partial<Certification>) => void;
    error?: string;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
    show,
    certification,
    onClose,
    onSubmit,
    error
}) => {
    const title = certification ? "Edit Certification" : "New Certification";

    return (
        <Modal show={show} onClose={onClose} title={title}>
            {certification && certification.badge_link && (
                <ImagePreview
                    src={certification.badge_link}
                    alt={`${certification.name} badge`}
                />
            )}

            <CertificationForm
                initialData={certification || {}}
                onSubmit={onSubmit}
                onCancel={onClose}
                error={error}
            />
        </Modal>
    );
};

export default CertificationModal;
