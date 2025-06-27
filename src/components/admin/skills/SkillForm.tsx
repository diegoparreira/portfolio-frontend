import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import type { Skill } from "../../../types/Skill";
import { ConfigurableFormField, ErrorAlert } from "../commons";
import { SKILL_FORM_FIELDS, type SkillFieldConfig } from "./skillFormConfig";
import ModalFooter from "../commons/ModalFooter";

interface SkillFormProps {
    initialData?: Partial<Skill>;
    onSubmit: (data: Partial<Skill>) => void;
    onCancel?: () => void;
    error?: string;
}

const SkillForm: React.FC<SkillFormProps> = ({
    initialData = {},
    onSubmit,
    onCancel,
    error
}) => {
    const [formData, setFormData] = useState<Partial<Skill>>(initialData);

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

            {SKILL_FORM_FIELDS.map((fieldConfig: SkillFieldConfig) => (
                <ConfigurableFormField
                    key={fieldConfig.name}
                    config={fieldConfig}
                    value={formData[fieldConfig.name as keyof Skill]}
                    onChange={handleChange}
                />
            ))}

            <ModalFooter
                onCancel={onCancel}
            />
        </Form>
    );
};

export default SkillForm;