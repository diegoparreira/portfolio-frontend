import type { Project } from "../types/Project";

const url = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const fetchProjects = async (): Promise<Project[]> => {
    try {
        const getProjectsUrl = `${url}/list-projects`;

        console.log("Fetching projects from:", getProjectsUrl);

        const response = await fetch(getProjectsUrl, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${anonKey}`,
            },
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        console.log("Response status:", response.status);
        console.log("Response:", JSON.stringify(response));
        const data = await response.json();
        return data as Project[];
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        throw error;
    }
};

export const createProject = async (data: Partial<Project>): Promise<Project> => {
    throw new Error("createProject function is not implemented yet");
};

export const updateProject = async (id: string | number, data: Partial<Project>): Promise<Project> => {
    throw new Error("updateProject function is not implemented yet");
};
