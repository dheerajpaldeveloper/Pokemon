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
        'custom-bg':'#658292',
      },
      screens: {
        'xs': {'max': '479px'},  
        'xxs': {'max': '200px'}, 
        'sm': '640px',  // Default "sm" breakpoint for screens larger than 640px
      },
      fontSize: {
        xxs: '0.600rem', // Define XXS size (10px)
        xxxs: '0.5rem', // Define XXS size (10px)
      },
    },
  },
  plugins: [],
} satisfies Config;
