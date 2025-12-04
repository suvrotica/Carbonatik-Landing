<script lang="ts">
    import { spring } from 'svelte/motion';
    import { onMount } from 'svelte';

    let { value, suffix = "" } : { value: number, suffix?: string } = $props();
    
    // Using legacy spring store for now as it is robust for simple counters
    // or migrate to Svelte 5 Spring class if available in your version of svelte/motion
    const count = spring(0, {
        stiffness: 0.1,
        damping: 0.5
    });

    let isVisible = $state(false);
    let element = $state<HTMLElement>();

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                isVisible = true;
                count.set(value);
            }
        });
        
        if (element) observer.observe(element);
        return () => observer.disconnect();
    });
</script>

<span bind:this={element} class="infra-stat-value">
    {Math.floor($count).toLocaleString()}{suffix}
</span>