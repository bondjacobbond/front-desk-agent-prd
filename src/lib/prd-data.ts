export const kpiPhases = [
  {
    phase: "Phase 1",
    label: "Pilot",
    timeline: "Months 1-3",
    metrics: [
      {
        metric: "Facilities activated",
        target: "10+",
        how: "Track activations in Bond admin; target early adopters from Chelsea Piers, Toca, Shoot 360",
      },
      {
        metric: "End-to-end resolution",
        target: "80%+",
        how: "Monitor escalation rate; track resolution classification and post-call surveys. Min 1,000 AI-handled calls across 10 facilities.",
      },
      {
        metric: "Call answer time",
        target: "<3 sec",
        how: "Telephony platform metrics vs. industry avg of 30+ sec or missed",
      },
      {
        metric: "Operator NPS",
        target: "7+/10",
        how: "Post-pilot survey at 30 and 60 days",
      },
      {
        metric: "Critical errors",
        target: "Zero",
        how: "QA review of all agent interactions; automated edge case flagging",
      },
    ],
  },
  {
    phase: "Phase 2",
    label: "Scale",
    timeline: "Months 3-9",
    metrics: [
      {
        metric: "Active facilities",
        target: "50+",
        how: "Activation tracking in Bond admin",
      },
      {
        metric: "Booking conversion increase",
        target: "15%+",
        how: "Pre/post activation booking rates via Bond transaction data",
      },
      {
        metric: "Missed call reduction",
        target: "25%+",
        how: "Telephony metrics before/after comparison",
      },
      {
        metric: "Incremental ARR",
        target: "$150K+",
        how: "Finance tracking of AI agent subscriptions",
      },
      {
        metric: "Staff time saved",
        target: "5+ hrs/wk",
        how: "Quarterly survey of active facilities",
      },
    ],
  },
  {
    phase: "Phase 3",
    label: "Mature",
    timeline: "Months 9-18",
    metrics: [
      {
        metric: "Active facilities",
        target: "100+",
        how: "AI agent becomes standard part of Bond onboarding",
      },
      {
        metric: "Inbound comms handled",
        target: "70%+",
        how: "Multi-channel volume tracking (voice + email + chat)",
      },
      {
        metric: '"Second chance" lead conversion',
        target: "20%+",
        how: "Track bookings from AI interactions outside business hours / high-volume periods",
      },
      {
        metric: "Incremental ARR",
        target: "$500K+",
        how: "Finance reporting",
      },
      {
        metric: "Consumer NPS",
        target: "8+/10",
        how: "Post-interaction survey sampling",
      },
    ],
  },
];

export const competitors = [
  {
    name: "ServiceTitan",
    icp: "Home services contractors",
    ai: "Full AI suite: voice agents, SMS booking, dispatch optimization",
    voice: true,
    voiceLabel: "Live, 24/7",
    pricing: "Contact Center Pro add-on",
    threat: "Benchmark",
    threatColor: "blue" as const,
  },
  {
    name: "Momence",
    icp: "Fitness studios, gyms, spas",
    ai: "AI Inbox: booking, cancellation, freezes, refunds via text",
    voice: false,
    voiceLabel: "Text only",
    pricing: "$399/mo per location",
    threat: "Medium-High",
    threatColor: "orange" as const,
  },
  {
    name: "Rec Technologies",
    icp: "Municipal parks & rec",
    ai: "Refund agent, analytics, marketing analyst",
    voice: false,
    voiceLabel: "None",
    pricing: "Included in platform",
    threat: "Medium",
    threatColor: "yellow" as const,
  },
  {
    name: "Generic Voice AI",
    icp: "Horizontal",
    ai: "Voice infrastructure, no domain context",
    voice: true,
    voiceLabel: "Infrastructure only",
    pricing: "Variable (usage-based)",
    threat: "Low",
    threatColor: "green" as const,
  },
];

