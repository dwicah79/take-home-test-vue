/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '32px'],
        '2xl': ['24px', '36px'],
        '3xl': ['30px', '42px'],
        '4xl': ['36px', '48px'],
        '5xl': ['48px', '60px'],
        '6xl': ['60px', '72px'],
      },
      colors: {
        primary: {
          DEFAULT: '#ED1C25',
          100: '#ED1C25',
          80: '#ED1C25CC',
          60: '#ED1C2599',
          40: '#ED1C2566',
          20: '#ED1C2533',
        },
        secondary: {
          DEFAULT: '#061951',
          100: '#061951',
          80: '#061951CC',
          60: '#06195199',
          40: '#06195166',
          20: '#06195133',
          10: '#0619511A',
        },
      },
    },
  },
  plugins: [require('daisyui')],
}
