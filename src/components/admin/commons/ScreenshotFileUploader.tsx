import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";

async function uploadScreenshotFile(file: File, projectName?: string): Promise<string> {
    const formData = new FormData();
    console.log("Uploading file:", file);
    console.log("Project name:", projectName);

    formData.append('file', file);
    if (projectName) {
        formData.append('project_name', projectName);
    }

    const url = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    const response = await fetch(`${url}/upload-screenshot`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${anonKey}`,
        },
        body: formData,
    });
    if (!response.ok) {
        const errorText = await response.text();
        console.error('Upload failed:', errorText);
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.url) {
        throw new Error('No URL returned from upload');
    } return data.url;
}

interface ScreenshotFileUploaderProps {
    value: string[];
    onChange: (urls: string[]) => void;
    projectName?: string;
}

const ScreenshotFileUploader: React.FC<ScreenshotFileUploaderProps> = ({ value, onChange, projectName }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [uploading, setUploading] = useState(false); const handleUpload = (urls: string[]) => {
        console.log("Adding screenshot URLs:", urls);
        onChange([...(value || []), ...urls]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFiles(e.target.files);
    };

    const handleUploadFiles = async () => {
        if (!selectedFiles || selectedFiles.length === 0) return;
        setUploading(true);
        let newUrls: string[] = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            try {
                const url = await uploadScreenshotFile(file, projectName);
                console.log("Uploaded file URL:", url);
                newUrls.push(url);
            } catch (err) {
                alert("Failed to upload screenshot: " + (err as Error).message);
            }
        }
        if (newUrls.length > 0) {
            handleUpload(newUrls);
        }
        setSelectedFiles(null);
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="d-flex justify-content-center mb-2">
            <Form.Control
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                aria-label="Upload screenshot files"
            />
            <Button
                variant="light"
                size="sm"
                className="modern-add-btn ms-2 d-flex align-items-center justify-content-center"
                style={{ width: 36, height: 36, borderRadius: '50%', padding: 0 }}
                aria-label="Upload selected screenshot files"
                onClick={handleUploadFiles}
                disabled={!selectedFiles || selectedFiles.length === 0 || uploading}
            >
                <PlusCircle size={20} color="#888" />
            </Button>
        </div>
    );
};

export default ScreenshotFileUploader;