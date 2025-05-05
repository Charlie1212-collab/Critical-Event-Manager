/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // AI website color scheme
        'dark-background': '#121829',
        'dark-card': '#1E293B',
        'dark-text-gray': '#CBD5E1',
        'dark-text-white': '#FFFFFF',
        'dark-border': '#334155',

        // Custom application colors - refreshed with more vibrant hues
        'crime': 'hsl(var(--color-crime))',
        'weather': 'hsl(var(--color-weather))',
        'incident': 'hsl(var(--color-incident))',
        'citizen': 'hsl(var(--color-citizen))',
        // Theme colors
        'dark': {
          DEFAULT: 'hsl(var(--background) / <alpha-value>)',
          '50': 'hsl(var(--muted) / <alpha-value>)',
          '100': 'hsl(var(--card) / <alpha-value>)',
          '200': 'hsl(var(--secondary) / <alpha-value>)',
          '300': 'hsl(var(--border) / <alpha-value>)',
          '400': 'hsl(var(--input) / <alpha-value>)',
          '500': 'hsl(var(--secondary-foreground) / <alpha-value>)',
          '600': 'hsl(var(--muted-foreground) / <alpha-value>)',
          '700': 'hsl(var(--muted-foreground) / <alpha-value>)',
          '800': 'hsl(var(--foreground) / <alpha-value>)',
          '900': 'hsl(var(--foreground) / <alpha-value>)',
        },
        'white': {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          '50': 'hsl(var(--primary-foreground) / <alpha-value>)',
          '100': 'hsl(var(--primary-foreground) / <alpha-value>)',
          '200': 'hsl(var(--accent-foreground) / <alpha-value>)',
          '300': 'hsl(var(--accent) / <alpha-value>)',
          '400': 'hsl(var(--accent) / <alpha-value>)',
          '500': 'hsl(var(--primary) / <alpha-value>)',
          '600': 'hsl(var(--primary) / <alpha-value>)',
          '700': 'hsl(var(--primary) / <alpha-value>)',
          '800': 'hsl(var(--primary) / <alpha-value>)',
          '900': 'hsl(var(--background) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(to bottom right, var(--glass-bg), var(--glass-bg))',
        'card-gradient': 'linear-gradient(to bottom, var(--card-gradient-start), var(--card-gradient-end))',
        'alert-gradient': 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px 2px rgba(var(--tw-shadow-color), 0.4)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'inner-highlight': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        'xl': 'var(--radius)',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
})