/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5733', // A color between red and orange
          light: '#FF7F58',
          dark: '#E63E1A',
        },
        dark: {
          bg: '#1E1E1E', // Dark but not pitch black
          card: '#2D2D2D',
          text: '#FFFFFF',
        }
      },
    },
  },
  plugins: [],
}
