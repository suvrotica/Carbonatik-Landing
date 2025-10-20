<script>
	let { data } = $props();

	// Create a promise that dynamically imports the component
	const post_promise = import(`../../../lib/posts/${data.slug}.md`);
</script>

<svelte:head>
	<title>{data.metadata.title} | Carbonatik Blog</title>
	<meta name="description" content={data.metadata.summary} />
</svelte:head>

<article class="rich-text-content px-4 py-16 sm:py-24">
	<h1>{data.metadata.title}</h1>
	<p class="text-neutral-500 italic mb-8">
		Published on {new Date(data.metadata.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>

	{#await post_promise}
		<p>Loading post...</p>
	{:then module}
		{@const Component = module.default}
		<Component />
	{:catch error}
		<p class="text-red-500">Error loading post: {error.message}</p>
	{/await}
</article>