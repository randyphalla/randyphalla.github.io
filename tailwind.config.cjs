/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			// sans: ['Poppins Inter', ...defaultTheme.fontFamily.sans],
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
			// serif: ['PT Serif', ...defaultTheme.fontFamily.serif],
			serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
		},
		extend: {
			borderWidth: {
				'1': '1px',
			},
			colors: {
				newRed: {
					50: 'var(--color-primary)',
					100: '',
					200: '',
					300: '',
					400: '',
					500: '',
					600: '',
					700: '',
					800: '',
					900: '',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
