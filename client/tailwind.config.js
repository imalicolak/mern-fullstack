/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				'2xl': '0 100px 100px rgba(0, 0, 0, 0.15)',
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [],
}