export const personas = [
  {
    name: "Sarah",
    role: "Facility Operator / GM",
    emoji: "S",
    color: "bg-bond-navy",
    pain: "30-40% of calls go to voicemail during busy periods. Virtual receptionist can only take messages -- no Bond access.",
    wants: [
      "Every call answered instantly",
      "Agent knows programs and policies",
      "Can book registrations and answer schedule questions",
      "Escalates complex issues with full context",
      "Minimal setup and maintenance",
    ],
  },
  {
    name: "Mike",
    role: "Hockey Dad / Consumer",
    emoji: "M",
    color: "bg-bond-navy-light",
    pain: "Calls at 6:30pm, gets voicemail. Tries next morning, can't get through. By the time he connects, clinic is full.",
    wants: [
      "Immediate answer when calling",
      "Natural questions work ('is there space in U10 spring clinic?')",
      "Complete registration over the phone",
      "Accurate schedule info for both kids in one call",
    ],
  },
  {
    name: "Jenna",
    role: "Front Desk Staff",
    emoji: "J",
    color: "bg-bond-gold",
    pain: "Can't find info fast enough while in-person customers wait. Same 10 questions make up 80% of calls.",
    wants: [
      "Fewer phone calls to handle",
      "Confidence callers get accurate info",
      "Only handle calls that need a human",
    ],
  },
  {
    name: "Bond",
    role: "The Platform",
    emoji: "B",
    color: "bg-bond-navy-dark",
    pain: "Needs new revenue streams, deeper platform stickiness, and proprietary data moat.",
    wants: [
      "High-margin recurring revenue stream",
      "Deepened platform stickiness / reduced churn",
      "Proprietary data that improves over time",
      "Technology leadership position",
      "Scales across 300+ facilities",
    ],
  },
];

