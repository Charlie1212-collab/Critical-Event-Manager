import React, { useState } from 'react';

interface ErrorHandlingImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackSrc?: string;
    onError?: (error: Error) => void;
}

const ErrorHandlingImage: React.FC<ErrorHandlingImageProps> = ({
    src,
    alt,
    className = '',
    fallbackSrc = '/public/assets/placeholder.png',
    onError,
}) => {
    const [imgSrc, setImgSrc] = useState<string>(src);
    const [hasError, setHasError] = useState<boolean>(false);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error(`Error loading image from ${src}:`, e);

        if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        } else {
            setHasError(true);
        }

        if (onError) {
            onError(new Error(`Failed to load image: ${src}`));
        }
    };

    if (hasError) {
        return (
            <div
                className={`flex items-center justify-center bg-gray-200 ${className}`}
                style={{ minHeight: '100px' }}
            >
                <span className="text-gray-500 text-sm">Image unavailable</span>
            </div>
        );
    }

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
        />
    );
};

export default ErrorHandlingImage;