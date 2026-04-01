import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // für src/app/pages etc.
    './app/**/*.{js,ts,jsx,tsx}', // falls app direkt unter / liegt
    './components/**/*.{js,ts,jsx,tsx}', // falls du Komponenten außerhalb von app hast
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['var(--font-cookie)', 'cursive'],
      },
      colors: {
          'iris-moss': '#C9A96E',
          'iris-terracotta': '#7A0000',
          'iris-golden': '#C4A675',
          'iris-sand': '#FFBD59',
          'iris-charcoal': '#000000',
      },
    },
  },
  plugins: [],
}

export default config