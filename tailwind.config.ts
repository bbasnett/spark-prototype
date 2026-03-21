import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
