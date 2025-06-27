import React from "react";
import { Alert } from "react-bootstrap";

interface ErrorAlertProps {
    message?: string;
    variant?: "danger" | "warning" | "info";
    className?: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
    message,
    variant = "danger",
    className = ""
}) => {
    if (!message) return null;

    return (
        <Alert variant={variant} className={className}>
            {message}
        </Alert>
    );
};

export default ErrorAlert;
