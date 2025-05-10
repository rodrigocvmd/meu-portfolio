import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// ...nossas cores personalizadas
				"light-primary": "#F0F9FF",
				"light-secondary": "#E0F2FE",
				"light-text": "#374151",
				"light-accent": "#FDBA74",
				"dark-primary": "#1F2937",
				"dark-secondary": "#374151",
				"dark-text": "#D1D5DB",
				"dark-accent": "#FCD3A2",
			},
			fontFamily: {
				// Adicionar esta seção
				sans: ["var(--font-inter)", "sans-serif"], // Inter como fonte sans-serif padrão
				heading: ["var(--font-poppins)", "sans-serif"], // Poppins para títulos
			},
		},
	},
	plugins: [],
};
export default config;
