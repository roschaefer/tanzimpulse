module.exports = {
  mode: 'jit',
  purge: ['./src/app.html', './src/**/*.svelte'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
