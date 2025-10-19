<script lang="ts">
	import Hero from '$lib/components/landing/Hero.svelte';
	import CoreProducts from '$lib/components/landing/CoreProducts.svelte';
	import GlobalOperations from '$lib/components/landing/GlobalOperations.svelte'; // New component
	import CallToAction from '$lib/components/landing/CallToAction.svelte';
</script>

<svelte:head>
	<title>Carbonatik: Powering Tomorrow with Ethically Sourced Minerals</title>
	<meta
		name="description"
		content="Carbonatik is a global leader in sustainable mining and supply of high-purity industrial minerals including graphite, copper cathodes, mica, and quartz."
	/>
</svelte:head>

<Hero />
<CoreProducts />
<GlobalOperations />
<CallToAction />