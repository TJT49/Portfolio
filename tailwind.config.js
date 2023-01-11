/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redColor : '#CE2402'},
    },
    backgroundImage: {
      'gradientImage' : 'linear-gradient(rgba(206, 36, 2, 0.1), rgba(0, 0, 0, 0.5)), url("/background-image.jpg")',
    },
    spacing: {
      '20px': '20px',
      '10px': '10px',
      'auto': 'auto',
      '350px': '350px',
      '45px': '45px',
    },
    fontSize: {
      '50px': ['50px'],
      '20px' : ['20px'],
      '75px' : ['75px'],
    },
    letterSpacing: {
      '1px': '1px',
      '3px': '3px',
    },
    padding: {
      'aboutPadding': '75px 0px'
    },
    width: {
      '1130px' : '1130px',
      '350px' : '350px',
      '550px' : '550px',
    },
    maxWidth: {
      '95' : '95%',
    },
    borderRadius: {
      '50' : '50%',
    },
    lineHeight: {
      '30' : '30px',
    },
  },
  plugins: [],
}
