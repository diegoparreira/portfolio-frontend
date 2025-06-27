import type { Certification } from "../../../types/Certification";

export interface CertificationFieldConfig {
    name: keyof Certification;
    label: string;
    type: "text" | "textarea" | "date" | "select";
    required?: boolean;
    placeholder?: string;
    options?: string[];
}

export const CERTIFICATION_FORM_FIELDS: CertificationFieldConfig[] = [
    {
        name: "name",
        label: "Certification Name",
        type: "text",
        required: true,
    },
    {
        name: "badge_link",
        label: "Badge Link",
        type: "text",
        placeholder: "URL to the certification badge",
        required: true,
    },
    {
        name: "certification_link",
        label: "Certification Link",
        type: "text",
        placeholder: "URL to the certification",
        required: true,
    },
];
