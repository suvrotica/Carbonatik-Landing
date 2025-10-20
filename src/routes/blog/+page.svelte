<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Carbonatik Blog</title>
	<meta name="description" content="News, updates, and insights from the Carbonatik team." />
</svelte:head>

<section class="carbonatik-section">
	<div class="blog-grid-container">
		<h1>Our Blog</h1>
		<div class="blog-grid">
			{#each data.posts as post (post.slug)}
				<a href={`/blog/${post.slug}`} class="blog-post-card">
					<h2 class="blog-post-title">{post.title}</h2>
					<p class="blog-post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
					<p class="blog-post-summary">{post.summary}</p>
					<span class="blog-post-readmore">Read More &rarr;</span>
				</a>
			{/each}
		</div>
	</div>
</section>