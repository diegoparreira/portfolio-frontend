import type { Skill } from "../types/Skill";

const url = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const fetchSkills = async (): Promise<Skill[]> => {
    try {
        const getSkillsUrl = `${url}/list-skills`;

        console.log("Fetching skills from:", getSkillsUrl);

        const response = await fetch(getSkillsUrl, {
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
        return data as Skill[];
    } catch (error) {
        console.error("Failed to fetch skills:", error);
        throw error;
    }
};

export const createSkill = async (data: Partial<Skill>): Promise<Skill> => {
    try {
        const createSkillUrl = `${url}/create-skill`;

        console.log("Creating skill at:", createSkillUrl);
        console.log("Data to send:", JSON.stringify(data));

        const response = await fetch(createSkillUrl, {
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

        const createdSkill = await response.json();
        return createdSkill as Skill;
    } catch (error) {
        console.error("Failed to create skill:", error);
        throw error;
    }
};

export const updateSkill = async (id: string | number, data: Partial<Skill>): Promise<Skill> => {
    try {
        const updateSkillUrl = `${url}/edit-skill/${id}`;

        console.log("Updating skill at:", updateSkillUrl);
        console.log("Data to send:", JSON.stringify(data));

        const response = await fetch(updateSkillUrl, {
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

        const updatedSkill = await response.json();
        return updatedSkill as Skill;
    } catch (error) {
        console.error("Failed to update skill:", error);
        throw error;
    }
};
