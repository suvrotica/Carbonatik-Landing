<script lang="ts">
	let { galleryId, caption }: { galleryId: string; caption?: string } = $props();

	const imageListPromise = fetch(`/api/gallery/${galleryId}`).then((res) => {
		if (!res.ok) {
			throw new Error('Failed to fetch gallery images.');
		}
		return res.json();
	});
</script>

<figure class="gallery-container">
	{#await imageListPromise}
		<p class="gallery-loading">Loading gallery...</p>
	{:then imageUrls}
		{#each imageUrls as src, i}
			<div class="gallery-item">
				<img {src} alt={`Gallery image ${i + 1} for ${galleryId}`} loading="lazy" />
			</div>
		{/each}
	{:catch error}
		<p class="gallery-error">Could not load gallery: {error.message}</p>
	{/await}
	{#if caption}
		<figcaption class="gallery-caption">{caption}</figcaption>
	{/if}
</figure>