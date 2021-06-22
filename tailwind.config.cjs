module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  mode: 'jit',
  purge: ['./src/app.html', './src/**/*.svelte'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
