// tailwind.config.ts
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Here is our new dark theme color palette
        border: "hsl(214 30% 25%)", // A subtle dark blue border
        input: "hsl(214 30% 25%)",
        ring: "hsl(170, 80%, 50%)", // A vibrant teal for focus rings
        background: "#0a192f",    // A professional dark navy background
        foreground: "#ccd6f6",    // A clean, readable off-white for text
        primary: {
          DEFAULT: "hsl(170, 80%, 50%)", // A vibrant teal accent for buttons
          foreground: "#0a192f", // Dark text for primary buttons
        },
        secondary: {
          DEFAULT: "hsl(215 28% 17%)", // Dark secondary buttons
          foreground: "#ccd6f6", // Light text for secondary buttons
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "hsl(215 28% 17%)",
          foreground: "hsl(215 20% 65%)", // A lighter gray for muted text
        },
        accent: {
          DEFAULT: "hsl(170, 80%, 50%)", // Use the same vibrant teal for accents
          foreground: "#0a192f",
        },
        popover: {
          DEFAULT: "hsl(215 28% 15%)", // Dark popovers
          foreground: "#ccd6f6",
        },
        card: {
          DEFAULT: "hsl(215 28% 15%)", // A slightly lighter navy for cards
          foreground: "#ccd6f6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
       },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config