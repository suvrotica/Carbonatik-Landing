// svelte.config.js
import adapter from '@sveltejs/adapter-vercel'; // Changed from @sveltejs/adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex(mdsvexOptions),
		vitePreprocess()
	],
	kit: {
		adapter: adapter() // This now correctly uses the Vercel adapter
	}
};

export default config;