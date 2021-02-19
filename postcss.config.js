const tailwindcss = require('tailwindcss');

// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./src/**/*.svelte', './src/**/*.html'],
//   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// });

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    tailwindcss('./tailwind.config.js'),
    // purgecss
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ],
};
