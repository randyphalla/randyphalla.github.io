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
				'gray': {
					50: '#f8f9fa',
					100: '#f1f3f5',
					200: '#e9ecef',
					300: '#dee2e6',
					400: '#ced4da',
					500: '#adb5bd',
					600: '#868e96',
					700: '#495057',
					800: '#343a40',
					900: '#212529',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
