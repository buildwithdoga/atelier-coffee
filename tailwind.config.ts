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
        cream: {
          50: "#FDFBF7",
          100: "#F9F5EE",
          200: "#F0E8DC",
          300: "#E5D9C8",
          400: "#D4C4AD",
          500: "#B8A48E",
        },
        espresso: {
          50: "#F5F0EB",
          100: "#E8DDD3",
          200: "#D4C0AD",
          300: "#B89B7E",
          400: "#9A7558",
          500: "#7A5538",
          600: "#5C3F28",
          700: "#3D2914",
          800: "#2A1C0E",
          900: "#1A1108",
          950: "#0D0804",
        },
        accent: {
          gold: "#C4A574",
          copper: "#B87333",
          sage: "#8B9A7B",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
