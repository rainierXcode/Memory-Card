/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        TradeWinds: ['TradeWinds', 'sans-serif'],
        Acme: ['Acme', 'sans-serif'],
      },

      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },

      animation: {
        zoom: 'zoom 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
