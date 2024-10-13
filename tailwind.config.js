/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: '#e5e7eb',
        background: '#ffffff',
        foreground: '#000000',
        // Add any other custom colors here
      },
      spacing: {
        '3.5': '0.875rem', // This is between 3 (0.75rem) and 4 (1rem)
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
