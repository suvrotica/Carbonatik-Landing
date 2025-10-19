import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { enhancedImages } from '@sveltejs/enhanced-img'; // Hypothetical import for enhanced images

export default defineConfig({
  plugins: [
    enhancedImages(),    // 1. Enhanced Images (as per instructions)
    tailwindcss(),       // 2. Tailwind CSS
    sveltekit(),         // 3. SvelteKit
    // devtoolsJson()    // 4. Devtools JSON (if needed)
  ],
});