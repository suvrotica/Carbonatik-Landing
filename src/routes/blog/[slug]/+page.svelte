<script>
	let { data } = $props();
	// Update to use the nested 'post' object
	const post_promise = import(`../../../lib/posts/${data.post.slug}.md`);
</script>

<svelte:head>
	<title>{data.post.metadata.title} | Carbonatik Blog</title>
	<meta name="description" content={data.post.metadata.summary} />
</svelte:head>

<article class="rich-text-content px-4 py-16 sm:py-24">
	<h1>{data.post.metadata.title}</h1>
	<p class="text-neutral-500 italic mb-8">
		Published on {new Date(data.post.metadata.date + 'T12:00:00Z').toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
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