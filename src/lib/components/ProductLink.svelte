<script lang="ts">
	let { name }: { name: string } = $props();

	// Create a URL-friendly slug from the product name
	const slug = $derived(name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-'));
	const href = $derived(`/products/${slug}`);
</script>

<a {href} class="font-semibold text-sky-400 hover:text-sky-300 hover:underline decoration-sky-400/50">
	{name}
</a>