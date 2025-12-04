<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as d3 from 'd3';

    // Define Node Type
    type Node = d3.SimulationNodeDatum & { id: string; group: number; r: number };
    type Link = d3.SimulationLinkDatum<Node>;

    let width = $state(0);
    let height = $state(400);
    let svgElement = $state<SVGSVGElement>();
    let simulation = $state<d3.Simulation<Node, Link>>();

    const nodes: Node[] = [
        { id: "Carbonatik Aerospace", group: 0, r: 30 },
        { id: "Kurnool Hub", group: 1, r: 20 },
        { id: "MRO (Bharat)", group: 2, r: 15 },
        { id: "Academy (AAA)", group: 2, r: 15 },
        { id: "Innovation (BluJ)", group: 2, r: 15 },
        { id: "Cargo (KF)", group: 2, r: 15 },
        { id: "Skilled Workforce", group: 3, r: 10 },
        { id: "Global Certs", group: 3, r: 10 }
    ];

    const links: Link[] = [
        { source: "Carbonatik Aerospace", target: "Kurnool Hub" },
        { source: "Kurnool Hub", target: "MRO (Bharat)" },
        { source: "Kurnool Hub", target: "Academy (AAA)" },
        { source: "Kurnool Hub", target: "Innovation (BluJ)" },
        { source: "Kurnool Hub", target: "Cargo (KF)" },
        // Synergy Links (The "Feed" effect described in PDF)
        { source: "Academy (AAA)", target: "Skilled Workforce" },
        { source: "Skilled Workforce", target: "MRO (Bharat)" },
        { source: "MRO (Bharat)", target: "Global Certs" },
    ];

    $effect(() => {
        if (width > 0 && height > 0 && svgElement && !simulation) {
            simulation = d3.forceSimulation(nodes)
                .force("link", d3.forceLink(links).id((d: any) => d.id).distance(80))
                .force("charge", d3.forceManyBody().strength(-300))
                .force("center", d3.forceCenter(width / 2, height / 2))
                .force("collide", d3.forceCollide().radius((d: any) => d.r + 5));

            const svg = d3.select(svgElement);
            
            // Add arrow marker
            svg.append("defs").append("marker")
                .attr("id", "arrow")
                .attr("viewBox", "0 -5 10 10")
                .attr("refX", 25)
                .attr("refY", 0)
                .attr("markerWidth", 6)
                .attr("markerHeight", 6)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M0,-5L10,0L0,5")
                .attr("fill", "#525252");

            const link = svg.append("g")
                .selectAll("line")
                .data(links)
                .join("line")
                .attr("stroke", "#525252")
                .attr("stroke-opacity", 0.6)
                .attr("stroke-width", 1.5)
                .attr("marker-end", "url(#arrow)");

            const node = svg.append("g")
                .selectAll("g")
                .data(nodes)
                .join("g")
                .call(d3.drag<SVGGElement, Node>()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended) as any);

            node.append("circle")
                .attr("r", d => d.r)
                .attr("fill", d => d.group === 0 ? "#ffc700" : "#171717")
                .attr("stroke", d => d.group === 0 ? "none" : "#ffc700")
                .attr("stroke-width", 1.5);

            node.append("text")
                .text(d => d.id)
                .attr("x", 0)
                .attr("y", d => d.r + 15)
                .attr("text-anchor", "middle")
                .attr("class", "text-[10px] fill-neutral-400 font-sans font-bold pointer-events-none");

            simulation.on("tick", () => {
                link
                    .attr("x1", d => (d.source as Node).x!)
                    .attr("y1", d => (d.source as Node).y!)
                    .attr("x2", d => (d.target as Node).x!)
                    .attr("y2", d => (d.target as Node).y!);

                node.attr("transform", d => `translate(${d.x},${d.y})`);
            });
        }
    });

    function dragstarted(event: any) {
        if (!event.active) simulation?.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event: any) {
        if (!event.active) simulation?.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    onDestroy(() => simulation?.stop());
</script>

<div class="w-full h-[400px] bg-neutral-900/50 rounded-xl border border-neutral-800 relative overflow-hidden" bind:clientWidth={width} bind:clientHeight={height}>
    <div class="absolute top-4 left-4 text-xs font-mono text-neutral-500 uppercase">Ecosystem Synergy Map</div>
    <svg bind:this={svgElement} class="w-full h-full"></svg>
</div>