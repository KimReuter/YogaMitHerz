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
          'iris-forest': '#2E4B41',
          'iris-moss': '#A7BBA5',
          'iris-terracotta': '#C2765C',
          'iris-clay': '#D68B5A',
          'iris-golden': '#F8F1DF',
          'iris-sand': '#D5C6B3',
          'iris-charcoal': '#4A4A4A',
        
      },
    },
  },
  plugins: [],
}

export default config