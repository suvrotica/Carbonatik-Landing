<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	// Safely access metadata from the page data, defaulting to an empty object to prevent errors.
	const metadata = $derived(page.data.metadata || {});
</script>

<svelte:head>
	<title>{metadata.title ?? 'About Carbonatik'}</title>
	<meta name="description" content={metadata.description ?? 'Learn more about Carbonatik.'} />
	{#if metadata.keywords}
		<meta name="keywords" content={metadata.keywords} />
	{/if}
</svelte:head>

<article class="prose prose-invert max-w-4xl mx-auto px-4 py-16 sm:py-24">
	{@render children()}
</article>

<style lang="postcss">
	/* Reference the main app.css to use @apply and get theme context */
	@reference '../../app.css';

	
</style>