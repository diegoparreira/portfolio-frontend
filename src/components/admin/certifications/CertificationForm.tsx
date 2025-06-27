import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import type { Certification } from "../../../types/Certification";
import { ConfigurableFormField, ErrorAlert } from "../commons";
import { CERTIFICATION_FORM_FIELDS, type CertificationFieldConfig } from "./certificationFormConfig";
import ModalFooter from "../commons/ModalFooter";

interface CertificationFormProps {
    initialData?: Partial<Certification>;
    onSubmit: (data: Partial<Certification>) => void;
    onCancel?: () => void;
    error?: string;
}

const CertificationForm: React.FC<CertificationFormProps> = ({
    initialData = {},
    onSubmit,
    onCancel,
    error
}) => {
    const [formData, setFormData] = useState<Partial<Certification>>(initialData);

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Form className="px-5" onSubmit={handleSubmit}>
            <ErrorAlert message={error} />

            {CERTIFICATION_FORM_FIELDS.map((fieldConfig: CertificationFieldConfig) => (
                <ConfigurableFormField
                    key={fieldConfig.name}
                    config={fieldConfig}
                    value={formData[fieldConfig.name as keyof Certification]}
                    onChange={handleChange}
                />
            ))}

            <ModalFooter
                onCancel={onCancel}
            />
        </Form>
    );
};

export default CertificationForm;