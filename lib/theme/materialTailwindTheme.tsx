import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

// Define a custom theme for Material Tailwind components with light/dark variants
export const materialTailwindTheme = {
    theme: {
        colors: {
            black: {
                50: "hsl(220, 40%, 97%)",
                100: "hsl(220, 40%, 92%)",
                200: "hsl(220, 40%, 85%)",
                300: "hsl(265, 70%, 80%)",
                400: "hsl(265, 80%, 70%)",
                500: "hsl(265, 89%, 70%)",
                600: "hsl(265, 80%, 60%)",
                700: "hsl(265, 75%, 50%)",
                800: "hsl(265, 70%, 40%)",
                900: "hsl(250, 35%, 8%)",
            },
            crime: "hsl(350, 80%, 55%)",
            weather: "hsl(190, 80%, 60%)",
            incident: "hsl(30, 90%, 60%)",
            citizen: "hsl(265, 89%, 70%)",
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Roboto Slab", "serif"],
            body: ["Inter", "sans-serif"],
        },
        boxShadow: {
            card: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
            elevated: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
        },
        borderRadius: {
            DEFAULT: "0.75rem"
        }
    },
    // Override specific components based on current theme
    components: {
        card: {
            defaultProps: {
                className: "bg-card-gradient backdrop-blur-sm border border-dark-300/30 text-card-foreground rounded-xl shadow-card",
                shadow: false,
            },
            styles: {
                variants: {
                    filled: {
                        backgroundColor: "hsl(var(--card))",
                        color: "hsl(var(--card-foreground))",
                        borderRadius: "0.75rem",
                    },
                },
                base: {
                    initial: {
                        borderRadius: "0.75rem",
                    }
                }
            },
        },
        cardHeader: {
            defaultProps: {
                className: "px-6 py-4 border-b border-border/30",
                floated: false,
            },
            styles: {
                variants: {
                    filled: {
                        background: "linear-gradient(to right, var(--card-gradient-start), var(--card-gradient-end))",
                    }
                }
            }
        },
        cardBody: {
            defaultProps: {
                className: "px-6 py-4",
            },
        },
        cardFooter: {
            defaultProps: {
                className: "px-6 py-4 border-t border-border/30",
            },
        },
        button: {
            defaultProps: {
                variant: "filled",
                color: "blue",
                className: "shadow-inner-highlight btn-hover-effect",
                ripple: true,
            },
            styles: {
                variants: {
                    filled: {
                        blue: {
                            background: "hsla(var(--primary), 0.9)",
                            color: "hsl(var(--primary-foreground))",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
                        },
                    },
                    outlined: {
                        blue: {
                            border: "1px solid hsl(var(--primary))",
                            color: "hsl(var(--primary))",
                        },
                    },
                    text: {
                        blue: {
                            color: "hsla(var(--primary), 0.9)",
                        },
                    },
                    gradient: {
                        blue: {
                            background: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))",
                            color: "hsl(var(--primary-foreground))",
                        }
                    }
                },
            },
        },
        dialog: {
            defaultProps: {
                className: "bg-card-gradient backdrop-blur-md text-card-foreground border border-border/30 rounded-xl",
                size: "md",
            },
        },
        input: {
            defaultProps: {
                className: "bg-input/50 text-foreground border-input focus:border-primary rounded-lg",
                labelProps: {
                    className: "text-muted-foreground"
                }
            },
            styles: {
                base: {
                    container: {
                        position: "relative",
                    },
                    input: {
                        borderRadius: "0.5rem",
                    }
                }
            }
        },
        select: {
            defaultProps: {
                className: "bg-input/50 text-foreground border-input focus:border-primary rounded-lg",
                menuProps: {
                    className: "bg-popover border border-border/30 text-popover-foreground rounded-lg shadow-elevated"
                }
            },
        },
        menu: {
            defaultProps: {
                className: "bg-popover text-popover-foreground border border-border/30 rounded-lg shadow-elevated",
            },
        },
        popover: {
            defaultProps: {
                className: "bg-popover text-popover-foreground border border-border/30 rounded-lg shadow-elevated",
            },
        },
        tooltip: {
            defaultProps: {
                className: "bg-popover text-popover-foreground py-1 px-2 rounded shadow-md",
            },
        },
        typography: {
            defaultProps: {
                className: "text-foreground",
            },
            styles: {
                variants: {
                    paragraph: {
                        color: "hsl(var(--muted-foreground))",
                    },
                    h1: {
                        color: "hsl(var(--foreground))",
                        fontWeight: "600",
                    },
                    h2: {
                        color: "hsl(var(--foreground))",
                        fontWeight: "600",
                    },
                    h3: {
                        color: "hsl(var(--foreground))",
                        fontWeight: "600",
                    },
                    h4: {
                        color: "hsl(var(--foreground))",
                        fontWeight: "500",
                    },
                    h5: {
                        color: "hsl(var(--foreground))",
                        fontWeight: "500",
                    },
                    h6: {
                        color: "hsl(var(--foreground))",
                        fontWeight: "500",
                    },
                },
            },
        },
        tabs: {
            defaultProps: {
                className: "text-foreground",
            },
            styles: {
                base: {
                    tab: {
                        initial: {
                            color: "hsl(var(--muted-foreground))",
                        },
                        active: {
                            color: "hsl(var(--foreground))",
                            borderColor: "hsl(var(--primary))"
                        }
                    }
                }
            }
        }
    },
};

// Theme provider wrapper component with SSR safeguards
export function MaterialTailwindThemeProviderWrapper({ children }: React.PropsWithChildren<{}>) {
    const [mounted, setMounted] = useState(false);

    // Safely handle client-side mounting
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <MaterialTailwindThemeProvider value={materialTailwindTheme}>
            {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
        </MaterialTailwindThemeProvider>
    );
}

export default MaterialTailwindThemeProviderWrapper;