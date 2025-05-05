/**
 * Utility functions for handling image loading and validation
 */

/**
 * Checks if an image exists and can be loaded
 * @param src The image source URL
 * @returns Promise that resolves with true if image loads successfully, false otherwise
 */
export const checkImageExists = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);

        img.src = src;
    });
};

/**
 * Validates multiple image paths and returns which ones are valid
 * @param paths Array of image paths to check
 * @returns Promise with an object mapping paths to boolean indicating if they exist
 */
export const validateImages = async (paths: string[]): Promise<Record<string, boolean>> => {
    const results: Record<string, boolean> = {};

    for (const path of paths) {
        results[path] = await checkImageExists(path);
    }

    return results;
};

/**
 * Get the resolved path to an image, checking alternatives if the primary path fails
 * @param primaryPath Primary image path to try
 * @param fallbackPaths Array of fallback paths to try if primary fails
 * @param defaultPath Default path to use if all others fail
 * @returns Promise resolving to the path of the first working image
 */
export const resolveImagePath = async (
    primaryPath: string,
    fallbackPaths: string[] = [],
    defaultPath: string = '/assets/placeholder.png'
): Promise<string> => {
    // Check primary path first
    if (await checkImageExists(primaryPath)) {
        return primaryPath;
    }

    // Check fallback paths in order
    for (const path of fallbackPaths) {
        if (await checkImageExists(path)) {
            return path;
        }
    }

    // Return default if nothing else worked
    return defaultPath;
};

/**
 * Logs image loading errors with useful context
 * @param path The image path that failed to load
 * @param componentName Optional component name for better error context
 */
export const logImageError = (path: string, componentName?: string): void => {
    const context = componentName ? `in ${componentName}` : '';
    console.error(`Failed to load image ${context}: ${path}`);

    // You could extend this to send errors to a monitoring service
};