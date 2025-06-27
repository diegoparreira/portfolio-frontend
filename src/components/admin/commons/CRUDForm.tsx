import React, { useState, useEffect } from 'react';
import { Form, Alert } from 'react-bootstrap';
import ModalFooter from './ModalFooter';

export interface FieldConfig {
  name: string;
  label: string;
  type?: 'text' | 'textarea' | 'number' | 'email' | 'password' | 'select' | 'date';
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface CRUDFormProps<T> {
  fields: FieldConfig[];
  initialData?: Partial<T>;
  onSubmit: (data: Partial<T>) => void;
  onCancel?: () => void;
  error?: string;
}

function CRUDForm<T>({ fields, initialData = {}, onSubmit, onCancel, error }: CRUDFormProps<T>) {
  const [form, setForm] = useState<Partial<T>>(initialData);

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Form className="px-5" onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      {fields.map(field => (
        <Form.Group className="mb-3" controlId={field.name} key={field.name}>
          <Form.Label>{field.label}</Form.Label>
          {field.type === 'select' && field.options ? (
            <Form.Select
              name={field.name}
              value={(form[field.name as keyof T] as string) || ''}
              onChange={handleChange}
              required={field.required}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((opt: string) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Form.Select>
          ) : field.type === 'textarea' ? (
            <Form.Control
              as="textarea"
              name={field.name}
              value={(form[field.name as keyof T] as string) || ''}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder}
              rows={3}
            />
          ) : (
            <Form.Control
              type={field.type || 'text'}
              name={field.name}
              value={(form[field.name as keyof T] as string) || ''}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder}
            />
          )}
        </Form.Group>
      ))}
      <ModalFooter onCancel={onCancel} />
    </Form>
  );
}

export default CRUDForm;