export const featurePhases = [
  {
    phase: "Phase 1",
    title: "Intelligent Answering",
    subtitle: "The AI That Knows Your Facility",
    label: "MVP",
    features: [
      {
        name: "Inbound Voice Handling",
        desc: "AI answers inbound phone calls with natural, human-like conversation. Configurable greeting and voice personality.",
        priority: "P0",
        size: "L",
      },
      {
        name: "Schedule & Availability Queries",
        desc: "Agent accesses real-time Bond data for program schedules, class times, availability, and waitlist status.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Pricing & Program Information",
        desc: "Accurate pricing, descriptions, age requirements, skill levels, and prerequisites from Bond.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Facility Policy Knowledge",
        desc: "Facility-specific policies: cancellation rules, refund policies, weather procedures.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Customer Recognition",
        desc: "Identifies returning customers by phone number. Greets by name with context on registrations and history.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Human Escalation",
        desc: "Warm transfer with full context (transcript + intent summary). Configurable triggers.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Admin Configuration Portal",
        desc: "Plain-English setup -- like training a new hire. Policies, tone, FAQs, escalation rules.",
        priority: "P0",
        size: "L",
      },
      {
        name: "Conversation Dashboard",
        desc: "All AI conversations: transcripts, outcomes, escalation reasons, sentiment, volume patterns.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Multi-Sport / Multi-Facility",
        desc: "Supports multiple sports, programs, and locations with unique configurations per facility.",
        priority: "P0",
        size: "M",
      },
      {
        name: "After-Hours & Overflow Routing",
        desc: "Configurable: AI answers all, after-hours only, overflow only, or threshold-based.",
        priority: "P1",
        size: "S",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Action-Taking",
    subtitle: "The AI That Does Things",
    label: "Post-MVP",
    features: [
      {
        name: "Registration & Booking",
        desc: "Complete class/program registrations, book rentals, and add to waitlists within the call.",
        priority: "P0",
        size: "L",
      },
      {
        name: "Cancellation Processing",
        desc: "Process cancellations per facility policies, apply fees/credits, handle exceptions.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Membership Modifications",
        desc: "Handle inquiries, process freezes, initiate cancellations with notice enforcement.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Payment Collection",
        desc: "Secure PCI-compliant payment processing within calls for registrations and balances.",
        priority: "P1",
        size: "L",
      },
      {
        name: "Email Channel",
        desc: "Inbound email handling with same knowledge and action capabilities.",
        priority: "P1",
        size: "M",
      },
      {
        name: "SMS / Chat Channel",
        desc: "Text-based inquiries via SMS and web chat.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Confirmation & Follow-Up",
        desc: "Post-action confirmation emails/SMS with details, calendar invites, reminders.",
        priority: "P1",
        size: "S",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Proactive Intelligence",
    subtitle: "The AI That Anticipates",
    label: "Future",
    features: [
      {
        name: "Second Chance Leads",
        desc: "Reviews unanswered calls and unresolved inquiries. Flags high-potential leads for follow-up.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Proactive Outreach",
        desc: "Outbound for waitlist openings, schedule changes, registration reminders, re-engagement.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Demand Prediction",
        desc: "Analyze call patterns and trends to predict demand spikes and recommend actions.",
        priority: "P3",
        size: "L",
      },
      {
        name: "Cross-Sell & Upsell",
        desc: "Recommend relevant programs and memberships based on customer profile.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Multi-Language Support",
        desc: "Spanish and other languages common in facility service areas.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Analytics & Insights Dashboard",
        desc: "Conversion funnels, inquiry topics, peak patterns, revenue attribution, satisfaction trends.",
        priority: "P2",
        size: "M",
      },
    ],
  },
];

export const architectureLayers = [
  {
    layer: 1,
    name: "Communication Infrastructure",
    decision: "Buy",
    desc: "Telephony, SMS, email channel management. Call routing and audio streaming.",
    tech: "Twilio / Vonage",
  },
  {
    layer: 2,
    name: "Speech Processing",
    decision: "Buy",
    desc: "STT converts caller audio to text. TTS converts responses to natural-sounding audio. Sub-500ms latency.",
    tech: "Deepgram / ElevenLabs / OpenAI",
  },
  {
    layer: 3,
    name: "Intelligence Engine",
    decision: "Build",
    desc: "LLM orchestration, Agent API, policy engine, confidence scoring, conversation state management.",
    tech: "Bond proprietary — the moat",
  },
  {
    layer: 4,
    name: "Integration & Data Layer",
    decision: "Build",
    desc: "Agent API providing structured, permissioned access to Bond platform data.",
    tech: "Bond Agent API v1",
  },
];

export const timeline = [
  {
    phase: "Phase 1",
    title: "Foundation & Pilot",
    months: "Months 1-4",
    objective:
      "Ship a working voice agent to 5-10 pilot facilities answering questions using real Bond data.",
    milestones: [
      {
        time: "Month 1, Wk 1-2",
        name: "Architecture Review",
        desc: "Finalize technical architecture and vendor selection",
      },
      {
        time: "Month 1, Wk 3-4",
        name: "Agent API v1 Kickoff",
        desc: "Define and begin building read-access API layer",
      },
      {
        time: "Month 2, Wk 1-2",
        name: "Voice Infrastructure",
        desc: "Integrate telephony, STT, and TTS. Build basic call flow.",
      },
      {
        time: "Month 2, Wk 3-4",
        name: "Intelligence Engine v1",
        desc: "LLM orchestration with Bond-specific prompts and context",
      },
      {
        time: "Month 3, Wk 1-2",
        name: "Admin Portal v1",
        desc: "Plain-English setup interface for facility configuration",
      },
      {
        time: "Month 3, Wk 3-4",
        name: "QA & Testing",
        desc: "Comprehensive testing across all scenario types",
      },
      {
        time: "Month 4, Wk 1-2",
        name: "Pilot Launch",
        desc: "Deploy to 5-10 select facilities with active monitoring",
      },
      {
        time: "Month 4, Wk 3-4",
        name: "Pilot Evaluation",
        desc: "Analyze data, plan Phase 2 scope",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Action-Taking & Scale",
    months: "Months 5-9",
    objective:
      "Enable the agent to take actions (book, cancel, modify) and expand to 50+ facilities.",
    milestones: [
      {
        time: "Month 5",
        name: "Agent API v2",
        desc: "Write operations: registration, cancellation, waitlist, membership",
      },
      {
        time: "Month 6",
        name: "Action-Taking Intelligence",
        desc: "Confirmation flows, policy enforcement, exception handling",
      },
      {
        time: "Month 6-7",
        name: "Email & SMS Channels",
        desc: "Extend agent to handle inbound emails and text messages",
      },
      {
        time: "Month 7",
        name: "Dashboard v2",
        desc: "Enhanced analytics: conversion tracking, revenue attribution",
      },
      {
        time: "Month 8",
        name: "Scaled Rollout",
        desc: "50+ facilities with onboarding playbook and CS training",
      },
      {
        time: "Month 9",
        name: "Phase 2 Evaluation",
        desc: "Comprehensive review of scaled deployment",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Proactive Intelligence",
    months: "Months 10-18",
    objective:
      "Agent becomes proactive -- identifying opportunities, recovering lost leads, driving revenue.",
    milestones: [
      {
        time: "Month 10-11",
        name: "Second Chance Leads",
        desc: "AI reviews unresolved inquiries and surfaces high-value follow-ups",
      },
      {
        time: "Month 12-13",
        name: "Proactive Outreach",
        desc: "Outbound for waitlist spots, schedule changes, deadline reminders",
      },
      {
        time: "Month 14-15",
        name: "Cross-Sell Engine",
        desc: "Recommend programs based on customer profile and history",
      },
      {
        time: "Month 16-18",
        name: "Advanced Analytics",
        desc: "Demand prediction, staffing recommendations, pricing optimization",
      },
    ],
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$249",
    period: "/month",
    target: "Small single-sport facilities",
    features: [
      "Voice-only",
      "Up to 200 calls/month",
      "Business hours + after hours",
      "Basic dashboard",
    ],
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    target: "Mid-size multi-sport facilities",
    popular: true,
    features: [
      "Voice + email + chat",
      "Up to 500 calls/month",
      "Action-taking (book/cancel)",
      "Full dashboard",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "$599",
    period: "/month",
    target: "Large facilities, franchise groups",
    features: [
      "All channels",
      "Unlimited calls",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated success manager",
      "Multi-location support",
    ],
  },
];

export const risks = [
  {
    risk: "AI provides incorrect information",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Strict data freshness requirements; confidence scoring with escalation fallback; comprehensive QA per facility",
  },
  {
    risk: 'Caller frustration ("I want to talk to a person")',
    likelihood: "High",
    impact: "Medium",
    mitigation:
      "Always offer human transfer; detect frustration early; proactively offer transfer; iterate on escalation patterns",
  },
  {
    risk: "Regulatory issues (AI disclosure, recording consent)",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Proactive legal review; always-disclose-by-default; state-by-state compliance checklist",
  },
  {
    risk: "Telephony / infrastructure downtime",
    likelihood: "Low",
    impact: "Critical",
    mitigation:
      "Multi-provider redundancy; automatic failover to existing phone system; 99.9% uptime SLA",
  },
  {
    risk: "Low facility adoption",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Start with champions; demonstrate ROI in 30 days; 60-day free trial; CS-led onboarding",
  },
  {
    risk: "Competitor launches voice AI for rec facilities",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Speed to market; first-mover advantage compounds (data moat); deep Bond integration is defensible",
  },
  {
    risk: "Data breach / PII exposure from recordings",
    likelihood: "Low",
    impact: "Critical",
    mitigation:
      "Encryption at rest and in transit; strict access controls; automated PII redaction; regular audits",
  },
  {
    risk: "Cost of AI inference exceeds revenue per facility",
    likelihood: "Medium",
    impact: "Medium",
    mitigation:
      "Monitor cost per call; optimize prompts for token efficiency; volume pricing; tiered pricing to match usage",
  },
];

export const performanceTargets = [
  { metric: "Call answer latency", target: "<2 seconds from ring" },
  { metric: "First response latency", target: "<1 second" },
  { metric: "Turn-by-turn response", target: "<800ms" },
  { metric: "Uptime", target: "99.9%" },
  { metric: "Concurrent calls per facility", target: "5+ simultaneous" },
  { metric: "Data freshness", target: "<60 seconds" },
  { metric: "Factual query accuracy", target: "98%+" },
  { metric: "Appropriate escalation rate", target: "15-25%" },
];

export const revenueProjections = [
  { year: "Year 1", facilities: 50, avgPrice: 350, arr: 210 },
  { year: "Year 2", facilities: 150, avgPrice: 400, arr: 720 },
  { year: "Year 3", facilities: 250, avgPrice: 450, arr: 1350 },
];

export const openDecisions = [
  {
    issue: "Voice provider selection",
    status: "Open",
    owners: "PM, Engineering Lead",
    desc: "Evaluate latency, cost, reliability, and integration complexity for Twilio vs. Vonage vs. other.",
  },
  {
    issue: "LLM provider strategy",
    status: "Open",
    owners: "PM, Engineering Lead",
    desc: "Single vs. multi-model. Start single, architect for swap.",
  },
  {
    issue: "AI disclosure requirements",
    status: "Open",
    owners: "PM, Legal",
    desc: "State-by-state requirements. Recommend always disclosing with option to transfer.",
  },
  {
    issue: "Pricing model",
    status: "Open",
    owners: "PM, CEO, Finance",
    desc: "Flat fee vs. usage-based vs. hybrid. Recommend flat fee with tier structure.",
  },
  {
    issue: "PCI compliance approach",
    status: "Open",
    owners: "PM, Engineering, Security",
    desc: "May need secure SMS payment link during call. Defer to Phase 2 deep-dive.",
  },
  {
    issue: "Multi-language timeline",
    status: "High Priority",
    owners: "PM, Engineering, CS",
    desc: "Spanish is highest demand. Run discovery to determine if Phase 2 is needed in pilot geographies.",
  },
];
