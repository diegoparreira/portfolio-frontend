import React from 'react';
import type { Skill } from '../../../types/Skill';
import { GenericForm } from '../commons';
import { SKILL_FORM_FIELDS } from './skillFormConfig';

interface SkillFormProps {
  initialData?: Partial<Skill>;
  onSubmit: (data: Partial<Skill>) => void;
  onCancel?: () => void;
  error?: string;
}

const SkillForm: React.FC<SkillFormProps> = ({ initialData = {}, onSubmit, onCancel, error }) => {
  // Convert SkillFieldConfig to GenericFormFieldConfig
  const genericFields = SKILL_FORM_FIELDS.map(field => ({
    name: field.name as string,
    label: field.label,
    type: field.type,
    required: field.required,
    placeholder: field.placeholder,
    options: field.options,
  }));

  return (
    <GenericForm
      fields={genericFields}
      initialData={initialData}
      onSubmit={onSubmit}
      onCancel={onCancel}
      error={error}
    />
  );
};

export default SkillForm;
