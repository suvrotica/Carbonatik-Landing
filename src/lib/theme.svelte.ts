// src/lib/theme.svelte.ts
import { browser } from '$app/environment';

let currentTheme = $state(getInitialTheme());

function getInitialTheme() {
	if (!browser) return 'dark';
	return localStorage.getItem('theme') || 'dark';
}

$effect(() => {
	if (browser) {
		document.documentElement.setAttribute('data-theme', currentTheme);
		localStorage.setItem('theme', currentTheme);
	}
});

export function toggleTheme() {
	currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
}

export const theme = $derived(currentTheme);