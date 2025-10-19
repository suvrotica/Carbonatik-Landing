<script lang="ts">
	import Hero from '$lib/components/landing/Hero.svelte';
	import CoreProducts from '$lib/components/landing/CoreProducts.svelte';
	import Mission from '$lib/components/landing/Mission.svelte';
	import CallToAction from '$lib/components/landing/CallToAction.svelte';
</script>

<svelte:head>
	<title>Carbonatik: Pioneering Sustainable Mining</title>
	<meta
		name="description"
		content="Carbonatik is redefining the mining industry with sustainable, ethical, and technologically advanced resource extraction of high-value minerals like graphite, mica, and quartz."
	/>
</svelte:head>

<Hero />
<CoreProducts />
<Mission />
<CallToAction />