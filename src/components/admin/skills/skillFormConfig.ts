import type { Skill } from "../../../types/Skill";

export interface SkillFieldConfig {
    name: keyof Skill;
    label: string;
    type: "text" | "textarea" | "date" | "select";
    required?: boolean;
    placeholder?: string;
    options?: string[];
}

export const SKILL_FORM_FIELDS: SkillFieldConfig[] = [
    {
        name: "name",
        label: "Skill Name",
        type: "text",
        required: true,
    },
    {
        name: "icon_link",
        label: "Icon Link",
        type: "text",
        placeholder: "URL to the skill's icon",
    },
];
