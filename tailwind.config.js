/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#003182'
			},
			fontFamily: {
				mabry: ['Mabry Pro', 'sans']
			}
		}
	},
	plugins: []
};
