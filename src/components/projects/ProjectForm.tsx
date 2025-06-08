import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import type { Project } from "../../types/Project";

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group className="mb-3" controlId="projectName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    value={form.name || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    value={form.description || ""}
                    onChange={handleChange}
                    rows={3}
                />
            </Form.Group>
            {/* Add more fields as needed */}
            <Row>
                <Col>
                    <Button type="submit" variant="primary" className="me-2">
                        Save
                    </Button>
                    {onCancel && (
                        <Button variant="secondary" onClick={onCancel}>
                            Cancel
                        </Button>
                    )}
                </Col>
            </Row>
        </Form>
    );
};

export default ProjectForm;
