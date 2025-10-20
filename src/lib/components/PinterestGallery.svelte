<script lang="ts">
	let { galleryId, caption }: { galleryId: string; caption?: string } = $props();

	let imageUrls = $state<string[]>([]);
	let error = $state<Error | null>(null);
	let loading = $state(true);

	$effect(() => {
		// This effect runs on the client after the component mounts
		loading = true;
		error = null;

		fetch(`/api/gallery/${galleryId}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Failed to fetch gallery images.');
				}
				return res.json();
			})
			.then((data) => {
				imageUrls = data;
			})
			.catch((err) => {
				error = err;
			})
			.finally(() => {
				loading = false;
			});
	});
</script>

<figure class="gallery-container">
	{#if loading}
		<p class="gallery-loading">Loading gallery...</p>
	{:else if error}
		<p class="gallery-error">Could not load gallery: {error.message}</p>
	{:else}
		<div class="gallery-images-wrapper">
			{#each imageUrls as src, i}
				<div class="gallery-item">
					<img {src} alt={`Gallery image ${i + 1} for ${galleryId}`} loading="lazy" />
				</div>
			{/each}
		</div>
	{/if}

	{#if caption}
		<figcaption class="gallery-caption">{caption}</figcaption>
	{/if}
</figure>