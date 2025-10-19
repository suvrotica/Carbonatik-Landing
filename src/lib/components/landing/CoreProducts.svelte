<script lang="ts">
    import ProductLink from '$lib/components/ProductLink.svelte';
</script>

<section class="carbonatik-section prose prose-invert max-w-4xl mx-auto">
    <h2>Our Core Products</h2>
    <br>
    <p>
        Our portfolio is centered around high-quality minerals sourced from rich deposits in Sri Lanka, vital for modern technology and industry.
    </p>
    <br>
    <ul class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
        <li class="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 class="font-bold text-lg text-amber-300">Graphite</h3>
            <p class="text-sm text-neutral-400">
                World’s purest <ProductLink name="Vein Graphite" /> & <ProductLink name="Flake Graphite" />, exceeding 99% carbon content. We have <strong>1,000 tons</strong> ready for immediate sale. 
            </p>
        </li>
        <li class="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 class="font-bold text-lg text-amber-300">Mica & Quartz</h3>
            <p class="text-sm text-neutral-400">
                Premium <ProductLink name="Gold Mica" /> for insulation and ultra-high purity <ProductLink name="Quartz" /> for semiconductors. 
            </p>
        </li>
         <li class="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 class="font-bold text-lg text-amber-300">Granite & Gems</h3>
            <p class="text-sm text-neutral-400">
                Unique, high-quality <ProductLink name="Ruby Granite" /> for luxury construction and ethically sourced precious gemstones. 
            </p>
        </li>
    </ul>
</section>