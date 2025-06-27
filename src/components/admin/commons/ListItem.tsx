import React from "react";

interface ListItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const ListItem: React.FC<ListItemProps> = ({
    children,
    onClick,
    className = ""
}) => {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {children}
        </li>
    );
};

export default ListItem;
