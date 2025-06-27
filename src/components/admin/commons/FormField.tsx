import React from "react";
import { Form } from "react-bootstrap";

export interface FormFieldProps {
    name: string;
    label: string;
    type?: "text" | "textarea" | "number" | "email" | "password" | "select" | "date";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    required?: boolean;
    placeholder?: string;
    options?: string[];
}

const FormField: React.FC<FormFieldProps> = ({
    name,
    label,
    type = "text",
    value,
    onChange,
    required = false,
    placeholder,
    options
}) => {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            {type === "select" && Array.isArray(options) ? (
                <Form.Select
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                >
                    <option value="">Select {label}</option>
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </Form.Select>
            ) : (
                <Form.Control
                    className="minimal-input"
                    as={type === "textarea" ? "textarea" : "input"}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            )}
        </Form.Group>
    );
};

export default FormField;
