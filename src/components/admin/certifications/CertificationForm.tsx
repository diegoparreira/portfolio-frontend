import React from 'react';
import type { Certification } from '../../../types/Certification';
import { GenericForm } from '../commons';
import { CERTIFICATION_FORM_FIELDS } from './certificationFormConfig';

interface CertificationFormProps {
  initialData?: Partial<Certification>;
  onSubmit: (data: Partial<Certification>) => void;
  onCancel?: () => void;
  error?: string;
}

const CertificationForm: React.FC<CertificationFormProps> = ({
  initialData = {},
  onSubmit,
  onCancel,
  error,
}) => {
  return (
    <GenericForm<Certification>
      fields={CERTIFICATION_FORM_FIELDS}
      initialData={initialData}
      onSubmit={onSubmit}
      onCancel={onCancel}
      error={error}
    />
  );
};

export default CertificationForm;
