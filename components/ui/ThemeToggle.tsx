// filepath: /workspaces/Critical-Event-Manager/components/ui/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
            ) : (
                <SunIcon className="h-5 w-5" />
            )}
        </button>
    );
};

export default ThemeToggle;