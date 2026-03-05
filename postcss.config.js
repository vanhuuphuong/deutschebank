module.exports = {
	// Next.js requires PostCSS plugin identifiers (strings) rather than raw functions.
	// Use the new Tailwind PostCSS package name and autoprefixer.
	plugins: {
		'@tailwindcss/postcss': {},
		autoprefixer: {},
	},
};
