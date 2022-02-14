const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				'h1': { fontSize: theme('fontSize.2xl') },
				'h2': { fontSize: theme('fontSize.xl') },
				'h3': { fontSize: theme('fontSize.lg') },
			})
		})
	],
}
