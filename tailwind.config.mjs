/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FFFBF9',
          100: '#FEF7F0'
        },
        primary: {
          DEFAULT: '#0D9488',
          light: '#5EEAD4',
          dark: '#0F766E'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};