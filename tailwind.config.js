/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF3E7',
        paper: '#FFFCF6',
        coffee: '#3B2419',
        cocoa: '#6B4A36',
        rust: '#B5502D',
        gold: '#C89B3C',
        line: '#E8D9C5',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      maxWidth: {
        content: '1080px',
      },
    },
  },
  plugins: [],
};
