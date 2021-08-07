module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
      },
      width: {
        '45': '187px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
