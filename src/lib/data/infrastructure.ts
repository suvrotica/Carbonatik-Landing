// src/lib/data/infrastructure.ts

export const infrastructureStats = {
    investment: 31500, // Crore (derived from MoU post context + PDF sums)
    jobs: 30000, // Direct & Indirect
    waterwayLength: 1555, // Km (Andhra Pradesh potential)
    aviationVerticals: 5 // MRO, Training, Mfg, Ops, Cargo
};

export const aviationProjects = [
    {
        title: "Integrated Aviation Ecosystem",
        location: "Kurnool Airport",
        investment: "₹6,000+ Cr",
        description: "A self-sustaining ecosystem combining MRO, Pilot Training, and eVTOL Manufacturing.",
        features: [
            "MRO Facility via Bharat Aviation (DGCA Approved)",
            "Aristotle Aviation Academy (12-16 Simulators)",
            "Innovation Hub for BluJ Aerospace (eVTOL)",
            "Cargo Operations with KF Aerospace"
        ]
    },
];

export const waterwayProjects = [
    {
        title: "National Waterway 4 Development",
        location: "Muktyala - Machilipatnam",
        investment: "₹2,282 Cr (Est)",
        description: "Strategic cargo transport corridor connecting cement clusters to the sea port.",
        features: [
            "Cargo capacity: ~5 MTPA",
            "18 Inland Vessels planned (Phase 1)",
            "Integrated Navigation Locks",
            "Cost efficiency: 50% Opex vs Road"
        ]
    },
    {
        title: "Tourism & Urban Water Metro",
        location: "Vijayawada & Godavari Circuit",
        investment: "₹300+ Cr",
        description: "Unlocking the tourism potential of the Krishna and Godavari river systems.",
        features: [
            "Amaravati-Vijayawada Water Metro",
            "Papikondalu Tourism Circuit",
            "Ro-Pax Services for rural connectivity",
            "Luxury floating jetties"
        ]
    }
];