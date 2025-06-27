import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import type { Project } from "../../../types/Project";
import { ConfigurableFormField, ErrorAlert } from "../commons";
import { PROJECT_FORM_FIELDS, type ProjectFieldConfig } from "./projectFormConfig";
import ModalFooter from "../commons/ModalFooter";

interface ProjectFormProps {
    initialData?: Partial<Project>;
    onSubmit: (data: Partial<Project>) => void;
    onCancel?: () => void;
    error?: string;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
    initialData = {},
    onSubmit,
    onCancel,
    error
}) => {
    const [formData, setFormData] = useState<Partial<Project>>(initialData);

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]); const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCustomChange = (name: string, value: any) => {
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

            {PROJECT_FORM_FIELDS.map((fieldConfig: ProjectFieldConfig) => (
                <ConfigurableFormField
                    key={fieldConfig.name}
                    config={fieldConfig}
                    value={formData[fieldConfig.name as keyof Project]}
                    onChange={handleChange}
                    onCustomChange={handleCustomChange}
                />
            ))}

            <ModalFooter
                onCancel={onCancel}
            />

        </Form>
    );
};

export default ProjectForm;
