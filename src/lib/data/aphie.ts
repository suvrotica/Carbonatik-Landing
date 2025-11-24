import type { GraphNode, GraphLink } from '$lib/types/d3';

export const aphieNodes: GraphNode[] = [
    // Root
    { id: 'AP-HIE', group: 0, radius: 25 },

    // Level 1: Core Pillars
    { id: 'Vision & Objectives', group: 1, radius: 15 },
    { id: 'Architecture', group: 1, radius: 15 },
    { id: 'Integration', group: 1, radius: 15 },
    { id: 'Implementation', group: 1, radius: 15 },
    { id: 'Governance', group: 1, radius: 15 },
    { id: 'Data Sources', group: 1, radius: 15 },

    // Level 2: Vision
    { id: 'Patient Care', group: 2, radius: 8 },
    { id: 'Public Health', group: 2, radius: 8 },
    { id: 'Policymaking', group: 2, radius: 8 },

    // Level 2: Architecture
    { id: 'IOL', group: 2, radius: 10 },
    { id: 'Client Registry', group: 2, radius: 10 },
    { id: 'Facility Registry', group: 2, radius: 10 },
    { id: 'Shared Health Record', group: 2, radius: 12 }, // "Heart" of the system
    { id: 'HMIS', group: 2, radius: 10 },
    { id: 'Terminology', group: 2, radius: 8 },

    // Level 2: Integration
    { id: 'ABDM (National)', group: 2, radius: 10 },
    { id: 'State Systems', group: 2, radius: 8 },
    { id: 'FHIR R4', group: 2, radius: 8 },

    // Level 2: Implementation
    { id: 'Phase 1: Public', group: 2, radius: 8 },
    { id: 'Phase 2: Private', group: 2, radius: 8 },
    { id: 'Phase 3: Others', group: 2, radius: 8 },

    // Level 2: Governance
    { id: 'Governing Body', group: 2, radius: 8 },
    { id: 'Privacy & Security', group: 2, radius: 8 },

    // Level 2: Data Sources
    { id: 'Demographics', group: 2, radius: 8 },
    { id: 'Clinical Data', group: 2, radius: 8 },
    { id: 'Facility Data', group: 2, radius: 8 },
];

export const aphieLinks: GraphLink[] = [
    // Root Connections
    { source: 'Vision & Objectives', target: 'AP-HIE', value: 5 },
    { source: 'Architecture', target: 'AP-HIE', value: 5 },
    { source: 'Integration', target: 'AP-HIE', value: 5 },
    { source: 'Implementation', target: 'AP-HIE', value: 5 },
    { source: 'Governance', target: 'AP-HIE', value: 5 },
    { source: 'Data Sources', target: 'AP-HIE', value: 5 },

    // Vision Children
    { source: 'Patient Care', target: 'Vision & Objectives', value: 3 },
    { source: 'Public Health', target: 'Vision & Objectives', value: 3 },
    { source: 'Policymaking', target: 'Vision & Objectives', value: 3 },

    // Architecture Children
    { source: 'IOL', target: 'Architecture', value: 3 },
    { source: 'Client Registry', target: 'Architecture', value: 3 },
    { source: 'Facility Registry', target: 'Architecture', value: 3 },
    { source: 'Shared Health Record', target: 'Architecture', value: 4 },
    { source: 'HMIS', target: 'Architecture', value: 3 },
    { source: 'Terminology', target: 'Architecture', value: 3 },

    // Integration Children
    { source: 'ABDM (National)', target: 'Integration', value: 3 },
    { source: 'State Systems', target: 'Integration', value: 3 },
    { source: 'FHIR R4', target: 'Integration', value: 3 },

    // Implementation Children
    { source: 'Phase 1: Public', target: 'Implementation', value: 3 },
    { source: 'Phase 2: Private', target: 'Implementation', value: 3 },
    { source: 'Phase 3: Others', target: 'Implementation', value: 3 },

    // Governance Children
    { source: 'Governing Body', target: 'Governance', value: 3 },
    { source: 'Privacy & Security', target: 'Governance', value: 3 },

    // Data Sources Children
    { source: 'Demographics', target: 'Data Sources', value: 3 },
    { source: 'Clinical Data', target: 'Data Sources', value: 3 },
    { source: 'Facility Data', target: 'Data Sources', value: 3 },

    // Cross-links (Interconnections)
    { source: 'Client Registry', target: 'ABDM (National)', value: 2 },
    { source: 'Facility Registry', target: 'ABDM (National)', value: 2 },
    { source: 'Shared Health Record', target: 'Clinical Data', value: 2 },
    { source: 'HMIS', target: 'Public Health', value: 2 },
    { source: 'IOL', target: 'FHIR R4', value: 2 },
];
