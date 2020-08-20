module.exports = {
  purge: ["./src/**/*.svelte", '*.svelte'],
  theme: {
    extend: {
      colors: {
        tealime: '#6affbf'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '1024px',
        // => @media (min-width: 768px) { ... }

        'lg': '1280px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1600px',
        '2xl': '2260px'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '3.25rem',
        '5xl': '5rem',
        '6xl': '8rem',
        '7xl': '12rem',
      }
    }
  },
  variants: {},
  plugins: [],
};