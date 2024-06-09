import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": "#0c8f63",
      },
    },
  },
  plugins: [
    require("tailwind-typewriter")({ /*https://github.com/mattpfeffer/tailwind-typewriter*/
      wordsets: {
        presentation: {
          words: ["<Web Developer />", "<Front-end Developer />"],
          delay: 0.3,
          writeSpeed: 0.1,
          eraseSpeed: 0.2,
          pauseBetween: 0.6,
        },
      },
    }),
  ],
};
export default config;
