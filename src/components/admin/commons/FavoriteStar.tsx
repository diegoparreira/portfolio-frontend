import React from "react";

interface FavoriteStarProps {
    value: boolean;
    onToggle: (newValue: boolean, e: React.MouseEvent<HTMLSpanElement>) => void;
    size?: number;
    style?: React.CSSProperties;
    titleTrue?: string;
    titleFalse?: string;
}

const FavoriteStar: React.FC<FavoriteStarProps> = ({
    value,
    onToggle,
    size = 22,
    style = {},
    titleTrue = "Unmark as favorite",
    titleFalse = "Mark as favorite",
}) => (
    <span
        style={{
            cursor: "pointer",
            marginLeft: 12,
            fontSize: size,
            color: value ? "#FFD700" : "#bbb",
            ...style,
        }}
        title={value ? titleTrue : titleFalse}
        onClick={e => {
            e.stopPropagation();
            onToggle(!value, e);
        }}
        data-testid="favorite-star"
    >
        {value ? "★" : "☆"}
    </span>
);

export default FavoriteStar;
