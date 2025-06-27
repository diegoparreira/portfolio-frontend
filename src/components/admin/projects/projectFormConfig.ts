import type { Project } from "../../../types/Project";

export interface ProjectFieldConfig {
    name: keyof Project;
    label: string;
    type: "text" | "textarea" | "date" | "select" | "custom";
    required?: boolean;
    placeholder?: string;
    options?: string[];
    customComponent?: "screenshot_urls";
}

export const PROJECT_FORM_FIELDS: ProjectFieldConfig[] = [
    {
        name: "name",
        label: "Project Name",
        type: "text",
        required: true,
    },
    {
        name: "description",
        label: "Description",
        type: "textarea",
        required: true,
    },
    {
        name: "tecnical_description",
        label: "Technical Description",
        type: "textarea",
    },
    {
        name: "status",
        label: "Status",
        type: "select",
        required: true,
        options: ["draft", "in_progress", "completed", "archived"],
    },
    {
        name: "start_date",
        label: "Start Date",
        type: "date",
    },
    {
        name: "end_date",
        label: "End Date",
        type: "date",
    },
    {
        name: "demo_url",
        label: "Demo URL",
        type: "text",
        placeholder: "https://example.com",
    },
    {
        name: "repository_url",
        label: "Repository URL",
        type: "text",
        placeholder: "https://github.com/username/repository",
    },
    {
        name: "demo_video_url",
        label: "Demo Video URL",
        type: "text",
        placeholder: "https://youtube.com/watch?v=...",
    },
    {
        name: "demo_screenshots_urls",
        label: "Demo Screenshot URLs",
        type: "custom",
        customComponent: "screenshot_urls",
    },
];
