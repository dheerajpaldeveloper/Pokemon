import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#849ba8',  // Define a custom blue color
        'custom-green': '#10B981', // Define a custom green color
        'custom-pink': '#EC4899',  // Define a custom pink color
      },
    },
  },
  plugins: [],
} satisfies Config;
