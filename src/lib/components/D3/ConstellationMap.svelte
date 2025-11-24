<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as d3 from 'd3';
	import type { GraphNode, GraphLink } from '$lib/types/d3';

	let { nodes, links } = $props();

	// State
	let width = $state(0);
	let height = $state(600); // Default height
	let svgElement = $state<SVGSVGElement>();
	
	// We create a local copy of data because D3 mutates it
	let simulationNodes = $state($state.snapshot(nodes));
	let simulationLinks = $state($state.snapshot(links));

	// Transform state for zoom/pan
	let transform = $state({ k: 1, x: 0, y: 0 });

	let simulation: d3.Simulation<GraphNode, undefined>;

	const goldColor = '#D4AF47';
	const linkColor = '#525252'; // neutral-600

	function initSimulation() {
		if (!width || !height) return;

		simulation = d3
			.forceSimulation(simulationNodes as any)
			.force('link', d3.forceLink(simulationLinks as any).id((d: any) => d.id).distance(100))
			.force('charge', d3.forceManyBody().strength(-400))
			.force('center', d3.forceCenter(width / 2, height / 2))
			.force('collide', d3.forceCollide().radius((d: any) => d.radius + 10).iterations(2));

		simulation.on('tick', () => {
			// Trigger reactivity by reassigning the arrays. 
            // In Svelte 5 proxies, this is efficient.
			simulationNodes = [...simulationNodes];
			simulationLinks = [...simulationLinks];
		});
	}

	$effect(() => {
		if (width > 0 && height > 0 && !simulation) {
			initSimulation();
		}
	});

	// Update center force on resize
	$effect(() => {
		if (simulation && width > 0 && height > 0) {
			simulation.force('center', d3.forceCenter(width / 2, height / 2));
			simulation.alpha(0.3).restart();
		}
	});

    // Drag logic
	function drag(event: PointerEvent, node: GraphNode) {
        if (!simulation) return;
        
        event.preventDefault(); // Prevent scrolling on touch
        const startX = event.clientX;
        const startY = event.clientY;
        
		simulation.alphaTarget(0.3).restart();
        node.fx = node.x;
        node.fy = node.y;

        function onPointerMove(e: PointerEvent) {
            if(!node.fx || !node.fy) return; // TS check
            // Calculate delta accounting for zoom transform
            const dx = (e.clientX - startX) / transform.k;
            const dy = (e.clientY - startY) / transform.k;
            
            // Since we re-render on tick, we update the fixed positions directly
            // We actually need to update the underlying object reference D3 is holding
            // But since simulationNodes is the source of truth for D3...
            node.fx = (node.x || 0) + dx; // Simplified drag logic for Svelte-driven SVG
            node.fy = (node.y || 0) + dy;
        }

		function onPointerUp() {
			if (!simulation) return;
			simulation.alphaTarget(0);
			node.fx = null;
			node.fy = null;
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
		}
        
        // Note: A robust drag in Svelte-D3 hybrid usually uses d3-drag on a bind:this element.
        // However, using simple pointer events here keeps dependencies low.
        // For this implementation, let's stick to standard D3 drag attachment via an action 
        // to ensure smooth performance on the Zenbook.
	}
    
    // D3 Drag Action for elements
    function draggable(node: SVGGElement, dataNode: GraphNode) {
        const dragBehavior = d3.drag<SVGGElement, any>()
            .on("start", (event) => {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                dataNode.fx = dataNode.x;
                dataNode.fy = dataNode.y;
            })
            .on("drag", (event) => {
                dataNode.fx = event.x;
                dataNode.fy = event.y;
            })
            .on("end", (event) => {
                if (!event.active) simulation.alphaTarget(0);
                dataNode.fx = null;
                dataNode.fy = null;
            });
            
        d3.select(node).call(dragBehavior);
        return {
            destroy() {
                d3.select(node).on(".drag", null);
            }
        }
    }

    // D3 Zoom Action
    let zoom: d3.ZoomBehavior<SVGSVGElement, unknown>;

    function zoomable(node: SVGSVGElement) {
        zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.1, 4])
            .on('zoom', (event) => {
                transform = event.transform;
            });
        
        d3.select(node).call(zoom);
    }

    // Initial Zoom
    let initialZoomSet = false;
    $effect(() => {
        if (!initialZoomSet && width > 0 && height > 0 && svgElement && zoom) {
            const initialScale = 0.6;
            // Calculate transform to center the view with the initial scale
            // Since the force center is at (width/2, height/2), we want that point to stay at (width/2, height/2)
            // d3.zoomIdentity.translate(tx, ty).scale(k)
            // tx = cx - k * cx
            // ty = cy - k * cy
            const tx = (width / 2) * (1 - initialScale);
            const ty = (height / 2) * (1 - initialScale);
            
            d3.select(svgElement).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(initialScale));
            initialZoomSet = true;
        }
    });

	onDestroy(() => {
		if (simulation) simulation.stop();
	});
</script>

<div class="interactive-component-wrapper w-full h-[600px] relative overflow-hidden" bind:clientWidth={width} bind:clientHeight={height}>
	<svg 
        bind:this={svgElement} 
        width={width} 
        height={height} 
        use:zoomable
        class="w-full h-full bg-neutral-900 cursor-move"
    >
		<g transform="translate({transform.x}, {transform.y}) scale({transform.k})">
			<g stroke={linkColor} stroke-opacity="0.6">
				{#each simulationLinks as link}
                    <line
						x1={typeof link.source === 'object' ? link.source.x : 0}
						y1={typeof link.source === 'object' ? link.source.y : 0}
						x2={typeof link.target === 'object' ? link.target.x : 0}
						y2={typeof link.target === 'object' ? link.target.y : 0}
						stroke-width={Math.sqrt(link.value)}
					/>
				{/each}
			</g>

			<g>
				{#each simulationNodes as node (node.id)}
					<g 
                        transform="translate({node.x},{node.y})" 
                        use:draggable={node}
                        class="cursor-pointer hover:opacity-80 transition-opacity"
                        role="group"
                        aria-label={node.id}
                    >
                        <circle r={node.radius + 5} fill={goldColor} opacity="0.2" class="animate-pulse" />
                        
						<circle 
                            r={node.radius} 
                            fill={node.group === 0 ? goldColor : '#1f2937'} 
                            stroke={goldColor}
                            stroke-width={node.group === 0 ? 0 : 1.5}
                        />
                        
						<text
							dy={node.radius + 15}
							text-anchor="middle"
							class="text-[10px] md:text-xs fill-neutral-300 pointer-events-none select-none font-sans font-bold tracking-wide"
                            style="text-shadow: 0px 1px 2px black;"
						>
							{node.id}
						</text>
					</g>
				{/each}
			</g>
		</g>
	</svg>
    
    <div class="absolute bottom-4 right-4 bg-neutral-900/80 p-2 rounded text-xs text-neutral-400 pointer-events-none border border-neutral-800">
        Drag nodes to rearrange • Scroll to zoom
    </div>
</div>
