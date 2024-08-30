import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customDark: "#1C2730",
        primary: {
          DEFAULT: "#4D73FF", // Primary color
          50: "#F2F5FF", // Lightest shade
          100: "#E5EBFF",
          200: "#B8CCFF",
          300: "#8AAEFF",
          400: "#5C8FFF",
          500: "#4D73FF", // Base color
          600: "#3E5ECC", // Darker shade
          700: "#2F4899",
          800: "#1F3266",
          900: "#101933", // Darkest shade
        },
        secondary: {
          DEFAULT: "#8D9397", // Quaternary color
          50: "#F4F5F6", // Lightest shade
          100: "#E8EAEB",
          200: "#CDD0D3",
          300: "#B2B6B9",
          400: "#979C9F",
          500: "#8D9397", // Base color
          600: "#787D80", // Darker shade
          700: "#5D6164",
          800: "#414547",
          900: "#25282A", // Darkest shade
        },
        gold: {
          DEFAULT: "#EED202", // Tertiary color
          50: "#FFFAE5", // Lightest shade
          100: "#FFF5CC",
          200: "#FFE999",
          300: "#FFDD66",
          400: "#FFD033",
          500: "#EED202", // Base color
          600: "#CCB002", // Darker shade
          700: "#998301",
          800: "#665600",
          900: "#332B00", // Darkest shade
        },
        vista: {
          DEFAULT: "#F9F2EF", // Vista color
          50: "#FFFFFF", // Lightest shade, typically very close to white
          100: "#FEFCFB",
          200: "#FDF8F5",
          300: "#FBEFEA",
          400: "#FAD6C8",
          500: "#F9F2EF", // Base color
          600: "#E4D1C8", // Darker shade
          700: "#C3A799",
          800: "#A27C6B",
          900: "#614133", // Darkest shade
        },
      },
    },
  },
  plugins: [],
};
export default config;
