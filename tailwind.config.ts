import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // für src/app/pages etc.
    './app/**/*.{js,ts,jsx,tsx}', // falls app direkt unter / liegt
    './components/**/*.{js,ts,jsx,tsx}', // falls du Komponenten außerhalb von app hast
  ],
  theme: {
    extend: {
      colors: {
          'iris-moss': '#C9A96E',
          'iris-terracotta': '#8E3821',
          'iris-golden': '#D69A3B',
          'iris-sand': '#EDD59E',
          'iris-charcoal': '#1A1A1A',
      },
    },
  },
  plugins: [],
}

export default config