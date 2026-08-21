import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1100px" },
    },
    extend: {
      fontSize: {
        micro: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        tag: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
        btn: ['0.8125rem', { lineHeight: '1.25rem' }],
        subtle: ['0.875rem', { lineHeight: '1.25rem' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        h3: ['1.25rem', { lineHeight: '1.4' }],
        h2: ['1.875rem', { lineHeight: '1.2' }],
        h1: ['2.75rem', { lineHeight: '1.1' }],
      },
      fontFamily: {
        heading: ["Fraunces", "Iowan Old Style", "serif"],
        mono: ["Space Mono", "Courier New", "monospace"],
        sans: ["Hanken Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tertiary: "hsl(var(--text-tertiary))",
        editorial: {
          DEFAULT: "hsl(var(--editorial-accent))",
        },
        "studio-dark": {
          bg: "hsl(var(--studio-dark-bg))",
          card: "hsl(var(--studio-dark-card))",
          border: "hsl(var(--studio-dark-border))",
          text: "hsl(var(--studio-dark-text))",
          muted: "hsl(var(--studio-dark-muted))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "slide-up-blur": {
          from: { opacity: "0", transform: "translateY(40px)", filter: "blur(8px)" },
          to: { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up-blur 1s cubic-bezier(0.2,1,0.3,1) forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
