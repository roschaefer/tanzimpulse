module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
