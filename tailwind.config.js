import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#570df8",
					"primary-content": "#ffffff",
					"secondary": "#f000b8",
					"secondary-content": "#ffffff",
					"accent": "#37cdbe",
					"accent-content": "#ffffff",
					"neutral": "#3d4451",
					"neutral-content": "#ffffff",
					"base-100": "#1f2937",
					"base-200": "#111827",
					"base-300": "#0f172a",
					"base-content": "#ffffff",
					"info": "#2094f3",
					"info-content": "#ffffff",
					"success": "#009485",
					"success-content": "#ffffff",
					"warning": "#ff9900",
					"warning-content": "#ffffff",
					"error": "#ff5724",
					"error-content": "#ffffff"
				}
			},
		],
	},

	plugins: [typography, forms, containerQueries, require('daisyui')]
};
