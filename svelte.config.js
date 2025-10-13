// svelte.config.js
import adapter from '@sveltejs/adapter-vercel'; // Changed from @sveltejs/adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter() // Now using the Vercel adapter
	}
};

export default config;