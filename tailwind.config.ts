import type { Config } from "tailwindcss";
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
		backgroundImage: {
		  "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
		  "gradient-conic":
			"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
		colors: {
		  yellowgold: "#FFC20E",
		  logoblue: "#364FD9",
		  lightblue: "#233A89",
		  white: "#ffffff",
		  auxiliary: {
			50: "#FFF8F3",
			100: "#FFECDD",
			200: "#FFD9BA",
			300: "#FFB274",
			400: "#FF9E52",
			500: "#FF8B30",
			600: "#FF7E18",
			700: "#F07513",
		  },
		  // neutral:{
		  //   500: "#8E8E8E",
		  //   600: "#4B4B4B"
		  // }
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
			50: "#F5F6FD",
			100: "#E1E5F9",
			200: "#A4B0EE",
			300: "#8695E8",
			400: "#8695E8",
			500: "#4B61DD",
			600: "#364FD9",
			700: "#1734D5",
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
		fontFamily: {
		  poppins: ["Poppins"],
		},
		boxShadow: {
		  normal: "0px 2px 4px 0px #0000000A, 0px 1px 1px 0px #00000005",
		  medium: "0px 4px 10px 0px #00000014, 0px 1px 4px 0px #0000000A",
		  high: "0px 8px 32px 0px #00000014, 0px 2px 20px 0px #0000000A",
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