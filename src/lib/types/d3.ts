export type GraphNode = {
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

export type GraphLink = {
    source: string | GraphNode; // D3 mutates this to object
    target: string | GraphNode;
    value: number;
};
