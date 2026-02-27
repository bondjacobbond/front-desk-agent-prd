export const kpiPhases = [
  {
    phase: "Phase 1",
    label: "FAQ MVP",
    timeline: "Months 1-3",
    metrics: [
      {
        metric: "Facilities activated",
        target: "3",
        how: "Track activations in Bond admin; target early adopters from Chelsea Piers, Toca, Palm Beach Skate Zone",
      },
      {
        metric: "FAQ resolution rate",
        target: "70%+",
        how: "Calls resolved without transfer to staff. Track resolution vs. transfer rate across FAQ categories.",
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
        metric: "Factual accuracy",
        target: "Zero complaints",
        how: "QA review of all agent interactions; validate answers against facility knowledge base",
      },
    ],
  },
  {
    phase: "Phase 2",
    label: "Data + Scale",
    timeline: "Months 4-8",
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
    label: "Proactive",
    timeline: "Months 9-15",
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
        metric: "Cancellation saves",
        target: "10%+",
        how: "Compare cancellation completion rate pre/post save flow activation",
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
  {
    phase: "Phase 4",
    label: "Bond Agents",
    timeline: "Months 15-24",
    metrics: [
      {
        metric: "Agent types active",
        target: "3+ at 25% of facilities",
        how: "Agent activation tracking by type; workflow coverage beyond front desk",
      },
      {
        metric: "Operator engagement",
        target: "Weekly active use",
        how: "Track sessions, directives issued, and recommendations reviewed per operator",
      },
      {
        metric: "AR recovery rate",
        target: "15%+",
        how: "Payment recovery attributed to Collections Agent vs. manual follow-up",
      },
      {
        metric: "Programs filled",
        target: "20%+ underenrolled",
        how: "Enrollment velocity pre/post Program Coordinator Agent activation",
      },
      {
        metric: "Bond Agents ARR",
        target: "$300K+",
        how: "Incremental revenue from agent add-on subscriptions beyond base front desk",
      },
      {
        metric: "Operator NPS",
        target: "8+/10",
        how: "Quarterly survey of Bond Agents customers",
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
    email: true,
    text: true,
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
    email: true,
    text: true,
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
    email: true,
    text: true,
    pricing: "Included in platform",
    threat: "Medium",
    threatColor: "yellow" as const,
  },
  {
    name: "Baseline (via EmbedReach)",
    icp: "Sports & athletic facilities",
    ai: "Voice AI receptionist: FAQ, lesson links via SMS, knowledge base, staff handoff. Powered by EmbedReach embedded suite.",
    voice: true,
    voiceLabel: "Live, production",
    email: false,
    text: true,
    pricing: "Included in platform",
    threat: "High",
    threatColor: "orange" as const,
  },
  {
    name: "Generic Voice AI",
    icp: "Horizontal",
    ai: "Voice infrastructure, no domain context",
    voice: true,
    voiceLabel: "Infrastructure only",
    email: false,
    text: false,
    pricing: "Variable (usage-based)",
    threat: "Low",
    threatColor: "green" as const,
  },
];

export const personas = [
  {
    name: "Sarah",
    role: "Facility Operator / GM",
    emoji: "GM",
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
    emoji: "Dad",
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
    emoji: "Staff",
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
    emoji: "Platform",
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

export type DemoStep = {
  speaker: "agent" | "caller" | "system" | "operator";
  text: string;
  annotation?: string;
};

export type PhaseDemo = {
  title: string;
  context: string;
  steps: DemoStep[];
};

export type PhaseApi = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  desc: string;
  params?: string[];
  note?: string;
};

export const featurePhases: Array<{
  phase: string;
  title: string;
  subtitle: string;
  label: string;
  features: Array<{
    name: string;
    desc: string;
    priority: string;
    size: string;
  }>;
  apis?: PhaseApi[];
  demo: PhaseDemo;
}> = [
  {
    phase: "Phase 1",
    title: "Schedule Data & FAQs",
    subtitle: "The AI That Knows Your Programs",
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
        name: "Human Escalation",
        desc: "Warm transfer with full context (transcript + intent summary). Configurable triggers.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Conversation Dashboard",
        desc: "All AI conversations: transcripts, outcomes, escalation reasons, sentiment, volume patterns.",
        priority: "P1",
        size: "M",
      },
    ],
    apis: [
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/programs",
        desc: "Paginated list of programs with up to 10 sessions each.",
        params: [
          "programTypes",
          "sports",
          "gender",
          "levels",
          "search",
          "includePast",
          "startDate",
          "endDate",
          "expand (e.g. accountingCodes)",
          "page",
          "itemsPerPage",
          "offset",
        ],
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/programs/{programId}/sessions",
        desc: "All sessions for a specific program including dates, registration windows, facilities, products, and participant limits.",
        params: [
          "gender",
          "levels",
          "search",
          "includePast",
          "startDate",
          "endDate",
          "searchByProgram",
          "expand (e.g. accountingCodes)",
        ],
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/programs/{programId}/sessions/{sessionId}/products",
        desc: "Products (pricing tiers and membership gating) for a session.",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/programs/{programId}/sessions/{sessionId}/segments",
        desc: "Segments of a session (schedule blocks within a session).",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/programs/{programId}/sessions/{sessionId}/segments/{segmentId}/events",
        desc: "Individual events within a segment (specific occurrences on the calendar).",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/schedule",
        desc: "Facility-wide event schedule. Returns events across all programs for a date range — the primary endpoint the agent uses to answer 'what's happening today/this week' questions.",
        params: ["startDate", "endDate", "facilityId", "sportId"],
        note: "Needed — not yet available in public API",
      },
    ],
    demo: {
      title: "Common Schedule & FAQ Questions",
      context:
        "It's 2:30 PM on a weekday. A parent calls the facility with several quick questions about schedules, hours, and policies.",
      steps: [
        {
          speaker: "system",
          text: "Inbound call received. Call answered in 1.1 seconds.",
          annotation: "Inbound Voice Handling",
        },
        {
          speaker: "agent",
          text: "Hi, thanks for calling! This is Alex, how can I help you?",
          annotation: "Inbound Voice Handling",
        },
        {
          speaker: "caller",
          text: "Hi, where can I find the schedule for the youth hockey league?",
        },
        {
          speaker: "agent",
          text: "The youth hockey league schedule is posted on our website under Programs. The schedule varies week to week based on ice availability and game schedules. Would you like me to tell you what's coming up this week?",
          annotation: "Schedule & Availability Query",
        },
        {
          speaker: "caller",
          text: "Yeah, that'd be helpful. Also, what times are offered for private lessons?",
        },
        {
          speaker: "agent",
          text: "Private lessons are available Monday through Friday from 3 PM to 8 PM, and weekends from 9 AM to 5 PM. Sessions are typically 30 or 60 minutes. The rate is $75 for 30 minutes or $140 for 60 minutes. Would you like me to connect you with someone who can book a private lesson?",
          annotation: "Schedule & Availability + Pricing Info",
        },
        {
          speaker: "caller",
          text: "Maybe later. One more thing \u2014 what are the pro shop hours today?",
        },
        {
          speaker: "agent",
          text: "The pro shop is open today from 10 AM to 8 PM. They carry skates, sticks, protective equipment, and can do skate sharpening. Is there something specific you're looking for?",
          annotation: "Facility Information",
        },
        {
          speaker: "caller",
          text: "No, that's all. Oh wait \u2014 can I bring outside food?",
        },
        {
          speaker: "agent",
          text: "Yes, you're welcome to bring outside food and drinks. We just ask that you keep food and drinks in the lobby area and not on the ice. We also have a cafe that's open today from 11 AM to 7 PM if you'd like to grab something here.",
          annotation: "Facility Policy Knowledge",
        },
        {
          speaker: "caller",
          text: "Perfect, thanks!",
        },
        {
          speaker: "agent",
          text: "You're welcome! Have a great day!",
        },
        {
          speaker: "system",
          text: "Interaction logged. Questions answered: youth league schedule location, private lesson times/pricing, pro shop hours, outside food policy. Call duration: 1m 48s.",
          annotation: "Dashboard",
        },
      ],
    },
  },
  {
    phase: "Phase 2",
    title: "Customer Recognition",
    subtitle: "The AI That Knows Your Customers",
    label: "MVP+",
    features: [
      {
        name: "Customer Recognition",
        desc: "Identifies returning customers by phone number. Greets by name with context on registrations and history.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Customer History Context",
        desc: "Agent accesses customer's past registrations, memberships, payment history, and preferences to personalize conversations.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Personalized Recommendations",
        desc: "Suggests programs based on customer's age, skill level, past participation, and family preferences.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Account Status Awareness",
        desc: "Agent knows customer's current account status: active registrations, outstanding balances, payment methods on file, membership status.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Email Channel",
        desc: "Inbound email handling with same knowledge and customer recognition capabilities.",
        priority: "P1",
        size: "M",
      },
      {
        name: "SMS / Chat Channel",
        desc: "Text-based inquiries via SMS and web chat with customer recognition.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Admin Configuration Portal",
        desc: "Plain-English setup -- like training a new hire. Policies, tone, FAQs, escalation rules.",
        priority: "P0",
        size: "L",
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
    apis: [
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/customers/{customerId}",
        desc: "Full customer profile — name, contact info, family members, preferences, and account status.",
        note: "New public customer endpoint — required for agent recognition",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/customers/lookup",
        desc: "Look up a customer by phone number, email, or name. Powers caller-ID recognition when an inbound call arrives.",
        params: ["phone", "email", "name"],
        note: "New public customer endpoint",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/customers/{customerId}/registrations",
        desc: "Active and past registrations for a customer. The agent uses this for context ('I see Lucas finished Learn to Skate last fall').",
        params: ["status", "includePast", "startDate", "endDate"],
        note: "New public customer endpoint",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/customers/{customerId}/memberships",
        desc: "Active memberships, freeze status, and renewal dates for a customer.",
        note: "New public customer endpoint",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/customers/{customerId}/balance",
        desc: "Outstanding balance, payment methods on file, and recent transaction history.",
        note: "New public customer endpoint",
      },
      {
        method: "GET",
        path: "/v4/api/organization/{organizationId}/customers/{customerId}/family",
        desc: "Family members linked to the account — names, ages, and individual registration/membership data.",
        note: "New public customer endpoint",
      },
    ],
    demo: {
      title: "Returning Customer Inquiry",
      context:
        "It's 8:47 PM on a Tuesday. Mike Chen, a returning customer, calls Chelsea Piers to ask about spring programs. The agent recognizes him and has full context on his family's history.",
      steps: [
        {
          speaker: "system",
          text: "Inbound call received at 8:47 PM. Caller identified: Mike Chen (917-555-0142). Active registrations: Emma Chen (U12 Figure Skating), Lucas Chen (U8 Learn to Skate \u2014 completed Fall '25). Account status: Active, no outstanding balance.",
          annotation: "Customer Recognition",
        },
        {
          speaker: "agent",
          text: "Hi Mike! Thanks for calling Chelsea Piers. How can I help you tonight?",
          annotation: "Personalized Greeting",
        },
        {
          speaker: "caller",
          text: "Oh hi! I'm looking for spring hockey programs for Lucas \u2014 he's 9 now.",
        },
        {
          speaker: "agent",
          text: "Great! I can see Lucas completed our Learn to Skate program last fall \u2014 perfect progression into hockey. For a 9-year-old, we have two spring options: the U10 Saturday Skills Clinic starting March 15th, and the U10 weeknight league on Tuesdays. Which sounds more interesting?",
          annotation: "Customer History Context + Schedule Query",
        },
        {
          speaker: "caller",
          text: "The Saturday one. How much is it, and is there still room?",
        },
        {
          speaker: "agent",
          text: "The U10 Saturday Skills Clinic is $320 for 8 weeks, 9:00 to 10:30 AM. There are 4 spots left out of 16. Since Emma's figure skating is also Saturday mornings, they'd finish around the same time \u2014 that might work well for your schedule. Full equipment is required \u2014 we have rental packages for $45 per session if you need them.",
          annotation: "Personalized Recommendation + Account Awareness",
        },
        {
          speaker: "caller",
          text: "That timing actually works perfectly. What's the cancellation policy?",
        },
        {
          speaker: "agent",
          text: "You can cancel with a full refund up to 7 days before the session starts. After that, individual classes can be cancelled with 24 hours notice for a class credit valid for 90 days. If it's illness-related, we waive the notice requirement \u2014 just let us know.",
          annotation: "Facility Policy Knowledge",
        },
        {
          speaker: "caller",
          text: "Perfect. Actually \u2014 one more thing. I've been having a billing issue with Emma's skating for three weeks and nobody's gotten back to me. I'm getting a little frustrated.",
        },
        {
          speaker: "system",
          text: "Frustration detected. Open support ticket found: #4821 (billing dispute, 19 days unresolved). Escalation triggered.",
          annotation: "Sentiment Detection + Account Status",
        },
        {
          speaker: "agent",
          text: "I'm sorry about that, Mike. I can see there's an open billing issue on Emma's account that's been waiting too long. Let me flag this as priority and have our billing team call you first thing tomorrow morning. They'll have all the details so you won't have to explain it again. Would 9 AM work?",
          annotation: "Human Escalation with Full Customer Context",
        },
        {
          speaker: "caller",
          text: "That'd be great, thanks.",
        },
        {
          speaker: "agent",
          text: "Done! I've also sent you an email with the spring hockey clinic details so you and your wife can look it over. Anything else I can help with?",
        },
        {
          speaker: "system",
          text: "Interaction logged. Follow-up email sent with program details. Billing escalation created with priority flag, transcript attached. Call duration: 2m 14s.",
          annotation: "Dashboard + Follow-Up",
        },
      ],
    },
  },
  {
    phase: "Phase 3",
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
        name: "Confirmation & Follow-Up",
        desc: "Post-action confirmation emails/SMS with details, calendar invites, reminders.",
        priority: "P1",
        size: "S",
      },
    ],
    apis: [
      {
        method: "POST",
        path: "/v4/api/organization/{organizationId}/programs/{programId}/sessions/{sessionId}/register",
        desc: "Register a participant for a session. Checks prerequisites, conflicts, and capacity. Returns confirmation with payment details.",
        note: "New write endpoint — requires PCI-scoped auth",
      },
      {
        method: "POST",
        path: "/v4/api/organization/{organizationId}/programs/{programId}/sessions/{sessionId}/waitlist",
        desc: "Add a participant to the waitlist for a full session. Triggers automatic notification when a spot opens.",
        note: "New write endpoint",
      },
      {
        method: "POST",
        path: "/v4/api/organization/{organizationId}/registrations/{registrationId}/cancel",
        desc: "Cancel a registration. Applies cancellation policy (fees, credits, refunds) based on facility rules and timing.",
        note: "New write endpoint",
      },
      {
        method: "PATCH",
        path: "/v4/api/organization/{organizationId}/memberships/{membershipId}",
        desc: "Modify a membership — freeze, unfreeze, or initiate cancellation with notice period enforcement.",
        note: "New write endpoint",
      },
      {
        method: "POST",
        path: "/v4/api/organization/{organizationId}/payments",
        desc: "Process a payment against an outstanding balance or new registration. Uses payment method on file or collects new card via PCI-compliant flow.",
        note: "New write endpoint — requires PCI-scoped auth",
      },
      {
        method: "POST",
        path: "/v4/api/organization/{organizationId}/notifications/send",
        desc: "Send a confirmation email or SMS to a customer with registration details, calendar invites, or credit summaries.",
        note: "New write endpoint",
      },
    ],
    demo: {
      title: "Registration + Cancellation in One Call",
      context:
        "Sarah calls Toca Football at 3:15 PM. She wants to register her son for a new program and cancel her daughter's upcoming session because of illness.",
      steps: [
        {
          speaker: "system",
          text: "Inbound call. Caller identified: Sarah Martinez (512-555-0198). Two children: Diego (age 11, U12 Select Training), Mia (age 8, U8 Skills Academy).",
          annotation: "Customer Recognition",
        },
        {
          speaker: "agent",
          text: "Hi Sarah! Thanks for calling Toca. How can I help you today?",
        },
        {
          speaker: "caller",
          text: "Hi! Two things \u2014 I need to sign Diego up for the spring futsal league, and I need to cancel Mia's class this Saturday. She has strep throat.",
        },
        {
          speaker: "agent",
          text: "Oh no, I hope Mia feels better soon! Let me take care of both. For Diego \u2014 the U12 Spring Futsal League starts April 5th, Saturdays 11 AM to 12:30 PM, 10-week season. It's $280. There are 3 spots left. Want me to register him?",
          annotation: "Schedule & Availability Query",
        },
        {
          speaker: "caller",
          text: "Yes, please!",
        },
        {
          speaker: "system",
          text: "Initiating registration: Diego Martinez \u2192 U12 Spring Futsal League. Checking prerequisites... passed. Checking conflicts... none found.",
          annotation: "Registration & Booking",
        },
        {
          speaker: "agent",
          text: "I've got Diego registered for the U12 Spring Futsal League. The $280 will be charged to the Visa ending in 4823 on file. Should I send you a calendar invite?",
          annotation: "Payment Collection",
        },
        {
          speaker: "caller",
          text: "Yes please. Now about Mia \u2014",
        },
        {
          speaker: "agent",
          text: "Of course. I see Mia's next U8 Skills Academy session is this Saturday at 9 AM. Since she's sick, our illness policy waives the 24-hour notice requirement. I'll cancel Saturday's class and apply a credit to your account \u2014 it's good for any U8 class in the next 90 days. Sound good?",
          annotation: "Cancellation Processing + Policy Enforcement",
        },
        {
          speaker: "caller",
          text: "Perfect. Thank you so much.",
        },
        {
          speaker: "agent",
          text: "Done! Let me recap: Diego is registered for Spring Futsal starting April 5th, and Mia has a class credit for her Saturday session. I'm sending you a confirmation email with everything right now. Anything else?",
        },
        {
          speaker: "system",
          text: "Actions completed: 1 registration, 1 cancellation with illness credit. Payment of $280 processed. Confirmation email sent with registration details + calendar invite + credit summary. Call duration: 1m 48s.",
          annotation: "Confirmation & Follow-Up",
        },
      ],
    },
  },
  {
    phase: "Phase 4",
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
        desc: "Outbound for waitlist openings, schedule changes, registration reminders, re-engagement of lapsed customers.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Retention & Save Flows",
        desc: "Detects at-risk members. Runs cancellation save flows with admin-configured retention playbooks. Proactive outreach with personalized offers and pause options.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Cross-Sell & Upsell",
        desc: "Recommend relevant programs and memberships based on customer profile during conversations.",
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
    demo: {
      title: "Proactive Save + Waitlist Recovery + Cross-Sell",
      context:
        "Three scenarios that happen without anyone at the facility lifting a finger \u2014 the agent detects opportunities and acts on them automatically.",
      steps: [
        {
          speaker: "system",
          text: "\u2014 Scenario A: Retention Save Flow \u2014\nRisk detected: The Johnson family has missed 3 of the last 4 gymnastics sessions. Membership renewal is in 12 days. Initiating save outreach.",
          annotation: "Retention & Save Flows",
        },
        {
          speaker: "agent",
          text: "Hi Lisa, this is Alex from Lakewood Gymnastics. I noticed Sophia hasn't been able to make it to classes lately and wanted to check in \u2014 is everything okay?",
        },
        {
          speaker: "caller",
          text: "Yeah, her soccer schedule changed and now it conflicts with gymnastics on Thursdays.",
        },
        {
          speaker: "agent",
          text: "Oh, that makes sense! Good news \u2014 we actually have the same level class on Tuesdays at 5:30 PM with Coach Rachel, and there's a spot open. Would you like me to switch Sophia over? No extra cost, and she wouldn't miss a beat.",
          annotation: "Schedule Awareness + Proactive Solution",
        },
        {
          speaker: "caller",
          text: "Oh that's perfect, yes please!",
        },
        {
          speaker: "system",
          text: "Membership save successful. Sophia Johnson moved from Thursday to Tuesday session. Renewal risk resolved. Revenue retained: $185/month.",
          annotation: "Retention Save \u2014 Revenue Retained",
        },
        {
          speaker: "system",
          text: "\u2014 Scenario B: Waitlist Recovery \u2014\nA spot opened in the U10 Saturday Hockey Clinic (previously full). 3 families on waitlist. Initiating outbound contact in priority order.",
          annotation: "Proactive Outreach",
        },
        {
          speaker: "agent",
          text: "Hi Mike, this is Alex from Chelsea Piers! Great news \u2014 a spot just opened up in the U10 Saturday Skills Clinic you asked about last week. Would you like me to grab it for Lucas?",
          annotation: "Second Chance Lead Recovery",
        },
        {
          speaker: "caller",
          text: "Absolutely, sign him up!",
        },
        {
          speaker: "agent",
          text: "Done! Lucas is registered. By the way \u2014 since Emma is already doing figure skating on Saturday mornings, they'd finish at the same time. We also have a siblings discount: 10% off when both kids are in Saturday programs. Want me to apply that?",
          annotation: "Cross-Sell & Upsell",
        },
        {
          speaker: "system",
          text: "Waitlist conversion completed. Siblings discount applied. Incremental revenue: $320 (registration) + $32 discount offset by LTV increase. This lead would have been lost pre-AI \u2014 the original inquiry was an after-hours call 6 days ago.",
          annotation: "Second Chance Lead \u2014 Revenue Recaptured",
        },
      ],
    },
  },
  {
    phase: "Phase 5",
    title: "Bond Agents",
    subtitle: "Your AI Team",
    label: "Vision",
    features: [
      {
        name: "Agent Command Center",
        desc: "Unified dashboard for all active agents: activity feed, decisions made, escalations pending, performance metrics. A staffing board for your AI workforce.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Operator ↔ Agent Chat",
        desc: "Natural language interface to direct, query, and supervise agents. 'What's our AR status?' 'Fill the spring soccer clinic.' Agents proactively surface recommendations.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Agent-to-Agent Handoffs",
        desc: "Agents coordinate through Bond's shared data layer. Front desk flags retention risks, program coordinator triggers outreach, collections resolves balances visible across agents.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Collections & AR Agent",
        desc: "Automated follow-up on failed payments and outstanding balances. Negotiates payment plans within admin rules. Replaces awkward manual collection calls.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Program Coordinator Agent",
        desc: "Fills underenrolled programs via proactive outreach. Manages instructor sub notifications and cascading schedule changes to affected families.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Events & Party Booking Agent",
        desc: "End-to-end birthday party and event handling: availability, packages, deposits, confirmations, reminders, and abandoned inquiry follow-up.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Rental Coordinator Agent",
        desc: "Manages ice/field/court rental inquiries. Availability, quotes, holds, contract follow-up, seasonal rebooking for teams and leagues.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Demand & Staffing Intelligence",
        desc: "Predict demand spikes, recommend staffing levels, surface pricing optimization. 'Tuesday 4pm clinics fill 3x faster than Thursday.'",
        priority: "P3",
        size: "L",
      },
      {
        name: "Compliance & Operations Agent",
        desc: "Tracks waiver expirations, certification renewals, safety gaps. Proactively flags compliance issues and auto-notifies affected families and staff.",
        priority: "P3",
        size: "M",
      },
      {
        name: "Automated Operational Reporting",
        desc: "Weekly/monthly facility performance summaries: revenue trends, attendance patterns, program utilization, anomaly detection.",
        priority: "P3",
        size: "M",
      },
    ],
    demo: {
      title: "Monday Morning with Your AI Team",
      context:
        "It's 8:00 AM Monday. Sarah, the GM at Palm Beach Skate Zone, opens her Agent Command Center. Her AI team has been working all weekend.",
      steps: [
        {
          speaker: "system",
          text: "Agent Command Center \u2014 Weekend Summary:\n\u2022 Front Desk Agent: 47 calls handled, 91% resolved, 4 escalations\n\u2022 Collections Agent: $2,340 recovered from 8 accounts\n\u2022 Program Coordinator: 6 underenrolled spots filled\n\u2022 Events Agent: 2 birthday parties booked, 1 deposit collected",
          annotation: "Agent Command Center",
        },
        {
          speaker: "operator",
          text: "What's our AR situation looking like this month?",
          annotation: "Operator \u2194 Agent Chat",
        },
        {
          speaker: "agent",
          text: "Current AR is $18,400 across 34 accounts. The Collections Agent has recovered $6,200 this month (34% of starting balance). 5 families have set up payment plans. 3 accounts need your attention \u2014 the Ramos family is requesting hardship consideration, and the two overdue accounts over 90 days have stopped responding to outreach. Want me to flag those for a personal call?",
          annotation: "Collections & AR Agent",
        },
        {
          speaker: "operator",
          text: "Yes. Also, the spring baseball clinic only has 6 kids signed up and it starts in 3 weeks. Can we fill it?",
        },
        {
          speaker: "agent",
          text: "On it. I found 23 families with kids in the right age range who did fall baseball or have expressed interest in batting programs. 8 of them are already registered for other spring programs, so I'll target the other 15 first. I'll reach out via SMS today with a personal message and follow up by phone tomorrow if they don't respond. Want me to offer the early-bird rate of $249 since we need to fill seats?",
          annotation: "Program Coordinator Agent",
        },
        {
          speaker: "operator",
          text: "Yes, go for it. Offer the early-bird rate to anyone who signs up this week.",
        },
        {
          speaker: "system",
          text: "Program Coordinator Agent: Outreach campaign initiated for Spring Baseball Clinic. 15 families targeted. Promotional rate approved through Friday.",
          annotation: "Operator Directive \u2192 Agent Action",
        },
        {
          speaker: "system",
          text: "Agent-to-Agent Handoff: Front Desk Agent flagged that the Nguyen family called twice this weekend asking about summer camps but didn't commit. Program Coordinator Agent has added them to the summer camp early-access list and will send program details when published Wednesday.",
          annotation: "Agent-to-Agent Handoffs",
        },
        {
          speaker: "agent",
          text: "One more thing \u2014 I noticed Saturday birthday parties are booking 4-5 weeks out now. Based on the trend, March and April Saturdays will be fully booked within 10 days. Should I have the Events Agent proactively reach out to families with kids who have birthdays in April and May? We could offer priority booking before it fills up.",
          annotation: "Demand Intelligence + Events Agent",
        },
        {
          speaker: "operator",
          text: "Great idea. Do it.",
        },
        {
          speaker: "system",
          text: "Events Agent: Birthday party outreach campaign initiated. 28 families with April/May birthdays identified from Bond customer records. Priority booking window opens today.",
          annotation: "Proactive Revenue Generation",
        },
      ],
    },
  },
];

