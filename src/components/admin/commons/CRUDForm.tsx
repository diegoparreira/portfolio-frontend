import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

export interface FieldConfig<T> {
    name: keyof T;
    label: string;
    type?: "text" | "textarea" | "number" | "email" | "password";
    required?: boolean;
    as?: "input" | "textarea";
    placeholder?: string;
}

export interface CRUDFormProps<T> {
    fields: FieldConfig<T>[];
    initialData?: Partial<T>;
    onSubmit: (data: Partial<T>) => void;
    onCancel?: () => void;
    error?: string;
}

function CRUDForm<T>({
    fields,
    initialData = {},
    onSubmit,
    onCancel,
    error,
}: CRUDFormProps<T>) {
    const [form, setForm] = useState<Partial<T>>(initialData);

    useEffect(() => {
        setForm(initialData);
    }, [initialData]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {fields.map((field) => (
                <Form.Group className="mb-3" controlId={String(field.name)} key={String(field.name)}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        as={field.type === "textarea" || field.as === "textarea" ? "textarea" : "input"}
                        type={field.type || "text"}
                        name={String(field.name)}
                        value={form[field.name] as string || ""}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                    // rows={field.type === "textarea" || field.as === "textarea" ? 3 : undefined}
                    />
                </Form.Group>
            ))}
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
}

export default CRUDForm;