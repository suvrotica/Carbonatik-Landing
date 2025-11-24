export type MapNode = {
    id: string;
    group: number; // 0 for root, 1 for main branches, 2 for leaves
    radius: number;
    fx?: number | null; // Fixed x position (for dragging)
    fy?: number | null; // Fixed y position
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    index?: number;
};

export type MapLink = {
    source: string | MapNode; // D3 mutates this to object
    target: string | MapNode;
    value: number;
};

export const mindMapNodes: MapNode[] = [
    // Root
    { id: 'SuvroGhosh.Blog', group: 0, radius: 20 },

    // Main Branches (Level 1)
    { id: 'Tech Stack', group: 1, radius: 12 },
    { id: 'Personal', group: 1, radius: 12 },
    { id: 'Notebooks', group: 1, radius: 12 },
    { id: 'Engineering', group: 1, radius: 12 },

    // Tech Stack Children (Level 2)
    { id: 'SvelteKit', group: 2, radius: 6 },
    { id: 'Svelte 5 Runes', group: 2, radius: 6 },
    { id: 'Tailwind 4', group: 2, radius: 6 },
    { id: 'D3.js', group: 2, radius: 6 },
    { id: 'Three.js', group: 2, radius: 6 },
    { id: 'Vercel', group: 2, radius: 6 },

    // Personal Children
    { id: 'Reflections', group: 2, radius: 6 },
    { id: 'Memories', group: 2, radius: 6 },
    { id: 'Satire', group: 2, radius: 6 },

    // Engineering Children
    { id: 'Full Stack', group: 2, radius: 6 },
    { id: 'System Design', group: 2, radius: 6 },
    { id: 'Architecture', group: 2, radius: 6 }
];

export const mindMapLinks: MapLink[] = [
    { source: 'Tech Stack', target: 'SuvroGhosh.Blog', value: 5 },
    { source: 'Personal', target: 'SuvroGhosh.Blog', value: 5 },
    { source: 'Notebooks', target: 'SuvroGhosh.Blog', value: 5 },
    { source: 'Engineering', target: 'SuvroGhosh.Blog', value: 5 },

    { source: 'SvelteKit', target: 'Tech Stack', value: 2 },
    { source: 'Svelte 5 Runes', target: 'SvelteKit', value: 2 },
    { source: 'Tailwind 4', target: 'Tech Stack', value: 2 },
    { source: 'D3.js', target: 'Tech Stack', value: 2 },
    { source: 'Three.js', target: 'Tech Stack', value: 2 },
    { source: 'Vercel', target: 'Tech Stack', value: 2 },

    { source: 'Reflections', target: 'Personal', value: 2 },
    { source: 'Memories', target: 'Personal', value: 2 },
    { source: 'Satire', target: 'Personal', value: 2 },

    { source: 'Full Stack', target: 'Engineering', value: 2 },
    { source: 'System Design', target: 'Engineering', value: 2 },
    { source: 'Architecture', target: 'Engineering', value: 2 },
];
