<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Our Team | Carbonatik</title>
	<meta name="description" content="Meet the leadership team at Carbonatik, pioneering a brighter, greener future in sustainable mining." />
</svelte:head>

<section class="carbonatik-section">
	<div class="team-grid-container">
		<h1>Our Team</h1>
		<div class="team-grid">
			{#each data.team as member (member.slug)}
				<a href={`/team/${member.slug}`} class="team-member-card">
					<div class="team-member-photo-wrapper">
						<div class="team-member-photo" style="background-image: url({member.imageUrl});"></div>
					</div>
					<div>
						<p class="team-member-name">{member.name}</p>
						<p class="team-member-title">{member.title}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>