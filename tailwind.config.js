module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
