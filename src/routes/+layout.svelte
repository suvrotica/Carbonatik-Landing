<script lang="ts">
	import Header from '$lib/components/landing/Header.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-grow flex flex-col">
		{@render children()}
	</main>

	<Footer />
</div>