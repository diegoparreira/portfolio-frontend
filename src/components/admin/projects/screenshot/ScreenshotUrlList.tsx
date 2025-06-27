import { Button, Form } from "react-bootstrap";
import { PlusCircle, XCircle } from "react-bootstrap-icons";

interface ScreenshotUrlListProps {
    value: string[];
    onChange: (urls: string[]) => void;
}

const ScreenshotUrlList: React.FC<ScreenshotUrlListProps> = ({ value, onChange }) => {

    const handleUrlChange = (idx: number, url: string) => {
        const urls = [...value];
        urls[idx] = url;
        onChange(urls);
    };
    const handleAdd = () => {
        onChange([...(value || []), ""]);
    };
    const handleRemove = (idx: number) => {
        const urls = [...value];
        urls.splice(idx, 1);
        onChange(urls);
    };

    return (
        <>
            {value.length > 0 ? (
                value.map((url, idx) => (
                    <div className="d-flex mb-2 align-items-center" key={idx}>
                        <Form.Control
                            type="text"
                            value={url}
                            onChange={e => handleUrlChange(idx, e.target.value)}
                            placeholder={`Screenshot URL #${idx + 1}`}
                        />
                        <Button
                            variant="light"
                            size="sm"
                            className="ms-2 modern-remove-btn d-flex align-items-center justify-content-center"
                            onClick={() => handleRemove(idx)}
                            tabIndex={-1}
                            aria-label={`Remove screenshot URL #${idx + 1}`}
                        >
                            <XCircle size={18} color="#888" />
                        </Button>
                    </div>
                ))
            ) : (
                <div className="text-muted mb-2">No screenshot URLs. Add one below.</div>
            )}
            <div className="d-flex justify-content-center mb-2">
                <Button
                    variant="light"
                    size="sm"
                    className="modern-add-btn d-flex align-items-center justify-content-center"
                    onClick={handleAdd}
                    aria-label="Add screenshot URL"
                >
                    <PlusCircle size={20} color="#888" />
                </Button>
            </div>
        </>
    );
};

export default ScreenshotUrlList;