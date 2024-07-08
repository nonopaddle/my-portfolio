import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#003049',
        'fire-engine-red': '#d62828',
        'orange': '#f77f00',
        'xantous': '#fcbf49',
        'vanilla': '#eae2b7',
        
        'selection': '#E63946',
        blue: {
          'primary': '#0d1b2a',
          'secondary': '#1b263b',
          'tertiary': '#415a77',
          'quaternary': '#778da9'
        }
      },
      backgroundImage: {
        "JR": "url('/img/bg-jean-rostand.jpg')",
        "IUT": "url('/img/bg-iut.jpg')"
      },
    },
  },
  plugins: [
    function ({ addUtilities } : { addUtilities: Function }) {
      const newUtilities = {
        '.no-scrollbar::-wenkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-owerflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
    function({ matchUtilities, theme }: {matchUtilities: Function, theme: any}) {
      matchUtilities(
        {
          'translate-z': (value: any) => ({
            transform: ` translateZ(${value})`,
          }), // this is actual CSS

          'perspective': (value: any) => ({
            perspective : `${value}`,
          }),
          'parallax': (value: any) => {
            const [z, s] = value.split('+');   
            return {transform: ` translateZ(${z}) scale(${s})`}
          }
        },
        { values: theme('translate'), supportsNegativeValues: true },
      )
    }
  ],
};
export default config;
