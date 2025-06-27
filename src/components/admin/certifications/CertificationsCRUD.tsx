import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Alert, Spinner } from "react-bootstrap";
import type { Certification } from "../../../types/Certification";
import { fetchCertifications, createCertification, updateCertification } from "../../../api/certifications";
import { ModernButton } from "../commons";
import CertificationListItem from "./CertificationListItem";
import CertificationModal from "./CertificationModal";

const CertificationsCRUD: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingCertification, setEditingCertification] = useState<Certification | null>(null);

    const { data: certifications, isLoading, isError, refetch, error } = useQuery<Certification[], Error>({
        queryKey: ["certifications"],
        queryFn: fetchCertifications,
    });

    const handleCreate = () => {
        setEditingCertification(null);
        setShowModal(true);
    };

    const handleEdit = (certification: Certification) => {
        setEditingCertification(certification);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setEditingCertification(null);
    };

    const handleSubmit = async (data: Partial<Certification>) => {
        try {
            if (editingCertification) {
                await updateCertification(editingCertification.id, data);
            } else {
                await createCertification(data);
            }
            refetch();
            handleClose();
        } catch (err) {
            console.error("Error saving certification:", err);
        }
    };

    if (isLoading) {
        return (
            <div className="text-center">
                <Spinner animation="border" />
            </div>
        );
    }

    if (isError) {
        return <Alert variant="danger">Error: {error?.message}</Alert>;
    }

    return (
        <div className="admin-content">
            <div className="scroll-area">
                <div className="table-list">
                    <ul className="list-group">
                        {certifications?.map((certification) => (
                            <CertificationListItem
                                key={certification.id}
                                certification={certification}
                                onEdit={() => handleEdit(certification)}
                            />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <ModernButton
                    onClick={handleCreate}
                    size="lg"
                    icon="plus"
                />
            </div>

            <CertificationModal
                show={showModal}
                certification={editingCertification}
                onClose={handleClose}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default CertificationsCRUD;
