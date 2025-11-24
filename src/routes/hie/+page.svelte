<script lang="ts">
    import ConstellationMap from '$lib/components/D3/ConstellationMap.svelte';
    import APHIEContent from '$lib/components/APHIE/APHIEContent.svelte';
    import { aphieNodes, aphieLinks } from '$lib/data/aphie';
</script>

<div class="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-yellow-500/30">
    <!-- Header -->
    <header class="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" class="text-xl font-bold tracking-tight text-neutral-100 hover:text-yellow-500 transition-colors">
                AP-HIE
            </a>
            <span class="text-xs font-mono text-neutral-500 uppercase tracking-widest">Visualization</span>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-12">
        <!-- Visualization Column -->
        <div class="w-full h-[600px] rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900 shadow-2xl relative">
            <div class="absolute top-4 left-4 z-10 pointer-events-none">
                <h2 class="text-sm font-bold text-neutral-400 uppercase tracking-wider">Constellation Map</h2>
            </div>
            <ConstellationMap nodes={aphieNodes} links={aphieLinks} />
        </div>

        <!-- Content Column -->
        <div class="w-full max-w-4xl mx-auto">
            <APHIEContent />
        </div>
    </main>
</div>

