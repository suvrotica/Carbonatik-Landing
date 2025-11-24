<script lang="ts">
    // Static content component
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Tiempos+Headline:wght@400;600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
</svelte:head>

<div class="aphie-container font-sans text-neutral-400 bg-neutral-950">
    <main class="w-full">
        <header class="bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden border-b border-neutral-800">
            <div class="absolute inset-0 opacity-10 pointer-events-none">
                <div class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
                <div class="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"></div>
            </div>

            <div class="relative z-10 container mx-auto px-4 py-16">
                <div class="hero-grid max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-8">
                        <div class="space-y-6">
                            <a href="/ap-hie-strategic-framework.pdf" download class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-700 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group border border-white/10">
                                <i class="fas fa-download group-hover:animate-bounce"></i>
                                Download Strategic Framework Document
                            </a>
                            <h1 class="serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight">
                                AP
                                <span class="italic text-teal-400 mt-2">HIE</span>
                            </h1>
                            <p class="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-2xl">
                                A comprehensive Health Information Exchange (HIE) a framework for establishing a secure, interoperable, and on-premise digital health ecosystem connecting Electronic Health Records across Andhra Pradesh.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div class="bg-neutral-900/80 backdrop-blur-sm p-5 rounded-xl border border-neutral-800 hover:border-teal-500/30 transition-colors">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-network-wired text-teal-400 text-lg mr-3"></i>
                                    <h3 class="font-semibold text-neutral-200">OpenHIE Architecture</h3>
                                </div>
                                <p class="text-neutral-500 text-sm">Globally recognized framework for scalable health information systems</p>
                            </div>

                            <div class="bg-neutral-900/80 backdrop-blur-sm p-5 rounded-xl border border-neutral-800 hover:border-orange-500/30 transition-colors">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-shield-alt text-orange-400 text-lg mr-3"></i>
                                    <h3 class="font-semibold text-neutral-200">On-Premise Deployment</h3>
                                </div>
                                <p class="text-neutral-500 text-sm">State-controlled infrastructure ensuring data sovereignty</p>
                            </div>

                            <div class="bg-neutral-900/80 backdrop-blur-sm p-5 rounded-xl border border-neutral-800 hover:border-blue-500/30 transition-colors">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-users text-blue-400 text-lg mr-3"></i>
                                    <h3 class="font-semibold text-neutral-200">Patient-Centric Care</h3>
                                </div>
                                <p class="text-neutral-500 text-sm">Unified health records improving care coordination</p>
                            </div>

                            <div class="bg-neutral-900/80 backdrop-blur-sm p-5 rounded-xl border border-neutral-800 hover:border-green-500/30 transition-colors">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-chart-line text-green-400 text-lg mr-3"></i>
                                    <h3 class="font-semibold text-neutral-200">Evidence-Based Policy</h3>
                                </div>
                                <p class="text-neutral-500 text-sm">Data-driven insights for public health decision-making</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative hidden lg:block">
                        <div class="bg-neutral-900 rounded-2xl p-6 shadow-2xl border border-neutral-800">
                            <img alt="Healthcare network connections" class="w-full h-64 object-cover rounded-lg mb-6 opacity-80 hover:opacity-100 transition-opacity" src="https://kimi-web-img.moonshot.cn/img/www.openaccessgovernment.org/88dba09bd05781b2cb583ec549104da429c1e180.jpg" />
                            <div class="space-y-4">
                                <div class="flex items-center justify-between text-sm border-b border-neutral-800 pb-2">
                                    <span class="text-neutral-500">Implementation Scope</span>
                                    <span class="font-semibold text-teal-400">State-wide</span>
                                </div>
                                <div class="flex items-center justify-between text-sm border-b border-neutral-800 pb-2">
                                    <span class="text-neutral-500">Integration Model</span>
                                    <span class="font-semibold text-orange-400">Phased Rollout</span>
                                </div>
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-neutral-500">Data Sovereignty</span>
                                    <span class="font-semibold text-blue-400">On-Premise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="section-anchor py-20 bg-neutral-900" id="executive-summary">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="serif text-3xl md:text-4xl font-bold text-neutral-100 mb-6">Executive Summary</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div class="lg:col-span-2">
                        <h3 class="serif text-2xl font-semibold mb-6 text-neutral-200">Strategic Vision</h3>
                        <div class="prose prose-invert prose-lg text-neutral-400 leading-relaxed space-y-6">
                            <p>This document serves as a formal request for data and collaboration from the Government of Andhra Pradesh to establish a state-level Health Information Exchange (HIE). The proposed Andhra Pradesh Health Information Exchange (AP-HIE) is envisioned as a secure, interoperable, and scalable digital health platform modeled on the globally recognized <a class="citation" href="https://www.itu.int/dms_pub/itu-d/opb/str/D-STR-E_HEALTH.10-2020-PDF-E.pdf" target="_blank">OpenHIE framework</a>.</p>

                            <p>The AP-HIE aims to create a unified digital health ecosystem by connecting Electronic Health Records (EHRs) across the state, leveraging an <a class="citation" href="https://www.niti.gov.in/sites/default/files/2023-02/ndhm_strategy_overview.pdf" target="_blank">on-premise deployment model</a> to ensure data sovereignty, security, and compliance with national regulations.</p>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-6 rounded-xl border border-teal-900/50">
                            <h4 class="font-semibold text-neutral-200 mb-3">Three Core Objectives</h4>
                            <ul class="space-y-3 text-sm text-neutral-400">
                                <li class="flex items-start">
                                    <i class="fas fa-user-md text-teal-400 mt-1 mr-3"></i>
                                    <span>Improving patient care coordination</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chart-bar text-orange-400 mt-1 mr-3"></i>
                                    <span>Supporting public health surveillance</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-lightbulb text-blue-400 mt-1 mr-3"></i>
                                    <span>Enabling evidence-based policymaking</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-6 rounded-xl border border-orange-900/50">
                            <h4 class="font-semibold text-neutral-200 mb-3">Implementation Approach</h4>
                            <p class="text-sm text-neutral-400">Phased rollout prioritizing public hospitals, followed by private clinics and diagnostic labs, ensuring systematic integration with existing national and state-level health IT systems.</p>
                        </div>
                    </div>
                </div>

                <div class="highlight-box">
                    <h4 class="serif text-xl font-semibold mb-4 text-neutral-200">Request for Government Support</h4>
                    <p class="text-neutral-400 mb-4">The successful implementation of the AP-HIE requires active collaboration from the Government of Andhra Pradesh, including:</p>
                    <ul class="grid md:grid-cols-2 gap-3 text-neutral-400 text-sm">
                        <li class="flex items-start">
                            <i class="fas fa-database text-teal-400 mt-1 mr-3"></i>
                            <span>Access to demographic, facility, and health program data</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-link text-orange-400 mt-1 mr-3"></i>
                            <span>Integration with ABDM and state HMIS systems</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-users-cog text-blue-400 mt-1 mr-3"></i>
                            <span>Establishment of formal governance structure</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-handshake text-green-400 mt-1 mr-3"></i>
                            <span>Development of data sharing agreements</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section-anchor py-20 bg-neutral-950" id="hie-overview">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="serif text-3xl md:text-4xl font-bold text-neutral-100 mb-6">HIE System Architecture</h2>
                    <p class="text-xl text-neutral-500 max-w-3xl mx-auto">Built on the globally recognized OpenHIE framework for scalable and interoperable health information systems</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <div class="component-card">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-teal-900/30 rounded-lg flex items-center justify-center mr-4 border border-teal-900/50">
                                <i class="fas fa-exchange-alt text-teal-400 text-xl"></i>
                            </div>
                            <h3 class="serif text-lg font-semibold text-neutral-200">Interoperability Layer</h3>
                        </div>
                        <p class="text-neutral-400 text-sm mb-3">Central nervous system managing all data exchanges between HIE components</p>
                        <ul class="text-xs text-neutral-500 space-y-1">
                            <li>• Message routing and protocol translation</li>
                            <li>• Authentication and authorization</li>
                            <li>• Audit logging and monitoring</li>
                        </ul>
                    </div>

                    <div class="component-card">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 border border-blue-900/50">
                                <i class="fas fa-user-circle text-blue-400 text-xl"></i>
                            </div>
                            <h3 class="serif text-lg font-semibold text-neutral-200">Client Registry</h3>
                        </div>
                        <p class="text-neutral-400 text-sm mb-3">Single source of truth for patient identity with unique ABHA ID integration</p>
                        <ul class="text-xs text-neutral-500 space-y-1">
                            <li>• Patient identity management</li>
                            <li>• Demographic data storage</li>
                            <li>• Duplicate record prevention</li>
                        </ul>
                    </div>

                    <div class="component-card">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mr-4 border border-green-900/50">
                                <i class="fas fa-hospital text-green-400 text-xl"></i>
                            </div>
                            <h3 class="serif text-lg font-semibold text-neutral-200">Facility Registry</h3>
                        </div>
                        <p class="text-neutral-400 text-sm mb-3">Comprehensive directory of all healthcare facilities in Andhra Pradesh</p>
                        <ul class="text-xs text-neutral-500 space-y-1">
                            <li>• Facility identification and location</li>
                            <li>• Services offered mapping</li>
                            <li>• Administrative hierarchy management</li>
                        </ul>
                    </div>

                    <div class="component-card">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mr-4 border border-purple-900/50">
                                <i class="fas fa-file-medical text-purple-400 text-xl"></i>
                            </div>
                            <h3 class="serif text-lg font-semibold text-neutral-200">Shared Health Record</h3>
                        </div>
                        <p class="text-neutral-400 text-sm mb-3">Longitudinal repository consolidating clinical data from multiple sources</p>
                        <ul class="text-xs text-neutral-500 space-y-1">
                            <li>• Storage of normalized clinical data</li>
                            <li>• Data query and retrieval</li>
                            <li>• Comprehensive audit logging</li>
                        </ul>
                    </div>

                    <div class="component-card">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mr-4 border border-orange-900/50">
                                <i class="fas fa-chart-bar text-orange-400 text-xl"></i>
                            </div>
                            <h3 class="serif text-lg font-semibold text-neutral-200">HMIS</h3>
                        </div>
                        <p class="text-neutral-400 text-sm mb-3">Population-level health data aggregation for public health reporting</p>
                        <ul class="text-xs text-neutral-500 space-y-1">
                            <li>• Data aggregation from SHR</li>
                            <li>• Health indicators generation</li>
                            <li>• Dashboard and reporting tools</li>
                        </ul>
                    </div>

                    <div class="component-card">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mr-4 border border-red-900/50">
                                <i class="fas fa-language text-red-400 text-xl"></i>
                            </div>
                            <h3 class="serif text-lg font-semibold text-neutral-200">Terminology Service</h3>
                        </div>
                        <p class="text-neutral-400 text-sm mb-3">Central repository for standardized medical terminologies and code sets</p>
                        <ul class="text-xs text-neutral-500 space-y-1">
                            <li>• ICD-10, SNOMED CT, LOINC mapping</li>
                            <li>• Data validation services</li>
                            <li>• Semantic interoperability</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">Phased Implementation Strategy</h3>

                    <div class="phase-timeline">
                        <div class="timeline-item">
                            <div class="bg-neutral-800/50 p-6 rounded-xl border-l-4 border-teal-500">
                                <div class="flex items-center justify-between mb-4">
                                    <h4 class="font-semibold text-teal-400">Phase 1: Foundation (Months 1-6)</h4>
                                    <span class="bg-teal-900/30 text-teal-300 px-3 py-1 rounded-full text-xs font-medium border border-teal-800">Foundation</span>
                                </div>
                                <p class="text-neutral-300 mb-4 font-medium">District Hospitals, Medical Colleges, Specialty Hospitals</p>
                                <ul class="text-sm text-neutral-400 space-y-2">
                                    <li>• High impact: Serves large and diverse patient population</li>
                                    <li>• Data rich: Significant volume for public health surveillance</li>
                                    <li>• Foundation building: Establishes core infrastructure</li>
                                </ul>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="bg-neutral-800/50 p-6 rounded-xl border-l-4 border-orange-500">
                                <div class="flex items-center justify-between mb-4">
                                    <h4 class="font-semibold text-orange-400">Phase 2: Integration (Months 7-12)</h4>
                                    <span class="bg-orange-900/30 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-800">Integration</span>
                                </div>
                                <p class="text-neutral-300 mb-4 font-medium">Private Healthcare Providers and Diagnostic Laboratories</p>
                                <ul class="text-sm text-neutral-400 space-y-2">
                                    <li>• Completeness: Comprehensive patient health view</li>
                                    <li>• Care coordination: Public-private provider integration</li>
                                    <li>• Efficiency: Reduces duplicate diagnostic tests</li>
                                </ul>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="bg-neutral-800/50 p-6 rounded-xl border-l-4 border-green-500">
                                <div class="flex items-center justify-between mb-4">
                                    <h4 class="font-semibold text-green-400">Phase 3: Full Ecosystem</h4>
                                    <span class="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-800">Expansion</span>
                                </div>
                                <p class="text-neutral-300 mb-4 font-medium">Pharmacies, Nursing Homes, Individual Practitioners</p>
                                <ul class="text-sm text-neutral-400 space-y-2">
                                    <li>• Full ecosystem: Integrated health information exchange</li>
                                    <li>• Enhanced safety: Medication adherence monitoring</li>
                                    <li>• Patient empowerment: Complete health record inclusion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-anchor py-20 bg-neutral-900" id="data-requirements">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="serif text-3xl md:text-4xl font-bold text-neutral-100 mb-6">Data Requirements</h2>
                    <p class="text-xl text-neutral-500 max-w-3xl mx-auto">Comprehensive data needs for establishing the Health Information Exchange infrastructure</p>
                </div>

                <div class="mb-16">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">Client Registry Requirements</h3>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="bg-neutral-800/30 p-8 rounded-xl border border-neutral-700">
                            <h4 class="font-semibold text-blue-400 mb-6 flex items-center">
                                <i class="fas fa-database mr-3"></i>
                                Core Demographic Data
                            </h4>

                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="border-b border-neutral-700">
                                            <th class="text-left py-2 font-medium text-blue-400">Data Element</th>
                                            <th class="text-left py-2 font-medium text-blue-400">Source</th>
                                        </tr>
                                    </thead>
                                    <tbody class="space-y-2">
                                        <tr class="border-b border-neutral-800">
                                            <td class="py-3 text-neutral-300">Full Name</td>
                                            <td class="py-3 text-neutral-500">Aadhaar, Voter ID, Ration Card</td>
                                        </tr>
                                        <tr class="border-b border-neutral-800">
                                            <td class="py-3 text-neutral-300">Date of Birth</td>
                                            <td class="py-3 text-neutral-500">Aadhaar, Birth Certificate</td>
                                        </tr>
                                        <tr class="border-b border-neutral-800">
                                            <td class="py-3 text-neutral-300">Gender</td>
                                            <td class="py-3 text-neutral-500">Aadhaar, Voter ID</td>
                                        </tr>
                                        <tr class="border-b border-neutral-800">
                                            <td class="py-3 text-neutral-300">Address</td>
                                            <td class="py-3 text-neutral-500">Aadhaar, Voter ID</td>
                                        </tr>
                                        <tr class="border-b border-neutral-800">
                                            <td class="py-3 text-neutral-300">ABHA ID</td>
                                            <td class="py-3 text-neutral-500">ABDM Portal</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-gradient-to-br from-green-900/20 to-teal-900/20 p-6 rounded-xl border border-green-900/50">
                                <h4 class="font-semibold text-green-400 mb-3">ABHA ID Integration</h4>
                                <p class="text-neutral-300 text-sm mb-3">Leveraging the <a class="citation" href="https://www.niti.gov.in/sites/default/files/2023-02/ndhm_strategy_overview.pdf" target="_blank">Ayushman Bharat Health Account ID</a> as the unique health identifier for seamless national integration.</p>
                                <ul class="text-xs text-neutral-500 space-y-1">
                                    <li>• 14-digit unique health identifier</li>
                                    <li>• National portability of health records</li>
                                    <li>• Consent-based data sharing framework</li>
                                </ul>
                            </div>

                            <div class="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-900/50">
                                <h4 class="font-semibold text-purple-400 mb-3">Consent Management</h4>
                                <p class="text-neutral-300 text-sm mb-3">Robust framework ensuring patient privacy and transparent data sharing practices.</p>
                                <ul class="text-xs text-neutral-500 space-y-1">
                                    <li>• Granular consent preferences</li>
                                    <li>• Purpose-based data access</li>
                                    <li>• Duration and revocation controls</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-16">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">Facility Registry Requirements</h3>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-6 rounded-xl border border-orange-900/50">
                            <h4 class="font-semibold text-orange-400 mb-4">Hospital Data</h4>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• Facility name and type</li>
                                <li>• Ownership details</li>
                                <li>• Complete address</li>
                                <li>• Geographic coordinates</li>
                                <li>• Contact information</li>
                                <li>• Number of beds</li>
                                <li>• Specialties offered</li>
                                <li>• License numbers</li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 p-6 rounded-xl border border-teal-900/50">
                            <h4 class="font-semibold text-teal-400 mb-4">Clinic &amp; Lab Data</h4>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• Facility classification</li>
                                <li>• Service offerings</li>
                                <li>• Location details</li>
                                <li>• Contact information</li>
                                <li>• Registration status</li>
                                <li>• Quality certifications</li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 rounded-xl border border-blue-900/50">
                            <h4 class="font-semibold text-blue-400 mb-4">Geographic Data</h4>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• District and mandal</li>
                                <li>• Village/town details</li>
                                <li>• Panchayat/municipality</li>
                                <li>• Assembly constituency</li>
                                <li>• Health sub-division</li>
                                <li>• Postal pin codes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mb-16">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">Clinical Data Standards</h3>

                    <div class="bg-neutral-800/30 p-8 rounded-xl border border-neutral-700">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h4 class="font-semibold text-neutral-200 mb-6">FHIR R4 Standards Compliance</h4>
                                <p class="text-neutral-400 mb-4">All data exchange will adhere to <a class="citation" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7150120/" target="_blank">HL7 FHIR R4 standards</a> ensuring interoperability and structured data exchange.</p>

                                <div class="space-y-3">
                                    <div class="flex items-center">
                                        <i class="fas fa-check-circle text-green-500 mr-3"></i>
                                        <span class="text-sm text-neutral-300">Fast Healthcare Interoperability Resources</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check-circle text-green-500 mr-3"></i>
                                        <span class="text-sm text-neutral-300">Web-based API standards</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-check-circle text-green-500 mr-3"></i>
                                        <span class="text-sm text-neutral-300">Modular and extensible design</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 class="font-semibold text-neutral-200 mb-6">Standardized Terminologies</h4>
                                <div class="space-y-4">
                                    <div class="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                                        <h5 class="font-semibold text-blue-400 mb-2">SNOMED CT</h5>
                                        <p class="text-xs text-neutral-500">Comprehensive clinical terminology for clinical concepts</p>
                                    </div>
                                    <div class="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                                        <h5 class="font-semibold text-teal-400 mb-2">ICD-10</h5>
                                        <p class="text-xs text-neutral-500">International classification of diseases and health problems</p>
                                    </div>
                                    <div class="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                                        <h5 class="font-semibold text-orange-400 mb-2">LOINC</h5>
                                        <p class="text-xs text-neutral-500">Standardized codes for laboratory observations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-anchor py-20 bg-neutral-950" id="system-integration">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="serif text-3xl md:text-4xl font-bold text-neutral-100 mb-6">System Integration Strategy</h2>
                    <p class="text-xl text-neutral-500 max-w-3xl mx-auto">Seamless connectivity with national and state-level health IT infrastructure</p>
                </div>

                <div class="mb-16">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">National Digital Health Integration</h3>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="bg-neutral-900 rounded-xl p-8 shadow-lg border border-blue-900/30">
                            <div class="flex items-center mb-6">
                                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                                    <i class="fas fa-id-card text-white text-2xl"></i>
                                </div>
                                <h4 class="serif text-lg font-semibold text-neutral-200">ABHA ID Integration</h4>
                            </div>
                            <p class="text-neutral-400 mb-4">Seamless integration with the <a class="citation" href="https://www.niti.gov.in/sites/default/files/2023-02/ndhm_strategy_overview.pdf" target="_blank">Ayushman Bharat Health Account ID</a> system</p>
                            <ul class="text-sm text-neutral-500 space-y-2">
                                <li>• 14-digit unique health identifier</li>
                                <li>• National portability of records</li>
                                <li>• Consent-based data sharing</li>
                                <li>• Real-time verification API</li>
                            </ul>
                        </div>

                        <div class="bg-neutral-900 rounded-xl p-8 shadow-lg border border-teal-900/30">
                            <div class="flex items-center mb-6">
                                <div class="w-16 h-16 bg-gradient-to-br from-teal-600 to-green-700 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                                    <i class="fas fa-hospital-user text-white text-2xl"></i>
                                </div>
                                <h4 class="serif text-lg font-semibold text-neutral-200">HIP/HIU Compliance</h4>
                            </div>
                            <p class="text-neutral-400 mb-4">Compliance with Health Information Provider and User roles</p>
                            <ul class="text-sm text-neutral-500 space-y-2">
                                <li>• Standardized data sharing protocols</li>
                                <li>• Secure API-based access</li>
                                <li>• Patient consent management</li>
                                <li>• Audit trail maintenance</li>
                            </ul>
                        </div>

                        <div class="bg-neutral-900 rounded-xl p-8 shadow-lg border border-purple-900/30">
                            <div class="flex items-center mb-6">
                                <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                                    <i class="fas fa-shield-alt text-white text-2xl"></i>
                                </div>
                                <h4 class="serif text-lg font-semibold text-neutral-200">Consent Manager</h4>
                            </div>
                            <p class="text-neutral-400 mb-4">Integration with ABDM's centralized consent management framework</p>
                            <ul class="text-sm text-neutral-500 space-y-2">
                                <li>• Unified consent interface</li>
                                <li>• Granular access controls</li>
                                <li>• Patient empowerment tools</li>
                                <li>• Transparent data usage</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mb-16">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">State-Level System Integration</h3>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="bg-gradient-to-br from-orange-900/10 to-red-900/10 p-8 rounded-xl border border-orange-900/30">
                            <h4 class="font-semibold text-orange-400 mb-6 flex items-center">
                                <i class="fas fa-chart-line mr-3"></i>
                                State HMIS Integration
                            </h4>
                            <p class="text-neutral-400 mb-4">Seamless integration with <a class="citation" href="https://hmis.mohfw.gov.in/#!/" target="_blank">Andhra Pradesh State Health Management Information System</a></p>

                            <div class="space-y-4">
                                <div class="bg-neutral-900 p-4 rounded-lg border border-orange-900/30">
                                    <h5 class="font-medium text-orange-400 mb-2">Data Exchange</h5>
                                    <p class="text-xs text-neutral-500">IHE ADX profile for aggregate health data exchange</p>
                                </div>
                                <div class="bg-neutral-900 p-4 rounded-lg border border-orange-900/30">
                                    <h5 class="font-medium text-orange-400 mb-2">Public Health Reporting</h5>
                                    <p class="text-xs text-neutral-500">Real-time disease surveillance and program monitoring</p>
                                </div>
                                <div class="bg-neutral-900 p-4 rounded-lg border border-orange-900/30">
                                    <h5 class="font-medium text-orange-400 mb-2">Performance Analytics</h5>
                                    <p class="text-xs text-neutral-500">Healthcare system performance evaluation</p>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-gradient-to-br from-green-900/10 to-teal-900/10 p-6 rounded-xl border border-green-900/30">
                                <h4 class="font-semibold text-green-400 mb-4">Immunization Information System</h4>
                                <ul class="text-sm text-neutral-400 space-y-2">
                                    <li>• Vaccination coverage tracking</li>
                                    <li>• Cold chain management</li>
                                    <li>• Adverse event monitoring</li>
                                </ul>
                            </div>

                            <div class="bg-gradient-to-br from-blue-900/10 to-indigo-900/10 p-6 rounded-xl border border-blue-900/30">
                                <h4 class="font-semibold text-blue-400 mb-4">Disease Surveillance</h4>
                                <ul class="text-sm text-neutral-400 space-y-2">
                                    <li>• Notifiable disease reporting</li>
                                    <li>• Syndromic surveillance</li>
                                    <li>• Laboratory-based surveillance</li>
                                </ul>
                            </div>

                            <div class="bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-6 rounded-xl border border-purple-900/30">
                                <h4 class="font-semibold text-purple-400 mb-4">Vital Statistics</h4>
                                <ul class="text-sm text-neutral-400 space-y-2">
                                    <li>• Birth and death registration</li>
                                    <li>• Cause of death reporting</li>
                                    <li>• Population health indicators</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">Technical Integration Specifications</h3>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div class="flex items-center mb-4">
                                <i class="fas fa-code text-blue-400 text-xl mr-3"></i>
                                <h4 class="font-semibold text-neutral-200">API Requirements</h4>
                            </div>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• HL7 FHIR R4 standard</li>
                                <li>• RESTful API design</li>
                                <li>• JSON/XML support</li>
                                <li>• Comprehensive documentation</li>
                            </ul>
                        </div>

                        <div>
                            <div class="flex items-center mb-4">
                                <i class="fas fa-lock text-green-400 text-xl mr-3"></i>
                                <h4 class="font-semibold text-neutral-200">Security Protocols</h4>
                            </div>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• Mutual TLS (mTLS)</li>
                                <li>• OpenID Connect (OIDC)</li>
                                <li>• OAuth 2.0 authorization</li>
                                <li>• End-to-end encryption</li>
                            </ul>
                        </div>

                        <div>
                            <div class="flex items-center mb-4">
                                <i class="fas fa-exchange-alt text-orange-400 text-xl mr-3"></i>
                                <h4 class="font-semibold text-neutral-200">Data Exchange</h4>
                            </div>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• HL7 V2 messaging</li>
                                <li>• IHE profiles support</li>
                                <li>• Batch processing</li>
                                <li>• Real-time streaming</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-anchor py-20 bg-neutral-900" id="governance">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="serif text-3xl md:text-4xl font-bold text-neutral-100 mb-6">Governance Framework</h2>
                    <p class="text-xl text-neutral-500 max-w-3xl mx-auto">Structured approach to ensure sustainable and ethical operation of the Health Information Exchange</p>
                </div>

                <div class="mb-16">
                    <div class="bg-gradient-to-br from-teal-900/20 to-blue-900/20 p-8 rounded-xl border border-teal-900/50">
                        <h3 class="serif text-2xl font-semibold mb-6 text-neutral-200">State HIE Governing Body</h3>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <p class="text-neutral-400 mb-6">Multi-stakeholder governance structure chaired by the designated IAS officer, ensuring strategic oversight and alignment with state health priorities.</p>

                                <div class="space-y-4">
                                    <div class="flex items-start">
                                        <i class="fas fa-user-tie text-teal-400 mt-1 mr-3"></i>
                                        <div>
                                            <h5 class="font-semibold text-neutral-200">IAS Coordinator</h5>
                                            <p class="text-sm text-neutral-500">Strategic leadership and government liaison</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <i class="fas fa-users text-blue-400 mt-1 mr-3"></i>
                                        <div>
                                            <h5 class="font-semibold text-neutral-200">Multi-Stakeholder Representation</h5>
                                            <p class="text-sm text-neutral-500">Government, providers, technology partners</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <i class="fas fa-cogs text-orange-400 mt-1 mr-3"></i>
                                        <div>
                                            <h5 class="font-semibold text-neutral-200">Policy Development</h5>
                                            <p class="text-sm text-neutral-500">Data sharing, privacy, and technical standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-neutral-900 p-6 rounded-lg border border-teal-900/30">
                                <h4 class="font-semibold text-teal-400 mb-4">Key Responsibilities</h4>
                                <ul class="space-y-3 text-sm text-neutral-400">
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-teal-500 mt-1 mr-3 text-xs"></i>
                                        <span>Strategic direction and oversight</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-teal-500 mt-1 mr-3 text-xs"></i>
                                        <span>Stakeholder coordination and engagement</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-teal-500 mt-1 mr-3 text-xs"></i>
                                        <span>Performance monitoring and evaluation</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-teal-500 mt-1 mr-3 text-xs"></i>
                                        <span>Compliance and risk management</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-teal-500 mt-1 mr-3 text-xs"></i>
                                        <span>Continuous improvement initiatives</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-16">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">Data Sharing and Privacy Framework</h3>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="space-y-6">
                            <div class="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 rounded-xl border border-blue-900/50">
                                <h4 class="font-semibold text-blue-400 mb-4 flex items-center">
                                    <i class="fas fa-file-contract mr-3"></i>
                                    Data Use and Access Policies
                                </h4>
                                <p class="text-neutral-300 text-sm mb-4">Comprehensive policies governing health data access and usage in alignment with <a class="citation" href="https://abdm.gov.in:8081/uploads/health_management_policy_bac9429a79.pdf" target="_blank">ABDM Health Data Management Policy</a>.</p>
                                <ul class="text-xs text-neutral-500 space-y-1">
                                    <li>• Role-based access controls</li>
                                    <li>• Purpose-specific data usage</li>
                                    <li>• Audit and monitoring procedures</li>
                                    <li>• Data retention and disposal</li>
                                </ul>
                            </div>

                            <div class="bg-gradient-to-br from-green-900/20 to-teal-900/20 p-6 rounded-xl border border-green-900/50">
                                <h4 class="font-semibold text-green-400 mb-4 flex items-center">
                                    <i class="fas fa-shield-alt mr-3"></i>
                                    Privacy by Design
                                </h4>
                                <p class="text-neutral-300 text-sm mb-4">Built-in privacy protection mechanisms ensuring patient data confidentiality and security.</p>
                                <ul class="text-xs text-neutral-500 space-y-1">
                                    <li>• Data minimization principles</li>
                                    <li>• Anonymization and pseudonymization</li>
                                    <li>• Consent management integration</li>
                                    <li>• Breach notification protocols</li>
                                </ul>
                            </div>
                        </div>

                        <div class="bg-neutral-900 rounded-xl p-8 shadow-lg border border-neutral-800">
                            <h4 class="font-semibold text-neutral-200 mb-6">Compliance Framework</h4>

                            <div class="space-y-6">
                                <div class="border-l-4 border-blue-600 pl-4">
                                    <h5 class="font-medium text-blue-400 mb-2">Digital Personal Data Protection Act, 2023</h5>
                                    <p class="text-sm text-neutral-400">Full compliance with national data protection regulations ensuring lawful and transparent data processing.</p>
                                </div>

                                <div class="border-l-4 border-green-600 pl-4">
                                    <h5 class="font-medium text-green-400 mb-2">ABDM Guidelines</h5>
                                    <p class="text-sm text-neutral-400">Alignment with Ayushman Bharat Digital Mission standards for health data management and interoperability.</p>
                                </div>

                                <div class="border-l-4 border-orange-600 pl-4">
                                    <h5 class="font-medium text-orange-400 mb-2">State Regulations</h5>
                                    <p class="text-sm text-neutral-400">Adherence to Andhra Pradesh state-specific health data regulations and privacy requirements.</p>
                                </div>
                            </div>

                            <div class="mt-6 p-4 bg-neutral-800/50 rounded-lg">
                                <h5 class="font-medium text-neutral-200 mb-2">Patient Rights</h5>
                                <ul class="text-xs text-neutral-500 space-y-1">
                                    <li>• Right to access personal health data</li>
                                    <li>• Right to rectify inaccurate data</li>
                                    <li>• Right to erase personal data</li>
                                    <li>• Right to data portability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-neutral-800 to-blue-900/20 p-8 rounded-xl border border-neutral-700">
                    <h3 class="serif text-2xl font-semibold mb-8 text-neutral-200">Monitoring and Evaluation Framework</h3>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                                <i class="fas fa-chart-line text-white text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-neutral-200 mb-3">Key Performance Indicators</h4>
                            <p class="text-sm text-neutral-400">Technical performance, adoption rates, and healthcare impact metrics</p>
                        </div>

                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-700 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                                <i class="fas fa-search text-white text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-neutral-200 mb-3">Regular Audits</h4>
                            <p class="text-sm text-neutral-400">Independent third-party assessments of security, compliance, and performance</p>
                        </div>

                        <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                                <i class="fas fa-sync-alt text-white text-2xl"></i>
                            </div>
                            <h4 class="font-semibold text-neutral-200 mb-3">Continuous Improvement</h4>
                            <p class="text-sm text-neutral-400">Feedback mechanisms and iterative enhancement processes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-anchor py-20 bg-neutral-900" id="resource-requirements">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="bg-neutral-900 rounded-2xl p-12 shadow-lg border border-neutral-800">
                    <h3 class="serif text-3xl font-bold mb-12 text-neutral-200">Resource Requirements</h3>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-[#1e3a8a] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                                <i class="fas fa-server text-blue-400 text-2xl"></i>
                            </div>
                            <h4 class="text-lg font-bold text-neutral-100 mb-4">Infrastructure</h4>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• On-premise data centers</li>
                                <li>• Network infrastructure</li>
                                <li>• Security systems</li>
                                <li>• Backup and recovery</li>
                            </ul>
                        </div>

                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-[#064e3b] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/20">
                                <i class="fas fa-users text-green-400 text-2xl"></i>
                            </div>
                            <h4 class="text-lg font-bold text-neutral-100 mb-4">Personnel</h4>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• Technical team</li>
                                <li>• Clinical experts</li>
                                <li>• Project management</li>
                                <li>• Training staff</li>
                            </ul>
                        </div>

                        <div class="flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-[#7c2d12] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-900/20">
                                <i class="fas fa-graduation-cap text-orange-400 text-2xl"></i>
                            </div>
                            <h4 class="text-lg font-bold text-neutral-100 mb-4">Capacity Building</h4>
                            <ul class="text-sm text-neutral-400 space-y-2">
                                <li>• Healthcare provider training</li>
                                <li>• User education programs</li>
                                <li>• Technical support</li>
                                <li>• Change management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-20 px-4 max-w-6xl mb-20">
            <div class="bg-neutral-900 rounded-2xl p-12 text-neutral-200 border border-neutral-800 shadow-lg relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-teal-900/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                
                <div class="text-center mb-12 relative z-10">
                    <h3 class="serif text-4xl font-bold mb-6 text-neutral-100 tracking-wide">Call to Action</h3>
                    <p class="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        The successful implementation of the Andhra Pradesh Health Information Exchange requires active collaboration from all stakeholders. Together, we can build a unified, secure, and interoperable health information ecosystem that improves healthcare delivery and patient outcomes across the state.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <h4 class="font-bold text-neutral-200 text-lg mb-6 border-b border-neutral-800 pb-2">Government Support Needed</h4>
                        <ul class="space-y-4 text-neutral-400">
                            <li class="flex items-start">
                                <div class="mt-1 mr-4 flex-shrink-0 w-5 h-5 bg-teal-900/50 rounded-full flex items-center justify-center border border-teal-800">
                                    <i class="fas fa-check text-teal-400 text-xs"></i>
                                </div>
                                <span class="font-medium">Leadership and strategic direction</span>
                            </li>
                            <li class="flex items-start">
                                <div class="mt-1 mr-4 flex-shrink-0 w-5 h-5 bg-teal-900/50 rounded-full flex items-center justify-center border border-teal-800">
                                    <i class="fas fa-check text-teal-400 text-xs"></i>
                                </div>
                                <span class="font-medium">Data sharing agreements</span>
                            </li>
                            <li class="flex items-start">
                                <div class="mt-1 mr-4 flex-shrink-0 w-5 h-5 bg-teal-900/50 rounded-full flex items-center justify-center border border-teal-800">
                                    <i class="fas fa-check text-teal-400 text-xs"></i>
                                </div>
                                <span class="font-medium">Resource allocation</span>
                            </li>
                            <li class="flex items-start">
                                <div class="mt-1 mr-4 flex-shrink-0 w-5 h-5 bg-teal-900/50 rounded-full flex items-center justify-center border border-teal-800">
                                    <i class="fas fa-check text-teal-400 text-xs"></i>
                                </div>
                                <span class="font-medium">Regulatory framework establishment</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold text-neutral-200 text-lg mb-6 border-b border-neutral-800 pb-2">Stakeholder Collaboration</h4>
                        <ul class="space-y-4 text-neutral-400">
                            <li class="flex items-start">
                                <i class="fas fa-handshake mr-4 mt-1 text-teal-500 text-lg"></i>
                                <span class="font-medium">Healthcare provider participation</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-handshake mr-4 mt-1 text-teal-500 text-lg"></i>
                                <span class="font-medium">Technology partner engagement</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-handshake mr-4 mt-1 text-teal-500 text-lg"></i>
                                <span class="font-medium">Patient advocacy involvement</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-handshake mr-4 mt-1 text-teal-500 text-lg"></i>
                                <span class="font-medium">Community awareness building</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>

        

        <footer class="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-900">
            <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
                <div class="text-center">
                    <p class="text-neutral-500 mb-4">Andhra Pradesh Health Information Exchange Strategic Framework</p>
                    <div class="flex justify-center space-x-6 text-sm text-neutral-600">
                        <span>2025 Strategic Health Initiative</span>
                        <span>•</span>
                        <span>OpenHIE Framework Based</span>
                        <span>•</span>
                        <span>Patient-Centric Design</span>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</div>

<style>
    :global(:root) {
        --sage: #9CA986;
        --terracotta: #E67E22;
        --deep-blue: #2C3E50;
        --warm-white: #171717; /* Neutral-900 */
        --charcoal: #E5E5E5; /* Light Gray */
    }

    .serif { font-family: 'Tiempos Headline', serif; }
    
    .highlight-box {
        background: linear-gradient(135deg, rgba(156, 169, 134, 0.05), rgba(230, 126, 34, 0.02));
        border-left: 4px solid var(--sage);
        padding: 1.5rem;
        border-radius: 0 0.5rem 0.5rem 0;
    }
    
    .component-card {
        background: #171717; /* neutral-900 */
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        border: 1px solid #262626; /* neutral-800 */
    }

    .citation {
        color: #E67E22; /* Terracotta */
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px dotted #E67E22;
        transition: all 0.2s;
    }
    
    .citation:hover {
        background-color: rgba(230, 126, 34, 0.1);
        padding: 0.1rem 0.2rem;
        border-radius: 0.25rem;
    }

    /* Timeline Styles */
    .phase-timeline {
        position: relative;
        padding-left: 2rem;
    }
    
    .phase-timeline::before {
        content: '';
        position: absolute;
        left: 0.5rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, #14b8a6, #f97316, #22c55e); /* Teal to Orange to Green */
        opacity: 0.3;
    }
    
    .timeline-item {
        position: relative;
        margin-bottom: 2rem;
        padding-left: 1rem;
    }
    
    .timeline-item::before {
        content: '';
        position: absolute;
        left: -1.5rem;
        top: 0.5rem;
        width: 12px;
        height: 12px;
        background: #262626; /* Neutral-800 */
        border-radius: 50%;
        border: 2px solid #525252; /* Neutral-600 */
        box-shadow: 0 0 0 2px #171717; /* Neutral-900 */
        z-index: 1;
    }
</style>