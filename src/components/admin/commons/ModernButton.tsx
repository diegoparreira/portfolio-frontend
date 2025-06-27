import React from "react";
import { Button } from "react-bootstrap";
import { PlusCircle, X, Check, XCircle, ThreeDots, BoxArrowInRight } from "react-bootstrap-icons";

type IconType = 'plus' | 'x' | 'check' | 'cancel' | 'three-dots' | 'login';

interface ModernButtonProps {
    onClick?: () => void;
    size?: "sm" | "lg";
    icon: IconType,
    submit?: boolean
}

const ModernButton: React.FC<ModernButtonProps> = ({
    onClick,
    size,
    icon,
    submit = false
}) => {
    const buttonWidthAndHeight = size === 'sm' ? 36 : 72;
    const iconSize = size === 'sm' ? 20 : 40;

    const pickRightIcon = () => {
        switch (icon) {
            case 'plus':
                return <PlusCircle size={iconSize} color="#888" />;
            case 'x':
                return <XCircle size={iconSize} color="#888" />;
            case 'check':
                return <Check size={iconSize} color="#888" />;
            case 'cancel':
                return <X size={iconSize} color="#888" />;
            case 'three-dots':
                return <ThreeDots size={iconSize} color="#888" />;
            case 'login':
                return <BoxArrowInRight size={iconSize} color="#888" />;
            default:
                throw new Error("Icon not mapped yet");
        }
    }

    return (
        <Button
            variant="light"
            size={size}
            className="modern-add-btn d-flex align-items-center justify-content-center"
            onClick={onClick}
            type={submit ? "submit" : "button"}
            style={{ width: buttonWidthAndHeight, height: buttonWidthAndHeight, borderRadius: '50%', padding: 0 }}
        >
            {pickRightIcon()}
        </Button>
    );
};

export default ModernButton;
