<script lang="ts">
  let { src, alt, caption }: { src: string; alt: string; caption?: string } = $props();
</script>

<figure class="my-4">
  <img {src} {alt} class="w-full h-auto rounded-lg border border-neutral-800" loading="lazy" />
  {#if caption}
    <figcaption class="mt-2 text-center text-sm text-neutral-500 italic">{caption}</figcaption>
  {/if}
</figure>