import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        // Custom color palette
        "primary-dark": "#0B132B",
        "primary-medium": "#1C2541",
        "primary-light": "#3A506B",
        "accent-teal": "#5BC0BE",
        "accent-mint": "#6FFFE9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDelay: {
        0: "0ms",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
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
        "fade-out-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up-menu": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease forwards",
        fadeInUpDelay1: "fadeInUp 0.6s ease forwards 0.3s",
        fadeInUpDelay2: "fadeInUp 0.6s ease forwards 0.6s",
        fadeInUpDelay3: "fadeInUp 0.6s ease forwards 0.9s",
        fadeInUpDelay4: "fadeInUp 0.6s ease forwards 1.2s",
        fadeInLogo: "fadeInUp 0.8s ease forwards 1.6s", // logo animatsiyasi keyinchalik
        fadeInRight: "fadeInUp 0.8s ease forwards 1.9s", // right controls animatsiyasi
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.7s ease-out",
        "fade-out-up": "fade-out-up 1.5s ease-out",
        "fade-out-up-logo": "fade-out-up 4s ease-out",
        "fade-out-up-menu": "fade-out-up 7s ease-out",
        "fade-in-up": "fade-in-up 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
