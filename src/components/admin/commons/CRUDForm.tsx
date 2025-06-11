import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export interface FieldConfig<T> {
    name: keyof T;
    label: string;
    type?: "text" | "textarea" | "number" | "email" | "password" | "select";
    required?: boolean;
    as?: "input" | "textarea";
    placeholder?: string;
    options?: string[]; // Only for select fields
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
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        // Special handling for demo_screenshots field (comma separated to array)
        if (name === 'demo_screenshots_url') {
            setForm((prev) => ({
                ...prev,
                [name]: value.split(',').map((url) => url.trim()).filter(Boolean),
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
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
                    {field.type === "select" && Array.isArray((field as any).options) ? (
                        <Form.Select
                            name={String(field.name)}
                            value={form[field.name] as string || ""}
                            onChange={handleChange}
                            required={field.required}
                        >
                            <option value="">Select {field.label}</option>
                            {(field as any).options.map((opt: string) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </Form.Select>
                    ) : (
                        <Form.Control
                            as={field.type === "textarea" || field.as === "textarea" ? "textarea" : "input"}
                            type={field.type || "text"}
                            name={String(field.name)}
                            value={form[field.name] as string || ""}
                            onChange={handleChange}
                            required={field.required}
                            placeholder={field.placeholder}
                        />
                    )}
                </Form.Group>
            ))}
            <div className="d-flex justify-content-center align-items-center">
                <Button type="submit" className="main-button">
                    Save
                </Button>
                {onCancel && (
                    <Button className="main-button" onClick={onCancel}>
                        Cancel
                    </Button>
                )}
            </div>
        </Form>
    );
}

export default CRUDForm;