import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import ScreenshotUrlsInput from './ScreenshotUrlsInput';

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
        if (name === 'demo_screenshots_url') {
            return;
        }
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // @ts-ignore: dynamic field for Project
    const getScreenshotUrls = () => Array.isArray(form['demo_screenshots_urls']) ? form['demo_screenshots_urls'] : [];
    const setScreenshotUrls = (urls: string[]) => {
        setForm((prev) => ({ ...prev, demo_screenshots_urls: urls }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <Form className="px-5" onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            {fields.map((field) => (
                <Form.Group className="mb-3" controlId={String(field.name)} key={String(field.name)}>
                    <Form.Label>{field.label}</Form.Label>
                    {field.name === 'demo_screenshots_urls' ? (
                        <ScreenshotUrlsInput
                            value={getScreenshotUrls()}
                            onChange={setScreenshotUrls}
                        />
                    ) : field.type === "select" && Array.isArray((field as any).options) ? (
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
                            className="minimal-input"
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
            <div className="d-flex justify-content-center gap-2 align-items-center">
                <Button type="submit" className="main-button">
                    Save
                </Button>
                <Button className="main-button" onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

export default CRUDForm;