<script lang="ts">
	type Section = {
		title: string;
		items: string[];
	};

	let {
		name,
		title,
		imageUrl,
		sections
	}: {
		name: string;
		title: string;
		imageUrl: string;
		sections: Section[];
	} = $props();
</script>

<article class="person-profile">
	<header class="person-profile-header">
		<img src={imageUrl} alt={`Portrait of ${name}`} class="person-profile-image" />
		<div>
			<h1 class="person-profile-name">{name}</h1>
			<p class="person-profile-jobtitle">{title}</p>
		</div>
	</header>

	{#each sections as section}
		<section class="person-profile-section">
			<h2>{section.title}</h2>
			<ul class="person-profile-list">
				{#each section.items as item}
					<li>{@html item}</li>
				{/each}
			</ul>
		</section>
	{/each}
</article>