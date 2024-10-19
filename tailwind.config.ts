import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
    },
  },
  plugins: [plugin(function({addBase,theme}){
    addBase({
      h1:{fontSize:theme('fontSize.4xl')},
      h2:{fontSize:theme('fontSize.3xl')},
      h3:{fontSize:theme('fontSize.2xl')},
      h4:{fontSize:theme('fontSize.xl')},
    })
  })],
};
export default config;
