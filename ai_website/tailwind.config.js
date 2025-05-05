/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#121829',
        'dark-card': '#1E293B',
        'dark-text-gray': '#CBD5E1',
        'dark-text-white': '#FFFFFF',
        'dark-border': '#334155',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
