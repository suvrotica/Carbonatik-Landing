<script>
	import StaffProfile from '$lib/components/team/StaffProfile.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.member.name} | Carbonatik</title>
	<meta name="description" content={`Learn more about ${data.member.name}, ${data.member.title} at Carbonatik.`} />
</svelte:head>

<StaffProfile member={data.member} />