import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import {
	terser
} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve'

const production = !process.env.ROLLUP_WATCH;

// https://www.youtube.com/watch?v=50ixk9rlujw
export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'es',
		name: 'app',
		dir: 'public/build'
	},
	plugins: [
		typescript({
			sourceMap: !production
		}),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/build/bundle.css');
			},
			preprocess: sveltePreprocess(),
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs

		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),


		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve({
			// Launch in browser (default: false)
			open: true,

			// Show server address in console (default: true)
			verbose: true,

			// Multiple folders to serve from
			contentBase: 'public',

			// Options used in setting up server
			host: 'localhost',
			port: 3000,

		}),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload({
			watch: 'public/build'
		}),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};