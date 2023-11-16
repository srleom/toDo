/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#003182'
			},
			fontFamily: {
				mabry: ['Mabry Pro', 'sans']
			},
			screens: {
				xs: '425px'
			}
		}
	},
	plugins: []
};
