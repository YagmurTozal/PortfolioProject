module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      keyframes: {
        headShake: {
          '0%' : {
            transform: 'translateX(0)',
          },
          '6.5%' : {
            transform: 'translateX(-6px) rotateY(-9deg)',  
          },
          '18.5%' : {
            transform: 'translateX(-5px) rotateY(7deg)',  
          },
          '31.5%' : {
            transform: 'translateX(-3px) rotateY(-5deg)',  
          },
          '43.5%' : {
            transform: 'translateX(-2px) rotateY(3deg)',  
          },
          '50%' : {
            transform: 'translateX(0)',  
          },
        }
      },
      animation: {
        headShake: 'headShake 2s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}