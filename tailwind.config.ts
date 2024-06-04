import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx",
    "./components/**",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    colors: {
      "bita-green": "#a8d037",
      "bita-dark": "#2C3333",
      "bita-gray": "#818284",
      "bita-black": "#3E3E3E"
    }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
} satisfies Config;
