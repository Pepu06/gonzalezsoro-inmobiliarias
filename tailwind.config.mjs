/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  "header-color-bg": "#091d35",
		  "header-color-text": "#f96f6c",
		  "contact-color-bg": "#1c2d42",
		},
	  },
	},
	plugins: [],
  };
  