/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
			serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
		},
		extend: {
			borderWidth: {
				'1': '1px',
			},
			colors: {
				primary: 'var(--color-primary)',
				// newRed: {
				// 	50: 'var(--color-primary)',
				// 	100: '',
				// 	200: '',
				// 	300: '',
				// 	400: '',
				// 	500: '',
				// 	600: '',
				// 	700: '',
				// 	800: '',
				// 	900: '',
				// },
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
