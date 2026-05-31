/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      colors: {
        rose: {
          50:  '#FFF0F5',
          100: '#FFD6E7',
          200: '#FFB3D1',
          300: '#FF8AB8',
          400: '#E8839F',
          500: '#C9547C',
          600: '#A03060',
          700: '#7A1F47',
          DEFAULT: '#C9547C'
        },
        gold: {
          100: '#FBF0D0',
          200: '#F5DFA0',
          300: '#E8CC78',
          400: '#D4B55A',
          500: '#C9A84C',
          600: '#A07830',
          DEFAULT: '#C9A84C'
        },
        cream: {
          DEFAULT: '#FAF5EE',
          warm:    '#F5EDE0',
          deep:    '#EDE3D5'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent:  ['"Cormorant Garamond"', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
}