export const architectureLayers = [
  {
    layer: 1,
    name: "Bond Admin Portal",
    owner: "Bond" as const,
    desc: "Facility-facing configuration (agent personality, hours, special instructions), conversation monitoring, call analytics, and performance dashboards. Facilities manage their agent here — not in a vendor dashboard.",
    tech: "Bond Admin Portal + Vendor API integration",
  },
  {
    layer: 2,
    name: "Bond Data & Actions API",
    owner: "Bond" as const,
    desc: "The moat. Bond is the system of record — schedules, customers, pricing, memberships, registrations, policies. The voice platform calls Bond's API to look up data and execute actions (book, cancel, reschedule, check balances). No AI platform is useful without this.",
    tech: "Bond Agent API (read + write endpoints)",
  },
  {
    layer: 3,
    name: "Voice Platform + Orchestration",
    owner: "Vendor" as const,
    desc: "Conversation flows, workflow logic, voice/language processing, knowledge bases, and escalation rules. This lives inside the vendor's platform (ElevenLabs workflows or Bland Conversational Pathways). Bond configures it, may work with vendor's forward-deployed engineers, but the runtime is the vendor's.",
    tech: "ElevenLabs or Bland (swappable)",
  },
  {
    layer: 4,
    name: "Communication Infrastructure",
    owner: "Vendor" as const,
    desc: "Telephony, SMS, and email routing. Standard infrastructure — not a differentiator.",
    tech: "Twilio (telephony/SMS) + Bond (email)",
  },
];

