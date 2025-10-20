<script>
	let { member } = $props();
</script>


<article class="rich-text-content py-12 sm:py-16">
	<header class="staff-profile-header">
		<img src={member.imageUrl} alt={`Portrait of ${member.name}`} class="staff-profile-image" />
		<div>
			<h1 class="staff-profile-name">{member.name}</h1>
			<p class="staff-profile-title">{member.title}</p>
		</div>
	</header>

	{#if member.introduction}
	<section class="staff-profile-section">
		<h2>Introduction</h2>
		{#each member.introduction as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>
	{/if}

	{#if member.expertise?.length}
	<section class="staff-profile-section">
		<h2>Expertise and Impact</h2>
		<div class="staff-expertise-grid">
			{#each member.expertise as item}
				<div class="expertise-item">
					<h3>{item.skill}</h3>
					<p>{item.description}</p>
				</div>
			{/each}
		</div>
	</section>
	{/if}
	
	{#if member.strengths?.length}
	<section class="staff-profile-section">
		<h2>Core Strengths</h2>
		<div class="staff-strengths-grid">
			{#each member.strengths as item}
				<div class="strength-item">
					<p>{item.text}</p>
				</div>
			{/each}
		</div>
	</section>
	{/if}
</article>