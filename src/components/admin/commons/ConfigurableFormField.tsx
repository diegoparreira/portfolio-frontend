import React from "react";
import { Form } from "react-bootstrap";
import type { ProjectFieldConfig } from "../projects/projectFormConfig";
import type { SkillFieldConfig } from "../skills/skillFormConfig";
import type { CertificationFieldConfig } from "../certifications/certificationFormConfig";
import FormField from "./FormField";
import ScreenshotUrlsInput from "../projects/screenshot/ScreenshotUrlsInput";

type FieldConfig = ProjectFieldConfig | SkillFieldConfig | CertificationFieldConfig;
type InputTypes = "text" | "textarea" | "number" | "email" | "password" | "select" | "date";

interface ConfigurableFormFieldProps {
    config: FieldConfig;
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onCustomChange?: (name: string, value: any) => void;
}


const ConfigurableFormField: React.FC<ConfigurableFormFieldProps> = ({
    config,
    value,
    onChange,
    onCustomChange
}) => {
    // Handle custom components (only for ProjectFieldConfig)
    if ('type' in config && config.type === "custom" && 'customComponent' in config) {
        switch (config.customComponent) {
            case "screenshot_urls":
                return (
                    <Form.Group className="mb-3">
                        <Form.Label>{config.label}</Form.Label>
                        <ScreenshotUrlsInput
                            value={Array.isArray(value) ? value : []}
                            onChange={(urls) => onCustomChange?.(config.name as string, urls)}
                        />
                    </Form.Group>
                );
            default:
                return null;
        }
    }

    return (
        <FormField
            name={config.name as string}
            label={config.label}
            type={config.type as InputTypes}
            value={value || ""}
            onChange={onChange}
            required={config.required}
            placeholder={config.placeholder}
            options={config.options}
        />
    );
};

export default ConfigurableFormField;
