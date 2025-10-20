<script>
	let { data } = $props();
	// data now contains { metadata, content } from +page.js
	const Component = data.content;
</script>

<svelte:head>
	<title>{data.metadata.title} | Carbonatik Blog</title>
	<meta name="description" content={data.metadata.summary} />
</svelte:head>

<article class="rich-text-content px-4 py-16 sm:py-24">
	<h1>{data.metadata.title}</h1>
	<p class="text-neutral-500 italic mb-8">
		Published on {new Date(data.metadata.date + 'T12:00:00Z').toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		})}
	</p>

	<Component />
</article>