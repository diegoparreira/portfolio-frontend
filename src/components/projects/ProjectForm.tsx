import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import type { Project } from "../../types/Project";

const projectFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    { name: "tecnical_description", label: "Technical Description", type: "textarea" },
    {
        name: "status", label: "Status", type: "select", options: [
            { value: "PLANNING", label: "Planning" },
            { value: "IN_PROGRESS", label: "In Progress" },
            { value: "COMPLETED", label: "Completed" },
            { value: "ON_HOLD", label: "On Hold" },
            { value: "CANCELLED", label: "Cancelled" },
        ], required: true
    },
    { name: "start_date", label: "Start Date", type: "date", required: true },
    { name: "end_date", label: "End Date", type: "date" },
    { name: "demo_video_url", label: "Demo Video URL", type: "url" },
    { name: "demo_screenshot_url", label: "Demo Screenshot URL", type: "url" },
    { name: "demo_url", label: "Demo URL", type: "url" },
    { name: "repository_url", label: "Repository URL", type: "url" }
];

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
    error,
}) => {
    const [form, setForm] = useState<Partial<Project>>(initialData);

    useEffect(() => {
        setForm(initialData);
    }, [initialData]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {projectFields.map(field => (
                <Form.Group className="mb-3" controlId={field.name} key={field.name}>
                    <Form.Label>{field.label}</Form.Label>
                    {field.type === "textarea" ? (
                        <Form.Control
                            as="textarea"
                            name={field.name}
                            value={form[field.name as keyof Project] || ""}
                            onChange={handleChange}
                            rows={3}
                            required={field.required}
                        />
                    ) : field.type === "select" ? (
                        <Form.Select
                            name={field.name}
                            value={form[field.name as keyof Project] || ""}
                            onChange={handleChange}
                            required={field.required}
                        >
                            <option value="">Select {field.label}</option>
                            {field.options?.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </Form.Select>
                    ) : (
                        <Form.Control
                            type={field.type}
                            name={field.name}
                            value={form[field.name as keyof Project] || ""}
                            onChange={handleChange}
                            required={field.required}
                        />
                    )}
                </Form.Group>
            ))}
            <Row>
                <Col className="d-flex justify-content-center">
                    <Button type="submit" variant="primary" className="main-button">
                        Save
                    </Button>
                    {onCancel && (
                        <Button variant="secondary" onClick={onCancel} className="main-button">
                            Cancel
                        </Button>
                    )}
                </Col>
            </Row>
        </Form>
    );
};

export default ProjectForm;
