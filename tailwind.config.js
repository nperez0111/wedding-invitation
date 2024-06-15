/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./backend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ["Playwrite AU TAS", 'cursive'],
      }
    },
  },
  plugins: [],
}

