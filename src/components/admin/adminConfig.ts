import { fetchProjects, createProject, updateProject } from "../../api/projects";
import { fetchSkills, createSkill, updateSkill, deleteSkill } from "../../api/skills";
import {
    fetchCertifications,
    createCertification,
    updateCertification,
    deleteCertification,
} from "../../api/certifications";

export const ADMIN_SECTIONS = [
    {
        key: "projects",
        label: "Projects",
        config: {
            fields: [
                { name: "name", type: "text", label: "Project Name" },
                { name: "description", type: "textarea", label: "Description" },
                { name: "tecnical_description", type: "textarea", label: "Technical Description" },
                {
                    name: "status",
                    type: "select",
                    label: "Status",
                    options: ["draft", "in_progress", "completed", "archived"],
                },
                { name: "start_date", type: "date", label: "Start Date" },
                { name: "end_date", type: "date", label: "End Date" },
                { name: "demo_video_url", type: "text", label: "Demo Video URL" },
                { name: "demo_screenshot_url", type: "text", label: "Demo Screenshot URL" },
                { name: "demo_url", type: "text", label: "Demo URL" },
                { name: "repository_url", type: "text", label: "Repository URL" },
            ],
            fetchItems: fetchProjects,
            createItem: createProject,
            updateItem: updateProject,
            deleteItem: () => {
                throw new Error("deleteProject function is not implemented yet");
            },
            itemKey: "id",
            title: "Projects",
            queryKey: ["projects"],
        },
    },
    {
        key: "skills",
        label: "Skills",
        config: {
            fields: [
                { name: "name", type: "text", label: "Skill Name" },
                { name: "icon_link", type: "text", label: "Icon Link" },
            ],
            fetchItems: fetchSkills,
            createItem: createSkill,
            updateItem: updateSkill,
            deleteItem: deleteSkill,
            itemKey: "id",
            title: "Skills",
            queryKey: ["skills"],
        },
    },
    {
        key: "certifications",
        label: "Certifications",
        config: {
            fields: [
                { name: "name", type: "text", label: "Certification Name" },
                { name: "badge_link", type: "text", label: "Badge Link" },
                { name: "certification_link", type: "text", label: "Certification Link" },
            ],
            fetchItems: fetchCertifications,
            createItem: createCertification,
            updateItem: updateCertification,
            deleteItem: deleteCertification,
            itemKey: "id",
            title: "Certifications",
            queryKey: ["certifications"],
        },
    },
];
