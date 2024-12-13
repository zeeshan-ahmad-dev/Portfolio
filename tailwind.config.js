/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        '-90': '-90deg',
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': { perspective: '1000px' },
        '.rotate-x-[-90deg]': { transform: 'rotateX(-90deg)' },
        '.rotate-x-0': { transform: 'rotateX(0deg)' },
        '.transform-origin-bottom': { transformOrigin: 'bottom' },
      });
    },
  ],
}

