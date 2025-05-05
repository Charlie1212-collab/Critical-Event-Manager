import React, { useState } from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    backgroundImage?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "", backgroundImage }) => {
    const [imageError, setImageError] = useState(false);

    const cardStyle = backgroundImage && !imageError ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } : {};

    return (
        <div
            className={`p-4 rounded-lg shadow-md ${className}`}
            style={cardStyle}
        >
            {backgroundImage && (
                <img
                    src={backgroundImage}
                    className="hidden" // Hidden image for preloading
                    onError={() => {
                        console.error(`Error loading image: ${backgroundImage}`);
                        setImageError(true);
                    }}
                    alt=""
                />
            )}
            {children}
        </div>
    );
};

export default Card;