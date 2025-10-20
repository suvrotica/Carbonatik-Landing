<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
	const metadata = $derived(page.data.metadata || {});
</script>

<svelte:head>
	<title>{metadata.title ?? 'About Carbonatik'}</title>
	<meta name="description" content={metadata.description ??
'Learn more about Carbonatik.'} />
	{#if metadata.keywords}
		<meta name="keywords" content={metadata.keywords} />
	{/if}
</svelte:head>

<article class="rich-text-content px-4 py-16 sm:py-24">
	{@render children()}
</article>

<style lang="postcss">
	@reference '../../app.css';
</style>