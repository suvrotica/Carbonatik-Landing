<script lang="ts">
    import EcosystemGraph from '$lib/components/D3/EcosystemGraph.svelte';
    import AnimatedCounter from '$lib/components/infrastructure/AnimatedCounter.svelte';
    import { infrastructureStats, aviationProjects, waterwayProjects } from '$lib/data/infrastructure';
</script>

<svelte:head>
    <title>Infrastructure | Carbonatik</title>
    <meta name="description" content="Carbonatik's strategic infrastructure investments in Aerospace and Inland Waterways, powering the future of Andhra Pradesh." />
</svelte:head>

<div class="min-h-screen bg-neutral-950">
    <section class="infra-hero">
        <span class="section-badge">Strategic Development</span>
        <h1 class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-6 tracking-tight">
            Building the <br/>
            <span class="text-white">Backbone of Tomorrow</span>
        </h1>
        <p class="max-w-2xl text-lg text-neutral-400 leading-relaxed">
            Carbonatik is mobilizing capital and technical expertise to transform Andhra Pradesh into a global hub for Aviation and Sustainable Waterway Logistics.
        </p>
    </section>

    <section class="infra-stat-container">
        <div class="infra-stat-item">
            <AnimatedCounter value={infrastructureStats.investment} suffix=" Cr" />
            <span class="infra-stat-label">Total Commitment (INR)</span>
        </div>
        <div class="infra-stat-item">
            <AnimatedCounter value={infrastructureStats.jobs} suffix="+" />
            <span class="infra-stat-label">Projected Jobs</span>
        </div>
        <div class="infra-stat-item">
            <AnimatedCounter value={infrastructureStats.aviationVerticals} />
            <span class="infra-stat-label">Aviation Verticals</span>
        </div>
        <div class="infra-stat-item">
            <AnimatedCounter value={infrastructureStats.waterwayLength} suffix=" km" />
            <span class="infra-stat-label">Navigable Waterways</span>
        </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div class="lg:col-span-1">
                <span class="section-badge border-sky-900 text-sky-400 bg-sky-900/20">Aerospace</span>
                <h2 class="text-4xl font-bold text-white mb-6">Kurnool Aviation Hub</h2>
                <p class="text-neutral-400 mb-6 leading-relaxed">
                    A first-of-its-kind integrated ecosystem in India. We aren't just building an airport; we are building a self-sustaining engine for skill development, manufacturing, and global logistics.
                </p>
                <ul class="space-y-4">
                    {#each aviationProjects[0].features as feature}
                        <li class="flex items-start gap-3 text-sm text-neutral-300">
                            <div class="mt-1 w-1.5 h-1.5 rounded-full bg-carbon-gold shrink-0"></div>
                            {feature}
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="lg:col-span-2 h-full min-h-[400px]">
                <EcosystemGraph />
            </div>
        </div>
    </section>

    <section class="bg-neutral-900/30 py-24 border-y border-neutral-800">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <span class="section-badge border-teal-900 text-teal-400 bg-teal-900/20">Logistics & Tourism</span>
                <h2 class="text-4xl font-bold text-white">Inland Waterways (IWT)</h2>
                <p class="text-neutral-400 mt-4">Unlocking the economic potential of the Krishna and Godavari rivers.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {#each waterwayProjects as project}
                    <div class="infra-card group">
                        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p class="text-carbon-gold font-mono text-sm mb-4">{project.location}</p>
                        <p class="text-neutral-400 mb-6">{project.description}</p>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-800 pt-4">
                            {#each project.features as feature}
                                <div class="text-xs text-neutral-500 flex items-center gap-2">
                                    <div class="w-1 h-1 bg-neutral-600 rounded-full"></div>
                                    {feature}
                                </div>
                            {/each}
                        </div>
                        
                        <div class="mt-6 pt-4 border-t border-neutral-800 flex justify-between items-center">
                            <span class="text-sm text-neutral-500">Estimated Investment</span>
                            <span class="text-xl font-bold text-white">{project.investment}</span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section class="py-24 text-center px-6">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-white mb-6">Prepared for Execution</h2>
            <p class="text-neutral-400 leading-relaxed mb-8">
                Our consortium is fully aligned with the "Viksit Bharat @2047" vision. 
                With MoUs signed, feasibility studies planned, and global partners like 
                <strong>Avtrac</strong>, <strong>TAAL</strong>, and <strong>Bouygues Construction</strong> onboard, 
                Carbonatik is ready to mobilize immediately upon land acquisition and regulatory clearances.
            </p>
            <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-black bg-carbon-gold rounded-lg hover:bg-white transition-colors">
                Partner With Us
            </a>
        </div>
    </section>
</div>