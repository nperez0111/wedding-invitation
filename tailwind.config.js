import tailwindAnimated from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ["Playwrite AU TAS", 'cursive'],
      }
    },
  },
  plugins: [tailwindAnimated],
}

