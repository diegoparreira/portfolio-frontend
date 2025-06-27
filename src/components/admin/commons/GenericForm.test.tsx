import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import GenericForm from './GenericForm';

const mockFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text' as const,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text' as const,
    required: true,
    pattern: '^[^@]+@[^@]+\\.[^@]+$',
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea' as const,
    maxLength: 200,
  },
];

describe('GenericForm', () => {
  const mockOnSubmit = vi.fn();
  const mockOnCancel = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders form fields correctly', () => {
    render(<GenericForm fields={mockFields} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<GenericForm fields={mockFields} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    // Try to submit without filling required fields
    const submitButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('validates field lengths', async () => {
    render(<GenericForm fields={mockFields} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText('Name');
    const descriptionInput = screen.getByLabelText('Description');

    // Test minimum length validation
    fireEvent.change(nameInput, { target: { value: 'A' } });
    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument();
    });

    // Test maximum length validation
    const longDescription = 'A'.repeat(201);
    fireEvent.change(descriptionInput, { target: { value: longDescription } });
    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(
        screen.getByText('Description must be no more than 200 characters')
      ).toBeInTheDocument();
    });
  });

  it('validates email pattern', async () => {
    render(<GenericForm fields={mockFields} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');

    fireEvent.change(nameInput, { target: { value: 'Valid Name' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(screen.getByText('Email format is invalid')).toBeInTheDocument();
    });
  });

  it('submits valid form data', async () => {
    render(<GenericForm fields={mockFields} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const descriptionInput = screen.getByLabelText('Description');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(descriptionInput, { target: { value: 'A valid description' } });

    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        description: 'A valid description',
      });
    });
  });

  it('clears validation errors when user starts typing', async () => {
    render(<GenericForm fields={mockFields} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText('Name');

    // Trigger validation error
    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });

    // Start typing - error should disappear
    fireEvent.change(nameInput, { target: { value: 'J' } });

    await waitFor(() => {
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    });
  });

  it('calls onCancel when cancel button is clicked', () => {
    render(<GenericForm fields={mockFields} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  it('displays error message when provided', () => {
    const errorMessage = 'Something went wrong';

    render(
      <GenericForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
        error={errorMessage}
      />
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('populates form with initial data', () => {
    const initialData = {
      name: 'Initial Name',
      email: 'initial@example.com',
      description: 'Initial description',
    };

    render(
      <GenericForm
        fields={mockFields}
        initialData={initialData}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.getByDisplayValue('Initial Name')).toBeInTheDocument();
    expect(screen.getByDisplayValue('initial@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Initial description')).toBeInTheDocument();
  });
});
