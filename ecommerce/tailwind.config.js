/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	compilerOptions: {
		baseUrl: ".",
		paths: {
			"@/*": ["./src/*"],
		},
	},
	baseUrl: ".",
	paths: {
		"@/*": ["./src/*"],
	},
}

