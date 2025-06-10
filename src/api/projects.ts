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
    try {
        const createProjectUrl = `${url}/create-project`;

        console.log("Creating project at:", createProjectUrl);
        console.log("Data to send:", JSON.stringify(data));

        const response = await fetch(createProjectUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${anonKey}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const createdProject = await response.json();
        return createdProject as Project;
    } catch (error) {
        console.error("Failed to create project:", error);
        throw error;
    }
};

export const updateProject = async (id: string | number, data: Partial<Project>): Promise<Project> => {
    try {
        const updateProjectUrl = `${url}/edit-project/${id}`;

        console.log("Updating project at:", updateProjectUrl);
        console.log("Data to send:", JSON.stringify(data));

        const response = await fetch(updateProjectUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${anonKey}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const updatedProject = await response.json();
        return updatedProject as Project;
    } catch (error) {
        console.error("Failed to update project:", error);
        throw error;
    }
};
