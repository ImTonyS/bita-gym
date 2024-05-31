import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    colors: {
      "bita-green": "#B8D432",
      "bita-dark": "#1B262C",
      "bita-gray": "#818284",
      "bita-black": "#3E3E3E"
    }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
} satisfies Config;
