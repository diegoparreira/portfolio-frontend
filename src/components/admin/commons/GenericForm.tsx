import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { ConfigurableFormField, ErrorAlert } from '../commons';
import ModalFooter from '../commons/ModalFooter';

export interface GenericFormFieldConfig {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'date' | 'select' | 'custom';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  customComponent?: 'screenshot_urls';
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
}

interface ValidationErrors {
  [key: string]: string;
}

interface GenericFormProps<T> {
  fields: GenericFormFieldConfig[];
  initialData?: Partial<T>;
  onSubmit: (data: Partial<T>) => void;
  onCancel?: () => void;
  error?: string;
}

function GenericForm<T>({
  fields,
  initialData = {},
  onSubmit,
  onCancel,
  error,
}: GenericFormProps<T>) {
  const [formData, setFormData] = useState<Partial<T>>(initialData);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    setFormData(initialData);
    setValidationErrors({});
  }, [initialData]);

  const validateField = (field: GenericFormFieldConfig, value: unknown): string | null => {
    if (field.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return `${field.label} is required`;
    }

    if (value && typeof value === 'string') {
      if (field.minLength && value.length < field.minLength) {
        return `${field.label} must be at least ${field.minLength} characters`;
      }
      if (field.maxLength && value.length > field.maxLength) {
        return `${field.label} must be no more than ${field.maxLength} characters`;
      }
      if (field.pattern && !new RegExp(field.pattern).test(value)) {
        return `${field.label} format is invalid`;
      }
    }
    if (value && field.type === 'date') {
      const date = new Date(String(value));
      if (isNaN(date.getTime())) {
        return `${field.label} must be a valid date`;
      }
    }

    return null;
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    let isValid = true;

    fields.forEach(field => {
      const error = validateField(field, formData[field.name as keyof T]);
      if (error) {
        errors[field.name] = error;
        isValid = false;
      }
    });

    setValidationErrors(errors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleCustomChange = (name: string, value: string[]) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Form className="px-5" onSubmit={handleSubmit}>
      <ErrorAlert message={error} />

      {fields.map(fieldConfig => (
        <div key={fieldConfig.name}>
          <ConfigurableFormField
            config={fieldConfig}
            value={formData[fieldConfig.name as keyof T] as string | string[] | undefined}
            onChange={handleChange}
            onCustomChange={handleCustomChange}
          />
          {validationErrors[fieldConfig.name] && (
            <div className="text-danger small mt-1 mb-2">{validationErrors[fieldConfig.name]}</div>
          )}
        </div>
      ))}

      <ModalFooter onCancel={onCancel} />
    </Form>
  );
}

export default GenericForm;
