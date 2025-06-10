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
    throw new Error("createSkill function is not implemented yet");
};

export const updateSkill = async (id: string | number, data: Partial<Skill>): Promise<Skill> => {
    throw new Error("updateSkill function is not implemented yet");
};

export const deleteSkill = async (id: string | number): Promise<void> => {
    throw new Error("deleteSkill function is not implemented yet");
};
