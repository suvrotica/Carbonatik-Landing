<script lang="ts">
	let {
		src,
		caption,
		trackSrc
	}: {
		src: string;
		caption?: string;
		trackSrc?: string;
	} = $props();
</script>

<figure class="video-player-container">
	<video controls {src} class="video-player" muted={!trackSrc}>
		{#if trackSrc}
			<track kind="captions" srclang="en" src={trackSrc} />
		{/if}
		Your browser does not support the video tag.
	</video>
	{#if caption}
		<figcaption class="video-caption">{caption}</figcaption>
	{/if}
</figure>