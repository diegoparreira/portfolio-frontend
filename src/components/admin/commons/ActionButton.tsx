import React from "react";
import { Button } from "react-bootstrap";

interface ActionButtonProps {
    variant?: "primary" | "secondary" | "danger" | "success";
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    variant = "primary",
    onClick,
    children,
    type = "button",
    className = "",
    disabled = false
}) => {
    const getButtonClass = () => {
        switch (variant) {
            case "primary":
                return "main-button";
            case "secondary":
                return "btn btn-secondary";
            case "danger":
                return "btn btn-danger";
            case "success":
                return "btn btn-success";
            default:
                return "main-button";
        }
    };

    return (
        <Button
            type={type}
            className={`${getButtonClass()} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default ActionButton;
