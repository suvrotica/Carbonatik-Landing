// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	// Add your Shiki and KaTeX configurations here if needed
	// Example for Shiki:
	// highlight: {
	//   highlighter: async (code, lang = 'text') => { ... }
	// }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'], // Add .md to SvelteKit's recognized extensions
	preprocess: [
		mdsvex(mdsvexOptions), // mdsvex runs first
		vitePreprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;