export const timeline = [
  {
    phase: "Phase 1",
    title: "FAQ Agent MVP — 3 Facilities",
    months: "Months 1-3",
    objective:
      "Ship the simplest valuable product: a voice agent that answers FAQs (hours, pricing, programs, directions) and transfers to staff for anything else. Prove product-market fit before adding complexity.",
    milestones: [
      {
        time: "Month 1, Wk 1-2",
        name: "FAQ Knowledge Base + Voice Setup",
        desc: "Configure voice agent with each facility's FAQ content: hours, holiday schedules, pricing, program descriptions, location/directions, basic policies. This is the fastest path to a working product — no API integration needed.",
        successCriteria: [
          "All 3 pilot facility knowledge bases populated and reviewed by facility staff",
          "Agent correctly answers hours, pricing, programs, and directions for each facility",
          "Voice quality and response latency within acceptable range (<1s first response)",
        ],
      },
      {
        time: "Month 1, Wk 2-3",
        name: "Existing Program APIs (parallel)",
        desc: "Connect Bond's existing program/schedule API endpoints to the voice platform. Gives the agent real-time program info and schedules instead of static FAQ content.",
        successCriteria: [
          "Agent returning real-time schedule and program data from Bond's existing APIs",
          "Data refresh latency < 60 seconds",
          "Agent handles schedule changes without manual knowledge base updates",
        ],
      },
      {
        time: "Month 1, Wk 3-4",
        name: "Transfer Logic + Call Routing",
        desc: "Set up intelligent transfers: the agent answers what it can and routes everything else to the right staff member. Configure per-facility transfer numbers, business hours routing, and after-hours behavior.",
        successCriteria: [
          "Transfers routing to correct staff member per facility",
          "After-hours behavior configured (voicemail, emergency routing)",
          "Transfer accuracy ≥ 95% in test calls",
        ],
      },
      {
        time: "Month 2, Wk 1-2",
        name: "Admin Portal + Monitoring",
        desc: "Call log/transcript dashboard in Bond admin. Facility-facing config for agent personality, hours, FAQ overrides. Surface call analytics from vendor API.",
        successCriteria: [
          "Call logs and full transcripts visible in Bond admin",
          "Facility managers can update FAQ overrides and business hours",
          "Basic call analytics (volume, duration, resolution rate) surfacing from vendor API",
        ],
      },
      {
        time: "Month 2, Wk 3 – Month 3, Wk 2",
        name: "QA, Testing & Legal",
        desc: "Scenario testing with real facility data. Stress-test FAQ accuracy, voice quality, transfer reliability. Tune knowledge bases. Legal signoff on AI disclosure.",
        successCriteria: [
          "50+ test scenarios passed per facility",
          "Legal AI disclosure policy signed off",
          "Edge case handling (unknown questions, angry callers, hold requests) validated",
        ],
      },
      {
        time: "Month 3, Wk 3-4",
        name: "Pilot Launch",
        desc: "Deploy to 3 facilities. Active call monitoring, manual QA of early calls. Iterate daily on knowledge base and transfer rules.",
        successCriteria: [
          "3 facilities live and handling real calls",
          "70%+ FAQ calls resolved without transfer",
          "NPS ≥ 7 among facility operators",
          "Zero factual accuracy complaints in first 2 weeks",
        ],
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Data-Connected Agent & Scale",
    months: "Months 4-8",
    objective:
      "Enrich the agent with real-time Bond data (customer lookup, account info). Add action-taking (book, cancel, reschedule). Scale to 50+ facilities.",
    milestones: [
      {
        time: "Month 4",
        name: "Bond Data API v1 — Read Operations",
        desc: "Build dedicated read API endpoints: customer lookup by phone, account balances, membership status, booking availability. Agent goes from FAQ bot to personalized assistant.",
        successCriteria: [
          "Customer lookup by phone number returning correct account data",
          "Account balances, membership status, and booking availability live",
          "Agent greeting callers by name when recognized",
        ],
      },
      {
        time: "Month 5",
        name: "Bond Data API v2 — Write Operations",
        desc: "Add write endpoints: registration, cancellation, waitlist management. Confirmation flows, exception handling, undo capabilities — all calling Bond's write API.",
        successCriteria: [
          "Registration, cancellation, and waitlist write endpoints live",
          "Confirmation flows tested end-to-end (voice confirmation + Bond system update)",
          "Undo/rollback working within 5-minute window",
        ],
      },
      {
        time: "Month 5-6",
        name: "Action Workflows + SMS",
        desc: "Configure booking, cancellation, and payment workflows in the vendor's platform. Add SMS channel using same knowledge base. Roll out to 20+ facilities.",
        successCriteria: [
          "Booking and cancellation workflows completing successfully in ≥ 95% of attempts",
          "SMS channel live and handling text inquiries",
          "20+ facilities onboarded and active",
        ],
      },
      {
        time: "Month 7-8",
        name: "Admin Portal v2 + Scaled Rollout",
        desc: "Enhanced facility config, conversion tracking, onboarding playbook. Roll out to 50+ facilities with CS training. Phase 2 evaluation: unit economics at scale.",
        successCriteria: [
          "50+ facilities live",
          "Conversion tracking showing booking uplift per facility",
          "Unit economics validated: TCO ≤ 50% of subscription price",
          "80%+ end-to-end resolution rate across all facilities",
        ],
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Proactive Intelligence",
    months: "Months 10-15",
    objective:
      "The front desk agent evolves from reactive to proactive — anticipating needs, recovering lost revenue, and driving growth.",
    milestones: [
      {
        time: "Month 10-11",
        name: "Second Chance Leads",
        desc: "AI reviews unresolved inquiries and surfaces high-value follow-ups.",
        successCriteria: [
          "Unresolved inquiry review pipeline live",
          "20%+ conversion rate on AI-surfaced follow-ups",
        ],
      },
      {
        time: "Month 11-12",
        name: "Retention & Save Flows",
        desc: "Cancellation save workflows with retention playbooks. Proactive at-risk member outreach.",
        successCriteria: [
          "10%+ cancellation save rate",
          "At-risk member outreach triggering automatically",
        ],
      },
      {
        time: "Month 12-13",
        name: "Proactive Outreach",
        desc: "Outbound for waitlist openings, schedule changes, registration reminders, lapsed customer re-engagement.",
        successCriteria: [
          "Outbound campaigns for waitlist and schedule changes live",
          "Registration reminder and re-engagement flows active",
          "Measurable revenue attribution from outbound interactions",
        ],
      },
      {
        time: "Month 13-15",
        name: "Cross-Sell & Multi-Language",
        desc: "Program recommendations based on customer profile. Spanish support. Advanced analytics: conversion funnels, peak patterns, revenue attribution.",
        successCriteria: [
          "Program recommendations driving measurable cross-sell revenue",
          "Spanish language support live at 10+ facilities",
          "Conversion funnel and revenue attribution dashboards active",
        ],
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Bond Agents Platform",
    months: "Months 15-24",
    objective:
      "Expand to a managed ecosystem of role-specific AI agents with a command center where operators direct their AI team.",
    milestones: [
      {
        time: "Month 15-17",
        name: "Agent Command Center",
        desc: "Unified operator dashboard for all agents: activity, decisions, escalations, performance. Natural language interface for operators.",
        successCriteria: [
          "Unified dashboard live with all agent types visible",
          "Operators issuing directives via natural language interface",
          "Weekly active use by ≥ 50% of facility operators",
        ],
      },
      {
        time: "Month 17-19",
        name: "Collections & Program Agents",
        desc: "Payment follow-up and balance recovery agent. Program coordinator agent for enrollment, instructor subs, schedule changes.",
        successCriteria: [
          "Collections agent recovering 15%+ of outstanding balances",
          "Program coordinator handling enrollment and instructor subs autonomously",
        ],
      },
      {
        time: "Month 19-22",
        name: "Events, Rentals & Handoffs",
        desc: "End-to-end party/event booking and facility rental agents. Agent-to-agent coordination through shared data layer.",
        successCriteria: [
          "Party/event booking agent completing end-to-end bookings",
          "Agent-to-agent handoffs working seamlessly",
          "Facility rental inquiries handled without staff intervention",
        ],
      },
      {
        time: "Month 22-24",
        name: "Back Office Intelligence",
        desc: "Demand prediction, compliance monitoring, automated operational reporting.",
        successCriteria: [
          "Demand prediction reports generating weekly",
          "Compliance monitoring flagging issues automatically",
          "Operational reports replacing manual processes at ≥ 50% of facilities",
        ],
      },
    ],
  },
];

export const pricingModel = {
  name: "Bond AI Front Desk Agent",
  status: "Assumption — launch pricing TBD" as const,
  features: [
    "Voice + SMS (email Phase 2)",
    "Action-taking (book/cancel/reschedule)",
    "Facility-specific knowledge and policies",
    "Dashboard with call transcripts and outcomes",
    "Standard onboarding and support included",
  ],
  models: {
    fixed: {
      label: "Flat Rate",
      price: "$399",
      period: "/month per facility",
      rationale:
        "Simple, predictable. Momence validated $399/mo for text-only AI. Matt prefers flat rate for customer simplicity.",
      pros: [
        "Easy for sales to sell, easy for customers to budget",
        "Predictable revenue for Bond — simplifies forecasting",
        "Strong margin at current AI cost structure (~$18-20/facility in usage)",
      ],
      cons: [
        "Same price for a 50-call/month facility and a 500-call/month facility",
        "Doesn't scale with value delivered — a high-resolution facility pays the same",
        "Harder to justify for low-volume facilities during early adoption",
      ],
    },
    usage: {
      label: "Platform + Per Resolution",
      price: "$149",
      period: "/mo + $1/resolution",
      platformFee: 149,
      perResolution: 1,
      rationale:
        "Platform fee covers base access and support. Per-resolution fee aligns cost with value — Bond earns more when the agent resolves more.",
      pros: [
        "Aligns cost with value — the more the agent helps, the more Bond earns",
        "Lower entry point than flat rate — $149 base vs $399 flat",
        "Guaranteed revenue floor per facility ($149/mo) while keeping upside",
      ],
      cons: [
        "More complex to explain than a single flat rate",
        "Requires clear definition of what counts as a 'resolution'",
        "Revenue still less predictable than flat — varies with call volume",
      ],
    },
  },
  assumptions: {
    callMinutesPerFacility: 200,
    avgCallDuration: 3.5,
    callsPerFacility: 57,
    resolutionRate: 0.75,
    resolutionsPerFacility: 43,
    aiCostPerMinute: 0.09,
    aiCostPerFacility: 18,
  },
};

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
    likelihood: "Confirmed",
    impact: "High",
    mitigation:
      "Baseline already live with EmbedReach voice AI. Bond's differentiation: deep system integration (real-time data, in-call booking, customer recognition) vs. Baseline's FAQ + link-sending approach. Speed to market is now critical — every month of delay is market share ceded.",
  },
  {
    risk: "Data breach / PII exposure from recordings",
    likelihood: "Low",
    impact: "Critical",
    mitigation:
      "Encryption at rest and in transit; strict access controls; automated PII redaction; regular audits",
  },
  {
    risk: "Cost of AI exceeds revenue per facility",
    likelihood: "Low-Medium",
    impact: "High",
    mitigation:
      "Depends heavily on platform choice. ElevenLabs path: $0.09-0.10/min with no platform fee — strong margins at $399/mo even at low volume. Bland path: $150K/yr + $0.30/min requires 32+ facilities to break even. Either way, model breakeven scenarios at 3, 50, and 150 facilities before committing.",
  },
  {
    risk: "Email channel gap (if Bland path)",
    likelihood: "Confirmed",
    impact: "Medium",
    mitigation:
      "Bland does not support email (Bond's #2 channel). ElevenLabs build path could handle email via Bond's orchestration layer. Either way, PRD recommends deferring email to Phase 2 and launching voice-only pilot. Matt confirmed voice is #1 priority.",
  },
  {
    risk: "Production quality gap (if ElevenLabs path)",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "ElevenLabs prototype built but not production-tested at scale. Voice latency, turn-taking, interruption handling, and edge cases may surface issues that Bland's 3 years of fine-tuning has already solved. Mitigate by: (1) stress-testing prototype before pilot, (2) manual QA of early calls, (3) keeping Bland as escalation path if gaps can't be closed.",
  },
  {
    risk: "Vendor dependency / lock-in",
    likelihood: "Medium",
    impact: "Medium",
    mitigation:
      "Applies to both paths. Bland: Conversational Pathways are proprietary. ElevenLabs: less lock-in (BYO LLM, standard APIs) but still a platform dependency. Mitigate by: (1) ensuring Bond Intelligence Layer (Agent API) is vendor-agnostic, (2) documenting all conversation logic in Bond-owned format, (3) architecting for potential future swap.",
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

export const rampModel = {
  note: "Assumes Bond facility base grows ~2x/year (300 → 600 → 1200). AI agent adoption ramps independently.",
  years: [
    {
      year: "Year 1",
      totalBase: 300,
      agentFacilities: 25,
      adoptionPct: 8,
      phase: "Pilot → early adopters",
    },
    {
      year: "Year 2",
      totalBase: 600,
      agentFacilities: 100,
      adoptionPct: 17,
      phase: "Growth — proven product",
    },
    {
      year: "Year 3",
      totalBase: 1200,
      agentFacilities: 400,
      adoptionPct: 33,
      phase: "Scale — default for new customers",
    },
  ],
};

export const openDecisions = [
  {
    issue: "Voice platform for pilot",
    status: "Needs Decision",
    owners: "Matt (CEO), Jacob (PM)",
    desc: "Two pilot options: (A) Bland for speed to market — production-quality voice, managed services, $150K+ but negotiable; (B) ElevenLabs for cost efficiency — prototype exists, $0.09/min usage-only. Either way, Phase 1 MVP is FAQ + transfers — no custom API needed to launch. Next step: negotiate with Bland while continuing ElevenLabs prototype.",
  },
  {
    issue: "Bland negotiation",
    status: "Action Required",
    owners: "Matt (CEO)",
    desc: "Bland offered $150K minimum: $100K/yr platform fee + $50K one-time managed services setup + $0.30/min usage. Matt believes this is negotiable. Need a counter-proposal — e.g. reduced pilot deal for 3 facilities, lower platform fee, or performance-based structure. Outcome determines whether Path A is viable.",
  },
  {
    issue: "Launch pricing model",
    status: "Needs Decision",
    owners: "Matt (CEO), Jacob (PM)",
    desc: "Two models under consideration: (A) $399/mo flat per facility — simple, predictable, strong margin; (B) $149/mo platform + $1/resolution — lower entry, value-aligned, but ~48% of flat-rate revenue at current volume assumptions. Matt prefers flat rate for simplicity. Need to validate call volume and resolution rate assumptions with pilot data before committing.",
  },
  {
    issue: "AI disclosure requirements",
    status: "Blocking — Pre-Pilot",
    owners: "Marc (Legal), Jacob (PM)",
    desc: "State-by-state requirements for AI and call recording disclosure. Bond must define disclosure policy before any pilot goes live. Recommendation: always disclose, always offer human transfer.",
  },
  {
    issue: "Monitoring and QA plan",
    status: "Blocking — Pre-Pilot",
    owners: "Jacob (PM), Engineering",
    desc: "Must define before pilot: who reviews calls, how issues are flagged, alert thresholds, rollback triggers, on-call ownership. If Bland: their managed services team handles initial tuning. If ElevenLabs: Bond builds this from scratch. Either way, Bond needs its own monitoring in the admin portal.",
  },
  {
    issue: "Phase 1 MVP scope",
    status: "Ready to Start",
    owners: "Jacob (PM), Engineering",
    desc: "Phase 1 is FAQ + transfer agent — no custom API build needed. Wire up facility knowledge bases (hours, pricing, programs, policies) and intelligent transfer routing. Connect existing program/schedule APIs in parallel for real-time data enrichment. Full Data API build moves to Phase 2.",
  },
  {
    issue: "Email channel — Phase 2",
    status: "Deferred",
    owners: "Jacob (PM), Engineering",
    desc: "Voice is the priority for pilot. Email deferred to Phase 2 — will depend on vendor platform capabilities and Bond routing. Not blocking.",
  },
];

export const vendors = [
  {
    name: "Build In-House",
    category: "ElevenLabs Platform + Bond API",
    score: 4.1,
    tier: "Tier 1 - Pilot Option (Cost Efficiency)",
    pricing: {
      model: "Engineering time + ElevenLabs usage",
      plans: [
        {
          name: "MVP Build",
          price: "2-3 engineers × 4-6 months",
          rate: "ElevenLabs $0.09-0.10/min (voice infra)",
          concurrency: "N/A",
        },
        {
          name: "Production Hardening",
          price: "1-2 engineers × 3+ months",
          rate: "Tuning with real call data",
          concurrency: "N/A",
        },
        {
          name: "Ongoing",
          price: "1-2 engineers dedicated",
          rate: "ElevenLabs + LLM inference costs",
          concurrency: "N/A",
        },
        {
          name: "Accelerator (optional)",
          price: "Blank Metal: $30-50K/sprint",
          rate: "AI strategist + engineer",
          concurrency: "90-day production guarantee",
        },
      ],
    },
    strengths: [
      "ElevenLabs Conversational AI provides most of the infrastructure out of the box: best-in-class voice quality (TTS/STT), workflow builder with node-based flows, knowledge base with RAG, call analytics with evaluation criteria, system tools (transfer, voicemail detection, keypad tones), custom tool/webhook integration, LLM flexibility (Gemini, GPT, Claude), embeddable widget, and branching for version management",
      "Already prototyped: Palm Beach Skate Zone front desk agent built and tested on ElevenLabs platform (Feb 2026) — validates feasibility",
      "Full ownership of orchestration layer — Bond controls the logic, conversation flows, and integration architecture",
      "Deepest possible Bond data integration — no intermediary API constraints",
      "Best long-term unit economics: ElevenLabs at $0.09/min (Creator+) vs. Bland at $0.30/min — over 3x cost advantage at scale. Plans include bundled minutes (e.g., Scale: 3,600 min/mo for $0.09/min, Business: 13,750 min/mo)",
      "No $150K minimum barrier — ElevenLabs is usage-based from day one",
      "Multi-tenancy designed for Bond's exact needs from the start",
      "Omni-channel from day one (voice + email + SMS + web chat under one orchestration layer) — no email gap like Bland",
      "Mass update capability fully in Bond's control",
      "Aligns with Phase 4 Bond Agents vision — no vendor migration needed later",
      "Blank Metal consultancy ($30-50K/sprint) available as build accelerator: expert guidance on agent architecture, eval systems, and multi-tenant design. Formal Anthropic partner with 90-day production guarantee. Embed model means knowledge transfer without permanent dependency.",
    ],
    weaknesses: [
      "ElevenLabs provides the voice/workflow infrastructure, but Bond must build the orchestration and production-hardening layer on top — this is where Bland's managed services and 3 years of enterprise tuning provide a real advantage",
      "Bland's proprietary voice LLM is purpose-built for voice with 3 years of fine-tuning. ElevenLabs voice quality is best-in-class for TTS, but the end-to-end conversational experience (latency, turn-taking, interruption handling) may not match Bland's integrated approach without tuning effort",
      "Bond must still build: multi-location variable system, production monitoring and alerting, live call supervision with human takeover, post-call analytics comparable to Bland's Citations, and admin configuration UI for facilities",
      "Timeline: 4-6 months to a pilot-quality MVP is realistic given ElevenLabs foundation, but production-hardening with real call data adds 3+ months. Still slower than Bland's ~2 month managed services path.",
      "Engineering cost: 2-3 engineers × 6-9 months = $300-500K fully loaded. Lower than previous $600K-$1M estimate thanks to ElevenLabs, but still higher than Bland's $150K year-one cost.",
      "No managed services team listening to calls and tuning — Bond must build its own QA and monitoring practice",
      "Risk of underestimating production complexity: the gap between 'demo that works' and 'production agent that handles edge cases at scale' is significant. Bland's managed services exist for a reason.",
      "Blank Metal adds $90-250K if multiple sprints needed, though a focused 1-sprint engagement ($30-50K) may suffice for architecture and initial build guidance",
    ],
    verdict:
      "Pilot option B — cost efficiency path. ElevenLabs is usage-based ($0.09/min) with no minimum commitment. Palm Beach Skate Zone prototype already validates feasibility. Lower barrier to entry, but Bond handles more of the production hardening and QA. Bond builds the same Data API and admin portal either way — the voice platform is what differs.",
    scores: {
      voice: 4,
      email: 4,
      text: 4,
      multiTenancy: 5,
      integration: 5,
      actionTaking: 4,
      massUpdate: 5,
      timeToProd: 3,
      costModel: 4,
      strategicControl: 5,
    },
  },
  {
    name: "Bland AI",
    category: "Voice AI Platform",
    score: 3.9,
    tier: "Tier 1 - Pilot Option (Speed to Market)",
    pricing: {
      model: "Enterprise: platform fee + managed services + usage",
      plans: [
        {
          name: "Platform Fee",
          price: "$100K/yr",
          rate: "Required",
          concurrency: "Single-tenant",
        },
        {
          name: "Managed Services",
          price: "$50K",
          rate: "Required for production",
          concurrency: "~2 months to production",
        },
        {
          name: "Usage",
          price: "$0.30/min",
          rate: "Talk time",
          concurrency: "Negotiable with commitment",
        },
        {
          name: "Minimum Barrier",
          price: "$150K",
          rate: "Year 1 floor",
          concurrency: "Concessions possible",
        },
      ],
    },
    strengths: [
      "Demo validated (Feb 19): voice quality, latency, and natural conversation exceeded expectations",
      "Conversational Pathways architecture: node-based flow builder with per-node context and prompts — reduces hallucination and enables targeted debugging",
      "Purpose-built proprietary voice LLM (3 years fine-tuned, not wrapping OpenAI/Anthropic) — lower latency than frontier model wrappers",
      "Multi-location modular config: variables per phone number (agent name, location, API endpoints, knowledge bases) — one pathway serves 300+ facilities",
      "Mass updates work: change pathway once, all locations inherit; micro-changes at phone number level for location-specific overrides",
      "Post-call 'Citations' model: separate in-house model analyzes transcripts for sentiment, topics, variables, call disposition — with cited utterances for auditability",
      "Live call monitoring with instant human transfer during pilot ramp; loop conditions for frustration detection (e.g., 3 failed attempts → auto-transfer)",
      "Detailed call quality metrics: latency, interruptions, transcription accuracy, engagement quality, background noise, sentiment gauge",
      "Unit testing and regression tracking for agent behavior in production",
      "API-native: 99% of dashboard functionality available via API — enables Bond to embed call logs and analytics in its own back office",
      "SMS and RCS supported (multi-channel: voice + text from same pathway)",
      "Access tiers: Viewer, Prompter, Operator, Admin — Bond controls who can edit vs. deploy",
      "Single-tenant architecture by design: Bond controls when updates are pushed (sandbox testing before production)",
      "Webhook nodes for real-time API integration (Bond data, scheduling, payments)",
      "Managed services team listens to first ~100 calls and actively tunes agent to production quality",
    ],
    weaknesses: [
      "Email NOT supported out of the box — Bond's #2 priority channel. On Bland's roadmap but not available today. Workaround: Zendesk trigger → call/SMS",
      "$150K minimum barrier to entry (platform + managed services) before any usage — significant upfront investment before revenue",
      "White-label login not supported: Bond's customers cannot log into Bland dashboard directly. Must use API to embed data in Bond's back office",
      "Vendor dependency for orchestration layer — Conversational Pathways are proprietary to Bland",
      "$0.30/min usage is 2-3x self-serve rates — enterprise pricing reflects managed services and SLAs",
      "~2 months of managed services to reach production quality — not instant deployment",
    ],
    verdict:
      "Pilot option A — speed to market path. Demo validated (Feb 19, 2026) — impressive voice quality, orchestration, and multi-location capabilities. Conversational Pathways provide fastest time to a polished product. $150K minimum is a real commitment, but Matt's thesis is that speed-to-market advantage justifies Year 1 cost premium if it puts Bond ahead of competitors. Needs active negotiation on terms.",
    scores: {
      voice: 5,
      email: 1,
      text: 4,
      multiTenancy: 4,
      integration: 4,
      actionTaking: 4,
      massUpdate: 4,
      timeToProd: 5,
      costModel: 3,
      strategicControl: 2,
    },
  },
  {
    name: "EmbedReach",
    category: "Embedded Marketing Suite for VSaaS",
    score: 3.65,
    tier: "Tier 2 - Monitor",
    pricing: {
      model: "Embedded model (Bond monetizes as add-on)",
      plans: [
        {
          name: "Embedded Partnership",
          price: "Contact",
          rate: "Bond resells to facilities",
          concurrency: "N/A",
        },
      ],
    },
    strengths: [
      "Voice AI Receptionist is live and production-proven — Baseline (direct Bond competitor) deployed it across their platform",
      "Baseline demo shows real capability: FAQ answers, lesson filtering by age, SMS booking links, knowledge base search, warm staff handoff",
      "Per-facility AI training with dedicated phone numbers (Twilio-backed), knowledge base, and configurable handoff rules",
      "Can integrate with APIs for reservations/cancellations if Bond endpoints exist",
      "Full transcripts and AI summaries post-call with task/message notifications",
      "Can pull directly from Snowflake data warehouse — reduces Bond dev burden",
      "Reputation management module: Google Business Profile monitoring, automated review solicitation (40x higher SMS response rates)",
      "Two integration points: UI iframe (low effort) + data sync",
      "Designed for VSaaS embedded model — aligns with Bond's platform approach",
      "SMS version launching soon; two-way messaging on roadmap",
    ],
    weaknesses: [
      "Already powering a direct competitor (Baseline) — competitive intelligence risk",
      "More of a marketing suite than dedicated AI agent platform — voice is one component among many",
      "Integration requires data sync setup (even with Snowflake option)",
      "Baseline demo shows knowledge base is manually curated (FAQ-style), not deeply integrated with real-time system data",
      "Voice AI sends links rather than completing transactions — no in-call booking or payment processing",
      "Embedded model means Bond resells to facilities — need to structure pricing appropriately",
    ],
    verdict:
      "Upgraded threat assessment after Baseline deployment. EmbedReach's Voice AI Receptionist is production-ready and already live in the sports facility vertical via Baseline — a direct Bond competitor. The Baseline demo validates the product for the exact ICP Bond targets: facility-specific AI, per-location phone numbers, knowledge base FAQ, lesson link delivery, and staff handoff. However, the agent operates at FAQ + link-sending level, not deep system integration — Bond's moat (Agent API with real-time data, in-call booking, customer recognition) goes significantly beyond what EmbedReach currently enables. Key risk: Baseline already has this live while Bond is still in planning. Speed to market is critical.",
    scores: {
      voice: 4,
      email: 2,
      text: 4,
      multiTenancy: 4,
      integration: 4,
      actionTaking: 3,
      massUpdate: 3,
      timeToProd: 4,
      costModel: 4,
      strategicControl: 3,
    },
  },
  {
    name: "SidePilot",
    category: "Fitness AI Agent Platform",
    score: 2.55,
    tier: "Tier 2 - Monitor",
    pricing: {
      model: "Per-location monthly",
      plans: [
        {
          name: "Base",
          price: "$320/mo",
          rate: "5,000 tokens",
          concurrency: "1 agent",
        },
        {
          name: "Premium",
          price: "$720/mo",
          rate: "25,000 tokens",
          concurrency: "4 agents",
        },
        {
          name: "Enterprise",
          price: "Custom",
          rate: "75,000 tokens",
          concurrency: "Unlimited",
        },
      ],
    },
    strengths: [
      "Closest ICP alignment: purpose-built for fitness/gym industry",
      "White-label with master admin view (multi-tenant management)",
      "Cancellation save flows and payment recovery align with Phase 3-4 vision",
      "Competitive pricing validates Bond's target range",
    ],
    weaknesses: [
      "Voice agent was not mature at evaluation (disqualifying for Phase 1)",
      "Primarily outbound/appointment booking focus",
      "Would need full Bond integration build",
      "Token-based pricing creates cost ambiguity",
    ],
    verdict:
      "Strong ICP fit and right business model, but voice immaturity makes it unusable for Phase 1. Monitor for Phase 2+ text channels or revisit once voice matures.",
    scores: {
      voice: 1,
      email: 3,
      text: 4,
      multiTenancy: 4,
      integration: 2,
      actionTaking: 4,
      massUpdate: 3,
      timeToProd: 2,
      costModel: 4,
      strategicControl: 3,
    },
  },
  {
    name: "Intercom (Fin)",
    category: "AI Customer Service Platform",
    score: 2.55,
    tier: "Tier 3 - Not Recommended",
    pricing: {
      model: "Per-resolution (custom)",
      plans: [
        {
          name: "Enterprise",
          price: "Custom",
          rate: "Contact Account Manager",
          concurrency: "N/A",
        },
      ],
    },
    strengths: [
      "Bond already uses Intercom for B2B support",
      "Fin Voice has matured: 28 languages, smart routing, CSAT",
      "Voice Procedures (beta) enable action-taking via API",
      "Strong analytics and monitoring",
    ],
    weaknesses: [
      "Multi-tenancy is fundamental blocker: one workspace per company, not B2B2C",
      "Fin Voice not generally available (limited to select customers)",
      "Voice Procedures in closed beta",
      "Per-workspace costs compound at 300+ facilities",
    ],
    verdict:
      "Multi-tenancy gap remains deal-breaker. Architecture designed for B2B (one workspace per company), not B2B2C. Continue using for Bond's own B2B support.",
    scores: {
      voice: 3,
      email: 4,
      text: 4,
      multiTenancy: 1,
      integration: 4,
      actionTaking: 4,
      massUpdate: 1,
      timeToProd: 2,
      costModel: 2,
      strategicControl: 2,
    },
  },
  {
    name: "Decagon",
    category: "Enterprise AI Support Platform",
    score: 2.5,
    tier: "Tier 2 - Monitor",
    pricing: {
      model: "Custom (per-conversation or per-resolution)",
      plans: [
        {
          name: "Enterprise",
          price: "Custom",
          rate: "Contact Sales",
          concurrency: "N/A",
        },
      ],
    },
    strengths: [
      "Full multi-modal: voice, chat, email",
      "AOPs in plain English (no-code configuration)",
      "Enterprise-grade security and compliance",
      "Strong action-taking via tool calls",
    ],
    weaknesses: [
      "Pricing is deal-breaker: contract minimums too high for Bond's current stage",
      "Multi-tenancy not solved (actively researching)",
      "No public pricing creates budget uncertainty",
      "Per-conversation model means paying even when AI fails",
    ],
    verdict:
      "Impressive technology, wrong stage for Bond. Unsolved multi-tenancy and enterprise pricing make it poor fit today. Re-evaluate in 12-18 months if Bond's ARR and call volumes grow significantly.",
    scores: {
      voice: 4,
      email: 4,
      text: 4,
      multiTenancy: 1,
      integration: 3,
      actionTaking: 4,
      massUpdate: 2,
      timeToProd: 3,
      costModel: 1,
      strategicControl: 2,
    },
  },
];

export const evaluationCriteria = [
  {
    criterion: "Voice-First Capability",
    weight: 20,
    desc: "Live inbound voice quality, latency, natural conversation handling",
  },
  {
    criterion: "Multi-Tenancy at Scale",
    weight: 15,
    desc: "Ability to manage 300+ facility configurations under one Bond account",
  },
  {
    criterion: "Bond Data Integration",
    weight: 15,
    desc: "How naturally solution connects to Bond's Agent API for real-time data",
  },
  {
    criterion: "Action-Taking",
    weight: 15,
    desc: "Can agent book registrations, process cancellations, modify memberships?",
  },
  {
    criterion: "Mass Update & Config",
    weight: 10,
    desc: "Can Bond push policy changes to hundreds of facilities simultaneously?",
  },
  {
    criterion: "Time to Production",
    weight: 10,
    desc: "Realistic timeline from contract to live calls at pilot facilities",
  },
  {
    criterion: "Cost Model & Scalability",
    weight: 10,
    desc: "Pricing predictability at 300+ facilities; gross margin sustainability",
  },
  {
    criterion: "Strategic Control",
    weight: 5,
    desc: "Bond's ability to migrate away, own IP, evolve independently",
  },
];

export const demoAgent = {
  agentId: "agent_2101kfp8tgwwenfbkex889h3kssv",
  name: "Ashley",
  photoUrl: "/ashley.png",
  facility: "Palm Beach Skate Zone",
  location: "Lake Worth, Florida",
  systemPrompt: `You are Ashley, the front desk receptionist at Palm Beach Skate Zone in Lake Worth, Florida.

# Conversation Style

You are on a live phone call. Speak naturally — short sentences, casual-professional tone, like a real person at a front desk.
- Never read bullet points or lists aloud. Convert any list into natural speech ("We've got public skating, figure skating lessons, hockey programs, and birthday parties.").
- Use filler words sparingly but naturally ("Sure thing," "Let me see," "Great question").
- Keep responses to 1-3 sentences. If the caller needs more detail, they'll ask.
- Mirror the caller's energy. If they're excited about a birthday party, match that enthusiasm. If they're frustrated, be empathetic first.
- Say "we" not "the facility" — you work here.

# Greeting

Answer with: "Hi, thanks for calling Palm Beach Skate Zone, this is Ashley. How can I help you?"
If the caller asks how you're doing, respond briefly and redirect: "I'm doing great, thanks for asking! What can I help you with today?"

# Follow-Up & Upsell — CRITICAL

After answering any question, ALWAYS ask a helpful follow-up that moves toward a booking or next step. Never just answer and go silent. Examples:

- Birthday parties: After giving info, ask "Do you have a date in mind? I can check availability for you" or "Would you like me to connect you with our party coordinator to get one booked?"
- Public skating: "Would you like me to let you know about our season pass? It saves a lot if you come regularly."
- Programs / Learn to Skate: "Our next session starts soon — want me to save you a spot?" or "How old is your skater? I can point you to the right class."
- Hockey: "Are you looking for youth or adult leagues? I can connect you with our hockey coordinator to get signed up."
- Hours: "Were you planning on coming in today? I can let you know what's happening this evening."
- General interest: "Is there anything specific you're looking to do here — skating, lessons, parties? I can point you in the right direction."

The goal is to be genuinely helpful, not pushy. Every question is an opportunity to help someone take the next step.

# Knowledge Base

## Hours
- Public skating: Friday 7-10pm, Saturday 1-4pm and 7-10pm, Sunday 1-4pm
- Stick & Puck (open hockey): Tuesday and Thursday 6-7:30pm
- Freestyle (figure skating): Monday, Wednesday, Friday 6-7:30am
- The rink is closed on major holidays. If unsure about a specific date, offer to check with management.

## Pricing
- Public skating admission: $15 per person, skate rental included
- Stick & Puck: $20 per person
- Freestyle sessions: $15 per person
- Season passes available — mention these if someone sounds like a regular

## Programs
- Learn to Skate: Group lessons for beginners, all ages. 8-week sessions, $160.
- Figure Skating: Private and group lessons through the Palm Beach Skating Academy.
- Hockey: Youth hockey leagues and adult recreational leagues. Direct detailed hockey questions to the hockey coordinator.
- Summer camps: Available June through August. Ages 5-14.

## Birthday Parties
- Party packages start at $350 for up to 15 kids
- Includes 2 hours of ice time, skate rental, party room, and a dedicated host
- Available Saturday and Sunday afternoons
- Book at least 2 weeks in advance
- For detailed party planning, offer to transfer to the birthday party coordinator

## Location & Facilities
- Address: 8125 Lake Worth Road, Lake Worth, FL 33467
- Pro shop on-site for skate sharpening and equipment
- Snack bar with drinks and light food
- Free parking

# Transfers

When a question goes beyond what you know, or the caller wants to book/sign up, transfer to the right person. Always tell the caller who you're connecting them with and why.
- Skate school or lesson questions beyond basics → "Let me connect you with our skating director, they can help with that."
- Birthday party booking or custom requests → "I'll transfer you to our birthday party coordinator — they'll take great care of you."
- Complaints, billing, or anything you can't resolve → "Let me get our manager on the line for you."
- Hockey leagues, teams, or schedules → "Let me transfer you to our hockey coordinator."

# Handling Uncertainty

If someone asks something you don't know:
- Don't guess or make up information.
- Say something like: "That's a great question — I'm not 100% sure on that. Can I take your name and number and have someone call you back with the details?"
- Or offer to transfer: "Let me connect you with someone who can give you the exact info on that."

# Guardrails

- Stay on topic. If someone asks about things unrelated to the rink, politely redirect: "I'm just the front desk here at Palm Beach Skate Zone — I can help with anything rink-related though!"
- Never share staff personal info, schedules, or phone numbers.
- If a caller is rude or abusive, stay calm: "I understand you're frustrated. Let me get my manager on the line." Then transfer.
- Never commit to pricing, policies, or dates you're unsure about. Better to transfer than to be wrong.
- You are an AI assistant. If directly asked whether you're a real person, be honest: "I'm actually an AI assistant for the front desk — but I can help with most questions, and I can always connect you with a person if you'd prefer."

# Environment

The current date and time is {{system__time}} in {{system__timezone}}.
Use this to answer "Are you open right now?" or "What time does skating start today?" based on the schedule above.`,
};
