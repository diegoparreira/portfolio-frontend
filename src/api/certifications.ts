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

export const createCertification = async (data: Partial<Certification>): Promise<Certification> => {
    try {
        const createCertificationUrl = `${url}/create-certification`;

        console.log("Creating certification at:", createCertificationUrl);
        console.log("Data to send:", JSON.stringify(data));

        const response = await fetch(createCertificationUrl, {
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

        const createdCertification = await response.json();
        return createdCertification as Certification;
    } catch (error) {
        console.error("Failed to create certification:", error);
        throw error;
    }
};

export const updateCertification = async (
    id: string | number,
    data: Partial<Certification>
): Promise<Certification> => {
    try {
        const updateCertificationUrl = `${url}/edit-certification/${id}`;

        console.log("Updating certification at:", updateCertificationUrl);
        console.log("Data to send:", JSON.stringify(data));

        const response = await fetch(updateCertificationUrl, {
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

        const updatedCertification = await response.json();
        return updatedCertification as Certification;
    } catch (error) {
        console.error("Failed to update certification:", error);
        throw error;
    }
};
