const sveltePreprocess = require('svelte-preprocess');
const tailwindcss = require('tailwindcss');

module.exports = {
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [require('autoprefixer'), tailwindcss('./tailwind.config.js')],
      },
    }),
  ],
};
