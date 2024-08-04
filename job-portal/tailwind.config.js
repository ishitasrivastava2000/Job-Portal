/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
        '950': '#172554',
        },
        'tulip-tree': {
        '50': '#fdfae9',
        '100': '#faf3c7',
        '200': '#f7e691',
        '300': '#f2d052',
        '400': '#ebb619',
        '500': '#dca216',
        '600': '#be7d10',
        '700': '#985910',
        '800': '#7e4815',
        '900': '#6b3b18',
        '950': '#3e1d0a',
        },
      }
    },
  },
  plugins: [],
}