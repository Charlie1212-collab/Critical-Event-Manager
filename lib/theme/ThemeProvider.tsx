// filepath: /workspaces/Critical-Event-Manager/lib/theme/ThemeProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Only run this once when the component mounts
    useEffect(() => {
        setMounted(true);

        try {
            // Check if theme is saved in localStorage
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
                setTheme(savedTheme);
            } else {
                // Check for system preference
                const prefersDark = window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(prefersDark ? 'dark' : 'light');
            }
        } catch (error) {
            console.error('Error accessing localStorage or window:', error);
        }
    }, []);

    // Effect for when theme changes
    useEffect(() => {
        if (!mounted) return;

        try {
            // Update the data-theme attribute on the document
            document.documentElement.setAttribute('data-theme', theme);

            // Save to localStorage
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.error('Error updating theme:', error);
        }
    }, [theme, mounted]);

    // Provide a skeleton for SSR to avoid hydration mismatch
    if (!mounted) {
        return (
            <ThemeContext.Provider
                value={{ theme: 'dark', setTheme: () => { }, toggleTheme: () => { } }}
            >
                {children}
            </ThemeContext.Provider>
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}