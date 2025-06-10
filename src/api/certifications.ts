import type { Certification } from "../types/Certification";

const url = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const fetchCertifications = async (): Promise<Certification[]> => {
    try {
        const getCertificationsUrl = `${url}/list-certifications`;

        console.log("Fetching certifications from:", getCertificationsUrl);

        const response = await fetch(getCertificationsUrl, {
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
        return data as Certification[];
    } catch (error) {
        console.error("Failed to fetch certifications:", error);
        throw error;
    }
};
