/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0d1117",  // Color de fondo general en modo oscuro
        "dark-2": "#161b22",  // Color de fondo para elementos destacados en modo oscuro
        "primary": "#0d6efd",  // Color primario para botones y enlaces destacados
        "primary-hover": "#0b5ed7",  // Color de hover para el color primario
        "text-light": "#c9d1d9",  // Color de texto en modo oscuro
        "text-muted": "#8b949e",  // Color de texto para elementos menos destacados en modo oscuro
		"shadow-dark": "#AAAAAA"
      },
    },
  },
  plugins: [],
};
