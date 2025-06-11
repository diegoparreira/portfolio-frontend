// Generic API utility for CRUD operations
export function createApiResource<T>(resource: string) {
    const url = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    return {
        fetchAll: async (): Promise<T[]> => {
            const response = await fetch(`${url}/list-${resource}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${anonKey}`,
                },
            });
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        },
        create: async (data: Partial<T>): Promise<T> => {
            const response = await fetch(`${url}/create-${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${anonKey}`,
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        },
        update: async (id: string | number, data: Partial<T>): Promise<T> => {
            const response = await fetch(`${url}/edit-${resource}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${anonKey}`,
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        },
    };
}
