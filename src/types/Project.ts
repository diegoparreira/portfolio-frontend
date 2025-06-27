export type StatusEnum = "draft" | "in_progress" | "completed" | "archived";

export interface Project {
    id: number;
    name: string;
    description: string;
    tecnical_description: string;
    status: StatusEnum;
    start_date: string; // ISO date string (e.g., "2023-01-01")
    end_date: string | null; // ISO date string or null
    demo_video_url: string | null;
    demo_screenshots_urls: string[] | null; // Array of screenshot URLs
    demo_url: string | null;
    repository_url: string | null;
    created_at: string; // ISO timestamp
    updated_at: string; // ISO timestamp
    favorite: boolean;
}
